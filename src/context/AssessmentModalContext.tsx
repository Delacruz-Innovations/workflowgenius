import { createContext, useContext, useState, type ReactNode } from "react"
import { trackEvent } from "../lib/analytics"

type AssessmentModalContextValue = {
  isOpen: boolean
  open: (source?: string) => void
  close: () => void
}

const AssessmentModalContext = createContext<AssessmentModalContextValue | null>(null)

export function AssessmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = (source = "unknown") => {
    trackEvent("start_assessment_click", { source })
    setIsOpen(true)
  }

  return (
    <AssessmentModalContext.Provider value={{ isOpen, open, close: () => setIsOpen(false) }}>
      {children}
    </AssessmentModalContext.Provider>
  )
}

export function useAssessmentModal() {
  const ctx = useContext(AssessmentModalContext)
  if (!ctx) {
    throw new Error("useAssessmentModal must be used within AssessmentModalProvider")
  }
  return ctx
}
