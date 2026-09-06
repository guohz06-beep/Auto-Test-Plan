import { useId } from 'react'

type DressArtProps = {
  type: 'balloon' | 'tea' | 'sun' | 'ruffle' | 'overall' | 'wrap'
  accent: string
  className?: string
}

export function DressArt({ type, accent, className }: DressArtProps) {
  const glowId = useId().replace(/:/g, '')

  return (
    <svg
      className={className}
      viewBox="0 0 200 240"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.32" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.06" />
        </radialGradient>
      </defs>
      <rect width="200" height="240" rx="28" fill={`url(#${glowId})`} />
      <ellipse cx="100" cy="214" rx="46" ry="9" fill="#E88AAF" opacity="0.2" />

      {type === 'balloon' && <BalloonDress accent={accent} />}
      {type === 'tea' && <TeaDress accent={accent} />}
      {type === 'sun' && <SunDress accent={accent} />}
      {type === 'ruffle' && <RuffleDress accent={accent} />}
      {type === 'overall' && <OverallSkirt accent={accent} />}
      {type === 'wrap' && <WrapTop accent={accent} />}
    </svg>
  )
}

function Head() {
  return (
    <g>
      <path
        d="M72 40c6-18 20-24 28-24s22 6 28 24c-8-4-20-6-28-6s-20 2-28 6z"
        fill="#5A3A45"
      />
      <path d="M68 42c5-12 12-16 16-8" stroke="#5A3A45" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M132 42c-5-12-12-16-16-8" stroke="#5A3A45" strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="48" r="20" fill="#FFE0C8" />
      <circle cx="92" cy="46" r="2.4" fill="#5A3A45" />
      <circle cx="108" cy="46" r="2.4" fill="#5A3A45" />
      <circle cx="93.5" cy="44.5" r="0.9" fill="#fff" />
      <circle cx="109.5" cy="44.5" r="0.9" fill="#fff" />
      <ellipse cx="84" cy="54" rx="5" ry="3" fill="#FFB0C8" opacity="0.55" />
      <ellipse cx="116" cy="54" rx="5" ry="3" fill="#FFB0C8" opacity="0.55" />
      <path
        d="M93 56c4 4 10 4 14 0"
        stroke="#E57A9A"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

function Legs() {
  return (
    <g>
      <rect x="88" y="186" width="10" height="24" rx="5" fill="#FFE0C8" />
      <rect x="112" y="186" width="10" height="24" rx="5" fill="#FFE0C8" />
      <ellipse cx="93" cy="214" rx="11" ry="7" fill="#FF5C9A" />
      <ellipse cx="117" cy="214" rx="11" ry="7" fill="#FF5C9A" />
    </g>
  )
}

function BalloonDress({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M84 66h32l8 16H76l8-16z" fill="#FFD6E8" />
      <path
        d="M76 82c12-6 36-6 48 0l22 88c-14 10-34 16-46 16s-32-6-46-16l22-88z"
        fill={accent}
      />
      <path d="M84 96c10 5 22 5 32 0" stroke="#fff" strokeWidth="3.5" fill="none" opacity="0.55" />
      <circle cx="78" cy="130" r="5" fill="#fff" opacity="0.55" />
      <circle cx="128" cy="148" r="4" fill="#fff" opacity="0.45" />
      <Legs />
      <Head />
    </g>
  )
}

function TeaDress({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M86 66h28l6 14H80l6-14z" fill="#FFD6E8" />
      <path d="M80 80h40l8 34H72l8-34z" fill={accent} />
      <path d="M72 114h56l14 70c-12 8-30 12-42 12s-30-4-42-12l14-70z" fill={accent} />
      <circle cx="100" cy="96" r="3.5" fill="#fff" />
      <circle cx="100" cy="112" r="3.5" fill="#fff" />
      <circle cx="100" cy="128" r="3.5" fill="#fff" />
      <path d="M72 84c-10 2-16 10-18 18 8-1 14-8 18-18z" fill="#FFD6E8" />
      <path d="M128 84c10 2 16 10 18 18-8-1-14-8-18-18z" fill="#FFD6E8" />
      <Legs />
      <Head />
    </g>
  )
}

function SunDress({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M88 66h24l4 12H84l4-12z" fill="#FFD6E8" />
      <path d="M78 78c10-4 34-4 44 0l20 100c-12 8-30 12-42 12s-30-4-42-12l20-100z" fill={accent} />
      <path d="M88 98c8 4 16 4 24 0" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="90" cy="120" r="3.5" fill="#fff" opacity="0.7" />
      <circle cx="116" cy="140" r="3" fill="#fff" opacity="0.55" />
      <path d="M68 84c-8 3-14 10-16 18 8-2 14-9 16-18z" fill="#FFE4F0" />
      <path d="M132 84c8 3 14 10 16 18-8-2-14-9-16-18z" fill="#FFE4F0" />
      <Legs />
      <Head />
    </g>
  )
}

function RuffleDress({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M86 66h28l5 12H81l5-12z" fill="#FFD6E8" />
      <path d="M82 78h36l6 22H76l6-22z" fill={accent} />
      <path d="M70 100c12 8 48 8 60 0v34c-12 8-48 8-60 0V100z" fill="#FF9EC4" />
      <path d="M64 134c14 10 58 10 72 0v40c-14 10-58 10-72 0v-40z" fill={accent} />
      <path d="M94 72c2-10 14-12 16 0" stroke="#FF5C9A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="110" cy="68" r="5" fill="#FF5C9A" />
      <Legs />
      <Head />
    </g>
  )
}

function OverallSkirt({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M86 66h28v16H86z" fill="#FFD6E8" />
      <rect x="86" y="80" width="28" height="30" rx="4" fill={accent} />
      <path d="M74 110h52l18 70c-12 8-30 12-44 12s-32-4-44-12l18-70z" fill="#FF7AAD" />
      <rect x="92" y="88" width="16" height="10" rx="3" fill="#fff" opacity="0.7" />
      <path d="M86 80c-8 12-10 22-8 30" stroke={accent} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M114 80c8 12 10 22 8 30" stroke={accent} strokeWidth="7" fill="none" strokeLinecap="round" />
      <Legs />
      <Head />
    </g>
  )
}

function WrapTop({ accent }: { accent: string }) {
  return (
    <g>
      <path d="M86 66h28l4 12H82l4-12z" fill="#FFD6E8" />
      <path d="M76 78c12-4 36-4 48 0l12 58c-10 8-28 12-36 12s-26-4-36-12l12-58z" fill={accent} />
      <path d="M100 80c-8 16-18 32-24 46 12 4 20 6 24 6s12-2 24-6c-6-14-16-30-24-46z" fill="#FFD6E8" opacity="0.55" />
      <path d="M68 84c-10 4-16 14-18 24 10-2 16-12 18-24z" fill="#FFE4F0" />
      <path d="M132 84c10 4 16 14 18 24-10-2-16-12-18-24z" fill="#FFE4F0" />
      <path d="M78 148c8 4 36 4 44 0l8 36c-10 6-26 10-30 10s-20-4-30-10l8-36z" fill="#FF7AAD" />
      <Legs />
      <Head />
    </g>
  )
}

export function HeroDress() {
  return (
    <svg className="hero-art" viewBox="0 0 520 560" role="img" aria-label="Cartoon girl in a Petalpuff dress">
      <defs>
        <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4F0" />
          <stop offset="50%" stopColor="#FFB4D0" />
          <stop offset="100%" stopColor="#FF8FB8" />
        </linearGradient>
        <linearGradient id="hero-dress" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FF9EC4" />
          <stop offset="100%" stopColor="#FF4F8E" />
        </linearGradient>
      </defs>

      <ellipse cx="260" cy="300" rx="210" ry="220" fill="url(#hero-bg)" opacity="0.9" />
      <circle cx="120" cy="120" r="18" fill="#fff" opacity="0.55" className="float-dot" />
      <circle cx="400" cy="150" r="12" fill="#fff" opacity="0.45" className="float-dot delay" />
      <circle cx="430" cy="380" r="16" fill="#fff" opacity="0.35" className="float-dot delay-2" />

      <g className="hero-figure">
        <path d="M218 170c16 28 88 28 104 0l18 42H200l18-42z" fill="#FFD6E8" />
        <path
          d="M196 210c20-10 88-10 108 0l40 180c-24 18-66 28-94 28s-70-10-94-28l40-180z"
          fill="url(#hero-dress)"
        />
        <path d="M214 236c18 12 74 12 92 0" stroke="#fff" strokeWidth="8" fill="none" opacity="0.5" />
        <circle cx="190" cy="300" r="10" fill="#fff" opacity="0.5" />
        <circle cx="330" cy="340" r="8" fill="#fff" opacity="0.4" />
        <path d="M160 230c-24 8-40 28-44 48 24-6 40-24 44-48z" fill="#FFE4F0" />
        <path d="M360 230c24 8 40 28 44 48-24-6-40-24-44-48z" fill="#FFE4F0" />
        <rect x="232" y="420" width="18" height="40" rx="9" fill="#FFE0C8" />
        <rect x="270" y="420" width="18" height="40" rx="9" fill="#FFE0C8" />
        <ellipse cx="241" cy="464" rx="16" ry="11" fill="#FF4F8E" />
        <ellipse cx="279" cy="464" rx="16" ry="11" fill="#FF4F8E" />

        <path d="M196 112c16-40 72-40 88 0-18-10-52-12-88 0z" fill="#5A3A45" />
        <path d="M186 118c10-22 24-28 32-14" stroke="#5A3A45" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M334 118c-10-22-24-28-32-14" stroke="#5A3A45" strokeWidth="14" fill="none" strokeLinecap="round" />
        <circle cx="260" cy="128" r="48" fill="#FFE0C8" />
        <circle cx="242" cy="122" r="5.5" fill="#5A3A45" />
        <circle cx="278" cy="122" r="5.5" fill="#5A3A45" />
        <circle cx="244" cy="120" r="1.6" fill="#fff" />
        <circle cx="280" cy="120" r="1.6" fill="#fff" />
        <ellipse cx="226" cy="136" rx="9" ry="5" fill="#FFB0C8" opacity="0.55" />
        <ellipse cx="294" cy="136" rx="9" ry="5" fill="#FFB0C8" opacity="0.55" />
        <path d="M244 146c8 8 24 8 32 0" stroke="#E57A9A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M236 160c6-20 36-24 42 0" stroke="#FF4F8E" strokeWidth="10" fill="none" strokeLinecap="round" />
        <circle cx="286" cy="150" r="12" fill="#FF4F8E" />
      </g>
    </svg>
  )
}
