import PageHero from "../components/PageHero"
import Reality from "../components/Reality"
import HiddenGaps from "../components/HiddenGaps"
import { images } from "../data/content"
import { useSeo } from "../lib/useSeo"

export default function TheReality() {
  useSeo({
    title: "Every Business Has Performance Gaps | Workflow Genius",
    description:
      "Every business has hidden performance gaps — inefficiencies, misalignment and blind spots that quietly erode profitability. Learn how to uncover yours before they cost you.",
    path: "/the-reality",
  })

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
