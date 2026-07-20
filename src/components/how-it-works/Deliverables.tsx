import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, FileText } from "lucide-react"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { deliverables } from "../../data/howItWorks"
import StatementList from "../ui/StatementList"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function DeliverableCard({ item }: { item: (typeof deliverables.items)[number] }) {
  const [open, setOpen] = useState(false)
  const id = `deliverable-${slugify(item.title)}`

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-sm border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25"
    >
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-4 p-6 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70">
              <FileText size={16} strokeWidth={1.5} />
            </span>
            <span className="font-display text-base font-medium text-white md:text-lg">
              {item.title}
            </span>
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-white/40"
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>
      </h3>

      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pl-20">
          {item.description && (
            <p className="mb-2 text-sm text-white/50">{item.description}</p>
          )}
          {item.items.length > 0 && (
            <ul className="space-y-2">
              {item.items.map((line) => (
                <li key={line} className="text-sm text-white/55">
                  {line}
                </li>
              ))}
            </ul>
          )}
          {item.note && <p className="mt-3 text-sm text-white/45 italic">{item.note}</p>}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Deliverables() {
  return (
    <section id="deliverables" className="border-t border-white/10 px-4 py-4 md:px-10">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl"
      >
        {deliverables.h2}
      </motion.h2>

      <div className="mt-4 max-w-2xl">
        <StatementList
          lines={deliverables.supporting}
          lineClassName="text-base leading-relaxed text-white/60 md:text-lg"
          className="space-y-3"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {deliverables.items.map((item) => (
          <DeliverableCard key={item.title} item={item} />
        ))}
      </motion.div>
    </section>
  )
}
