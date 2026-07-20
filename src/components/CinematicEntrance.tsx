import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logoUrl from "../assets/logo.png"

type EntranceType = 1 | 2 | 3

const LOGO = logoUrl
const WORDMARK = "Delacruz Innovations"
const TAGLINE = "Business Performance Engineering™"

const DURATIONS: Record<EntranceType, number> = {
  1: 3000, // Core Pulse
  2: 3500, // Dark Shutter
  3: 4000, // Atmosphere
}

export default function CinematicEntrance({
  type = 1,
  onComplete,
}: {
  type?: EntranceType
  onComplete?: () => void
}) {
  const [status, setStatus] = useState<"loading" | "complete">("loading")

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("complete")
      if (onComplete) setTimeout(onComplete, 800)
    }, DURATIONS[type])

    return () => clearTimeout(timer)
  }, [type, onComplete])

  // Variation 1: The Core Pulse (minimalist)
  const renderPulse = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0c0c0d]"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-accent/40"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center"
        >
          <img src={LOGO} alt={WORDMARK} className="mb-6 h-24 w-auto" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
          >
            <span className="font-display block text-2xl leading-tight font-bold tracking-[0.25em] text-white uppercase">
              {WORDMARK}
            </span>
            <span className="mt-2 block text-[10px] font-medium tracking-[0.5em] text-white/50 uppercase">
              {TAGLINE}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )

  // Variation 2: The Dark Shutter (editorial reveal)
  const renderReveal = () => (
    <div className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-[#0c0c0d]">
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-101%" }}
        transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
        className="flex flex-1 items-end justify-center border-b border-white/5 bg-[#0c0c0d] pb-6"
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="overflow-hidden"
        >
          <span className="font-display block text-5xl tracking-widest text-white uppercase md:text-8xl">
            Delacruz
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "101%" }}
        transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
        className="flex flex-1 items-start justify-center bg-[#0c0c0d] pt-6"
      >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="overflow-hidden"
        >
          <span className="font-display block text-5xl tracking-widest text-white uppercase md:text-8xl">
            Innovations
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-1/2 left-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-accent/40 bg-[#0c0c0d] p-6 shadow-[0_0_60px_rgba(139,92,246,0.15)]"
      >
        <img src={LOGO} alt={WORDMARK} className="h-full w-full object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="font-display text-[12vw] tracking-tighter whitespace-nowrap text-white/5 uppercase select-none">
          Engineering
        </span>
      </motion.div>
    </div>
  )

  // Variation 3: The Atmosphere (soft/immersive)
  const renderAtmosphere = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] p-8"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-accent/10 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute right-[-10%] bottom-[-10%] h-[60vw] w-[60vw] rounded-full bg-white/5 blur-[120px]"
      />

      <div className="relative text-center">
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0, scale: 0.9 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={LOGO}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[40vh] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="font-display mb-4 text-4xl tracking-widest text-white uppercase md:text-6xl"
            >
              {WORDMARK}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mx-auto mb-6 h-px bg-accent/40"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2, duration: 1 }}
              className="pl-[1em] text-sm font-light tracking-[1em] text-white uppercase"
            >
              {TAGLINE}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence>
      {status === "loading" && (
        <div key="entrance-container">
          {type === 1 && renderPulse()}
          {type === 2 && renderReveal()}
          {type === 3 && renderAtmosphere()}
        </div>
      )}
    </AnimatePresence>
  )
}
