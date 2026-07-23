import { useJsonLd } from "../lib/useJsonLd"
import { useSeo } from "../lib/useSeo"
import PageHero from "../components/PageHero"
import FAQ from "../components/how-it-works/FAQ"
import TrustBar from "../components/how-it-works/TrustBar"
import CTABand from "../components/CTABand"
import { images } from "../data/content"

export default function FAQPage() {
  useSeo({
    title: "Frequently Asked Questions | BPE360™ Business Performance Assessment",
    description:
      "Answers to common questions about the BPE360™ Business Performance Assessment — process, timelines, deliverables and what to expect.",
    path: "/faq",
  })

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workflowgenius.co/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://workflowgenius.co/faq",
      },
    ],
  })

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        image={images.faq}
        imageAlt="Dark office interior, abstract"
      />

      <FAQ standalone />

      <CTABand
        heading="Ready to Start Your Assessment?"
        supporting="Get an objective, evidence-based view of how your business performs."
        button="Start Your Business Performance Assessment"
        source="faq_cta"
      />

      <TrustBar />
    </>
  )
}
