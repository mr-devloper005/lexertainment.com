import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f6efe4',
  '--slot4-page-text': '#214c38',
  '--slot4-panel-bg': '#fffaf1',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#6f746b',
  '--slot4-soft-muted-text': '#8b8c82',
  '--slot4-accent': '#f6595b',
  '--slot4-accent-fill': '#f6595b',
  '--slot4-accent-soft': '#f6d2c2',
  '--slot4-dark-bg': '#214c38',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#f1ebe4',
  '--slot4-cream': '#fffaf1',
  '--slot4-warm': '#f6efe4',
  '--slot4-lavender': '#e6d8c7',
  '--slot4-gray': '#f9f5ed',
  '--slot4-body-gradient': 'linear-gradient(180deg, #214c38 0 18rem, #f6efe4 18rem 100%)',
  '--editable-page-bg': '#f6efe4',
  '--editable-page-text': '#214c38',
  '--editable-border': '#d8d0c4',
  '--editable-container': '1280px',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/[0.06]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]',
  shadowStrong: 'shadow-[0_18px_70px_rgba(0,0,0,0.14)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-xs font-black uppercase tracking-[0.18em]',
    heroTitle: 'text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-[8.25rem]',
    sectionTitle: 'text-3xl font-black tracking-normal sm:text-5xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-[1.15rem] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[1.15rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-[1.15rem] ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full ${editablePalette.accentBg} px-8 py-3.5 text-sm font-black uppercase tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(246,89,91,0.28)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border ${editablePalette.border} ${editablePalette.surfaceBg} px-8 py-3.5 text-sm font-black uppercase tracking-[0.04em] ${editablePalette.surfaceText} transition hover:bg-black/[0.03]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full ${editablePalette.darkBg} px-8 py-3.5 text-sm font-black uppercase tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(33,76,56,0.24)]`,
  },
  media: {
    frame: `relative overflow-hidden rounded-xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
