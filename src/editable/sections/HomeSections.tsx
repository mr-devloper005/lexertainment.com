import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, Leaf, Search, ShieldCheck, Sparkles, Star } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const soapLabels = ['100% vegan', 'cruelty free', 'natural ingredients', 'non GMO', 'organic']
const tabs = ['All Items', 'Featured', 'Best Seller', 'Top Rated', 'Gift']

function safeTitle(post?: SitePost | null) {
  return post?.title || 'Fresh visual story'
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex text-[#f7bd42]">
      {Array.from({ length: 5 }).map((_, index) => <Star key={index} className={`h-4 w-4 ${index < count ? 'fill-current' : 'text-[#d7d2c8]'}`} />)}
    </span>
  )
}

function ProductCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block text-center">
      <article className="editable-soap-lift relative overflow-hidden rounded-[0.8rem] bg-[#f2ece5] p-5">
        <div className="relative mx-auto aspect-square max-w-[280px]">
          <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="h-full w-full object-contain transition duration-700 group-hover:scale-105" />
        </div>
      </article>
      <h3 className="mx-auto mt-5 line-clamp-2 max-w-xs text-lg font-black leading-tight text-[#214c38]">{safeTitle(post)}</h3>
      <div className="mt-3"><Stars count={(index % 5) + 1} /></div>
    </Link>
  )
}

function PromoCard({ title, label, href, image, tone }: { title: string; label: string; href: string; image: string; tone: string }) {
  return (
    <Link href={href} className={`editable-soap-lift relative min-h-[230px] overflow-hidden rounded-[0.9rem] p-8 ${tone}`}>
      <div className="relative z-10 max-w-[55%]">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-[#214c38]/80">{label}</p>
        <h3 className="mt-3 text-3xl font-black leading-tight text-white">{title}</h3>
        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase text-[#214c38]">Explore <ArrowRight className="h-4 w-4" /></span>
      </div>
      <img src={image} alt="" className="absolute bottom-0 right-[-6%] h-[96%] w-[58%] object-cover mix-blend-multiply transition duration-700 hover:scale-105" />
    </Link>
  )
}

function TestimonialCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="grid min-w-[360px] overflow-hidden rounded-[0.85rem] bg-[#214c38] text-white shadow-[0_24px_60px_rgba(33,76,56,0.18)] sm:grid-cols-[42%_1fr]">
      <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="h-full min-h-[250px] w-full object-cover" />
      <div className="p-7">
        <Stars count={4 + (index % 2)} />
        <h3 className="mt-3 text-lg font-black text-[#f6595b]">{index % 2 ? 'Marvelous!' : 'Good find!'}</h3>
        <p className="mt-4 line-clamp-4 text-sm font-semibold leading-7 text-white/84">"{getEditableExcerpt(post, 150) || 'A polished visual that feels calm, useful, and easy to browse.'}"</p>
        <div className="mt-5 border-t border-white/12 pt-4">
          <p className="text-xs font-black uppercase tracking-[0.12em]">Reader {index + 1}</p>
          <p className="text-sm text-white/55">Visitor</p>
        </div>
      </div>
    </Link>
  )
}

