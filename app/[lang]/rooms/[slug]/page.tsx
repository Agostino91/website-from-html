import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { rooms } from "@/lib/content/rooms"
import { isLocale } from "@/lib/i18n"

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const c = rooms[lang]
  const room = c.list.find((r) => r.slug === slug)
  if (!room) notFound()

  return (
    <>
      <SiteNav locale={lang} variant="solid" />

      <article className="room-detail">
        <header className="room-detail-header">
          <Link href={`/${lang}/rooms`} className="room-back">
            {c.backToRooms}
          </Link>
          <div className="room-detail-eyebrow">{room.tagline}</div>
          <h1>{room.name}</h1>

          <div className="room-detail-body">
            <div className="room-detail-copy">
              {room.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="room-detail-aside">
              <div className="room-detail-price">
                <small>{c.from}</small>
                <span>
                  {room.price} {c.perNight}
                </span>
              </div>
              <div className="room-detail-facts">
                <h2>{c.detailsLabel}</h2>
                <ul>
                  {room.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/${lang}/book`} className="room-book-btn">
                {c.bookThisRoom}
              </Link>
            </aside>
          </div>
        </header>

        <section className="room-gallery" aria-label={`${room.name} gallery`}>
          {room.gallery.map((src, i) => (
            <div
              key={i}
              className="room-gallery-tile"
              style={{ backgroundImage: `url('${src}')` }}
              role="img"
              aria-label={`${room.name} — photo ${i + 1}`}
            />
          ))}
        </section>
      </article>

      <SiteFooter locale={lang} />
    </>
  )
}
