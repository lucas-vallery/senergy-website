import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  return (
    <footer className="bg-lightbg text-textdark">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`} alt="Senergy" width={120} height={60} className="h-14 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t('tagline')}
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-gray-600">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-navy" />
                <span>6 Rue du Capitaine Georges Madon<br />ZAC La Croix Blandin<br />51100 REIMS — France</span>
              </div>
              <a href="tel:+33326790050" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-orange transition-colors">
                <Phone size={14} className="flex-shrink-0 text-navy" />
                <span>(+33) (0)3.26.79.00.50</span>
              </a>
              <a href="mailto:contactsite@senergy.fr" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-orange transition-colors">
                <Mail size={14} className="flex-shrink-0 text-navy" />
                <span>contactsite@senergy.fr</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Clock size={14} className="flex-shrink-0 text-navy" />
                <span>Lun–Ven: 8h00 – 18h00</span>
              </div>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-barlow font-semibold text-navy text-base mb-4 uppercase tracking-wider">{t('divisions')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/electronique`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('electronics')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/electronique/radiocommandes`} className="text-sm text-gray-500 hover:text-orange transition-colors pl-3 border-l border-gray-300">
                  {tNav('radiocontrols')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hydraulique`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('hydraulics')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/carrosserie`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('bodywork')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/produits`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('products')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-barlow font-semibold text-navy text-base mb-4 uppercase tracking-wider">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/societe`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('company')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sav`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('sav')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/actualites`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('news')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-gray-600 hover:text-orange transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* SAV CTA */}
          <div>
            <h3 className="font-barlow font-semibold text-navy text-base mb-4 uppercase tracking-wider">Service Après-Vente</h3>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600 mb-3">Besoin d&apos;une intervention technique ? Notre SAV est disponible :</p>
              <a
                href="tel:+33326790050"
                className="flex items-center gap-2 text-navy font-semibold text-sm hover:text-orange transition-colors mb-2"
              >
                <Phone size={14} />
                (0)3.26.79.00.50
              </a>
              <a
                href="mailto:benoit.lallement@senergy.fr"
                className="text-xs text-gray-500 hover:text-navy transition-colors block mb-3"
              >
                benoit.lallement@senergy.fr
              </a>
              <Link
                href={`/${locale}/sav`}
                className="block text-center bg-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-dark transition-colors"
              >
                Demande SAV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-400">{t('copyright')}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{t('siren')}</span>
            <span>|</span>
            <Link href={`/${locale}/contact`} className="hover:text-navy transition-colors">{t('legalNotice')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
