"use client"

import { usePathname, useRouter } from "next/navigation"
import { isLocale, type Locale } from "@/lib/i18n"

/**
 * Fixed language toggle. In the original mockup this cycled a demo label;
 * here it swaps the locale segment of the current path so it navigates
 * between the English and Italian versions of the same page.
 */
export function LanguagePill({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()
  const next: Locale = locale === "en" ? "it" : "en"

  const toNext = () => {
    const segments = pathname.split("/")
    if (segments[1] && isLocale(segments[1])) {
      segments[1] = next
    }
    router.push(segments.join("/") || `/${next}`)
  }

  return (
    <button className="lang-pill" onClick={toNext} title="Change language" aria-label={`Switch to ${next.toUpperCase()}`}>
      {locale.toUpperCase()}
    </button>
  )
}
