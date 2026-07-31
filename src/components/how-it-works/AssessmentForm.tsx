import { useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Check, ShieldCheck } from "lucide-react"
import {
  leadFormFields,
  jobTitles,
  industries,
  employeeBands,
  revenueBands,
  priorityOptions,
  timelineOptions,
  hearAboutOptions,
  thankYou,
} from "../../data/howItWorks"
import { trackEvent } from "../../lib/analytics"

const MAX_PRIORITIES = 3

type FormState = {
  fullName: string
  jobTitle: string
  email: string
  phone: string
  businessName: string
  industry: string
  businessLocation: string
  website: string
  employees: string
  revenue: string
  priorities: string[]
  challenge: string
  timeline: string
  hearAbout: string
  agreeContact: boolean
  agreePrivacy: boolean
}

const initialState: FormState = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  businessLocation: "",
  website: "",
  employees: "",
  revenue: "",
  priorities: [],
  challenge: "",
  timeline: "",
  hearAbout: "",
  agreeContact: false,
  agreePrivacy: false,
}

const requiredTextFields: (keyof FormState)[] = [
  "fullName",
  "jobTitle",
  "email",
  "phone",
  "businessName",
  "industry",
  "businessLocation",
  "employees",
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  "w-full rounded-sm border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/50"
const labelClass = "mb-2 block text-xs tracking-[0.1em] text-white/50 uppercase"
const optionalTag = <span className="normal-case text-white/40">(optional)</span>

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1 text-xs text-red-400/90">
      {message}
    </p>
  )
}

function SectionHeading({ index, title }: { index: number; title: string }) {
  return (
    <div className="mt-8 mb-4 flex items-center gap-3 border-t border-white/10 pt-8">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px] text-white/60">
        {index}
      </span>
      <h4 className="font-display text-sm tracking-[0.1em] text-white/80 uppercase">{title}</h4>
    </div>
  )
}

