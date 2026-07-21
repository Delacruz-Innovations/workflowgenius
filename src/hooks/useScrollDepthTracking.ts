import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { trackEvent } from "../lib/analytics"

const THRESHOLDS = [25, 50, 75, 100]

export function useScrollDepthTracking(): void {
  const { pathname } = useLocation()
  const fired = useRef<Set<number>>(new Set())

  useEffect(() => {
    fired.current = new Set()

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 100

        for (const threshold of THRESHOLDS) {
          if (percent >= threshold && !fired.current.has(threshold)) {
            fired.current.add(threshold)
            trackEvent("scroll_depth", { percent: threshold, path: pathname })
          }
        }

        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])
}
