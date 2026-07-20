import { useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { finalCta } from "../data/content"

export default function StickyCTA() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 480)
  })

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-30 hidden items-center justify-between border-b border-white/10 bg-[#0c0c0d]/90 px-6 py-3 backdrop-blur md:flex md:px-10"
          >
            <span className="text-xs font-medium tracking-[0.15em] text-white/60 uppercase">
              {finalCta.heading}
            </span>
            <a
              href="/how-it-works#assessment-form"
              className="group inline-flex items-center gap-2 bg-white px-5 py-2 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
            >
              {finalCta.button}
              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0c0c0d]/95 px-4 py-3 backdrop-blur md:hidden"
          >
            <a
              href="/how-it-works#assessment-form"
              className="flex items-center justify-center gap-2 bg-white py-3 text-xs font-medium tracking-[0.1em] text-black uppercase"
            >
              {finalCta.button}
              <ArrowRight size={12} />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
