import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PROJECTS = [
  {
    title: 'Nebula Analytics',
    category: 'Data Platform',
    desc: 'Real-time analytics dashboard processing 2M+ events/day with predictive insights.',
    tags: ['React', 'Python', 'Kafka'],
  },
  {
    title: 'OrbitCommerce',
    category: 'E-Commerce',
    desc: 'Headless storefront with sub-second checkout and AI-driven product recommendations.',
    tags: ['Next.js', 'Stripe', 'AI'],
  },
  {
    title: 'Pulse Health',
    category: 'Healthcare',
    desc: 'Remote patient monitoring app with wearable sync and clinician alerts.',
    tags: ['React Native', 'BLE', 'AWS'],
  },
  {
    title: 'Forge IoT',
    category: 'IoT / Edge',
    desc: 'Fleet management for 10k+ devices with edge inference and OTA updates.',
    tags: ['Rust', 'MQTT', 'Edge AI'],
  },
  {
    title: 'Lumen Edu',
    category: 'EdTech',
    desc: 'Adaptive learning platform with mastery-based progression and live mentoring.',
    tags: ['React', 'Supabase', 'WebRTC'],
  },
  {
    title: 'Vault Pay',
    category: 'Fintech',
    desc: 'Compliant payments rails with multi-currency settlement and fraud scoring.',
    tags: ['Go', 'Postgres', 'Kubernetes'],
  },
];

export default function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            Our Work
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Projects We're Proud Of
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            A selection of products and platforms our team has designed, built, and shipped.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group lift-card relative overflow-hidden rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-6 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]`}
            >
              <div className="flex items-start justify-between">
                <span className="rounded-md bg-tevexxo-orange/10 px-2.5 py-1 text-xs font-medium text-tevexxo-orange">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-neutral-600 transition-colors group-hover:text-tevexxo-orange"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-[11px] text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
