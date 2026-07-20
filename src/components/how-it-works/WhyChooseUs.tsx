import { motion } from "framer-motion"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { whyChooseUs } from "../../data/howItWorks"
import Eyebrow from "../ui/Eyebrow"
import StatementList from "../ui/StatementList"

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
      <Eyebrow>{whyChooseUs.eyebrow}</Eyebrow>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-3xl leading-[1.1] font-semibold text-white md:text-5xl"
      >
        {whyChooseUs.h2}
      </motion.h2>

      <div className="mt-10 max-w-xl">
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
        className="mt-14 max-w-2xl"
      >
        <p className="text-sm tracking-wide text-white/50">{whyChooseUs.questionsIntro}</p>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.08)}
          className="mt-6 space-y-4"
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

      <div className="mt-14 max-w-xl border-t border-white/10 pt-10">
        <StatementList
          lines={whyChooseUs.closing}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-2"
        />
      </div>
    </section>
  )
}
