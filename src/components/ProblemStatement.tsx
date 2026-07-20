import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, stagger, viewport } from "../lib/motion"
import { problem, ctas, images } from "../data/content"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"
import SideImage from "./ui/SideImage"
import { useAssessmentModal } from "../context/AssessmentModalContext"

export default function ProblemStatement() {
  const { open } = useAssessmentModal()

  return (
    <section id="problem" className="px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {problem.h2Lines.map((line, i) => (
              <motion.span key={i} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <SideImage src={images.problem} alt="Dim office workspace, abstract" side="right" />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <StatementList
            lines={problem.investments}
            lineClassName="text-base text-white/60 md:text-lg"
            className="space-y-2"
          />
        </div>

        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="mb-4 text-sm tracking-wide text-white/50"
          >
            {problem.symptomsIntro}
          </motion.p>
          <TagGrid items={problem.symptoms} />
        </div>
      </div>

      <div className="mt-3 max-w-2xl border-t border-white/10 pt-5">
        <StatementList
          lines={problem.closing}
          lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
          className="space-y-4"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-3 rounded-sm border border-white/10 bg-white/[0.02] p-6"
      >
        <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
          {problem.transition}
        </p>
        <p className="font-display mt-4 max-w-2xl text-2xl font-medium text-white md:text-3xl">
          {problem.transitionQuestion}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={open}
            className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-3 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
          >
            {ctas.primary}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <a
            href="/the-reality"
            className="group inline-flex items-center justify-center gap-3 border border-accent px-6 py-3 text-xs font-medium tracking-[0.1em] text-accent-light uppercase transition-colors hover:bg-accent/10"
          >
            {ctas.secondary}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
