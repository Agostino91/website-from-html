import { ArchLogo } from "@/components/arch-logo"

export function CurvedLabel({ text }: { text: string }) {
  const arcId = `arc-${text.replace(/[^a-zA-Z0-9]/g, "")}`
  return (
    <div className="curved-label">
      <svg viewBox="0 0 600 160" width="500" height="140" aria-hidden="true">
        <defs>
          <path id={arcId} d="M 60 130 A 240 240 0 0 1 540 130" fill="none" />
        </defs>
        <text className="curved-label-text">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="arch-logo">
        <ArchLogo stroke="#1E3A5F" />
      </span>
    </div>
  )
}
