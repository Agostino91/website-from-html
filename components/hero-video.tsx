"use client"

import { useState } from "react"

type HeroVideoProps = {
  videoId: string
  poster: string
  label: string
}

export function HeroVideo({ videoId, poster, label }: HeroVideoProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="hero-video">
      {playing ? (
        <iframe
          className="hero-video-frame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="hero-video-poster"
          style={{ backgroundImage: `url('${poster}')` }}
          onClick={() => setPlaying(true)}
          aria-label={label}
        >
          <span className="hero-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="hero-video-label">{label}</span>
        </button>
      )}
    </div>
  )
}
