import { motion } from "framer-motion"
import { fadeIn, fadeUp, stagger, viewport } from "../lib/motion"
import { gapAnalysis, images } from "../data/content"
import StatementList from "./ui/StatementList"

export default function GapAnalysis() {
  return (
    <section id="analysis" className="border-t border-white/10 px-4 py-4 md:px-10">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl"
      >
        {gapAnalysis.h2}
      </motion.h2>

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="text-sm tracking-wide text-white/50"
          >
            {gapAnalysis.principle}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display mt-4 text-xl leading-snug font-medium text-white md:text-2xl"
          >
            {gapAnalysis.principleQuote}
          </motion.p>

          <div className="mt-3">
            <StatementList
              lines={gapAnalysis.body}
              lineClassName="text-base leading-relaxed text-white/60"
              className="space-y-3"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.12)}
          className="space-y-6"
        >
          {gapAnalysis.contrast.map((row) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="border-l border-white/15 pl-5"
            >
              <p className="font-display text-base font-medium text-white">{row.label}</p>
              <p className="mt-1 text-sm text-white/50">{row.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1 max-w-xl">
          <StatementList
            lines={gapAnalysis.closing}
            lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
            className="space-y-4"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeIn}
          className="relative h-72 overflow-hidden sm:order-2 sm:h-full sm:min-h-[360px]"
        >
          <img
            src={images.gaps}
            alt="Abstract dark skyscraper facade"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/55" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.06)}
            className="absolute inset-0 flex flex-wrap content-center justify-center gap-2 p-6"
          >
            {gapAnalysis.factors.map((factor) => (
              <motion.span
                key={factor}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="rounded-full border border-white/30 px-3 py-1.5 text-xs tracking-[0.1em] text-white uppercase"
              >
                {factor}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
