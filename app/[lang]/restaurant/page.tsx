import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { isLocale } from "@/lib/i18n"
import { restaurant } from "@/lib/content/restaurant"

export default async function RestaurantPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = restaurant[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="exp-hero">
        <div className="exp-counter">{c.counter}</div>
        <div className="exp-breadcrumb">
          <Link href={`/${lang}`}>{c.breadcrumbRoot}</Link>
          <span style={{ opacity: 0.55 }}>/</span>
          <span>{c.breadcrumbCurrent}</span>
        </div>
        <div className="exp-hero-title">
          <div className="exp-hero-eyebrow">{c.heroEyebrow}</div>
          <h1>{c.title}</h1>
        </div>
      </section>

      <section className="statement">
        <div className="statement-grid">
          <div>
            <h2>{c.statementTitle}</h2>
            <div className="statement-body">
              {c.statementBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="facts">
            {c.facts.map((f) => (
              <div key={f.label}>
                <div className="fact-label">{f.label}</div>
                <div className="fact-value">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurant-media" aria-label={lang === "it" ? "Sapori di Lama di Luna" : "Flavours of Lama di Luna"}>
        <div
          className="restaurant-media-video-wrap"
          style={{ backgroundImage: `url('${c.mediaPhotos[0]}')` }}
        >
          <video
            className="restaurant-media-video"
            src={c.mediaVideo}
            poster={c.mediaPhotos[0]}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={lang === "it" ? "Preparazione in cucina a Lama di Luna" : "Food preparation at Lama di Luna"}
          />
        </div>
        <div className="restaurant-media-images">
          {c.mediaPhotos.map((photo, index) => (
            <div
              className="restaurant-media-image"
              style={{ backgroundImage: `url('${photo}')` }}
              role="img"
              aria-label={
                lang === "it"
                  ? `Cucina di Lama di Luna, immagine ${index + 1}`
                  : `Lama di Luna food, image ${index + 1}`
              }
              key={photo}
            />
          ))}
        </div>
      </section>

      <section>
        <CurvedLabel text={c.curvedLabel} />
      </section>

      <section className="menu-course-section">
        <div className="menu-course-header">
          <div className="script-eyebrow">{c.menuEyebrow}</div>
          <h2>{c.menuTitle}</h2>
          <p>{c.menuNote}</p>
        </div>
        <div className="menu-course-list">
          {c.courses.map((course) => (
            <div className="menu-course" key={course.name}>
              <div className="menu-course-name">{course.name}</div>
              <div className="menu-course-desc">{course.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-split">
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[0]}')` }} />
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[1]}')` }} />
      </section>

      <section>
        <div className="text-image">
          <div className="text-block">
            <div className="script-eyebrow" style={{ marginBottom: "1rem" }}>
              {c.sourcingEyebrow}
            </div>
            {c.sourcingBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="image-block" style={{ backgroundImage: `url('${c.sourcingImg}')` }} />
        </div>
      </section>

      <section className="booking-callout">
        <div className="booking-callout-inner">
          <div className="eyebrow">{c.bookingEyebrow}</div>
          <h2>{c.bookingTitle}</h2>
          <p>{c.bookingText}</p>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {c.bookingCta}
          </Link>
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
