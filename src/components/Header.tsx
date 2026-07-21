import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { brand } from "../data/content"
import { useAssessmentModal } from "../context/AssessmentModalContext"
import { trackEvent } from "../lib/analytics"

const navLinks = [
  { label: "The Reality", href: "/the-reality" },
  { label: "Business Impact", href: "/business-impact" },
  { label: "Our Methodology", href: "/methodology" },
  { label: "How We Work", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { open: openAssessment } = useAssessmentModal()

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-transparent px-4 py-6 text-xs tracking-[0.15em] text-white/80 md:px-10"
    >
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex items-center justify-center transition-opacity hover:opacity-60"
      >
        {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>

      <Link to="/" className="font-display text-sm font-semibold tracking-widest text-white">
        {brand.name}
        <span className="font-normal text-white/50">.co</span>
      </Link>

      <button
        type="button"
        onClick={() => openAssessment("header_desktop")}
        className="hidden border border-accent px-5 py-2 text-accent-light transition-colors hover:bg-accent/10 sm:inline-block"
      >
        Start Assessment
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col justify-center gap-2 bg-[#0c0c0d] px-6 md:px-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={link.href}
                  onClick={() => {
                    trackEvent("nav_click", { label: link.label, href: link.href })
                    setOpen(false)
                  }}
                  className="font-display block py-3 text-3xl font-medium text-white/70 transition-colors hover:text-white sm:text-4xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.05 + navLinks.length * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => {
                setOpen(false)
                openAssessment("header_mobile")
              }}
              className="mt-6 inline-flex w-fit items-center justify-center border border-accent px-6 py-3 text-xs font-medium tracking-[0.15em] text-accent-light uppercase transition-colors hover:bg-accent/10"
            >
              Start Assessment
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
