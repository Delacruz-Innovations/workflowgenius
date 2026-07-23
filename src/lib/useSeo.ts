import { useEffect } from "react"

const SITE_URL = "https://workflowgenius.co"

function setMetaByAttr(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export function useSeo({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  noindex?: boolean
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title
    setCanonical(url)
    setMetaByAttr("name", "description", description)
    setMetaByAttr("property", "og:title", title)
    setMetaByAttr("property", "og:description", description)
    setMetaByAttr("property", "og:url", url)
    setMetaByAttr("name", "twitter:title", title)
    setMetaByAttr("name", "twitter:description", description)

    if (noindex) {
      setMetaByAttr("name", "robots", "noindex, nofollow")
    } else {
      document.querySelector('meta[name="robots"]')?.remove()
    }
  }, [title, description, path, noindex])
}
