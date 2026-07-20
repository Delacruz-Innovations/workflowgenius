import { motion } from "framer-motion"
import { fadeUp, viewport } from "../lib/motion"
import { brand, footerNav } from "../data/content"
import { footerMicrocopy } from "../data/howItWorks"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pt-16 pb-8 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-xs tracking-[0.15em] text-white/55 uppercase">
          {footerMicrocopy.eyebrow}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{footerMicrocopy.tagline}</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mt-8 text-center text-[12vw] leading-[0.9] font-extrabold tracking-tight text-white select-none md:text-[110px]"
      >
        {brand.name}
      </motion.h2>

      <p className="mt-2 text-center text-xs text-white/55">{footerMicrocopy.poweredBy}</p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-10 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs tracking-wide text-white/60 md:flex-row"
      >
        <p>&copy; 2026 {brand.domain}. All rights reserved.</p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerNav.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
