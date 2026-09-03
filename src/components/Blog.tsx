import { CalendarDays, ArrowUpRight, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const POSTS = [
  {
    title: 'How We Built a Real-Time Analytics Pipeline in 4 Weeks',
    category: 'Engineering',
    date: 'Aug 24, 2026',
    excerpt: 'A behind-the-scenes look at the architecture and trade-offs behind our latest data platform.',
  },
  {
    title: '5 Machine Learning Mistakes That Tank Production Models',
    category: 'AI / ML',
    date: 'Aug 12, 2026',
    excerpt: 'Common pitfalls when moving from notebooks to production — and how to avoid them early.',
  },
  {
    title: 'From Beginner to Hired: A Full-Stack Roadmap That Works',
    category: 'Career',
    date: 'Jul 30, 2026',
    excerpt: 'The exact path our top learners follow to land their first developer role within months.',
  },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Blog() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="blog" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            From Our Blog
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Latest Articles & Insights
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Engineering deep-dives, career guides, and lessons from building products at Tevexxo.
          </p>

          {/* Social media icons */}
          <div className="mt-7 flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-tevexxo-orange/30 text-tevexxo-orange transition-all duration-300 hover:bg-tevexxo-orange hover:text-black hover:neon-orange hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} group lift-card relative overflow-hidden rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-tevexxo-orange/20 via-tevexxo-black-soft to-transparent">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,106,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,106,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px] transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-5 top-5 rounded-md bg-tevexxo-orange/15 px-2.5 py-1 text-xs font-medium text-tevexxo-orange neon-orange-border">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <CalendarDays size={13} className="text-tevexxo-orange" />
                  {p.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-tevexxo-orange transition-colors hover:text-tevexxo-orange-bright"
                >
                  Read More
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
