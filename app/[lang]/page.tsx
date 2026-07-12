import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { Scopri } from "@/components/scopri"
import { MapSvg } from "@/components/map-svg"
import { NewsletterForm } from "@/components/newsletter-form"
import { chrome, isLocale } from "@/lib/i18n"
import { home } from "@/lib/content/home"

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = home[lang]
  const t = chrome[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="hero hero--home">
        <div className="hero-scroll">{t.scroll}</div>
      </section>

      <section className="statement">
        <div className="container">
          <h1>{c.statementTitle}</h1>
          <div className="statement-body">
            {c.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Scopri href={`/${lang}/story`}>{c.discover}</Scopri>
        </div>
      </section>

      <section>
        <CurvedLabel text={c.roomsLabel} />
      </section>

      <section>
        <div className="rooms-grid">
          {c.rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <div className="room-img-wrap">
                <div className="room-img" style={{ backgroundImage: `url('${room.img}')` }} />
              </div>
              <div className="room-name">{room.name}</div>
              <p className="room-desc">{room.desc}</p>
            </article>
          ))}
        </div>
        <div className="rooms-cta">
          <Scopri href={`/${lang}/book`}>{c.roomsCta}</Scopri>
        </div>
      </section>

      <section>
        <CurvedLabel text={c.landLabel} />
      </section>

      <section>
        <div className="photo-split">
          <div className="photo-split-img" style={{ backgroundImage: `url('${c.photoSplit[0]}')` }} />
          <div className="photo-split-img" style={{ backgroundImage: `url('${c.photoSplit[1]}')` }} />
        </div>
      </section>

      <section id="story">
        <div className="text-image">
          <div className="text-block">
            {c.landText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/story`}>{c.landCta}</Scopri>
          </div>
          <div className="image-block" style={{ backgroundImage: `url('${c.landImg}')` }} />
        </div>
      </section>

      <section>
        <div className="full-photo" style={{ backgroundImage: `url('${c.fullPhoto}')` }} />
      </section>

      <section>
        <CurvedLabel text={c.kitchenLabel} />
      </section>

      <section>
        <div className="text-image reverse">
          <div className="image-block" style={{ backgroundImage: `url('${c.kitchenImg}')` }} />
          <div className="text-block">
            {c.kitchenText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/experiences`}>{c.kitchenCta}</Scopri>
          </div>
        </div>
      </section>

      <section>
        <CurvedLabel text={c.whereLabel} />
      </section>

      <section className="where">
        <div className="map-grid">
          <MapSvg />
          <div className="map-text">
            {c.mapText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Scopri href={`/${lang}/contact`}>{c.mapCta}</Scopri>
          </div>
        </div>
      </section>

      <section className="partners">
        {c.partners.map((p) => (
          <div className="partner" key={p.name}>
            {p.name}
            {p.note ? <em>{p.note}</em> : null}
          </div>
        ))}
      </section>

      <NewsletterForm
        text={c.newsletterText}
        placeholder={c.newsletterPlaceholder}
        button={c.newsletterButton}
        consent={c.newsletterConsent}
      />

      <SiteFooter locale={lang} />
    </>
  )
}
