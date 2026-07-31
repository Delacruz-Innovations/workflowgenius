import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { fadeUp, viewport } from "../../lib/motion"
import { testimonials } from "../../data/howItWorks"

function ClientLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-xs font-semibold text-white/50">
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className="h-12 w-12 rounded-full border border-white/15 bg-white object-contain p-1.5"
      loading="lazy"
    />
  )
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return

    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" })
  }

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1))
  const goNext = () => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const cards = Array.from(track.children) as HTMLElement[]
        const trackCenter = track.scrollLeft + track.offsetWidth / 2
        let closest = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2
          const distance = Math.abs(cardCenter - trackCenter)
          if (distance < closestDistance) {
            closestDistance = distance
            closest = index
          }
        })

        setActiveIndex(closest)
      })
    }

    track.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      track.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      goPrev()
    }
    if (e.key === "ArrowRight") {
      e.preventDefault()
      goNext()
    }
  }

  return (
    <div className="border-t border-white/10 px-4 py-16 md:px-10">
      <div className="flex items-end justify-between gap-4">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="text-xs tracking-[0.15em] text-white/45 uppercase"
        >
          What Clients Say
        </motion.p>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Show previous testimonial"
            disabled={activeIndex === 0}
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Show next testimonial"
            disabled={activeIndex === testimonials.length - 1}
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${testimonials.length}`}
            className="flex shrink-0 snap-start basis-[85%] flex-col rounded-sm border border-white/10 bg-white/[0.02] p-6 sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)]"
          >
            <Quote size={18} className="mb-4 text-white/25" />
            <p className="flex-1 text-sm leading-relaxed text-white/65">{item.quote}</p>

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <ClientLogo src={item.logo} name={item.name} />
              <div>
                <p className="font-display text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/45">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing testimonial {activeIndex + 1} of {testimonials.length}: {testimonials[activeIndex].name}
      </p>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}: ${item.name}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToIndex(index)}
            className={`h-1.5 rounded-full bg-white transition-[width,opacity] duration-300 ${
              activeIndex === index ? "w-6 opacity-100" : "w-1.5 opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