function Field({
  id,
  label,
  required,
  error,
  className,
  ...inputProps
}: {
  id: string
  label: ReactNode
  required?: boolean
  error?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-white/40"> *</span>}
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

function SelectField({
  id,
  label,
  required,
  error,
  value,
  onChange,
  options,
  placeholder,
  className,
}: {
  id: string
  label: ReactNode
  required?: boolean
  error?: string
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
  className?: string
}) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-white/40"> *</span>}
      </label>
      <select
        id={id}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} appearance-none`}
      >
        <option value="" className="bg-[#0c0c0d]">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0c0c0d]">
            {option}
          </option>
        ))}
      </select>
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

  const togglePriority = (option: string) => {
    setForm((prev) => {
      if (prev.priorities.includes(option)) {
        return { ...prev, priorities: prev.priorities.filter((item) => item !== option) }
      }
      if (prev.priorities.length >= MAX_PRIORITIES) return prev
      return { ...prev, priorities: [...prev.priorities, option] }
    })
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}

    for (const field of requiredTextFields) {
      if (!form[field]) next[field] = "Required"
    }
    if (form.email && !emailPattern.test(form.email)) {
      next.email = "Enter a valid business email"
    }
    if (!form.agreeContact) {
      next.agreeContact = "Please confirm you agree to be contacted"
    }
    if (!form.agreePrivacy) {
      next.agreePrivacy = "Please confirm you agree to the Privacy Policy"
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Client-side only for now — no backend exists yet to confirm a real lead.
    // Move this to fire on a server-confirmed response once the form is wired to one.
    trackEvent("generate_lead", {
      company: form.businessName,
      industry: form.industry,
      priorities: form.priorities,
    })
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
        <h3 className="font-display mt-3 text-2xl font-semibold text-white">{thankYou.heading}</h3>
        <p className="mt-3 text-sm text-white/70">{thankYou.body}</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">{thankYou.supporting}</p>

        <h4 className="font-display mt-8 text-xs tracking-[0.1em] text-white/60 uppercase">
          {thankYou.nextHeading}
        </h4>
        <ol className="mt-4 w-full max-w-sm space-y-3 text-left">
          {thankYou.next.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-white/65">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px] text-white/55">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
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
      <p className="mt-2 text-xs tracking-wide text-white/40">{leadFormFields.estimate}</p>

      <SectionHeading index={1} title="Contact Details" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          required
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          error={errors.fullName}
        />

        <SelectField
          id="jobTitle"
          label="Job Title"
          required
          value={form.jobTitle}
          onChange={(value) => update("jobTitle", value)}
          options={jobTitles}
          placeholder="Select a job title"
          error={errors.jobTitle}
        />

        <Field
          id="email"
          label="Business Email Address"
          required
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />

        <Field
          id="phone"
          label="Phone Number"
          required
          type="tel"
          autoComplete="tel"
          placeholder="+1 234 567 8900"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <SectionHeading index={2} title="Business Information" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id="businessName"
          label="Business Name"
          required
          type="text"
          autoComplete="organization"
          value={form.businessName}
          onChange={(e) => update("businessName", e.target.value)}
          error={errors.businessName}
        />

        <SelectField
          id="industry"
          label="Industry"
          required
          value={form.industry}
          onChange={(value) => update("industry", value)}
          options={industries}
          placeholder="Select an industry"
          error={errors.industry}
        />

        <Field
          id="businessLocation"
          label="Business Location"
          required
          type="text"
          placeholder="e.g. Lagos, Nigeria"
          value={form.businessLocation}
          onChange={(e) => update("businessLocation", e.target.value)}
          error={errors.businessLocation}
        />

        <Field
          id="website"
          label={<>Company Website {optionalTag}</>}
          type="url"
          autoComplete="url"
          placeholder="https://"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <SectionHeading index={3} title="Business Profile" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SelectField
          id="employees"
          label="How many employees does your business have?"
          required
          value={form.employees}
          onChange={(value) => update("employees", value)}
          options={employeeBands}
          placeholder="Select a range"
          error={errors.employees}
        />

        <SelectField
          id="revenue"
          label={<>Annual Revenue {optionalTag}</>}
          value={form.revenue}
          onChange={(value) => update("revenue", value)}
          options={revenueBands}
          placeholder="Select a range"
        />
      </div>

      <SectionHeading index={4} title="Why Are You Looking for an Assessment?" />
      <div>
        <p className={labelClass}>
          What best describes your current business priorities?{" "}
          <span className="normal-case text-white/40">(Select up to three.)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {priorityOptions.map((option) => {
            const active = form.priorities.includes(option)
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => togglePriority(option)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  active
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/60 hover:border-white/35 hover:text-white"
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="challenge" className={labelClass}>
          What is your biggest business challenge today? {optionalTag}
        </label>
        <textarea
          id="challenge"
          rows={4}
          placeholder="Tell us about the biggest challenge your business is facing."
          value={form.challenge}
          onChange={(e) => update("challenge", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <SectionHeading index={5} title="Assessment Readiness" />
      <div>
        <p className={labelClass}>
          When are you planning to begin improvements? {optionalTag}
        </p>
        <div className="flex flex-wrap gap-2">
          {timelineOptions.map((option) => {
            const active = form.timeline === option
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => update("timeline", active ? "" : option)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  active
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/60 hover:border-white/35 hover:text-white"
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 max-w-sm">
        <SelectField
          id="hearAbout"
          label={<>How did you hear about Workflow Genius? {optionalTag}</>}
          value={form.hearAbout}
          onChange={(value) => update("hearAbout", value)}
          options={hearAboutOptions}
          placeholder="Select an option"
        />
      </div>

      <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-white/50">
          <input
            type="checkbox"
            checked={form.agreeContact}
            aria-invalid={Boolean(errors.agreeContact)}
            aria-describedby={errors.agreeContact ? "agreeContact-error" : undefined}
            onChange={(e) => update("agreeContact", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-white/30 bg-transparent accent-white"
          />
          I agree to be contacted regarding my Business Performance Assessment.
        </label>
        <ErrorText id="agreeContact-error" message={errors.agreeContact} />

        <label className="flex items-start gap-3 text-xs leading-relaxed text-white/50">
          <input
            type="checkbox"
            checked={form.agreePrivacy}
            aria-invalid={Boolean(errors.agreePrivacy)}
            aria-describedby={errors.agreePrivacy ? "agreePrivacy-error" : undefined}
            onChange={(e) => update("agreePrivacy", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-white/30 bg-transparent accent-white"
          />
          I agree to the Privacy Policy.
        </label>
        <ErrorText id="agreePrivacy-error" message={errors.agreePrivacy} />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-white px-8 py-4 text-xs font-medium tracking-[0.1em] text-black uppercase transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Start My Business Performance Assessment
      </button>

      <p className="mt-3 flex items-center gap-2 text-xs text-white/55">
        <ShieldCheck size={13} />
        Protected against spam. Your details are never shared with third parties.
      </p>
    </form>
  )
}
