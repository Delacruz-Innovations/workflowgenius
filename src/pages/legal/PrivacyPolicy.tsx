import { motion } from "framer-motion"
import { useJsonLd } from "../../lib/useJsonLd"
import { useSeo } from "../../lib/useSeo"
import { fadeUp, stagger } from "../../lib/motion"
import { trackEvent } from "../../lib/analytics"

const toc = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-collect", label: "How We Collect Information" },
  { id: "why-we-process", label: "Why We Process Personal Information" },
  { id: "legal-basis", label: "Legal Basis" },
  { id: "cookies", label: "Cookies" },
  { id: "analytics", label: "Analytics" },
  { id: "marketing", label: "Marketing Communications" },
  { id: "sharing", label: "Sharing Information" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "third-party", label: "Third-Party Websites" },
  { id: "changes", label: "Changes to This Privacy Policy" },
  { id: "contact", label: "Contact" },
]

function SectionHeader({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display scroll-mt-24 text-2xl font-semibold text-white md:text-3xl"
    >
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border-b border-white/10 py-3 text-sm leading-relaxed text-white/65"
        >
          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/35" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="border-t border-white/10 pt-10 pb-2"
      aria-labelledby={id}
    >
      <SectionHeader id={id}>{title}</SectionHeader>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-white/10 py-3">
      <span className="w-40 shrink-0 text-xs tracking-[0.12em] text-white/45 uppercase">{label}</span>
      <span className="text-sm text-white/70">{value}</span>
    </div>
  )
}

