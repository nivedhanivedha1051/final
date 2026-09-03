import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

type FooterLink =
  | { label: string; to: string; kind: 'route' }
  | { label: string; href: string; kind: 'anchor' };

const NAV: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'Support', to: '/contact', kind: 'route' },
      { label: 'Contact Us', to: '/contact', kind: 'route' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Projects', to: '/projects', kind: 'route' },
      { label: 'Services', to: '/services', kind: 'route' },
      { label: 'Products', to: '/products', kind: 'route' },
      { label: 'Blogs', to: '/blog', kind: 'route' },
    ],
  },
  {
    title: 'Learning',
    links: [
      { label: 'Courses', href: '/#courses', kind: 'anchor' },
      { label: 'Programs', href: '/#programs', kind: 'anchor' },
      { label: 'Why Tevexxo', to: '/why-tevexxo', kind: 'route' },
      { label: 'About Us', href: '/#about', kind: 'anchor' },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-tevexxo-orange/20 bg-tevexxo-black-soft/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Powering future innovators with hands-on courses, real projects, and products built to
              scale.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-tevexxo-orange/25 text-tevexxo-orange transition-all hover:bg-tevexxo-orange hover:text-black hover:neon-orange"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {NAV.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.kind === 'route' ? (
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-tevexxo-orange"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-tevexxo-orange"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-tevexxo-orange/10 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Tevexxo. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Built with <span className="text-tevexxo-orange">passion</span> by the Tevexxo team.
          </p>
        </div>
      </div>
    </footer>
  );
}
