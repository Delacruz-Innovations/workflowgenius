import { useJsonLd } from "../lib/useJsonLd"
import { useSeo } from "../lib/useSeo"
import PageHero from "../components/PageHero"
import AssessmentJourney from "../components/how-it-works/AssessmentJourney"
import Deliverables from "../components/how-it-works/Deliverables"
import WhoItsFor from "../components/how-it-works/WhoItsFor"
import WhyUs from "../components/how-it-works/WhyUs"
import WhyChooseUs from "../components/how-it-works/WhyChooseUs"
import FinalCallToAction from "../components/how-it-works/FinalCallToAction"
import TrustBar from "../components/how-it-works/TrustBar"
import CTABand from "../components/CTABand"
import { journeyCta } from "../data/howItWorks"
import { images } from "../data/content"

export default function HowItWorks() {
  useSeo({
    title: "How the BPE360™ Assessment Works | Workflow Genius",
    description:
      "See exactly how the BPE360™ Business Performance Assessment works, from initial diagnostic to actionable deliverables — and who it's built for.",
    path: "/how-it-works",
  })

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workflowgenius.co/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "How We Work",
        item: "https://workflowgenius.co/how-it-works",
      },
    ],
  })

  return (
    <>
      <PageHero
        title="How the Assessment Works"
        image={images.howItWorksHero}
        imageAlt="Dark analytics dashboard close-up"
      />

      <AssessmentJourney />
      <Deliverables />
      <WhoItsFor />
      <WhyUs />
      <CTABand
        heading={journeyCta.heading}
        supporting={journeyCta.lines.join(" ")}
        button={journeyCta.button}
        source="how_it_works_mid_cta"
      />
      <WhyChooseUs />
      <FinalCallToAction />

      <TrustBar />
    </>
  )
}
