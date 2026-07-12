export const locales = ["en", "it"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

// Shared chrome strings (nav + footer) used on every page.
export const chrome = {
  en: {
    menu: "Menu",
    book: "Book",
    scroll: "Scroll",
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
