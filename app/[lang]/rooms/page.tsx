import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RoomFilters } from "@/components/room-filters"
import { rooms, type RoomCard as RoomCardType } from "@/lib/content/rooms"
import { isLocale, type Locale } from "@/lib/i18n"

function RoomCard({ card, c, lang }: { card: RoomCardType; c: ReturnType<typeof getContent>; lang: Locale }) {
  return (
    <Link href={`/${lang}/rooms`} className="room-card rooms-card">
      <div className="room-img-wrap">
        <div className="room-img" style={{ backgroundImage: `url('${card.img}')` }} />
      </div>
      <div className="room-card-name">{card.name}</div>
      <div className="room-card-meta">{card.meta}</div>
      <div className="room-card-footer">
        <div className="room-card-price">
          <small>{c.from}</small>
          {card.price} {c.perNight}
        </div>
        <span className="room-card-link">{c.viewRoom}</span>
      </div>
    </Link>
  )
}

function getContent(lang: Locale) {
  return rooms[lang]
}

export default async function RoomsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = rooms[lang]

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

      <div className="rooms-page">
        <section className="page-header">
          <div className="eyebrow">{c.eyebrow}</div>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </section>

        <RoomFilters guestsLabel={c.guests} priceLabel={c.price} any={c.any} />

        <Link href={`/${lang}/rooms`} className="feature-room" style={{ backgroundImage: `url('${c.feature.img}')` }}>
          <div className="feature-room-content">
            <div className="feature-tag">{c.feature.tag}</div>
            <div className="feature-room-name">{c.feature.name}</div>
            <div className="feature-meta">{c.feature.meta}</div>
            <span className="feature-cta">{c.feature.cta}</span>
          </div>
        </Link>

        <section className="grid-3">
          {c.group1.map((card) => (
            <RoomCard key={card.name} card={card} c={c} lang={lang} />
          ))}
        </section>

        <div className="divider">{c.divider1}</div>

        <section className="grid-2">
          {c.group2.map((card) => (
            <RoomCard key={card.name} card={card} c={c} lang={lang} />
          ))}
        </section>

        <div className="divider">{c.divider2}</div>

        <section className="grid-3">
          {c.group3.map((card) => (
            <RoomCard key={card.name} card={card} c={c} lang={lang} />
          ))}
        </section>

        <div className="divider">{c.divider3}</div>

        <section className="grid-2">
          {c.group4.map((card) => (
            <RoomCard key={card.name} card={card} c={c} lang={lang} />
          ))}
        </section>
      </div>

      <SiteFooter locale={lang} />
    </>
  )
}
