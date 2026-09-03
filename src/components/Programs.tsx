
import { useReveal } from '@/hooks/useReveal';

const PROGRAMS = [
  {
    name: 'Starter Program',
    duration: '4 weeks',
    desc: 'A focused intro track covering fundamentals, tooling, and your first deployed project.',
    points: ['Foundations bootcamp', '1 guided project', 'Community access'],
  },
  {
    name: 'Builder Program',
    duration: '12 weeks',
    desc: 'Our flagship track — build a portfolio of real products with mentor reviews.',
    points: ['3 portfolio projects', 'Weekly 1:1 mentor reviews', 'Career prep sessions'],
    featured: true,
  },
  {
    name: 'Advanced Program',
    duration: '24 weeks',
    desc: 'Deep specialization in AI, cloud, or full-stack with a capstone and job placement support.',
    points: ['Specialization track', 'Capstone project', 'Job placement support'],
  },
];

export default function Programs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="programs" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            Learning Tracks
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Programs Designed For Growth
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Structured, multi-week programs that combine courses, mentorship, and real projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-delay-${i + 1} group lift-card relative flex flex-col rounded-2xl border p-7 ${
                p.featured
                  ? 'border-tevexxo-orange/60 bg-tevexxo-orange/5 neon-orange-border'
                  : 'border-tevexxo-orange/15 bg-tevexxo-black-soft/80 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-tevexxo-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black neon-orange">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <span className="rounded-md bg-tevexxo-orange/10 px-2 py-0.5 text-xs text-tevexxo-orange">
                  {p.duration}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tevexxo-orange/15 text-[10px] text-tevexxo-orange">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                  p.featured
                    ? 'bg-tevexxo-orange text-black neon-orange hover:scale-105'
                    : 'border border-tevexxo-orange/40 text-neutral-200 hover:bg-tevexxo-orange hover:text-black'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
