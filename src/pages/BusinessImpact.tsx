import { useEffect } from "react"
import PageHero from "../components/PageHero"
import CompetitorAnalysis from "../components/CompetitorAnalysis"
import ImpactAnalysis from "../components/ImpactAnalysis"
import TransitionSection from "../components/TransitionSection"
import { images } from "../data/content"

export default function BusinessImpact() {
  useEffect(() => {
    document.title = "Your Biggest Competitor Isn't Standing Still | Workflow Genius"
  }, [])

  return (
    <>
      <PageHero
        title="Your Biggest Competitor Isn't Standing Still"
        image={images.impactHero}
        imageAlt="Dark cityscape at night"
      />
      <CompetitorAnalysis />
      <ImpactAnalysis />
      <TransitionSection />
    </>
  )
}
