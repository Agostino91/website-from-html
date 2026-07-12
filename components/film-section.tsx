"use client"

import { YOUTUBE_ID } from "@/lib/content/story"

export function FilmSection({ cta }: { cta: string }) {
  return (
    <section className="film">
      <div className="film-frame">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="Lama di Luna"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="film-overlay" />
        <button
          className="film-cta"
          type="button"
          onClick={() => window.open(`https://www.youtube.com/watch?v=${YOUTUBE_ID}`, "_blank", "noopener")}
        >
          <span className="play" />
          <span>{cta}</span>
        </button>
      </div>
    </section>
  )
}
