export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-white/60" />
    </div>
  )
}
