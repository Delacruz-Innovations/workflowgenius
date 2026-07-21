import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, viewport } from "../../lib/motion"
import { finalCallToAction } from "../../data/howItWorks"
import StatementList from "../ui/StatementList"
import { useAssessmentModal } from "../../context/AssessmentModalContext"

export default function FinalCallToAction() {
  const { open } = useAssessmentModal()

  return (
    <section className="border-t border-white/10 px-4 py-4 text-center md:px-10">
      <div className="mx-auto max-w-3xl">

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="font-display text-4xl leading-[1.05] font-semibold text-white md:text-6xl"
        >
          {finalCallToAction.h2}
        </motion.h2>

        <div className="mt-4">
          <StatementList
            lines={finalCallToAction.body}
            lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
            className="space-y-3"
          />
        </div>

        <div className="mt-4">
          <StatementList
            lines={finalCallToAction.before}
            lineClassName="text-sm text-white/45"
            className="space-y-1"
          />
        </div>

        <div className="mt-3">
          <StatementList
            lines={finalCallToAction.closing}
            lineClassName="text-base leading-relaxed text-white/70 md:text-lg"
            className="space-y-2"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            type="button"
            onClick={() => open("how_it_works_final_cta")}
            className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
          >
            {finalCallToAction.primary.button}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 border border-accent px-8 py-4 text-xs font-medium tracking-[0.1em] text-accent-light uppercase transition-colors hover:bg-accent/10"
          >
            {finalCallToAction.secondary.button}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
