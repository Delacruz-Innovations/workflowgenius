import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import Layout from "./components/Layout"
import ScrollToHash from "./components/ScrollToHash"
import CinematicEntrance from "./components/CinematicEntrance"
import SiteIntro from "./components/SiteIntro"
import AnalyticsPageviewTracker from "./components/AnalyticsPageviewTracker"
import { initAnalytics } from "./lib/analytics"

const Home = lazy(() => import("./pages/Home"))
const TheReality = lazy(() => import("./pages/TheReality"))
const BusinessImpact = lazy(() => import("./pages/BusinessImpact"))
const Methodology = lazy(() => import("./pages/Methodology"))
const HowItWorks = lazy(() => import("./pages/HowItWorks"))
const FAQPage = lazy(() => import("./pages/FAQPage"))
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"))

initAnalytics()

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <SiteIntro />
        <ScrollToHash />
        <AnalyticsPageviewTracker />
        <Suspense fallback={<CinematicEntrance type={3} />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="the-reality" element={<TheReality />} />
              <Route path="business-impact" element={<BusinessImpact />} />
              <Route path="methodology" element={<Methodology />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
