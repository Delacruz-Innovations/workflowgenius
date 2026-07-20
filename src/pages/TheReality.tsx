import { useEffect } from "react"
import PageHero from "../components/PageHero"
import Reality from "../components/Reality"
import HiddenGaps from "../components/HiddenGaps"
import { images } from "../data/content"

export default function TheReality() {
  useEffect(() => {
    document.title = "Every Business Has Performance Gaps | Workflow Genius"
  }, [])

  return (
    <>
      <PageHero
        title="Every Business Has Performance Gaps"
        image={images.realityHero}
        imageAlt="Aerial view of a city skyline at dusk"
      />
      <Reality />
      <HiddenGaps />
    </>
  )
}
