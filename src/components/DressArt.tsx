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
        <radialGradient id={glowId} cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width="200" height="240" rx="28" fill={`url(#${glowId})`} />
      <ellipse cx="100" cy="208" rx="48" ry="10" fill="#E88AAF" opacity="0.22" />

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
    <>
      <circle cx="100" cy="42" r="18" fill="#FFE0C8" />
      <circle cx="93" cy="40" r="2.2" fill="#5A3A45" />
      <circle cx="107" cy="40" r="2.2" fill="#5A3A45" />
      <path
        d="M94 48c3.5 3 8.5 3 12 0"
        stroke="#E57A9A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M78 34c8-14 36-14 44 0-10-4-34-4-44 0z"
        fill="#5A3A45"
      />
      <path d="M72 38c4-8 10-10 12-6" stroke="#5A3A45" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M128 38c-4-8-10-10-12-6" stroke="#5A3A45" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  )
}

function BalloonDress({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M86 58c4 8 24 8 28 0l6 18H80l6-18z" fill="#FFD6E8" />
      <path
        d="M74 78c-8 4-18 16-22 42 18 8 42 12 48 12s30-4 48-12c-4-26-14-38-22-42-8 10-26 12-52 0z"
        fill={accent}
      />
      <path
        d="M78 78c8 8 36 8 44 0"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
        opacity="0.55"
      />
      <circle cx="70" cy="118" r="5" fill="#fff" opacity="0.55" />
      <circle cx="130" cy="132" r="4" fill="#fff" opacity="0.45" />
      <path d="M86 190c2 8 8 14 14 14s12-6 14-14" stroke="#FF9EC4" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M114 190c2 8 8 14 14 14s12-6 14-14" stroke="#FF9EC4" strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  )
}

function TeaDress({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M88 58c3 7 21 7 24 0l4 16H84l4-16z" fill="#FFD6E8" />
      <path d="M84 74h32l8 36H76l8-36z" fill={accent} />
      <path
        d="M76 110c-10 18-14 40-8 62 18 4 46 6 64 0 6-22 2-44-8-62H76z"
        fill={accent}
      />
      <circle cx="100" cy="92" r="4" fill="#fff" />
      <circle cx="100" cy="108" r="4" fill="#fff" />
      <circle cx="100" cy="124" r="4" fill="#fff" />
      <path d="M68 74c-8 2-14 8-16 16 8-2 14-8 16-16z" fill="#FFD6E8" />
      <path d="M132 74c8 2 14 8 16 16-8-2-14-8-16-16z" fill="#FFD6E8" />
    </g>
  )
}

function SunDress({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M90 58c2 6 18 6 20 0l3 12H87l3-12z" fill="#FFD6E8" />
      <path d="M78 70c8-4 36-4 44 0l18 96c-14 8-34 12-40 12s-26-4-40-12l18-96z" fill={accent} />
      <path d="M86 86c8 4 20 4 28 0" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="92" cy="110" r="3.5" fill="#fff" opacity="0.7" />
      <circle cx="112" cy="128" r="3" fill="#fff" opacity="0.55" />
      <circle cx="98" cy="146" r="2.5" fill="#fff" opacity="0.5" />
      <path d="M64 72c10 2 16 8 18 14-8-2-14-8-18-14z" fill="#FFE4F0" />
      <path d="M136 72c-10 2-16 8-18 14 8-2 14-8 18-14z" fill="#FFE4F0" />
    </g>
  )
}

function RuffleDress({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M88 58c3 7 21 7 24 0l5 14H83l5-14z" fill="#FFD6E8" />
      <path d="M86 72h28l6 24H80l6-24z" fill={accent} />
      <path
        d="M72 96c8 8 48 8 56 0 4 14 2 28-4 40-8 6-40 6-48 0-6-12-8-26-4-40z"
        fill="#FF9EC4"
      />
      <path
        d="M68 136c10 10 54 10 64 0 4 16 0 32-8 44-12 6-36 6-48 0-8-12-12-28-8-44z"
        fill={accent}
      />
      <path d="M92 72c2-8 14-10 16 0" stroke="#FF5C9A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="108" cy="68" r="5" fill="#FF5C9A" />
    </g>
  )
}

function OverallSkirt({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M86 58c4 8 24 8 28 0v18H86V58z" fill="#FFD6E8" />
      <rect x="86" y="74" width="28" height="34" rx="4" fill={accent} />
      <path d="M78 108h44l16 62c-12 8-32 12-38 12s-26-4-38-12l16-62z" fill="#FF7AAD" />
      <rect x="92" y="82" width="16" height="10" rx="3" fill="#fff" opacity="0.65" />
      <path d="M86 74c-8 10-10 20-8 28" stroke={accent} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M114 74c8 10 10 20 8 28" stroke={accent} strokeWidth="7" fill="none" strokeLinecap="round" />
    </g>
  )
}

function WrapTop({ accent }: { accent: string }) {
  return (
    <g>
      <Head />
      <path d="M88 58c3 7 21 7 24 0l4 14H84l4-14z" fill="#FFD6E8" />
      <path d="M78 72c10-4 34-4 44 0l10 54c-10 6-28 10-32 10s-22-4-32-10l10-54z" fill={accent} />
      <path d="M100 74c-8 18-18 34-24 46 12 4 20 6 24 6s12-2 24-6c-6-12-16-28-24-46z" fill="#FFD6E8" opacity="0.55" />
      <path d="M68 78c-10 4-16 14-18 24 10-2 16-10 18-24z" fill="#FFE4F0" />
      <path d="M132 78c10 4 16 14 18 24-10-2-16-10-18-24z" fill="#FFE4F0" />
      <path d="M84 170c4 10 12 16 16 16s12-6 16-16" stroke="#FF9EC4" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M116 170c4 10 12 16 16 16s12-6 16-16" stroke="#FF9EC4" strokeWidth="10" fill="none" strokeLinecap="round" />
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
        <circle cx="260" cy="118" r="46" fill="#FFE0C8" />
        <circle cx="244" cy="112" r="5" fill="#5A3A45" />
        <circle cx="276" cy="112" r="5" fill="#5A3A45" />
        <circle cx="246" cy="110" r="1.5" fill="#fff" />
        <circle cx="278" cy="110" r="1.5" fill="#fff" />
        <path d="M246 132c8 8 20 8 28 0" stroke="#E57A9A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="232" cy="122" rx="8" ry="4" fill="#FFB0C8" opacity="0.55" />
        <ellipse cx="288" cy="122" rx="8" ry="4" fill="#FFB0C8" opacity="0.55" />
        <path d="M210 100c20-36 80-36 100 0-24-10-76-10-100 0z" fill="#5A3A45" />
        <path d="M196 108c8-18 22-24 28-14" stroke="#5A3A45" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M324 108c-8-18-22-24-28-14" stroke="#5A3A45" strokeWidth="12" fill="none" strokeLinecap="round" />

        <path d="M230 158c8 16 52 16 60 0l12 36H218l12-36z" fill="#FFD6E8" />
        <path
          d="M200 196c-18 10-42 42-48 102 42 20 96 30 108 30s66-10 108-30c-6-60-30-92-48-102-18 22-64 28-120 0z"
          fill="url(#hero-dress)"
        />
        <path d="M214 196c18 18 74 18 92 0" stroke="#fff" strokeWidth="8" fill="none" opacity="0.5" />
        <circle cx="190" cy="280" r="10" fill="#fff" opacity="0.5" />
        <circle cx="330" cy="310" r="8" fill="#fff" opacity="0.4" />
        <path d="M236 148c4-18 28-24 34 0" stroke="#FF4F8E" strokeWidth="10" fill="none" strokeLinecap="round" />
        <circle cx="278" cy="140" r="11" fill="#FF4F8E" />
        <path d="M160 210c-24 8-40 28-44 48 24-6 40-24 44-48z" fill="#FFE4F0" />
        <path d="M360 210c24 8 40 28 44 48-24-6-40-24-44-48z" fill="#FFE4F0" />
        <path d="M226 430c6 22 20 34 34 34s28-12 34-34" stroke="#FF8FB8" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M294 430c6 22 20 34 34 34s28-12 34-34" stroke="#FF8FB8" strokeWidth="18" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}
