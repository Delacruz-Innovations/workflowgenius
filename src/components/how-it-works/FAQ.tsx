import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { faqs } from "../../data/howItWorks"
import { images } from "../../data/content"
import { useJsonLd } from "../../lib/useJsonLd"
import SideImage from "../ui/SideImage"

function useFaqSchema() {
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${slugify(q)}`

  return (
    <motion.div variants={fadeUp} className="border-b border-white/10">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-4 py-6 text-left"
        >
          <span className="font-display text-base font-medium text-white md:text-lg">{q}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-white/40"
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>
      </h3>

      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6 text-sm leading-relaxed text-white/55">{a}</p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  useFaqSchema()

  return (
    <section id="faq" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <SideImage src={images.faq} alt="Dark office interior, abstract" side="right" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.06)}
        className="mt-5 max-w-3xl border-t border-white/10"
      >
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </motion.div>
    </section>
  )
}
