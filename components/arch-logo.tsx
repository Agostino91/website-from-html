export function ArchLogo({
  className,
  stroke = "currentColor",
}: {
  className?: string
  stroke?: string
}) {
  return (
    <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path d="M4 32 V18 A10 10 0 0 1 20 18 V32" stroke={stroke} strokeWidth="1.4" fill="none" />
      <path d="M22 32 V14 A12 12 0 0 1 42 14 V32" stroke={stroke} strokeWidth="1.4" fill="none" />
      <path d="M44 32 V18 A10 10 0 0 1 60 18 V32" stroke={stroke} strokeWidth="1.4" fill="none" />
      <line x1="0" y1="34" x2="64" y2="34" stroke={stroke} strokeWidth="1.4" />
    </svg>
  )
}
