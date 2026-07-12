export const locales = ["en", "it"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

// Main navigation menu (opens in the full-screen overlay).
// `slug` is null for sections that don't have a page yet.
export type MenuItem = { label: string; slug: string | null }

export const menu: Record<Locale, MenuItem[]> = {
  en: [
    { label: "Rooms", slug: "rooms" },
    { label: "Experiences", slug: "experiences" },
    { label: "Our Story", slug: "story" },
    { label: "Restaurant", slug: "restaurant" },
    { label: "Shop", slug: "shop" },
    { label: "Contact", slug: "contact" },
    { label: "Masseria in exclusive", slug: "exclusive" },
  ],
  it: [
    { label: "Camere", slug: "rooms" },
    { label: "Esperienze", slug: "experiences" },
    { label: "La nostra storia", slug: "story" },
    { label: "Ristorante", slug: "restaurant" },
    { label: "Shop", slug: "shop" },
    { label: "Contatti", slug: "contact" },
    { label: "Masseria in esclusiva", slug: "exclusive" },
  ],
}

// Shared chrome strings (nav + footer) used on every page.
export const chrome = {
  en: {
    menu: "Menu",
    book: "Book",
    scroll: "Scroll",
    close: "Close",
    menuTitle: "Explore",
    footer: {
      instagram: "Instagram",
      facebook: "Facebook",
      tripadvisor: "Tripadvisor",
      privacy: "Privacy",
      cookies: "Cookies",
      cin: "CIN: IT110001B500020950",
      copyright: "© 2026 Lama di Luna · Andria, BT",
    },
  },
  it: {
    menu: "Menù",
    book: "Prenota",
    scroll: "Scorri",
    close: "Chiudi",
    menuTitle: "Esplora",
    footer: {
      instagram: "Instagram",
      facebook: "Facebook",
      tripadvisor: "Tripadvisor",
      privacy: "Privacy",
      cookies: "Cookies",
      cin: "CIN: IT110001B500020950",
      copyright: "© 2026 Lama di Luna · Andria, BT",
    },
  },
} as const
