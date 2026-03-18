import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-barlow font-bold text-lg">S</span>
              </div>
              <div>
                <div className="font-barlow font-bold text-white text-xl leading-none">SENERGY</div>
                <div className="text-xs text-white/60 leading-none">SAS SENERGY</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t('tagline')}
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-orange" />
                <span>6 Rue du Capitaine Georges Madon<br />ZAC La Croix Blandin<br />51100 REIMS — France</span>
              </div>
              <a href="tel:+33326790050" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-orange transition-colors">
                <Phone size={14} className="flex-shrink-0 text-orange" />
                <span>(+33) (0)3.26.79.00.50</span>
              </a>
              <a href="mailto:contactsite@senergy.fr" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-orange transition-colors">
                <Mail size={14} className="flex-shrink-0 text-orange" />
                <span>contactsite@senergy.fr</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Clock size={14} className="flex-shrink-0 text-orange" />
                <span>Lun–Ven: 8h00 – 18h00</span>
              </div>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-base mb-4 uppercase tracking-wider">{t('divisions')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/electronique`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('electronics')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/electronique/radiocommandes`} className="text-sm text-white/60 hover:text-orange transition-colors pl-3 border-l border-white/10">
                  {tNav('radiocontrols')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hydraulique`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('hydraulics')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/carrosserie`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('bodywork')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/produits`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('products')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-base mb-4 uppercase tracking-wider">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/societe`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('company')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sav`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('sav')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/actualites`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('news')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-white/70 hover:text-orange transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* SAV CTA */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-base mb-4 uppercase tracking-wider">Service Après-Vente</h3>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-white/70 mb-3">Besoin d&apos;une intervention technique ? Notre SAV est disponible :</p>
              <a
                href="tel:+33326790050"
                className="flex items-center gap-2 text-orange font-semibold text-sm hover:text-orange-light transition-colors mb-2"
              >
                <Phone size={14} />
                (0)3.26.79.00.50
              </a>
              <a
                href="mailto:benoit.lallement@senergy.fr"
                className="text-xs text-white/60 hover:text-white transition-colors block mb-3"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-white/50">{t('copyright')}</p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>{t('siren')}</span>
            <span>|</span>
            <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">{t('legalNotice')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
