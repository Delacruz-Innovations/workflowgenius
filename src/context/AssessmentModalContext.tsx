import { createContext, useContext, useState, type ReactNode } from "react"

type AssessmentModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const AssessmentModalContext = createContext<AssessmentModalContextValue | null>(null)

export function AssessmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AssessmentModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
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
