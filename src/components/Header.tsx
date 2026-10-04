import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm' : 'bg-white border-b border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Shopey home" className="flex items-center gap-2 shrink-0">
          <img src="/logo-large.png" alt="Shopey" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.shopey.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View Demo
          </a>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNav('#pricing'); }}
            className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left py-3 text-sm text-neutral-700 hover:text-neutral-900 border-b border-neutral-100 last:border-0 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://app.shopey.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-neutral-600 hover:text-neutral-900 py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            View Live Demo ↗
          </a>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNav('#pricing'); setMenuOpen(false); }}
            className="mt-1 inline-flex justify-center bg-neutral-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
