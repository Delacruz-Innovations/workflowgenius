import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type CTA = { label: string; href?: string; onClick?: () => void }

export default function PageHero({
  title,
  image,
  imageAlt,
  tall = false,
  primaryCta,
  secondaryCta,
}: {
  title: string
  image: string
  imageAlt: string
  tall?: boolean
  primaryCta?: CTA
  secondaryCta?: CTA
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
          className={`w-full object-cover ${tall ? "h-[62vh] md:h-[68vh]" : "h-[42vh] md:h-[48vh]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-14">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
            }}
            className={`font-display max-w-5xl leading-[1.08] font-semibold tracking-tight text-white ${
              tall ? "text-5xl sm:text-6xl md:text-7xl" : "text-5xl sm:text-6xl md:text-7xl"
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
              className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              {primaryCta &&
                (primaryCta.href ? (
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
                ) : (
                  <button
                    type="button"
                    onClick={primaryCta.onClick}
                    className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-3 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.02]"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                ))}
              {secondaryCta &&
                (secondaryCta.href ? (
                  <a
                    href={secondaryCta.href}
                    className="group inline-flex items-center justify-center gap-3 border border-accent px-6 py-3 text-xs font-medium tracking-[0.1em] text-accent-light uppercase transition-colors hover:bg-accent/10"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={secondaryCta.onClick}
                    className="group inline-flex items-center justify-center gap-3 border border-accent px-6 py-3 text-xs font-medium tracking-[0.1em] text-accent-light uppercase transition-colors hover:bg-accent/10"
                  >
                    {secondaryCta.label}
                  </button>
                ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
