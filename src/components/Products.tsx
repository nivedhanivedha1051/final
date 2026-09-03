import { Cpu, Bot, Boxes, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PRODUCTS = [
  {
    icon: Cpu,
    title: 'Tevexxo Edge Kit',
    tag: 'Hardware',
    desc: 'Compact edge-compute module with pre-flashed ML runtime for rapid prototyping.',
    price: 'From $129',
  },
  {
    icon: Bot,
    title: 'Nova Assistant',
    tag: 'SaaS',
    desc: 'A support copilot that drafts replies, triages tickets, and learns your knowledge base.',
    price: '$29/mo',
  },
  {
    icon: Boxes,
    title: 'Stack Builder',
    tag: 'DevTool',
    desc: 'Scaffold production-ready full-stack apps with one command — auth, DB, and CI included.',
    price: 'Free + Pro',
  },
  {
    icon: Rocket,
    title: 'Launchpad LMS',
    tag: 'Platform',
    desc: 'A learning management system built for cohorts, courses, and live mentor sessions.',
    price: 'Custom',
  },
];

export default function Products() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="products" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            Built By Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Products That Power Teams
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Our own products — ready to use, built on the same tech we build with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`reveal reveal-delay-${(i % 4) + 1} group lift-card relative flex flex-col overflow-hidden rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-6 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tevexxo-orange/10 text-tevexxo-orange transition-all duration-500 group-hover:bg-tevexxo-orange group-hover:text-black group-hover:neon-orange">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-md border border-tevexxo-orange/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-tevexxo-orange">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-tevexxo-orange">{p.price}</span>
                  <span className="text-xs text-neutral-500 transition-colors group-hover:text-neutral-300">
                    Learn more →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