export default function PrivacyPolicy() {
  useSeo({
    title: "Privacy Policy | Delacruz Innovations",
    description: "How Workflow Genius collects, uses and protects your personal information.",
    path: "/legal/privacy-policy",
    noindex: true,
  })

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workflowgenius.co/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://workflowgenius.co/legal/privacy-policy" },
    ],
  })

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Learn how Delacruz Innovations collects, uses, stores and protects personal information when you use our website, services and digital platforms.",
    url: "https://workflowgenius.co/legal/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "Delacruz Innovations",
    },
  })

  return (
    <div className="min-h-screen bg-[#0c0c0d]">
      {/* Hero */}
      <div className="border-b border-white/10 px-4 pb-12 pt-32 md:px-10 md:pt-40">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.08)}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.18em] text-white/45 uppercase"
          >
            Legal &amp; Trust Centre
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display mt-4 text-5xl leading-[1.02] font-semibold text-white md:text-7xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-wide text-white/45"
          >
            <span>Effective Date: 21 July 2026</span>
            <span>Last Updated: 21 July 2026</span>
            <span>Version 1.0</span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            Delacruz Innovations ("Delacruz Innovations", "we", "our", or "us") respects your privacy
            and is committed to protecting your personal information. This Privacy Policy explains how
            we collect, use, disclose, store and safeguard your information when you interact with our
            website, services and digital platforms.
          </motion.p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-10 lg:flex lg:gap-16">
        {/* Table of Contents — sticky sidebar */}
        <aside className="mb-12 shrink-0 lg:mb-0 lg:w-56 xl:w-64">
          <div className="sticky top-24">
            <p className="text-xs tracking-[0.15em] text-white/40 uppercase">Contents</p>
            <nav aria-label="Table of contents" className="mt-4 space-y-1">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => trackEvent("privacy_toc_click", { section: item.id })}
                  className="block py-1.5 text-xs text-white/50 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Policy body */}
        <main
          className="min-w-0 flex-1 max-w-3xl"
          aria-label="Privacy Policy content"
        >

          <Section id="who-we-are" title="Who We Are">
            <p className="text-sm leading-relaxed text-white/60">
              Delacruz Innovations is a Business Performance Engineering™ company providing advisory,
              consulting, transformation, governance, operational excellence, artificial intelligence,
              data, business analysis and enterprise technology services to organisations across
              Nigeria, Africa and international markets.
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              For questions regarding this Privacy Policy, please contact:
            </p>
            <div className="mt-4 rounded-sm border border-white/10 bg-white/[0.02] px-6 py-2">
              <ContactRow label="Organisation" value="Delacruz Innovations" />
              <ContactRow label="Email" value="info@delacruzinnovations.com" />
              <ContactRow label="Telephone" value="[Business Telephone]" />
              <ContactRow label="Address" value="[Registered Office Address]" />
            </div>
          </Section>

          <Section id="information-we-collect" title="Information We Collect">
            <p className="text-sm leading-relaxed text-white/60">
              Depending on how you interact with us, we may collect the following categories of personal information:
            </p>

            <div>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">Identity Information</h3>
              <BulletList items={["Name", "Job title", "Employer", "Business email address", "Telephone number"]} />
            </div>

            <div>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">Business Information</h3>
              <BulletList items={["Organisation", "Industry", "Business requirements", "Project details", "Executive Performance Assessment responses"]} />
            </div>

            <div>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">Technical Information</h3>
              <BulletList items={["Browser type", "Device information", "IP address", "Operating system", "Session information", "Website usage", "Referral source"]} />
            </div>

            <div>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">Marketing Information</h3>
              <BulletList items={["Newsletter subscriptions", "Download history", "Webinar registrations", "Communication preferences"]} />
            </div>
          </Section>

          <Section id="how-we-collect" title="How We Collect Information">
            <p className="text-sm leading-relaxed text-white/60">
              Information may be collected when you:
            </p>
            <BulletList items={[
              "Contact us",
              "Submit a website enquiry",
              "Request a proposal",
              "Download resources",
              "Subscribe to updates",
              "Complete an assessment",
              "Register for an event",
              "Apply for employment",
              "Browse our website",
            ]} />
            <p className="text-sm leading-relaxed text-white/50 italic">
              Some information is collected automatically through cookies and analytics technologies.
            </p>
          </Section>

          <Section id="why-we-process" title="Why We Process Personal Information">
            <p className="text-sm leading-relaxed text-white/60">
              We process personal information to:
            </p>
            <BulletList items={[
              "Respond to enquiries",
              "Deliver professional services",
              "Conduct Executive Performance Assessments",
              "Improve website performance",
              "Send requested resources",
              "Deliver newsletters where consent has been provided",
              "Manage events",
              "Improve customer experience",
              "Meet legal obligations",
              "Protect website security",
              "Prevent fraud",
            ]} />
          </Section>

          <Section id="legal-basis" title="Legal Basis">
            <p className="text-sm leading-relaxed text-white/60">
              Where applicable, we process information based upon:
            </p>
            <BulletList items={[
              "Consent",
              "Contractual necessity",
              "Legitimate interests",
              "Legal obligations",
            ]} />
          </Section>

          <Section id="cookies" title="Cookies">
            <p className="text-sm leading-relaxed text-white/60">
              Our website uses cookies to:
            </p>
            <BulletList items={[
              "Improve website functionality",
              "Remember user preferences",
              "Understand website performance",
              "Analyse visitor behaviour",
              "Improve security",
            ]} />
            <p className="text-sm leading-relaxed text-white/60">
              Users can manage cookie preferences through browser settings or our Cookie Preferences
              tool where available.
            </p>
          </Section>

          <Section id="analytics" title="Analytics">
            <p className="text-sm leading-relaxed text-white/60">
              We may use analytics technologies to understand:
            </p>
            <BulletList items={[
              "Visitor journeys",
              "Popular content",
              "Traffic sources",
              "Website performance",
              "User engagement",
            ]} />
            <p className="text-sm leading-relaxed text-white/60">
              Analytics information is aggregated where possible and used to improve our services.
            </p>
          </Section>

          <Section id="marketing" title="Marketing Communications">
            <p className="text-sm leading-relaxed text-white/60">
              Where consent has been provided, we may send:
            </p>
            <BulletList items={[
              "Executive insights",
              "Business Performance Engineering™ research",
              "Industry updates",
              "Event invitations",
              "Product announcements",
              "Service updates",
            ]} />
            <p className="text-sm leading-relaxed text-white/60">
              You may unsubscribe at any time using the unsubscribe link or by contacting us directly.
            </p>
          </Section>

          <Section id="sharing" title="Sharing Information">
            <p className="text-sm font-medium leading-relaxed text-white/80">
              We do not sell personal information.
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Information may be shared with carefully selected service providers supporting:
            </p>
            <BulletList items={[
              "Website hosting",
              "Email delivery",
              "Customer relationship management",
              "Analytics",
              "Event management",
              "Professional advisers",
              "Regulatory authorities where required by law",
            ]} />
          </Section>

          <Section id="international-transfers" title="International Transfers">
            <p className="text-sm leading-relaxed text-white/60">
              Where personal information is transferred internationally, we implement appropriate
              safeguards to protect personal information in accordance with applicable laws.
            </p>
          </Section>

          <Section id="data-security" title="Data Security">
            <p className="text-sm leading-relaxed text-white/60">
              We maintain administrative, organisational and technical safeguards designed to protect
              personal information against unauthorised access, alteration, disclosure or destruction.
            </p>
            <p className="text-sm leading-relaxed text-white/50 italic">
              Although we strive to protect all information, no internet transmission can be guaranteed
              to be completely secure.
            </p>
          </Section>

          <Section id="data-retention" title="Data Retention">
            <p className="text-sm leading-relaxed text-white/60">
              Personal information is retained only for as long as necessary to:
            </p>
            <BulletList items={[
              "Deliver requested services",
              "Meet legal obligations",
              "Resolve disputes",
              "Protect legitimate interests",
              "Improve customer service",
            ]} />
            <p className="text-sm leading-relaxed text-white/60">
              When no longer required, information is securely deleted or anonymised.
            </p>
          </Section>

          <Section id="your-rights" title="Your Rights">
            <p className="text-sm leading-relaxed text-white/60">
              Subject to applicable law, individuals may have the right to:
            </p>
            <BulletList items={[
              "Request access",
              "Request correction",
              "Request deletion",
              "Restrict processing",
              "Object to processing",
              "Withdraw consent",
              "Request portability where applicable",
              "Submit a complaint to the relevant supervisory authority",
            ]} />
            <p className="text-sm leading-relaxed text-white/60">
              Requests may be submitted using the contact details above.
            </p>
          </Section>

          <Section id="artificial-intelligence" title="Artificial Intelligence">
            <p className="text-sm leading-relaxed text-white/60">
              Delacruz Innovations may use artificial intelligence to support research, business
              analysis, operational improvement and professional advisory services.
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Where AI-assisted tools are used, we implement appropriate governance measures designed
              to protect confidentiality, maintain data integrity and support responsible use in line
              with our Business Performance Engineering™ principles.
            </p>
          </Section>

          <Section id="third-party" title="Third-Party Websites">
            <p className="text-sm leading-relaxed text-white/60">
              Our website may contain links to external websites. We are not responsible for their
              privacy practices and encourage users to review their privacy policies before providing
              personal information.
            </p>
          </Section>

          <Section id="changes" title="Changes to This Privacy Policy">
            <p className="text-sm leading-relaxed text-white/60">
              We may update this Privacy Policy periodically to reflect changes in legal requirements,
              technology, business operations or services. The latest version will always be published
              on this page together with the updated effective date.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p className="text-sm leading-relaxed text-white/60">
              For privacy-related enquiries, please contact:
            </p>
            <div className="mt-4 rounded-sm border border-white/10 bg-white/[0.02] px-6 py-2">
              <ContactRow label="Role" value="Privacy Officer" />
              <ContactRow label="Organisation" value="Delacruz Innovations" />
              <ContactRow label="Email" value="info@delacruzinnovations.com" />
              <ContactRow label="Telephone" value="+234 9052765358" />
              <ContactRow label="Address" value="5th floor, Mosesola House, 103 Allen Ave, Allen, Ikeja 101233, Lagos" />
            </div>
          </Section>

      
        </main>
      </div>
    </div>
  )
}
