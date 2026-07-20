import { motion } from "framer-motion"
import { fadeUp, viewport } from "../../lib/motion"

export default function SubHeading({ children }: { children: string }) {
  return (
    <motion.h3
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className="font-display text-xl font-medium text-white md:text-2xl"
    >
      {children}
    </motion.h3>
  )
}
