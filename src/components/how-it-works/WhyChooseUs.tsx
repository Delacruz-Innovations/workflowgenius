import { motion } from "framer-motion"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { whyChooseUs } from "../../data/howItWorks"
import StatementList from "../ui/StatementList"

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="border-t border-white/10 px-4 py-4 md:px-10">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl"
      >
        {whyChooseUs.h2}
      </motion.h2>

      <div className="mt-4 max-w-xl">
        <StatementList
          lines={whyChooseUs.body}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-2"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-5 max-w-2xl"
      >
        <p className="text-sm tracking-wide text-white/50">{whyChooseUs.questionsIntro}</p>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.08)}
          className="mt-3 space-y-4"
        >
          {whyChooseUs.questions.map((q) => (
            <motion.li
              key={q}
              variants={fadeUp}
              className="font-display border-l border-white/20 pl-5 text-lg font-medium text-white md:text-xl"
            >
              {q}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="mt-5 max-w-xl border-t border-white/10 pt-4">
        <StatementList
          lines={whyChooseUs.closing}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-2"
        />
      </div>
    </section>
  )
}
