import { motion } from "framer-motion"
import { X } from "lucide-react"
import { fadeUp, viewport } from "../../lib/motion"
import { whyUs } from "../../data/howItWorks"
import { images } from "../../data/content"
import StatementList from "../ui/StatementList"
import SideImage from "../ui/SideImage"

export default function WhyUs() {
  return (
    <section id="why-delacruz" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {whyUs.h2}
          </motion.h2>
        </div>

        <SideImage src={images.whyUs} alt="Dark modern office interior" side="right" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        <StatementList
          lines={whyUs.body}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-3"
        />

        <div>
          <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
            {whyUs.expertiseIntro}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {whyUs.expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-3 rounded-sm border border-white/10 bg-white/[0.02] p-6"
      >
        <p className="text-sm tracking-wide text-white/50">{whyUs.principleIntro}</p>
        <p className="font-display mt-3 text-2xl font-semibold text-white md:text-3xl">
          {whyUs.principle}
        </p>
        <div className="mt-4 space-y-0 border-t border-white/10">
          {whyUs.principleNot.map((line) => (
            <p key={line} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/55">
              <X size={13} className="shrink-0 text-white/40" />
              {line.replace(/\.$/, "")}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="mt-3 max-w-2xl border-t border-white/10 pt-5">
        <StatementList
          lines={whyUs.trustStatement}
          lineClassName="text-base leading-relaxed text-white/60"
          className="space-y-2"
        />
        <p className="font-display mt-4 text-xl font-medium text-white md:text-2xl">
          {whyUs.trustStatementClosing}
        </p>
      </div>
    </section>
  )
}
