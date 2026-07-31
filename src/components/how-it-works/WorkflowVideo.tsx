import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { fadeIn, viewport } from "../../lib/motion"

export default function WorkflowVideo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeIn}
      className="border-t border-white/10 px-4 py-4 md:px-10"
    >
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-sm border border-white/10 bg-white/[0.02] text-white/40">
        <PlayCircle size={36} strokeWidth={1.25} />
        <p className="text-xs tracking-[0.1em] uppercase">Video coming soon</p>
      </div>
    </motion.div>
  )
}
