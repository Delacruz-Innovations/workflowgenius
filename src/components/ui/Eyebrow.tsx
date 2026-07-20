import { motion } from "framer-motion"
import { fadeUp, viewport } from "../../lib/motion"

export default function Eyebrow({ children }: { children: string }) {
  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-white/55 uppercase"
    >
      <span className="h-px w-8 bg-accent" />
      {children}
    </motion.p>
  )
}
