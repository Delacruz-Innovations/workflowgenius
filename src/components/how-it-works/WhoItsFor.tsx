import { motion } from "framer-motion"
import { fadeUp, viewport } from "../../lib/motion"
import { whoItsFor } from "../../data/howItWorks"
import Eyebrow from "../ui/Eyebrow"
import TagGrid from "../ui/TagGrid"

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
      <Eyebrow>{whoItsFor.eyebrow}</Eyebrow>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-3xl leading-[1.1] font-semibold text-white md:text-5xl"
      >
        {whoItsFor.h2}
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
            {whoItsFor.idealIntro}
          </p>
          <div className="mt-4">
            <TagGrid items={whoItsFor.ideal} tone="negative" />
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
            Particularly valuable for
          </p>
          <div className="mt-4">
            <TagGrid items={whoItsFor.valuable} tone="positive" />
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-16 rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10"
      >
        <p className="max-w-2xl text-sm leading-relaxed text-white/55">
          {whoItsFor.notRightIntro}
        </p>
        <ul className="mt-6 space-y-3">
          {whoItsFor.notRight.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/60">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-white/45 italic">
          {whoItsFor.notRightClosing}
        </p>
      </motion.div>
    </section>
  )
}
