import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

type NavLink =
  | { label: string; to: string; kind: 'route' }
  | { label: string; href: string; kind: 'anchor' };

const LINKS: NavLink[] = [
  { label: 'Home', href: '#home', kind: 'anchor' },
  { label: 'Projects', to: '/projects', kind: 'route' },
  { label: 'Services', to: '/services', kind: 'route' },
  { label: 'Products', to: '/products', kind: 'route' },
  { label: 'Blogs', to: '/blog', kind: 'route' },
  { label: 'Why Tevexxo', to: '/why-tevexxo', kind: 'route' },
  { label: 'About Us', href: '#about', kind: 'anchor' },
  { label: 'Contact', to: '/contact', kind: 'route' },
  { label: 'Courses', href: '#courses', kind: 'anchor' },
  { label: 'Programs', href: '#programs', kind: 'anchor' },
];

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-tevexxo-black/90 backdrop-blur-md border-b border-tevexxo-orange/25 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden xl:flex items-center gap-1">
          {LINKS.map((l, i) => (
            <li key={i}>
              {l.kind === 'route' ? (
                <Link
                  to={l.to}
                  className="group relative px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-tevexxo-orange"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-tevexxo-orange transition-transform duration-300 group-hover:scale-x-100 neon-orange" />
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="group relative px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-tevexxo-orange"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-tevexxo-orange transition-transform duration-300 group-hover:scale-x-100 neon-orange" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          className="xl:hidden text-neutral-200 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto max-w-7xl px-5 pb-6 pt-2 grid grid-cols-2 gap-x-4 gap-y-1 bg-tevexxo-black/95 backdrop-blur-md border-t border-tevexxo-orange/20">
          {LINKS.map((l, i) => (
            <li key={i}>
              {l.kind === 'route' ? (
                <Link
                  to={l.to}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-tevexxo-orange hover:bg-tevexxo-orange/10 transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-tevexxo-orange hover:bg-tevexxo-orange/10 transition-colors"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
