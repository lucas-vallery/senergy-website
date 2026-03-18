'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navItems = [
    { key: 'company', href: `/${locale}/societe`, label: t('company') },
    {
      key: 'electronics',
      href: `/${locale}/electronique`,
      label: t('electronics'),
      children: [
        { href: `/${locale}/electronique/radiocommandes`, label: t('radiocontrols') },
        { href: `/${locale}/electronique#automatismes`, label: t('automations') },
        { href: `/${locale}/electronique#capteurs`, label: t('sensors') },
      ],
    },
    {
      key: 'hydraulics',
      href: `/${locale}/hydraulique`,
      label: t('hydraulics'),
      children: [
        { href: `/${locale}/hydraulique#groupes`, label: t('hydraulicGroups') },
        { href: `/${locale}/hydraulique#distributeurs`, label: t('distributors') },
        { href: `/${locale}/hydraulique#verins`, label: t('cylinders') },
        { href: `/${locale}/hydraulique#pompes`, label: t('pumps') },
      ],
    },
    {
      key: 'bodywork',
      href: `/${locale}/carrosserie`,
      label: t('bodywork'),
      children: [
        { href: `/${locale}/carrosserie#sur-mesure`, label: t('customBodywork') },
        { href: `/${locale}/carrosserie#bennes`, label: t('skips') },
        { href: `/${locale}/carrosserie#grues`, label: t('cranes') },
        { href: `/${locale}/carrosserie#hayons`, label: t('taillifts') },
      ],
    },
    { key: 'sav', href: `/${locale}/sav`, label: t('sav') },
    { key: 'news', href: `/${locale}/actualites`, label: t('news') },
    { key: 'contact', href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      {/* Top bar */}
      <div className="bg-navy-dark text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+33326790050" className="flex items-center gap-1.5 hover:text-orange transition-colors">
              <Phone size={13} />
              <span>(+33) (0)3.26.79.00.50</span>
            </a>
            <a href="mailto:contactsite@senergy.fr" className="flex items-center gap-1.5 hover:text-orange transition-colors">
              <Mail size={13} />
              <span>contactsite@senergy.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Lun-Ven 8h00-18h00</span>
            <Link
              href={switchLocalePath}
              className="border border-white/30 px-2.5 py-0.5 rounded text-xs font-semibold hover:bg-white/10 transition-colors uppercase"
            >
              {otherLocale}
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
              <Image src="/logo.png" alt="Senergy" width={120} height={60} className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.key} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          pathname.includes(item.href)
                            ? 'text-navy bg-navy/5'
                            : 'text-gray-700 hover:text-navy hover:bg-navy/5'
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.key ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.key && (
                        <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-lightbg transition-colors border-b border-gray-100"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label} — Tout voir
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-navy hover:bg-lightbg transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-navy bg-navy/5'
                          : 'text-gray-700 hover:text-navy hover:bg-navy/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={switchLocalePath}
                className="text-sm font-semibold text-gray-500 hover:text-navy border border-gray-200 px-2.5 py-1 rounded transition-colors uppercase"
              >
                {otherLocale}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="bg-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-dark transition-colors"
              >
                {t('contact')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-lightbg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
            <div className="max-w-7xl mx-auto px-4 pt-2 space-y-1">
              {/* Mobile top bar info */}
              <div className="flex flex-col gap-2 py-3 border-b border-gray-100 mb-2">
                <a href="tel:+33326790050" className="flex items-center gap-2 text-sm text-navy">
                  <Phone size={14} />
                  <span>(+33) (0)3.26.79.00.50</span>
                </a>
                <a href="mailto:contactsite@senergy.fr" className="flex items-center gap-2 text-sm text-navy">
                  <Mail size={14} />
                  <span>contactsite@senergy.fr</span>
                </a>
                <Link
                  href={switchLocalePath}
                  className="self-start border border-navy/30 px-2.5 py-0.5 rounded text-xs font-semibold text-navy uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {otherLocale === 'fr' ? 'FR' : 'EN'}
                </Link>
              </div>
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm font-semibold text-navy hover:bg-lightbg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-navy hover:bg-lightbg rounded transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
