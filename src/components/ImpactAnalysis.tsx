import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { impactAnalysis, images } from "../data/content"
import Eyebrow from "./ui/Eyebrow"
import SubHeading from "./ui/SubHeading"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"

export default function ImpactAnalysis() {
  const { commercialImpact, actingWithoutEvidence } = impactAnalysis

  return (
    <section id="impact" className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center sm:gap-12">
        <SideImage src={images.impact} alt="Dark abstract office interior" side="left" />

        <div className="sm:order-2">
          <Eyebrow>{impactAnalysis.eyebrow}</Eyebrow>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-3xl leading-[1.1] font-semibold text-white md:text-4xl"
          >
            {impactAnalysis.h2}
          </motion.h2>

          <div className="mt-6">
            <StatementList
              lines={impactAnalysis.supporting}
              lineClassName="font-display text-lg leading-snug text-white/80 md:text-xl"
              className="space-y-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <TagGrid items={impactAnalysis.symptoms} tone="negative" />
        <div>
          <StatementList
            lines={impactAnalysis.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-3"
          />
          <p className="mt-4 text-sm tracking-wide text-white/45 uppercase">Common reactions</p>
          <StatementList
            lines={impactAnalysis.reactions}
            lineClassName="text-sm text-white/55"
            className="mt-2 space-y-1"
          />
          <StatementList
            lines={impactAnalysis.reactionsClosing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="mt-4 space-y-3"
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 border-t border-white/10 pt-16">
        <SubHeading>{commercialImpact.h3}</SubHeading>
        <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
          {commercialImpact.intro}
        </p>
        <div className="mt-4">
          <TagGrid items={commercialImpact.items} tone="negative" />
        </div>
        <div className="mt-6 max-w-xl">
          <StatementList
            lines={commercialImpact.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 border-t border-white/10 pt-16">
        <SubHeading>{actingWithoutEvidence.h3}</SubHeading>
        <StatementList
          lines={actingWithoutEvidence.intro}
          lineClassName="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base"
          className="space-y-1"
        />
        <div className="mt-4">
          <TagGrid items={actingWithoutEvidence.items} tone="negative" />
        </div>
        <div className="mt-6 max-w-xl">
          <StatementList
            lines={actingWithoutEvidence.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>
      </div>
    </section>
  )
}
