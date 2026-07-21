import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { fadeUp, viewport } from "../lib/motion"
import { brand, footerNav } from "../data/content"
import { footerMicrocopy } from "../data/howItWorks"
import { trackEvent } from "../lib/analytics"

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 pt-6 pb-8 md:px-10">
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
        className="font-display mt-3 text-center text-4xl leading-[0.9] font-extrabold tracking-tight text-white select-none sm:text-6xl md:text-[110px]"
      >
        {brand.name}
      </motion.h2>

      <p className="mt-2 text-center text-xs text-white/55">{footerMicrocopy.poweredBy}</p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-4 border-t border-white/10 pt-8"
      >
        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-white/55">
          {footerNav.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => trackEvent("footer_nav_click", { label: link.label, href: link.href })}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs tracking-wide text-white/45 md:flex-row">
          <p>&copy; 2026 {brand.domain}. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => trackEvent("footer_legal_click", { label: link.label })}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
