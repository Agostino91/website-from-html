export function PerkIcon({ icon }: { icon: "star" | "cup" | "clock" | "olive" }) {
  switch (icon) {
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="1.3"
          />
        </svg>
      )
    case "cup":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M8 12V7a4 4 0 118 0v5M5 12h14l-1 8H6l-1-8z" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )
    case "olive":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 3v18M5 8l14 8M5 16l14-8" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      )
  }
}
