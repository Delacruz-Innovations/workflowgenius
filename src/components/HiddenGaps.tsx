import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { hiddenGaps, images } from "../data/content"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"

export default function HiddenGaps() {
  return (
    <section id="gaps" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <SideImage
          src={images.hiddenGaps}
          alt="Abstract dark architectural detail"
          side="left"
        />

        <div className="sm:order-2">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {hiddenGaps.h2}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="mt-4 text-sm leading-relaxed text-white/55 md:text-base"
          >
            {hiddenGaps.intro}
          </motion.p>
        </div>
      </div>

      <div className="mt-5">
        <TagGrid items={hiddenGaps.weaknesses} />
      </div>

      <div className="mt-3 max-w-2xl border-t border-white/10 pt-5">
        <StatementList
          lines={hiddenGaps.closing}
          lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
          className="space-y-4"
        />
      </div>
    </section>
  )
}
