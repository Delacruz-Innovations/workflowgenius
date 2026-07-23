import PageHero from "../components/PageHero"
import GapAnalysis from "../components/GapAnalysis"
import BPE360Intro from "../components/BPE360Intro"
import EvidenceSection from "../components/EvidenceSection"
import WhyAssessment from "../components/WhyAssessment"
import AssessmentOverview from "../components/AssessmentOverview"
import CTABand from "../components/CTABand"
import { images, assessmentCta } from "../data/content"
import { useSeo } from "../lib/useSeo"

export default function Methodology() {
  useSeo({
    title: "Business Performance Engineering™ | Workflow Genius",
    description:
      "Explore the BPE360™ methodology — an evidence-based framework for diagnosing business performance gaps across strategy, operations, governance, technology and people.",
    path: "/methodology",
  })

  return (
    <>
      <PageHero
        title="You Can't Improve What You Haven't Diagnosed"
        image={images.methodologyHero}
        imageAlt="Dark blueprint-style architectural structure"
      />
      <GapAnalysis />
      <BPE360Intro />
      <EvidenceSection />
      <WhyAssessment />
      <AssessmentOverview />
      <CTABand {...assessmentCta} source="methodology_final_cta" />
    </>
  )
}
