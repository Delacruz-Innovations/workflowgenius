import { getStoredUtm } from "./utm"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] }
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

// Meta only recognizes a fixed vocabulary of "standard" events (Lead, PageView, etc.);
// anything else must go through trackCustom or Meta silently drops it.
const META_STANDARD_EVENTS: Record<string, string> = {
  generate_lead: "Lead",
}

let initialized = false

function injectGoogleAnalytics(id: string) {
  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag("js", new Date())
  // send_page_view is disabled since this is an SPA — AnalyticsPageviewTracker
  // fires pageviews manually on route change instead, avoiding double-counting.
  window.gtag("config", id, { send_page_view: false })
}

function injectMetaPixel(id: string) {
  if (window.fbq) return

  const fbq: Window["fbq"] = function (...args: unknown[]) {
    ;(fbq.queue = fbq.queue || []).push(args)
  }
  window.fbq = fbq

  const script = document.createElement("script")
  script.async = true
  script.src = "https://connect.facebook.net/en_US/fbevents.js"
  document.head.appendChild(script)

  window.fbq("init", id)
}

export function initAnalytics(): void {
  if (initialized) return
  initialized = true

  try {
    if (GA_ID) injectGoogleAnalytics(GA_ID)
    if (META_PIXEL_ID) injectMetaPixel(META_PIXEL_ID)
  } catch {
    // Tracking must never break the app — fail silently (ad blockers, CSP, etc.)
  }
}

export function trackPageview(path: string): void {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: path })
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView")
    }
  } catch {
    // no-op
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  const payload = { ...params, ...getStoredUtm() }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, payload)
    }
    if (typeof window.fbq === "function") {
      const standardEvent = META_STANDARD_EVENTS[name]
      if (standardEvent) {
        window.fbq("track", standardEvent, payload)
      } else {
        window.fbq("trackCustom", name, payload)
      }
    }
  } catch {
    // no-op
  }
}
