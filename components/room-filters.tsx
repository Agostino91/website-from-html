"use client"

import { useState } from "react"

function Group({ label, options }: { label: string; options: string[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="filter-group">
      <span className="filter-label">{label}</span>
      <div className="filter-pills">
        {options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            className={`filter-pill${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export function RoomFilters({
  guestsLabel,
  priceLabel,
  any,
}: {
  guestsLabel: string
  priceLabel: string
  any: string
}) {
  return (
    <section className="filters">
      <Group label={guestsLabel} options={[any, "2", "3", "4+"]} />
      <Group label={priceLabel} options={[any, "< €250", "€250–€350", "€350+"]} />
    </section>
  )
}
