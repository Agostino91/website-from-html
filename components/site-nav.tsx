"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { chrome, menu, type Locale } from "@/lib/i18n"

/**
 * Site navigation.
 * - variant "overlay": sits transparently over a hero image and switches to
 *   the ink color once the hero scrolls out of view (matches the mockup JS).
 * - variant "solid": opaque bar used on inner pages without a full-bleed hero.
 *
 * Clicking "Menu" opens a full-screen overlay (Palazzo Daniele style) listing
 * every section of the site.
 */
export function SiteNav({
  locale,
  variant = "overlay",
}: {
  locale: Locale
  variant?: "overlay" | "solid"
}) {
  const t = chrome[locale]
  const items = menu[locale]
  const [overLight, setOverLight] = useState(false)
  const [open, setOpen] = useState(false)
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

  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const solid = variant === "solid"

  return (
    <>
      <nav ref={navRef} className={`nav${solid ? " nav--solid" : ""}${overLight ? " over-light" : ""}`}>
        <button type="button" className="nav-side" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
          {t.menu}
        </button>
        <Link href={`/${locale}`} className="nav-logo" aria-label="Lama di Luna">
          <span className="brand-mark" aria-hidden="true" />
          <div className="logo-text">Lama di Luna</div>
        </Link>
        <Link href={`/${locale}/book`} className="nav-side">
          {t.book}
        </Link>
      </nav>

      <div className={`menu-overlay${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="menu-bar">
          <span className="menu-title">{t.menuTitle}</span>
          <button type="button" className="menu-close" onClick={() => setOpen(false)}>
            {t.close}
            <span className="menu-close-x" aria-hidden="true" />
          </button>
        </div>

        <nav className="menu-list" aria-label="Main menu">
          {items.map((item, i) => {
            const href = item.slug ? `/${locale}/${item.slug}` : null
            const index = String(i + 1).padStart(2, "0")
            if (!href) {
              return (
                <span key={item.label} className="menu-link is-soon">
                  <span className="menu-index">{index}</span>
                  {item.label}
                  <span className="menu-soon">soon</span>
                </span>
              )
            }
            return (
              <Link key={item.label} href={href} className="menu-link" onClick={() => setOpen(false)}>
                <span className="menu-index">{index}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="menu-foot">
          <Link href={`/${locale}/book`} className="menu-book" onClick={() => setOpen(false)}>
            {t.book}
          </Link>
          <span className="menu-place">Andria · Puglia</span>
        </div>
      </div>
    </>
  )
}
