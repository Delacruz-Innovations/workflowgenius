import { motion } from "framer-motion"
import { fadeIn, fadeUp, stagger, viewport } from "../lib/motion"
import { reality, images } from "../data/content"
import StatementList from "./ui/StatementList"
import TagGrid from "./ui/TagGrid"

export default function Reality() {
  return (
    <section id="reality" className="border-t border-white/10 px-4 py-4 md:px-10">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-2xl text-3xl leading-[1.05] font-semibold whitespace-pre-line text-white md:text-5xl"
      >
        {reality.h2}
      </motion.h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
        <div className="sm:order-1">
          <StatementList
            lines={reality.lines}
            lineClassName="text-base text-white/60 md:text-lg"
            className="max-w-xl space-y-2"
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
            src={images.reality}
            alt="Dark architectural corridor, abstract"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="font-display max-w-md text-center text-lg leading-snug font-medium text-white md:text-xl">
              &ldquo;{reality.quote}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <StatementList
            lines={reality.spiral}
            lineClassName="text-base text-white/60 md:text-lg"
            className="space-y-2"
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.08)}
            className="mt-3 space-y-3 border-t border-white/10 pt-6"
          >
            {reality.cost.map((line, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-sm leading-relaxed text-white/50"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <div>
          <TagGrid items={reality.costTags} />
        </div>
      </div>
    </section>
  )
}
