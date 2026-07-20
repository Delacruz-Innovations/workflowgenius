import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { stagger, viewport } from "../../lib/motion"

export default function TagGrid({
  items,
  tone = "negative",
}: {
  items: string[]
  tone?: "negative" | "positive"
}) {
  const Icon = tone === "positive" ? Check : X

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.06)}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
        >
          <Icon
            size={13}
            className={`shrink-0 ${tone === "positive" ? "text-white/50" : "text-white/45"}`}
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
