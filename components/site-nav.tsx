"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArchLogo } from "@/components/arch-logo"
import { chrome, type Locale } from "@/lib/i18n"

/**
 * Site navigation.
 * - variant "overlay": sits transparently over a hero image and switches to
 *   the ink color once the hero scrolls out of view (matches the mockup JS).
 * - variant "solid": opaque bar used on inner pages without a full-bleed hero.
 */
export function SiteNav({
  locale,
  variant = "overlay",
}: {
  locale: Locale
  variant?: "overlay" | "solid"
}) {
  const t = chrome[locale]
  const [overLight, setOverLight] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (variant !== "overlay") return
    const hero = document.querySelector(".hero, .exp-hero")
    if (!hero) return
    const onScroll = () => {
      const bottom = hero.getBoundingClientRect().bottom
      setOverLight(bottom < 70)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  const solid = variant === "solid"

  return (
    <nav ref={navRef} className={`nav${solid ? " nav--solid" : ""}${overLight ? " over-light" : ""}`}>
      <Link href={`/${locale}/book`} className="nav-side">
        {t.menu}
      </Link>
      <Link href={`/${locale}`} className="nav-logo" aria-label="Lama di Luna">
        <ArchLogo />
        <div className="logo-text">Lama di Luna</div>
      </Link>
      <Link href={`/${locale}/book`} className="nav-side">
        {t.book}
      </Link>
    </nav>
  )
}
