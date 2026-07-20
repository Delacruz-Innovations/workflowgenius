import { motion } from "framer-motion"
import { fadeUp, stagger, viewport } from "../../lib/motion"
import { trustBar } from "../../data/howItWorks"

export default function TrustBar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.08)}
      className="grid grid-cols-1 gap-x-6 gap-y-10 border-t border-white/10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 md:px-10"
    >
      {trustBar.map((item) => (
        <motion.div key={item.title} variants={fadeUp} className="border-l border-white/10 pl-5">
          <p className="font-display text-sm font-semibold text-white">{item.title}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/45">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
