export function CurvedLabel({ text }: { text: string }) {
  const arcId = `arc-${text.replace(/[^a-zA-Z0-9]/g, "")}`
  return (
    <div className="curved-label">
      <svg viewBox="0 0 600 72" width="460" height="55" aria-hidden="true">
        <defs>
          <path id={arcId} d="M 70 64 A 1000 1000 0 0 1 530 64" fill="none" />
        </defs>
        <text className="curved-label-text">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
