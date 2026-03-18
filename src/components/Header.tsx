'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const productSubs = [
    { href: `/${locale}/electronique`, label: t('electronics'), key: 'electronics' },
    { href: `/${locale}/hydraulique`, label: t('hydraulics'), key: 'hydraulics' },
    { href: `/${locale}/carrosserie`, label: t('bodywork'), key: 'bodywork' },
  ];

  const navLinks = [
    { href: `/${locale}`, label: t('home'), key: 'home' },
    { href: `/${locale}/sav`, label: t('sav'), key: 'sav' },
    { href: `/${locale}/contact`, label: t('contact'), key: 'contact' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isProductsActive =
    pathname.startsWith(`/${locale}/produits`) ||
    pathname.startsWith(`/${locale}/electronique`) ||
    pathname.startsWith(`/${locale}/hydraulique`) ||
    pathname.startsWith(`/${locale}/carrosserie`);

  return (
    <header className="fixed top-0 w-full z-50 glass-header bg-[#002058]/90 shadow-xl shadow-[#151c27]/10">
      <div className="flex items-center px-12 h-20 gap-10">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex-shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
            alt="Senergy"
            width={110}
            height={55}
            className="h-12 w-auto object-contain rounded-lg"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {/* Home */}
          <Link
            href={`/${locale}`}
            className={`font-headline font-medium tracking-tight text-sm transition-colors ${
              pathname === `/${locale}`
                ? 'text-[#b8f568] border-b-2 border-[#b8f568] pb-1'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t('home')}
          </Link>

          {/* Produits dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(o => !o)}
              className={`flex items-center gap-1 font-headline font-medium tracking-tight text-sm transition-colors ${
                isProductsActive
                  ? 'text-[#b8f568] border-b-2 border-[#b8f568] pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t('products')}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-3 w-52 bg-[#002058] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                <Link
                  href={`/${locale}/produits`}
                  onClick={() => setProductsOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10 font-headline"
                >
                  {t('allProducts')}
                </Link>
                {productSubs.map(sub => (
                  <Link
                    key={sub.key}
                    href={sub.href}
                    onClick={() => setProductsOpen(false)}
                    className={`block px-4 py-3 text-sm transition-colors font-headline ${
                      pathname.startsWith(sub.href)
                        ? 'text-[#b8f568] bg-white/5'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {navLinks.slice(1).map(link => {
            const isActive =
              pathname === link.href ||
              (link.href !== `/${locale}` && pathname.startsWith(link.href));
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`font-headline font-medium tracking-tight text-sm transition-colors ${
                  isActive
                    ? 'text-[#b8f568] border-b-2 border-[#b8f568] pb-1'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href={switchLocalePath}
            className="font-label text-xs text-slate-300 hover:text-white border border-white/20 px-2.5 py-1 rounded uppercase tracking-widest transition-colors"
          >
            {otherLocale}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-[#b8f568] text-[#467000] px-6 py-2.5 rounded font-headline font-bold text-sm hover:bg-[#9dd84f] transition-all active:scale-95 shadow-lg"
          >
            {t('contact')}
          </Link>
          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#002058] border-t border-white/10">
          <nav className="px-6 py-6 space-y-1">
            <Link
              href={`/${locale}`}
              className="block text-slate-300 hover:text-white font-headline font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('home')}
            </Link>

            {/* Mobile products accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(o => !o)}
                className="flex items-center justify-between w-full text-slate-300 hover:text-white font-headline font-medium py-2"
              >
                {t('products')}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 space-y-1 border-l border-white/10 ml-2 mb-1">
                  <Link
                    href={`/${locale}/produits`}
                    className="block text-slate-400 hover:text-white font-headline text-sm py-1.5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t('allProducts')}
                  </Link>
                  {productSubs.map(sub => (
                    <Link
                      key={sub.key}
                      href={sub.href}
                      className="block text-slate-400 hover:text-white font-headline text-sm py-1.5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map(link => (
              <Link
                key={link.key}
                href={link.href}
                className="block text-slate-300 hover:text-white font-headline font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
