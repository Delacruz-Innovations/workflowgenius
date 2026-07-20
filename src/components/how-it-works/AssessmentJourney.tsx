import { motion } from "framer-motion"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { journey } from "../../data/howItWorks"
import StatementList from "../ui/StatementList"

export default function AssessmentJourney() {
  return (
    <section id="process" className="border-t border-white/10 px-4 py-4 md:px-10">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl"
      >
        {journey.h2}
      </motion.h2>

      <div className="mt-4 max-w-2xl">
        <StatementList
          lines={journey.supporting}
          lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
          className="space-y-3"
        />
      </div>

      <div className="mt-4 max-w-2xl border-t border-white/10 pt-4">
        <StatementList
          lines={journey.body}
          lineClassName="text-sm leading-relaxed text-white/55"
          className="space-y-2"
        />
        <p className="font-display mt-4 text-xl font-medium text-white md:text-2xl">
          &ldquo;{journey.question}&rdquo;
        </p>
        <p className="mt-4 text-sm text-white/50">{journey.closing}</p>
      </div>

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="mt-3 space-y-12"
      >
        {journey.steps.map((step, i) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="grid grid-cols-1 gap-6 border-t border-white/10 pt-4 md:grid-cols-[80px_1fr]"
          >
            <div className="flex items-start gap-4 md:block">
              <span className="font-display text-3xl font-semibold text-white/35 md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-xs tracking-[0.15em] text-white/55 uppercase md:hidden">
                Step {i + 1}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                {step.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {step.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 italic">
                {step.outcome}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
