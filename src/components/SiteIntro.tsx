import { useState } from "react"
import CinematicEntrance from "./CinematicEntrance"

const DEFAULT_VARIANT = 3

function initialVariant(): 1 | 2 | 3 {
  if (typeof window === "undefined") return DEFAULT_VARIANT

  const forced = new URLSearchParams(window.location.search).get("intro")
  return forced === "1" || forced === "2" || forced === "3"
    ? (Number(forced) as 1 | 2 | 3)
    : DEFAULT_VARIANT
}

export default function SiteIntro() {
  const [variant] = useState(initialVariant)
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return <CinematicEntrance type={variant} onComplete={() => setVisible(false)} />
}