function ArticleRow({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid overflow-hidden rounded-[0.9rem] bg-[#f2ece5] md:grid-cols-[46%_1fr]">
      <div className="relative min-h-[230px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-[#f6595b] px-4 py-2 text-xs font-black uppercase text-white">March {31 - index}, 2026</span>
      </div>
      <div className="p-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b8c82]">Lexertainment - Organic visuals</p>
        <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-tight text-[#214c38]">{safeTitle(post)}</h3>
        <p className="mt-4 line-clamp-3 text-base leading-7 text-[#7a7c72]">{getEditableExcerpt(post, 150) || 'Browse this visual note and continue through related content.'}</p>
        <span className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase text-white ${index % 2 ? 'bg-[#f6595b]' : 'bg-[#214c38]'}`}>Read more <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

function SectionTitle({ eyebrow, children, light = false }: { eyebrow: string; children: ReactNode; light?: boolean }) {
  return (
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f6595b]">{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black leading-tight sm:text-5xl ${light ? 'text-white' : 'text-[#214c38]'}`}>{children}</h2>
    </div>
  )
}

export function EditableHomeHero({ posts }: HomeSectionProps) {
  const hero = posts[0]
  const second = posts[1] || hero
  return (
    <section className="relative -mt-[92px] min-h-[760px] overflow-hidden bg-[#214c38] pt-[92px] text-white">
      <div className="absolute inset-0 opacity-100">
        <img src={hero ? getEditablePostImage(hero) : '/placeholder.svg?height=1200&width=1800'} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#214c38]/78" />
      
      <div className="relative mx-auto grid min-h-[660px] max-w-[var(--editable-container)] items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-6xl justify-center">
          <h1 className="relative z-20 text-center text-[4.5rem] font-black leading-[0.9] tracking-normal sm:text-[8rem] lg:text-[11rem]">
            <span className="block text-white">Organic</span>
            <span className="block text-white/95">Image Stories</span>
          </h1>

          
        </div>
        <div className="absolute bottom-10 left-5 hidden max-w-sm rounded-md bg-white p-4 text-[#214c38] shadow-2xl lg:block">
          <div className="flex gap-4">
            {hero ? <img src={getEditablePostImage(hero)} alt="" className="h-16 w-16 rounded-md object-cover" /> : null}
            <div>
              <p className="text-sm text-[#8b8c82]">Someone just explored</p>
              <p className="line-clamp-1 text-sm font-black">{safeTitle(hero)}</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 rounded-t-[4rem] bg-[#fffaf1]" />
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className="editable-soap-band bg-[#fffaf1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[420px]">
          {railPosts.slice(0, 2).map((post, index) => (
            <img key={post.id || post.slug} src={getEditablePostImage(post)} alt={safeTitle(post)} className={`editable-soap-lift absolute rounded-[0.9rem] object-cover shadow-[0_24px_70px_rgba(33,76,56,0.16)] ${index ? 'right-8 top-10 h-72 w-64 rotate-[-8deg]' : 'left-8 top-0 h-72 w-72 rotate-[8deg]'}`} />
          ))}
        </div>
        <div>
          <p className={dc.type.eyebrow + ' text-[#f6595b]'}>Commitment and values</p>
          <h2 className="mt-5 max-w-2xl text-5xl font-black leading-tight text-[#214c38]">Handcrafted with certified organic ingredients</h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#70766c]">Explore a calmer range of image-led posts, practical notes, and visual discoveries. The layout keeps the original content flowing while giving every page a more tactile, premium rhythm.</p>
          <Link href={primaryRoute} className={dc.button.primary + ' mt-8'}>Discover now <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-8 text-center sm:grid-cols-5">
        {soapLabels.map((label, index) => {
          const Icon = [Leaf, Heart, Sparkles, ShieldCheck, CheckCircle2][index]
          return <div key={label} className="text-[#214c38]"><Icon className="mx-auto h-14 w-14 stroke-[1.35]" /><p className="mt-4 text-sm font-black uppercase">{label}</p></div>
        })}
      </div>
      <div className="mx-auto mt-24 grid max-w-7xl gap-6 lg:grid-cols-3">
        {railPosts.slice(0, 3).map((post, index) => <PromoCard key={post.id || post.slug} title={index === 1 ? 'Curated Finds' : index === 2 ? 'Visual Notes' : 'Fresh Stories'} label={index === 1 ? 'Editor picks' : index === 2 ? 'Trending reads' : 'New discoveries'} href={postHref(primaryTask, post, primaryRoute)} image={getEditablePostImage(post)} tone={index === 0 ? 'bg-[#5c9270]' : index === 1 ? 'bg-[#efc8a9]' : 'bg-[#e5a8aa]'} />)}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 8)
  if (!featured.length) return null
  return (
    <section className="editable-soap-band bg-[#fffaf1] px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Our stories">Browse Organic<br />Image Stories</SectionTitle>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {tabs.map((tab, index) => <Link key={tab} href={primaryRoute} className={`rounded-full px-7 py-3 text-sm font-black ${index ? 'border border-[#ded6ca] text-[#8b8c82]' : 'bg-[#f6595b] text-white'}`}>{tab}</Link>)}
      </div>
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.slice(0, 4).map((post, index) => <ProductCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
      </div>
      <div className="mx-auto mt-24 max-w-[var(--editable-container)] overflow-hidden">
        <SectionTitle eyebrow="Testimonials">What Our Customers<br />Are Saying</SectionTitle>
        <div className="mt-12 overflow-hidden">
          <div className="editable-auto-track flex w-max gap-8">
            {[...featured.slice(0, 6), ...featured.slice(0, 6)].map((post, index) => <TestimonialCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const source = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts
  const products = source.slice(0, 12)
  if (!products.length) return null
  return (
    <>
      <section className="editable-soap-band bg-[#fffaf1] px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our collection">New Collection Of<br />Organic Stories</SectionTitle>
        <div className="mx-auto mt-14 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((post, index) => <ProductCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 4} />)}
        </div>
        <div className="mx-auto mt-20 grid max-w-7xl gap-8 lg:grid-cols-2">
          {products.slice(4, 6).map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className={`editable-soap-lift relative min-h-[300px] overflow-hidden rounded-[0.9rem] p-8 text-white ${index ? 'bg-[#a9c0c9]' : 'bg-[#d5a077]'}`}>
              <h3 className="relative z-10 max-w-sm text-3xl font-black">{index ? 'Fresh Visual Essay' : 'Featured Story Collection'}</h3>
              <p className="relative z-10 mt-3 text-lg font-semibold">{index ? 'Open a calm, image-led read.' : 'Follow the latest editorial picks.'}</p>
              <span className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-[#214c38] px-6 py-3 text-xs font-black uppercase">Explore <ArrowRight className="h-4 w-4" /></span>
              <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="absolute bottom-0 right-0 h-full w-[58%] object-cover mix-blend-multiply" />
            </Link>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#214c38] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img src={getEditablePostImage(products[0])} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[var(--editable-container)]">
          <SectionTitle eyebrow="Our collections" light>Browse Our Organic<br />Soap Collections</SectionTitle>
          <div className="mt-14 overflow-hidden">
            <div className="editable-auto-track flex w-max gap-8">
              {[...products.slice(0, 7), ...products.slice(0, 7)].map((post, index) => (
                <Link key={`${post.id || post.slug}-${index}`} href={postHref(primaryTask, post, primaryRoute)} className="block w-[260px] shrink-0 overflow-hidden rounded-[0.9rem] bg-[#f6efe4] p-5 text-center text-[#214c38]">
                  <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="aspect-square w-full object-contain" />
                  <h3 className="mt-4 line-clamp-2 text-lg font-black">{safeTitle(post)}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="editable-soap-band bg-[#fffaf1] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className={dc.type.eyebrow + ' text-[#f6595b]'}>Our news</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-[#214c38]">Read Our Articles<br />And News</h2>
            <p className="mt-7 max-w-md text-lg leading-9 text-[#70766c]">Find recent posts, visual notes, and useful updates from across the site.</p>
            <form action="/search" className="mt-8 flex max-w-md rounded-full border border-[#ded6ca] bg-white p-2">
              <input name="q" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
              <button className="rounded-full bg-[#214c38] p-3 text-white" aria-label="Search"><Search className="h-4 w-4" /></button>
            </form>
          </div>
          <div className="grid gap-7">
            {products.slice(6, 9).map((post, index) => <ArticleRow key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#f6efe4] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3">
        {[
          ['Polished Cards', 'A calm browsing surface with image-led previews.'],
          ['Easy Discovery', 'Move between content sections without friction.'],
          ['Readable Flow', 'Comfortable layouts for images, notes, and resources.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[0.9rem] p-6 text-[#214c38]">
            <Sparkles className="mx-auto h-12 w-12 text-[#f6595b]" />
            <h3 className="mt-4 text-xl font-black">{title}</h3>
            <p className="mt-3 text-base leading-7 text-[#70766c]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
