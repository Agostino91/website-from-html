import { chrome, type Locale } from "@/lib/i18n"

/** Recolours a mono SVG logo to the page ink tone via CSS mask. */
function MaskLogo({ src, label, width }: { src: string; label: string; width: number }) {
  return (
    <span
      className="press-mark"
      role="img"
      aria-label={label}
      style={{
        width,
        height: 26,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  )
}

export function PressStrip({ locale }: { locale: Locale }) {
  const eyebrow = chrome[locale].press

  return (
    <section className="press" aria-label={eyebrow}>
      <span className="press-eyebrow">{eyebrow}</span>
      <div className="press-row">
        {/* National Geographic — iconic framed wordmark */}
        <span className="press-natgeo" role="img" aria-label="National Geographic">
          <span>National Geographic</span>
        </span>

        {/* Stanley Tucci: Searching for Italy — a CNN production */}
        <span className="press-pair">
          <MaskLogo src="/logos/cnn.svg" label="CNN" width={40} />
          <span className="press-wordmark press-wordmark--serif">Searching for Italy</span>
        </span>

        {/* Lonely Planet */}
        <span className="press-wordmark press-lonely">Lonely Planet</span>

        {/* The Guardian */}
        <span className="press-wordmark press-guardian">The Guardian</span>
      </div>
    </section>
  )
}
