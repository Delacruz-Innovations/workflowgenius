import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import StickyCTA from "./StickyCTA"
import AssessmentModal from "./AssessmentModal"
import { AssessmentModalProvider } from "../context/AssessmentModalContext"

export default function Layout() {
  return (
    <AssessmentModalProvider>
      <div className="relative mx-auto overflow-hidden border-x border-white/10 bg-[#0c0c0d] pb-16 md:pb-0">
        <StickyCTA />
        <Header />
        <Outlet />
        <Footer />
      </div>
      <AssessmentModal />
    </AssessmentModalProvider>
  )
}
