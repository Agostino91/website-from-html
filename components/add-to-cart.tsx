"use client"

import { useState } from "react"

export function AddToCart({ label, addedLabel }: { label: string; addedLabel: string }) {
  const [added, setAdded] = useState(false)

  return (
    <button
      type="button"
      className="shop-card-add"
      onClick={() => {
        setAdded(true)
        window.setTimeout(() => setAdded(false), 1600)
      }}
      aria-live="polite"
    >
      {added ? addedLabel : label} +
    </button>
  )
}
