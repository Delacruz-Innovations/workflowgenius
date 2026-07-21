import { useState, type FormEvent, type InputHTMLAttributes } from "react"
import { motion } from "framer-motion"
import { Check, ShieldCheck } from "lucide-react"
import { leadFormFields, industries, employeeBands } from "../../data/howItWorks"
import { trackEvent } from "../../lib/analytics"

type FormState = {
  fullName: string
  email: string
  company: string
  jobTitle: string
  country: string
  employees: string
  industry: string
  challenge: string
  consent: boolean
}

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  jobTitle: "",
  country: "",
  employees: "",
  industry: "",
  challenge: "",
  consent: false,
}

const requiredFields: (keyof FormState)[] = [
  "fullName",
  "email",
  "company",
  "jobTitle",
  "country",
  "industry",
  "challenge",
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  "w-full rounded-sm border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/50"
const labelClass = "mb-2 block text-xs tracking-[0.1em] text-white/50 uppercase"

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1 text-xs text-red-400/90">
      {message}
    </p>
  )
}

function Field({
  id,
  label,
  error,
  className,
  ...inputProps
}: {
  id: string
  label: string
  error?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
        {...inputProps}
      />
      <ErrorText id={errorId} message={error} />
    </div>
  )
}

export default function AssessmentForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}

    for (const field of requiredFields) {
      if (!form[field]) next[field] = "Required"
    }
    if (form.email && !emailPattern.test(form.email)) {
      next.email = "Enter a valid business email"
    }
    if (!form.consent) {
      next.consent = "Please confirm you agree to be contacted"
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Client-side only for now — no backend exists yet to confirm a real lead.
    // Move this to fire on a server-confirmed response once the form is wired to one.
    trackEvent("generate_lead", { company: form.company, industry: form.industry })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className="mx-auto flex max-w-xl flex-col items-center rounded-sm border border-white/15 bg-white/[0.02] px-8 py-16 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white">
          <Check size={20} />
        </span>
        <h3 className="font-display mt-3 text-2xl font-semibold text-white">
          Thank you, {form.fullName.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
          An advisor from Delacruz Innovations will be in touch shortly to scope your Business
          Performance Assessment.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
        {leadFormFields.heading}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
        {leadFormFields.supporting}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          error={errors.fullName}
        />

        <Field
          id="email"
          label="Business Email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />

        <Field
          id="company"
          label="Company Name"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          error={errors.company}
        />

        <Field
          id="jobTitle"
          label="Job Title"
          type="text"
          autoComplete="organization-title"
          value={form.jobTitle}
          onChange={(e) => update("jobTitle", e.target.value)}
          error={errors.jobTitle}
        />

        <Field
          id="country"
          label="Country"
          type="text"
          autoComplete="country-name"
          value={form.country}
          onChange={(e) => update("country", e.target.value)}
          error={errors.country}
        />

        <div>
          <label htmlFor="employees" className={labelClass}>
            Number of Employees <span className="normal-case text-white/55">(optional)</span>
          </label>
          <select
            id="employees"
            value={form.employees}
            onChange={(e) => update("employees", e.target.value)}
            className={`${inputClass} appearance-none`}
          >
            <option value="" className="bg-[#0c0c0d]">
              Select a range
            </option>
            {employeeBands.map((band) => (
              <option key={band} value={band} className="bg-[#0c0c0d]">
                {band}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <select
            id="industry"
            value={form.industry}
            aria-invalid={Boolean(errors.industry)}
            aria-describedby={errors.industry ? "industry-error" : undefined}
            onChange={(e) => update("industry", e.target.value)}
            className={`${inputClass} appearance-none`}
          >
            <option value="" className="bg-[#0c0c0d]">
              Select an industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-[#0c0c0d]">
                {industry}
              </option>
            ))}
          </select>
          <ErrorText id="industry-error" message={errors.industry} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="challenge" className={labelClass}>
            Current Business Challenge
          </label>
          <textarea
            id="challenge"
            rows={4}
            value={form.challenge}
            aria-invalid={Boolean(errors.challenge)}
            aria-describedby={errors.challenge ? "challenge-error" : undefined}
            onChange={(e) => update("challenge", e.target.value)}
            className={`${inputClass} resize-none`}
          />
          <ErrorText id="challenge-error" message={errors.challenge} />
        </div>
      </div>

      <label className="mt-3 flex items-start gap-3 text-xs leading-relaxed text-white/50">
        <input
          type="checkbox"
          checked={form.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-white/30 bg-transparent accent-white"
        />
        I agree to be contacted by Delacruz Innovations about my Business Performance Assessment
        and have read the privacy policy.
      </label>
      <ErrorText id="consent-error" message={errors.consent} />

      <button
        type="submit"
        className="mt-3 w-full bg-white px-8 py-4 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Book My Assessment
      </button>

      <p className="mt-3 flex items-center gap-2 text-xs text-white/55">
        <ShieldCheck size={13} />
        Protected against spam. Your details are never shared with third parties.
      </p>
    </form>
  )
}
