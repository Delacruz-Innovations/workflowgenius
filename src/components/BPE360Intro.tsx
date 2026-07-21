import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeUp, stagger, viewport } from "../lib/motion"
import { bpeIntro, images } from "../data/content"
import SubHeading from "./ui/SubHeading"
import StatementList from "./ui/StatementList"
import SideImage from "./ui/SideImage"

export default function BPE360Intro() {
  const { newCategory } = bpeIntro

  return (
    <section id="bpe360" className="border-t border-white/10 px-4 py-4 md:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center sm:gap-6">
        <div className="sm:order-1">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="font-display max-w-xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl"
          >
            {bpeIntro.h2}
          </motion.h2>

          <div className="mt-3">
            <StatementList
              lines={bpeIntro.supporting}
              lineClassName="font-display text-lg leading-snug text-white/80 md:text-xl"
              className="space-y-2"
            />
          </div>
        </div>

        <SideImage src={images.bpeIntro} alt="Dark architectural lines and structure" side="right" />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-white uppercase">
            The improvement cycle businesses repeat
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {bpeIntro.cycle.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <StatementList
              lines={bpeIntro.body}
              lineClassName="text-base leading-relaxed text-white/60"
              className="space-y-2"
            />
          </div>
        </div>

        <div>
          <StatementList
            lines={bpeIntro.why}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-3"
          />
        </div>
      </div>

      <div className="mt-3 max-w-2xl border-t border-white/10 pt-5">
        <StatementList
          lines={bpeIntro.closing}
          lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
          className="space-y-4"
        />
      </div>

      <div className="mt-3 border-t border-white/10 pt-6">
        <SubHeading>{newCategory.h3}</SubHeading>
        <div className="mt-3 max-w-2xl">
          <StatementList
            lines={newCategory.intro}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-white/10 p-6">
            <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
              The wrong question
            </p>
            <p className="font-display mt-3 text-lg text-white/50 italic">
              &ldquo;{newCategory.wrongQuestion}&rdquo;
            </p>
          </div>

          <div className="rounded-sm border border-white/20 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
              The right questions
            </p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger(0.06)}
              className="mt-3 space-y-2"
            >
              {newCategory.rightQuestions.map((q) => (
                <motion.li
                  key={q}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <Check size={13} className="mt-0.5 shrink-0 text-white/45" />
                  {q}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="mt-4 max-w-xl">
          <StatementList
            lines={newCategory.closing}
            lineClassName="text-base leading-relaxed text-white/60"
            className="space-y-2"
          />
        </div>
      </div>
    </section>
  )
}
