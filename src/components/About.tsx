import { Target, Eye, Users, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal reveal-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
              Who We Are
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              About Tevexxo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Tevexxo is a learning and engineering studio. We build products, ship real projects,
              and teach the next generation of builders how to do the same. Our mission is simple:
              turn curiosity into capability, and capability into careers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              From hands-on courses and structured programs to client engagements and our own
              products, everything we do is rooted in building for real outcomes.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Stat icon={Users} value="5,000+" label="Learners" />
              <Stat icon={Sparkles} value="120+" label="Projects Shipped" />
            </div>
          </div>

          <div className="reveal reveal-right grid gap-5">
            <Card
              icon={Target}
              title="Our Mission"
              desc="To make high-quality, project-based tech education accessible to everyone — and to build products that make teams faster."
            />
            <Card
              icon={Eye}
              title="Our Vision"
              desc="A world where anyone with curiosity can become a builder, and where great products are powered by well-trained people."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Target;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-5">
      <Icon size={20} className="text-tevexxo-orange" />
      <div className="mt-3 font-display text-2xl font-bold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">{label}</div>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Target;
  title: string;
  desc: string;
}) {
  return (
    <div className="lift-card rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-7 hover:border-tevexxo-orange/60 hover:shadow-[0_0_30px_rgba(255,106,0,0.18)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tevexxo-orange/10 text-tevexxo-orange">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{desc}</p>
    </div>
  );
}
