import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Wrench, Settings, Shield, Zap, Gauge, Truck, Radio, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' });
  return {
    title: 'SENERGY — Spécialiste levage et manutention | Reims',
    description: t('heroSubtitle'),
  };
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const divisions = [
    {
      key: 'electronics',
      href: `/${locale}/electronique`,
      icon: <Zap size={32} className="text-orange" />,
      title: t('electronicsTitle'),
      desc: t('electronicsDesc'),
      items: [tNav('radiocontrols'), tNav('automations'), tNav('sensors')],
    },
    {
      key: 'hydraulics',
      href: `/${locale}/hydraulique`,
      icon: <Gauge size={32} className="text-orange" />,
      title: t('hydraulicsTitle'),
      desc: t('hydraulicsDesc'),
      items: [tNav('hydraulicGroups'), tNav('distributors'), tNav('cylinders'), tNav('pumps')],
    },
    {
      key: 'bodywork',
      href: `/${locale}/carrosserie`,
      icon: <Truck size={32} className="text-orange" />,
      title: t('bodyworkTitle'),
      desc: t('bodyworkDesc'),
      items: [tNav('customBodywork'), tNav('skips'), tNav('cranes'), tNav('taillifts')],
    },
  ];

  const whyItems = [
    { icon: <Award size={28} className="text-orange" />, title: t('why1Title'), desc: t('why1Desc') },
    { icon: <Wrench size={28} className="text-orange" />, title: t('why2Title'), desc: t('why2Desc') },
    { icon: <Settings size={28} className="text-orange" />, title: t('why3Title'), desc: t('why3Desc') },
    { icon: <Shield size={28} className="text-orange" />, title: t('why4Title'), desc: t('why4Desc') },
  ];

  const products = [
    { title: 'Radiocommande IMET M880', cat: tNav('electronics'), icon: <Radio size={24} className="text-navy" />, href: `/${locale}/electronique/radiocommandes` },
    { title: 'Radiocommande IMET MR900', cat: tNav('electronics'), icon: <Radio size={24} className="text-navy" />, href: `/${locale}/electronique/radiocommandes` },
    { title: 'Groupe hydraulique standard', cat: tNav('hydraulics'), icon: <Gauge size={24} className="text-navy" />, href: `/${locale}/hydraulique` },
    { title: 'Groupe hydraulique sur mesure', cat: tNav('hydraulics'), icon: <Gauge size={24} className="text-navy" />, href: `/${locale}/hydraulique` },
    { title: 'Carrosserie sur mesure', cat: tNav('bodywork'), icon: <Truck size={24} className="text-navy" />, href: `/${locale}/carrosserie` },
    { title: 'Hayon élévateur', cat: tNav('bodywork'), icon: <Truck size={24} className="text-navy" />, href: `/${locale}/carrosserie` },
  ];

  const newsItems = [
    { title: 'Nouvelle gamme radiocommandes IMET 2026', date: '15 jan. 2026', cat: 'Produits', href: `/${locale}/actualites` },
    { title: 'SENERGY présent au MANUTENTION 2025', date: '10 nov. 2025', cat: 'Événements', href: `/${locale}/actualites` },
    { title: 'Nouveau service de maintenance préventive', date: '5 sep. 2025', cat: 'Services', href: `/${locale}/actualites` },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('discoverProducts'), href: `/${locale}/produits` }}
          ctaSecondary={{ label: tCommon('contactUs'), href: `/${locale}/contact` }}
          pattern="home"
          size="large"
        />

        {/* About teaser */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-orange text-sm font-semibold uppercase tracking-wider mb-4">
                  <span className="w-6 h-0.5 bg-orange" />
                  {t('aboutTitle')}
                </div>
                <h2 className="font-barlow text-4xl font-bold text-navy mb-2">{t('aboutSubtitle')}</h2>
                <div className="flex gap-1 mb-6">
                  <span className="w-8 h-1 bg-orange rounded-full" />
                  <span className="w-2 h-1 bg-orange/40 rounded-full" />
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{t('aboutText')}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{t('aboutText2')}</p>
                <Link
                  href={`/${locale}/societe`}
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
                >
                  {tCommon('learnMore')}
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {[
                  { value: t('stat1Value'), label: t('stat1Label') },
                  { value: t('stat2Value'), label: t('stat2Label') },
                  { value: t('stat3Value'), label: t('stat3Label') },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-lightbg rounded-2xl p-6 text-center border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all"
                  >
                    <div className="font-barlow text-4xl font-bold text-navy mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
                <div className="sm:col-span-3 bg-navy rounded-2xl p-6 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-barlow font-semibold text-base mb-1">Distributeur officiel IMET</div>
                      <div className="text-sm text-white/70">Radiocommandes industrielles certifiées CE pour le levage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divisions */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle
              title={t('divisionsTitle')}
              subtitle={t('divisionsSubtitle')}
              center
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {divisions.map((div) => (
                <Link
                  key={div.key}
                  href={div.href}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                    {div.icon}
                  </div>
                  <h3 className="font-barlow text-xl font-bold text-white mb-3 group-hover:text-orange transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{div.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {div.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <ChevronRight size={12} className="text-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-orange text-sm font-semibold">
                    {tCommon('learnMore')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <SectionTitle title={t('productsTitle')} subtitle={t('productsSubtitle')} />
              <Link
                href={`/${locale}/produits`}
                className="hidden md:inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-orange transition-colors"
              >
                {t('viewAllProducts')}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Link key={i} href={p.href} className="group bg-white rounded-xl border border-gray-100 hover:border-orange/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="h-44 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                      {p.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-orange uppercase tracking-wider">{p.cat}</span>
                    <h3 className="font-barlow font-semibold text-navy text-base mt-1 group-hover:text-orange transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-400 mt-3">
                      <span>{tCommon('learnMore')}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link href={`/${locale}/produits`} className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition-colors">
                {t('viewAllProducts')} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Senergy */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('whyTitle')} subtitle={t('whySubtitle')} center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-barlow font-semibold text-navy text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest news */}
        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <SectionTitle title={t('newsTitle')} subtitle={t('newsSubtitle')} />
              <Link href={`/${locale}/actualites`} className="hidden md:inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-orange transition-colors">
                {t('viewAllNews')} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((news, i) => (
                <Link key={i} href={news.href} className="group bg-white rounded-xl border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all p-6">
                  <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-2.5 py-1 rounded mb-3">{news.cat}</span>
                  <h3 className="font-barlow font-semibold text-navy text-lg mb-2 group-hover:text-orange transition-colors leading-snug">{news.title}</h3>
                  <p className="text-sm text-gray-400">{news.date}</p>
                  <div className="flex items-center gap-1 text-orange text-sm font-semibold mt-4">
                    Lire la suite <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-2">Nos partenaires</p>
              <h2 className="font-barlow text-2xl font-bold text-navy">Our partners</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-imet.png`, alt: 'IMET — radiocommandes industrielles' },
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-bpe.jpg`, alt: 'BPE — capteurs' },
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-treuils.png`, alt: 'Treuils et réducteurs' },
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-oesse.jpg`, alt: 'OESSE — échangeurs' },
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-sistematica.png`, alt: 'Sistematica — radiocommandes' },
                { src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-demac.jpg`, alt: 'DEMAC SRL — enrouleurs' },
              ].map((logo) => (
                <div
                  key={logo.src}
                  className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center hover:border-orange/30 hover:shadow-md transition-all"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={50}
                    className="h-[50px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-4xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
            <p className="text-white/70 text-lg mb-8">{t('ctaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark transition-all shadow-lg"
              >
                {tCommon('contactUs')}
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+33326790050"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all"
              >
                (+33) (0)3.26.79.00.50
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
