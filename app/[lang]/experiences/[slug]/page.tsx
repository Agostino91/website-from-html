import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CurvedLabel } from "@/components/curved-label"
import { oliveHarvest } from "@/lib/content/olive-harvest"
import { isLocale } from "@/lib/i18n"

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  if (slug !== "olive-harvest") notFound()
  const c = oliveHarvest[lang]

  return (
    <>
      <SiteNav locale={lang} variant="overlay" />

      <section className="exp-hero">
        <div className="exp-counter">{c.counter}</div>
        <div className="exp-breadcrumb">
          <Link href={`/${lang}/experiences`}>{c.breadcrumbRoot}</Link>
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

      <section>
        <CurvedLabel text={c.curvedLabel} />
      </section>

      <section className="timeline">
        {c.timeline.map((t) => (
          <div className="timeline-item" key={t.time}>
            <div className="timeline-time">{t.time}</div>
            <div className="timeline-body">
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="photo-split">
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[0]}')` }} />
        <div className="photo-split-img" style={{ backgroundImage: `url('${c.photos[1]}')` }} />
      </section>

      <section className="included">
        <div className="included-inner">
          <div>
            <div className="script-eyebrow">{c.includedEyebrow}</div>
            <h2>{c.includedTitle}</h2>
            <ul>
              {c.included.map((item, i) => (
                <li key={i} className={item.not ? "not" : undefined}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="price-box">
              <div className="label">{c.priceLabel}</div>
              <div className="amount">
                {c.priceAmount}
                <small>{c.priceUnit}</small>
              </div>
              <div className="note">{c.priceNote}</div>
            </div>
          </div>
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

      <section className="other-exp">
        <div className="other-exp-header">
          <div className="eyebrow">{c.otherEyebrow}</div>
          <h2>{c.otherTitle}</h2>
        </div>
        <div className="other-exp-grid">
          {c.other.map((o) => (
            <Link href={`/${lang}/experiences`} className="other-card" key={o.name}>
              <div className="other-card-img" style={{ backgroundImage: `url('${o.img}')` }} />
              <div className="other-card-name">{o.name}</div>
              <div className="other-card-meta">{o.meta}</div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter locale={lang} />
    </>
  )
}
