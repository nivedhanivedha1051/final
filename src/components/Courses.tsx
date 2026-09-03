import { Clock, Users, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const COURSES = [
  {
    level: 'Beginner',
    title: 'Full-Stack Web Fundamentals',
    desc: 'Master HTML, CSS, JavaScript, React, and backend basics — build and deploy your first app.',
    duration: '8 weeks',
    students: '1.2K enrolled',
    gradient: 'from-tevexxo-orange/25 to-transparent',
  },
  {
    level: 'Intermediate',
    title: 'Applied Machine Learning',
    desc: 'Go from theory to deployment with real datasets, model training, and production serving.',
    duration: '10 weeks',
    students: '840 enrolled',
    gradient: 'from-tevexxo-orange-deep/25 to-transparent',
  },
  {
    level: 'Advanced',
    title: 'Cloud Architecture & DevOps',
    desc: 'Design resilient cloud systems, automate deployments, and master observability at scale.',
    duration: '12 weeks',
    students: '560 enrolled',
    gradient: 'from-tevexxo-orange-bright/25 to-transparent',
  },
];

export default function Courses() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="courses" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            Learn With Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Featured Courses
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Hands-on, project-based courses designed to take you from fundamentals to fluency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <article
              key={c.title}
              className={`reveal reveal-delay-${i + 1} group lift-card relative overflow-hidden rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
            >
              <div className={`relative h-40 bg-gradient-to-br ${c.gradient} p-6`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,106,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,106,0,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <span className="relative rounded-md bg-tevexxo-orange/15 px-2.5 py-1 text-xs font-medium text-tevexxo-orange neon-orange-border">
                  {c.level}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.desc}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-tevexxo-orange" /> {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} className="text-tevexxo-orange" /> {c.students}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-12 flex justify-center">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-xl border border-tevexxo-orange/40 px-7 py-3 text-sm font-semibold text-neutral-200 transition-all hover:bg-tevexxo-orange hover:text-black hover:neon-orange"
          >
            View All
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

    </section>
  );
}
