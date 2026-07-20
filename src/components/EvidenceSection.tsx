import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { evidence, images } from "../data/content"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"

export default function EvidenceSection() {
  return (
    <section id="evidence" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <SideImage src={images.evidence} alt="Data dashboard on screen in a dark room" side="left" />

        <div className="sm:order-2">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {evidence.h2}
          </motion.h2>

          <div className="mt-3">
            <StatementList
              lines={evidence.body}
              lineClassName="text-sm leading-relaxed text-white/60 md:text-base"
              className="space-y-3"
            />
          </div>
        </div>
      </div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-3 max-w-2xl text-sm tracking-wide text-white/50"
      >
        {evidence.intro}
      </motion.p>

      <div className="mt-3">
        <TagGrid items={evidence.identifies} tone="positive" />
      </div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
      >
        {evidence.closing}
      </motion.p>
    </section>
  )
}
