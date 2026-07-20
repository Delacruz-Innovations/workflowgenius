import { useEffect } from "react"
import PageHero from "../components/PageHero"
import GapAnalysis from "../components/GapAnalysis"
import BPE360Intro from "../components/BPE360Intro"
import EvidenceSection from "../components/EvidenceSection"
import WhyAssessment from "../components/WhyAssessment"
import AssessmentOverview from "../components/AssessmentOverview"
import CTABand from "../components/CTABand"
import { images, assessmentCta } from "../data/content"

export default function Methodology() {
  useEffect(() => {
    document.title = "Business Performance Engineering™ | Workflow Genius"
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Our Methodology"
        title="You Can't Improve What You Haven't Diagnosed"
        image={images.methodologyHero}
        imageAlt="Dark blueprint-style architectural structure"
        scrollTarget="#analysis"
      />
      <GapAnalysis />
      <BPE360Intro />
      <EvidenceSection />
      <WhyAssessment />
      <AssessmentOverview />
      <CTABand {...assessmentCta} />
    </>
  )
}
