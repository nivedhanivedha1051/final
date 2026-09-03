import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tevexxo-orange">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Have a question, a project, or want to partner? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="reveal reveal-left lg:col-span-2 space-y-5">
            <InfoRow icon={Mail} label="Email" value="hello@tevexxo.com" />
            <InfoRow icon={Phone} label="Phone" value="+1 (555) 014-8820" />
            <InfoRow icon={MapPin} label="Address" value="221B Innovation Ave, Tech City" />
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="reveal reveal-right lg:col-span-3 rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="you@email.com" type="email" />
            </div>
            <div className="mt-5">
              <Field label="Subject" placeholder="How can we help?" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-neutral-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project or question..."
                className="w-full rounded-xl border border-neutral-700 bg-tevexxo-black px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-tevexxo-orange focus:neon-orange"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-tevexxo-orange px-6 py-3 text-sm font-semibold text-black neon-orange transition-transform hover:scale-105"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-tevexxo-orange/15 bg-tevexxo-black-soft/80 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tevexxo-orange/10 text-tevexxo-orange">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-neutral-500">{label}</div>
        <div className="mt-1 text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-neutral-300">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-700 bg-tevexxo-black px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-tevexxo-orange focus:neon-orange"
      />
    </div>
  );
}
