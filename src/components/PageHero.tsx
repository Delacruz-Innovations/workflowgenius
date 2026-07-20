import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

type CTA = { label: string; href: string }

export default function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  tall = false,
  primaryCta,
  secondaryCta,
  scrollTarget,
}: {
  eyebrow: string
  title: string
  image: string
  imageAlt: string
  tall?: boolean
  primaryCta?: CTA
  secondaryCta?: CTA
  scrollTarget?: string
}) {
  const words = title.split(" ")

  return (
    <section className="relative overflow-hidden">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={image}
          alt={imageAlt}
          className={`w-full object-cover ${tall ? "h-[85vh] md:h-[90vh]" : "h-[52vh] md:h-[60vh]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-white/70 uppercase"
          >
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
            }}
            className={`font-display max-w-4xl leading-[1.12] font-semibold tracking-tight text-white ${
              tall ? "text-3xl sm:text-5xl md:text-6xl" : "text-2xl sm:text-4xl md:text-5xl"
            }`}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: "60%" },
                  show: {
                    opacity: 1,
                    y: "0%",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-3 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
                >
                  {primaryCta.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 border border-accent px-6 py-3 text-xs font-medium tracking-[0.1em] text-accent-light uppercase transition-colors hover:bg-accent/10"
                >
                  {secondaryCta.label}
                </a>
              )}
            </motion.div>
          )}
        </div>

        {scrollTarget && (
          <motion.a
            href={scrollTarget}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            whileHover={{ scale: 1.08 }}
            className="absolute right-6 bottom-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white md:right-10"
            aria-label="Scroll to next section"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.a>
        )}
      </div>
    </section>
  )
}
