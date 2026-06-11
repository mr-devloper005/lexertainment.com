'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#214c38', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-5xl">Do not miss out on fresh finds.<br />Sign up and explore more.</h2>
        <form action="/search" className="mx-auto mt-9 flex max-w-3xl flex-col gap-4 sm:flex-row">
          <input name="q" type="search" placeholder="Enter your keyword" className="min-h-14 min-w-0 flex-1 rounded-full border border-white/15 bg-white px-6 text-sm font-semibold text-[#214c38] outline-none placeholder:text-[#8b8c82]" />
          <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#f6595b] px-8 text-sm font-black uppercase text-white">Subscribe <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr_1fr] lg:px-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-3xl font-black tracking-[-0.06em]">
              <span>{SITE_CONFIG.name}</span>
              <span className="mb-5 h-2 w-2 rounded-full bg-[#f6595b]" />
            </Link>
            <p className="mt-7 max-w-xs text-base leading-8 text-white/60">Curated images, stories, and useful resources arranged for relaxed browsing.</p>

          </div>

          <div>
            

          </div>


          <div>
            <h3 className="text-sm font-black uppercase">About us</h3>
            <div className="mt-4 grid gap-2">
              {['About', 'Contact'].map((label) => <Link key={label} href={label === 'About' ? '/about' : label === 'Contact' ? '/contact' : '/search'} className="text-base leading-8 text-white/62 hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase">Service</h3>
            <div className="mt-4 grid gap-2">
              {taskLinks.slice(0, 5).map((task) => (
                <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-base leading-8 text-white/62 hover:text-white">
                  {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
              {session ? <button type="button" onClick={logout} className="text-left text-base leading-8 text-white/62 hover:text-white">Logout</button> : null}
            </div>
          </div>

          

          
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/50">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
