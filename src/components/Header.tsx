import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { brand } from "../data/content"

const navLinks = [
  { label: "The Reality", href: "/the-reality" },
  { label: "Business Impact", href: "/business-impact" },
  { label: "Our Methodology", href: "/methodology" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/how-it-works#faq" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-transparent px-6 py-6 text-xs tracking-[0.15em] text-white/80 md:px-10"
    >
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center transition-opacity hover:opacity-60"
      >
        {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>

      <Link to="/" className="font-display text-sm font-semibold tracking-widest text-white">
        {brand.name}
        <span className="font-normal text-white/50">.co</span>
      </Link>

      <a
        href="/how-it-works#assessment-form"
        className="hidden border border-accent px-5 py-2 text-accent-light transition-colors hover:bg-accent/10 sm:inline-block"
      >
        Start Assessment
      </a>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 z-30 flex w-full flex-col gap-1 border-b border-white/10 bg-[#0c0c0d] px-6 py-4 md:px-10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
