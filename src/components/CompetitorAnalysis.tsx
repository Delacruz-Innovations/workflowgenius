import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { competitorAnalysis, images } from "../data/content"
import SubHeading from "./ui/SubHeading"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"

export default function CompetitorAnalysis() {
  const { differently, fallBehind } = competitorAnalysis

  return (
    <section id="competitors" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-3xl leading-[1.05] font-semibold text-white md:text-4xl"
          >
            {competitorAnalysis.h2}
          </motion.h2>

          <div className="mt-3">
            <StatementList
              lines={competitorAnalysis.supporting}
              lineClassName="font-display text-lg leading-snug text-white/80 md:text-xl"
              className="space-y-2"
            />
          </div>
        </div>

        <SideImage src={images.competitors} alt="Modern office building exterior" side="right" />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        <TagGrid items={competitorAnalysis.traits} tone="positive" />
        <StatementList
          lines={competitorAnalysis.closing}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-3"
        />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 border-t border-white/10 pt-6">
        <SubHeading>{differently.h3}</SubHeading>
        <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
          {differently.intro}
        </p>
        <div className="mt-4">
          <TagGrid items={differently.items} tone="positive" />
        </div>
        <div className="mt-3 max-w-xl">
          <StatementList
            lines={differently.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 border-t border-white/10 pt-6">
        <SubHeading>{fallBehind.h3}</SubHeading>
        <StatementList
          lines={fallBehind.intro}
          lineClassName="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base"
          className="space-y-1"
        />
        <div className="mt-4">
          <TagGrid items={fallBehind.items} tone="negative" />
        </div>
        <div className="mt-3 max-w-xl">
          <StatementList
            lines={fallBehind.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>
      </div>
    </section>
  )
}
