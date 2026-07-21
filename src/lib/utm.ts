const STORAGE_KEY = "wg_attribution"

const UTM_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const

type Attribution = Partial<Record<(typeof UTM_FIELDS)[number], string>> & {
  capturedAt?: string
}

export function getStoredUtm(): Attribution {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : {}
  } catch {
    return {}
  }
}

export function captureUtmParams(): void {
  try {
    const params = new URLSearchParams(window.location.search)
    if (!params.get("utm_source")) return

    const incoming: Attribution = { capturedAt: new Date().toISOString() }
    for (const field of UTM_FIELDS) {
      const value = params.get(field)
      if (value) incoming[field] = value
    }

    const merged = { ...getStoredUtm(), ...incoming }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {
    // localStorage unavailable (private mode, disabled, etc.) — attribution is best-effort only
  }
}
