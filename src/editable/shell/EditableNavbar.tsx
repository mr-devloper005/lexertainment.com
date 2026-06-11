'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, Menu, PlusCircle, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#214c38',
    '--editable-nav-text': '#ffffff',
    '--editable-nav-active': '#f6595b',
    '--editable-nav-active-text': '#ffffff',
    '--editable-cta-bg': '#f6595b',
    '--editable-cta-text': '#ffffff',
    '--editable-search-bg': 'rgba(255,255,255,0.1)',
    '--editable-border': 'rgba(255,255,255,0.14)',
    '--editable-container': '1280px',
  } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )
  const primaryItems = [{ label: 'Home', href: '/' }, ...navItems.slice(0, 4)]

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/88 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[92px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2 text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">
        
          <span>{SITE_CONFIG.name}</span>
          <span className="mb-5 h-2 w-2 rounded-full bg-[var(--editable-nav-active)] transition group-hover:scale-150" />
        </Link>

        <div className="mx-auto hidden items-center gap-7 lg:flex">
          {primaryItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`inline-flex items-center gap-1 text-sm font-black uppercase transition ${active ? 'text-[var(--editable-nav-active)]' : 'text-white hover:text-[var(--editable-nav-active)]'}`}>
                {item.label}
                <span className="text-xs opacity-70">⌄</span>
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <form action="/search" className="hidden md:block">
            <button aria-label="Search" className="rounded-full p-2 text-white transition hover:bg-white/10"><Search className="h-6 w-6" /></button>
          </form>

          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm xl:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-white/10 xl:inline-flex">Logout</button>
            </>
          ) : (
            <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-white/10 xl:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white/10 p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[...primaryItems, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white/10 px-4 py-3 text-sm font-black text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
