import { motion } from "framer-motion"
import { fadeIn, viewport } from "../../lib/motion"

export default function SideImage({
  src,
  alt,
  side = "right",
  className = "",
}: {
  src: string
  alt: string
  side?: "left" | "right"
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeIn}
      className={`relative h-64 overflow-hidden sm:h-full sm:min-h-[320px] ${
        side === "right" ? "sm:order-2" : "sm:order-1"
      } ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  )
}
