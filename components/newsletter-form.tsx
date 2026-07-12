"use client"

import { useState } from "react"

export function NewsletterForm({
  text,
  placeholder,
  button,
  consent,
}: {
  text: string
  placeholder: string
  button: string
  consent: string
}) {
  const [done, setDone] = useState(false)

  return (
    <section className="newsletter">
      <div className="newsletter-row">
        <div className="newsletter-text">{text}</div>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <input type="email" placeholder={placeholder} required aria-label={placeholder} />
          <button type="submit">{done ? "✓" : button}</button>
        </form>
      </div>
      <div className="newsletter-row" style={{ marginTop: "0.8rem" }}>
        <div />
        <div className="newsletter-checkbox">{`\u2610\u00a0\u00a0${consent}`}</div>
      </div>
    </section>
  )
}
