'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}`, label: t('home'), key: 'home' },
    { href: `/${locale}/produits`, label: t('products'), key: 'products' },
    { href: `/${locale}/electronique`, label: t('electronics'), key: 'electronics' },
    { href: `/${locale}/hydraulique`, label: t('hydraulics'), key: 'hydraulics' },
    { href: `/${locale}/sav`, label: t('sav'), key: 'sav' },
    { href: `/${locale}/contact`, label: t('contact'), key: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-header bg-[#002058]/90 shadow-xl shadow-[#151c27]/10">
      <div className="flex justify-between items-center px-12 h-20">
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
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => {
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
          <nav className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
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
