import PageHero from "../components/PageHero"
import ProblemStatement from "../components/ProblemStatement"
import { images, hero, ctas } from "../data/content"
import { useAssessmentModal } from "../context/AssessmentModalContext"
import { useSeo } from "../lib/useSeo"

export default function Home() {
  const { open } = useAssessmentModal()

  useSeo({
    title: "BPE360™ Business Performance Assessment | Improve Business Performance",
    description:
      "Discover hidden business performance gaps before they become expensive problems. Improve profitability, efficiency and strategic execution with an evidence-based Business Performance Assessment.",
    path: "/",
  })

  return (
    <>
      <PageHero
        title={hero.h1}
        image={images.hero}
        imageAlt="Dark glass office tower at dusk"
        tall
        primaryCta={{ label: ctas.primary, onClick: () => open("home_hero") }}
        
      />
      <ProblemStatement />
    </>
  )
}
