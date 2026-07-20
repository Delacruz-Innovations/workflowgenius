import { useEffect } from "react"
import PageHero from "../components/PageHero"
import ProblemStatement from "../components/ProblemStatement"
import { images, hero, ctas } from "../data/content"

export default function Home() {
  useEffect(() => {
    document.title = "BPE360™ Business Performance Assessment | Improve Business Performance"
  }, [])

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.h1}
        image={images.hero}
        imageAlt="Dark glass office tower at dusk"
        tall
        primaryCta={{ label: ctas.primary, href: "/how-it-works#assessment-form" }}
        secondaryCta={{ label: ctas.secondary, href: "/the-reality" }}
        scrollTarget="#problem"
      />
      <ProblemStatement />
    </>
  )
}
