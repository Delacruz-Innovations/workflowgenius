import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { trackPageview } from "../lib/analytics"
import { captureUtmParams } from "../lib/utm"

export default function AnalyticsPageviewTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    captureUtmParams()
    trackPageview(pathname + search)
  }, [pathname, search])

  return null
}
