import PageHero from "../components/PageHero"
import CompetitorAnalysis from "../components/CompetitorAnalysis"
import ImpactAnalysis from "../components/ImpactAnalysis"
import TransitionSection from "../components/TransitionSection"
import { images } from "../data/content"
import { useSeo } from "../lib/useSeo"

export default function BusinessImpact() {
  useSeo({
    title: "Your Biggest Competitor Isn't Standing Still | Workflow Genius",
    description:
      "While you wait to improve, competitors are closing the gap. See the real cost of inaction and how a Business Performance Assessment protects your competitive edge.",
    path: "/business-impact",
  })

  return (
    <>
      <PageHero
        title="Your Biggest Competitor Isn't Standing Still."
        image={images.impactHero}
        imageAlt="Dark cityscape at night"
      />
      <CompetitorAnalysis />
      <ImpactAnalysis />
      <TransitionSection />
    </>
  )
}
