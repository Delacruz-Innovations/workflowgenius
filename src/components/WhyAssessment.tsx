import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { whyAssessment, images } from "../data/content"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"

export default function WhyAssessment() {
  return (
    <section id="why-assessment" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {whyAssessment.h2}
          </motion.h2>
        </div>

        <SideImage
          src={images.whyAssessment}
          alt="Dark office building glass reflections"
          side="right"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-white uppercase">
            What businesses routinely measure
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {whyAssessment.routine.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <StatementList
              lines={whyAssessment.body}
              lineClassName="text-base leading-relaxed text-white/60"
              className="space-y-3"
            />
          </div>
        </div>

        <div>
          <p className="text-sm tracking-wide text-white/50">{whyAssessment.intro}</p>
          <div className="mt-4">
            <TagGrid items={whyAssessment.questions} tone="positive" />
          </div>
        </div>
      </div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-3 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
      >
        {whyAssessment.closing}
      </motion.p>
    </section>
  )
}
