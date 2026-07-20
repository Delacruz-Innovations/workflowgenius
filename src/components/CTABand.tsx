import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, viewport } from "../lib/motion"

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
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      className="border-t border-white/10 bg-white/[0.02] px-6 py-24 text-center md:px-10 md:py-32"
    >
      <h2 className="font-display mx-auto max-w-3xl text-3xl leading-[1.1] font-semibold text-white md:text-5xl">
        {heading}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
        {supporting}
      </p>

      <a
        href="/how-it-works#assessment-form"
        className="group mt-10 inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
      >
        {button}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </motion.section>
  )
}
