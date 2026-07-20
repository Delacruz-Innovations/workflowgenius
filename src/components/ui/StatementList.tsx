import { motion } from "framer-motion"
import { fadeUp, viewport } from "../../lib/motion"

export default function StatementList({
  lines,
  className = "",
  lineClassName = "text-lg text-white/70 md:text-xl",
}: {
  lines: string[]
  className?: string
  lineClassName?: string
}) {
  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className={`${lineClassName} ${className}`}
    >
      {lines.join(" ")}
    </motion.p>
  )
}
