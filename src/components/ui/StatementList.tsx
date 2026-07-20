import { motion } from "framer-motion"
import { stagger, viewport } from "../../lib/motion"

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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.09)}
      className={className}
    >
      {lines.map((line, i) => (
        <motion.p
          key={i}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className={lineClassName}
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  )
}
