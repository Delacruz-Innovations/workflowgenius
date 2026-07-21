import { useEffect } from "react"
import PageHero from "../components/PageHero"
import ProblemStatement from "../components/ProblemStatement"
import { images, hero, ctas } from "../data/content"
import { useAssessmentModal } from "../context/AssessmentModalContext"

export default function Home() {
  const { open } = useAssessmentModal()

  useEffect(() => {
    document.title = "BPE360™ Business Performance Assessment | Improve Business Performance"
  }, [])

  return (
    <>
      <PageHero
        title={hero.h1}
        image={images.hero}
        imageAlt="Dark glass office tower at dusk"
        tall
        primaryCta={{ label: ctas.primary, onClick: () => open("home_hero") }}
        secondaryCta={{ label: ctas.secondary, href: "/the-reality" }}
      />
      <ProblemStatement />
    </>
  )
}
