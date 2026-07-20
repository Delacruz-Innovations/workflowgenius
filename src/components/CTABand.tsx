import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, viewport } from "../lib/motion"
import { useAssessmentModal } from "../context/AssessmentModalContext"

export default function CTABand({
  id,
  heading,
  supporting,
  button,
}: {
  id?: string
  heading: string
  supporting: string
  button: string
}) {
  const { open } = useAssessmentModal()

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className="border-t border-white/10 bg-white/[0.02] px-4 py-4 text-center md:px-10"
    >
      <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl">
        {heading}
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
        {supporting}
      </p>

      <button
        type="button"
        onClick={open}
        className="group mt-4 inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
      >
        {button}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </motion.section>
  )
}
