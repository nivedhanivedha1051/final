import { Award, Rocket, HeartHandshake, Target } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const REASONS = [
  {
    icon: Award,
    title: 'Industry-Grade Curriculum',
    desc: 'Every course and project is designed with input from engineers working at top companies.',
  },
  {
    icon: Rocket,
    title: 'Project-First Learning',
    desc: 'You build real, portfolio-ready products — not just watch slides. Skills stick when you ship.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentor Support',
    desc: 'Live mentorship and a responsive community so you never get stuck for long.',
  },
  {
    icon: Target,
    title: 'Outcome Focused',
    desc: 'We measure success by what you can build and the roles you land — not by certificates.',
  },
];

export default function WhyTevexxo() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="why-tevexxo" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            The Tevexxo Difference
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Choose Tevexxo
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            We obsess over outcomes, quality, and the experience of every learner and partner.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`reveal reveal-delay-${(i % 4) + 1} group lift-card rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-7 text-center hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-tevexxo-orange/10 text-tevexxo-orange transition-all duration-500 group-hover:bg-tevexxo-orange group-hover:text-black group-hover:neon-orange">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
