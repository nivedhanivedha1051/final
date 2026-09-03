import { Sparkles, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="relative z-10 min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient orange glows */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-tevexxo-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-tevexxo-orange-deep/15 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 lg:grid-cols-2 items-center gap-12 px-5 lg:px-8">
        {/* LEFT — spinning graphic with Tevexxo mark inside */}
        <div className="reveal reveal-left order-1 flex justify-center lg:justify-start">
          <SpinningHeroMark />
        </div>

        {/* RIGHT — copy */}
        <div className="order-2 max-w-xl lg:ml-auto text-center lg:text-left">
          <span className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full border border-tevexxo-orange/40 bg-tevexxo-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            <Sparkles size={14} /> Powering Future Innovators
          </span>

          <h1 className="reveal reveal-delay-2 mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl text-white">
            Build. Learn. <span className="text-tevexxo-orange neon-orange-text">Accelerate.</span>
          </h1>

          <p className="reveal reveal-delay-3 mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Tevexxo empowers learners and builders with hands-on courses, real-world projects,
            and next-gen products — all engineered to take you from curious to capable.
          </p>

          <div className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-tevexxo-orange px-6 py-3 text-sm font-semibold text-black neon-orange transition-transform hover:scale-105"
            >
              Explore Courses
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-tevexxo-orange/40 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-tevexxo-orange hover:text-tevexxo-orange"
            >
              Our Services
            </a>
          </div>

          <div className="reveal reveal-delay-5 mt-10 flex items-center justify-center lg:justify-start gap-8 text-center">
            <Stat value="5K+" label="Learners" />
            <div className="h-10 w-px bg-tevexxo-orange/30" />
            <Stat value="120+" label="Projects" />
            <div className="h-10 w-px bg-tevexxo-orange/30" />
            <Stat value="45+" label="Courses" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-neutral-500">{label}</div>
    </div>
  );
}

/** Spinning concentric rings with the Tevexxo "T" mark in the center. */
function SpinningHeroMark() {
  return (
    <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-tevexxo-orange/20 blur-3xl animate-pulse-glow" />

      {/* Outer ring (clockwise) */}
      <div className="absolute inset-0 rounded-full border-2 border-tevexxo-orange/70 neon-orange animate-spin-slow">
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-tevexxo-orange neon-orange" />
        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-tevexxo-orange neon-orange" />
      </div>

      {/* Mid ring (counter-clockwise) */}
      <div className="absolute inset-10 rounded-full border border-dashed border-tevexxo-orange/50 animate-spin-slow-rev">
        <div className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-tevexxo-orange-bright neon-orange" />
      </div>

      {/* Tick ring */}
      <div className="absolute inset-20 rounded-full border border-tevexxo-orange/30 animate-spin-slow" />

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-2xl neon-orange-border bg-tevexxo-black-soft animate-float">
          <span className="font-display text-6xl sm:text-7xl font-extrabold text-tevexxo-orange neon-orange-text">
            T
          </span>
        </div>
      </div>
    </div>
  );
}
