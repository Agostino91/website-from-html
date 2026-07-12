import Link from "next/link"

/** The recurring "Discover →" style link with a rotated diamond marker. */
export function Scopri({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link href={href} className={`scopri${className ? ` ${className}` : ""}`}>
      {children}
      <span className="diamond" />
    </Link>
  )
}
