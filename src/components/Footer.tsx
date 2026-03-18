import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import { Phone, Mail, MapPin } from 'lucide-react';

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  return (
    <footer className="bg-[#002058] text-white w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
                alt="Senergy"
                width={110}
                height={55}
                className="h-12 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="font-label text-xs uppercase tracking-widest text-slate-400 leading-relaxed mb-8">
              {t('tagline')}
            </p>
            <div className="space-y-2 text-slate-400 text-xs font-label uppercase tracking-widest">
              <div className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 flex-shrink-0 text-[#b8f568]" />
                <span>
                  6 Rue du Capitaine Georges Madon
                  <br />
                  51100 REIMS — France
                </span>
              </div>
              <a
                href="tel:+33326790050"
                className="flex items-center gap-2 hover:text-[#b8f568] transition-colors"
              >
                <Phone size={12} className="text-[#b8f568]" />
                (+33) (0)3.26.79.00.50
              </a>
              <a
                href="mailto:contactsite@senergy.fr"
                className="flex items-center gap-2 hover:text-[#b8f568] transition-colors"
              >
                <Mail size={12} className="text-[#b8f568]" />
                contactsite@senergy.fr
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-label font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 font-label text-xs uppercase tracking-widest text-slate-400">
              {[
                { href: `/${locale}`, label: tNav('home') },
                { href: `/${locale}/produits`, label: tNav('products') },
                { href: `/${locale}/electronique`, label: tNav('electronics') },
                { href: `/${locale}/hydraulique`, label: tNav('hydraulics') },
                { href: `/${locale}/societe`, label: tNav('company') },
              ].map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white hover:underline decoration-[#426900] underline-offset-4 transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-label font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Services
            </h4>
            <ul className="space-y-4 font-label text-xs uppercase tracking-widest text-slate-400">
              {[
                { href: `/${locale}/sav`, label: tNav('sav') },
                { href: `/${locale}/carrosserie`, label: tNav('bodywork') },
                { href: `/${locale}/actualites`, label: tNav('news') },
                { href: `/${locale}/contact`, label: tNav('contact') },
              ].map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white hover:underline decoration-[#426900] underline-offset-4 transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-label font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Service Après-Vente
            </h4>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <a
                href="tel:+33326790050"
                className="text-[#b8f568] font-headline font-bold text-sm hover:underline block mb-1"
              >
                (0)3.26.79.00.50
              </a>
              <p className="text-slate-400 text-xs font-label uppercase tracking-widest mb-4">
                Lun–Ven: 8h00 – 18h00
              </p>
              <a
                href="mailto:benoit.lallement@senergy.fr"
                className="text-slate-400 text-xs hover:text-[#b8f568] transition-colors block mb-4"
              >
                benoit.lallement@senergy.fr
              </a>
              <Link
                href={`/${locale}/sav`}
                className="block text-center bg-[#b8f568] text-[#467000] text-xs font-bold font-label uppercase tracking-widest px-4 py-2.5 rounded hover:bg-[#9dd84f] transition-colors"
              >
                Demande SAV
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-xs uppercase tracking-widest text-slate-400">
            {t('copyright')}
          </p>
          <div className="flex gap-8 font-label text-xs uppercase tracking-widest text-slate-400">
            <span>{t('siren')}</span>
            <span className="text-slate-600">|</span>
            <Link href={`/${locale}/contact`} className="hover:text-[#b8f568] transition-colors">
              {t('legalNotice')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
