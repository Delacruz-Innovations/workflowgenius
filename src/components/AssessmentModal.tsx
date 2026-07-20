import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useAssessmentModal } from "../context/AssessmentModalContext"
import AssessmentForm from "./how-it-works/AssessmentForm"

export default function AssessmentModal() {
  const { isOpen, close } = useAssessmentModal()

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Business Performance Assessment form"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-10 backdrop-blur-sm sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl border border-white/10 bg-[#0c0c0d]"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
            <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10">
              <AssessmentForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
