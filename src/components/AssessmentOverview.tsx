import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, ChevronDown, Compass, Cpu, Shield, Users, Workflow } from "lucide-react"
import { fadeUp, stagger, viewport } from "../lib/motion"
import { assessmentOverview, images } from "../data/content"
import SideImage from "./ui/SideImage"

const icons = { Compass, Workflow, Shield, Cpu, Users, BarChart3 }

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function DomainCard({
  domain,
}: {
  domain: (typeof assessmentOverview.domains)[number]
}) {
  const [open, setOpen] = useState(false)
  const Icon = icons[domain.icon as keyof typeof icons]
  const id = `domain-${slugify(domain.title)}`

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-sm border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25"
    >
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70">
              <Icon size={17} strokeWidth={1.5} />
            </span>
            <span className="font-display text-base font-medium text-white md:text-lg">
              {domain.title}
            </span>
          </span>
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
        <ul className="space-y-2 px-6 pb-6 pl-20">
          {domain.items.map((item) => (
            <li key={item} className="text-sm text-white/55">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function AssessmentOverview() {
  return (
    <section id="overview" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {assessmentOverview.h2}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base"
          >
            {assessmentOverview.intro}
          </motion.p>
        </div>

        <SideImage
          src={images.overview}
          alt="Dark business performance dashboard showing analytics and KPI charts"
          side="right"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {assessmentOverview.domains.map((domain) => (
          <DomainCard key={domain.title} domain={domain} />
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-3 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
      >
        {assessmentOverview.outcome}
      </motion.p>
    </section>
  )
}
