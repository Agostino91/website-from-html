import { chrome, type Locale } from "@/lib/i18n"

export function SiteFooter({ locale }: { locale: Locale }) {
  const f = chrome[locale].footer
  return (
    <footer>
      <div className="footer-links">
        <a href={f.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={f.instagram} className="footer-social">
          <span
            className="press-mark"
            role="img"
            aria-hidden="true"
            style={{ width: 20, height: 20, WebkitMaskImage: "url(/logos/instagram.svg)", maskImage: "url(/logos/instagram.svg)" }}
          />
        </a>
        <a href={f.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={f.facebook} className="footer-social">
          <span
            className="press-mark"
            role="img"
            aria-hidden="true"
            style={{ width: 20, height: 20, WebkitMaskImage: "url(/logos/facebook.svg)", maskImage: "url(/logos/facebook.svg)" }}
          />
        </a>
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
