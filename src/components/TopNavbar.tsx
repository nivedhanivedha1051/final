import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Blogs', href: '#blog' },
  { label: 'Why Tevexxo', href: '#why-tevexxo' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Courses', href: '#courses' },
  { label: 'Programs', href: '#programs' },
];

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-tevexxo-black/90 backdrop-blur-md border-b border-tevexxo-orange/25 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden xl:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-tevexxo-orange"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-tevexxo-orange transition-transform duration-300 group-hover:scale-x-100 neon-orange" />
              </a>
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
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-tevexxo-orange hover:bg-tevexxo-orange/10 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
