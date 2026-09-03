import { Code2, Cloud, Brain, Layers, ShieldCheck, Gauge } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom web, mobile, and backend engineering from MVP to scale — built by senior teams.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Cloud architecture, CI/CD pipelines, and infrastructure that scales without surprises.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Practical AI integrations, predictive models, and intelligent automation for your stack.',
  },
  {
    icon: Layers,
    title: 'Product Design',
    desc: 'UX research, interface design, and design systems that make products feel effortless.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    desc: 'Penetration testing and hardening reviews to keep your product and users protected.',
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    desc: 'Profiling, optimization, and monitoring so your product stays fast under real load.',
  },
];

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Services That Move You Forward
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            End-to-end engineering, design, and AI services to build, ship, and scale your product.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group lift-card relative overflow-hidden rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-7 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tevexxo-orange/10 text-tevexxo-orange transition-all duration-500 group-hover:bg-tevexxo-orange group-hover:text-black group-hover:neon-orange">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
                <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-tevexxo-orange to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
