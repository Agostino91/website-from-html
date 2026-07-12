import { chrome, type Locale } from "@/lib/i18n"

export function SiteFooter({ locale }: { locale: Locale }) {
  const f = chrome[locale].footer
  return (
    <footer>
      <div className="footer-links">
        <a href="#">{f.instagram}</a>
        <a href="#">{f.facebook}</a>
        <a href="#">{f.tripadvisor}</a>
        <a href="#">{f.privacy}</a>
        <a href="#">{f.cookies}</a>
      </div>
      <div className="footer-right">
        <span>{f.cin}</span>
        <span>{f.copyright}</span>
      </div>
    </footer>
  )
}
