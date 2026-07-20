import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { transition, images } from "../data/content"
import Eyebrow from "./ui/Eyebrow"
import StatementList from "./ui/StatementList"

export default function TransitionSection() {
  return (
    <section
      id="transition"
      className="relative border-t border-white/10 bg-scroll bg-cover bg-center px-6 py-24 md:bg-fixed md:px-10 md:py-32"
      style={{ backgroundImage: `url(${images.transitionBg})` }}
    >
      <div className="absolute inset-0 bg-[#0c0c0d]/88" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Eyebrow>{transition.eyebrow}</Eyebrow>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="font-display text-3xl leading-[1.15] font-semibold text-white md:text-5xl"
        >
          {transition.h2}
        </motion.h2>

        <div className="mt-12">
          <StatementList
            lines={transition.conditionals}
            lineClassName="text-base text-white/55 md:text-lg"
            className="space-y-2"
          />
        </div>

        <div className="mt-10">
          <StatementList
            lines={transition.pivot}
            lineClassName="text-base text-white/60 md:text-lg"
            className="space-y-1"
          />
        </div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="font-display mt-4 text-3xl font-semibold text-white md:text-4xl"
        >
          {transition.question}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="mt-10 text-base text-white/60 md:text-lg"
        >
          {transition.followUp}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="font-display mt-4 text-2xl font-semibold text-white md:text-3xl"
        >
          {transition.followUpQuestion}
        </motion.p>

        <div className="mt-14 border-t border-white/10 pt-12 text-left">
          <StatementList
            lines={transition.closing}
            lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
            className="space-y-4"
          />
        </div>
      </div>
    </section>
  )
}
