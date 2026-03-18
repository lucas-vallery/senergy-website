import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const partnerLogos = [
    { src: `${basePath}/images/partner-imet.png`, alt: 'IMET — radiocommandes industrielles' },
    { src: `${basePath}/images/partner-bpe.jpg`, alt: 'BPE — capteurs' },
    { src: `${basePath}/images/partner-treuils.png`, alt: 'Treuils et réducteurs' },
    { src: `${basePath}/images/partner-oesse.jpg`, alt: 'OESSE — échangeurs' },
    { src: `${basePath}/images/partner-sistematica.png`, alt: 'Sistematica — radiocommandes' },
    { src: `${basePath}/images/partner-demac.jpg`, alt: 'DEMAC SRL — enrouleurs' },
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

        {/* Green CTA */}
        <section className="bg-secondary-container py-20">
          <div className="max-w-7xl mx-auto px-12 text-center">
            <h2 className="font-headline font-black text-on-secondary-container text-4xl md:text-5xl tracking-tight mb-6">
              {t('ctaGreenTitle')}
            </h2>
            <p className="text-on-secondary-container/70 text-lg font-label max-w-2xl mx-auto mb-10">
              {t('ctaGreenSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-primary text-white font-headline font-bold px-8 py-4 rounded hover:bg-primary-container transition-all shadow-lg"
              >
                {tCommon('contactUs')} <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+33326790050"
                className="inline-flex items-center gap-2 bg-on-secondary-container/10 border border-on-secondary-container/30 text-on-secondary-container font-headline font-bold px-8 py-4 rounded hover:bg-on-secondary-container/20 transition-all"
              >
                (+33) (0)3.26.79.00.50
              </a>
            </div>
          </div>
        </section>

        {/* Industrial Ecosystem — 3 division cards */}
        <section className="bg-surface py-32 relative overflow-hidden">
          {/* Section label background decor */}
          <div className="absolute top-8 right-8 hidden lg:block select-none pointer-events-none">
            <span className="font-label text-primary font-bold text-6xl opacity-10 leading-none">
              01 // DIVISIONS
            </span>
          </div>
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-16">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Notre écosystème industriel
              </span>
              <h2 className="font-headline font-black text-on-surface text-4xl tracking-tight">
                {t('divisionsTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  key: 'electronics',
                  href: `/${locale}/electronique`,
                  icon: 'precision_manufacturing',
                  title: t('electronicsTitle'),
                  desc: t('electronicsDesc'),
                },
                {
                  key: 'hydraulics',
                  href: `/${locale}/hydraulique`,
                  icon: 'build',
                  title: t('hydraulicsTitle'),
                  desc: t('hydraulicsDesc'),
                },
                {
                  key: 'bodywork',
                  href: `/${locale}/carrosserie`,
                  icon: 'conveyor_belt',
                  title: t('bodyworkTitle'),
                  desc: t('bodyworkDesc'),
                },
              ].map(div => (
                <Link
                  key={div.key}
                  href={div.href}
                  className="group bg-surface-container-low p-10 rounded-xl hover:bg-primary transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-[#b8f568] block mb-6">
                    {div.icon}
                  </span>
                  <h3 className="font-headline font-bold text-2xl text-primary group-hover:text-white mb-4 transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-on-surface-variant group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors">
                    {div.desc}
                  </p>
                  <div className="flex items-center gap-2 text-secondary group-hover:text-[#b8f568] text-sm font-headline font-bold transition-colors">
                    {tCommon('learnMore')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products bento grid */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                  02 // PRODUITS
                </span>
                <h2 className="font-headline font-black text-on-surface text-4xl tracking-tight">
                  {t('productsTitle')}
                </h2>
              </div>
              <Link
                href={`/${locale}/produits`}
                className="hidden md:inline-flex items-center gap-2 text-primary font-headline font-bold text-sm hover:text-primary-container transition-colors"
              >
                {t('viewAllProducts')}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Bento grid: large left + 2 stacked right */}
            <div className="grid grid-cols-12 gap-6 h-[700px]">
              {/* Large card */}
              <div className="col-span-12 md:col-span-8 relative rounded-xl overflow-hidden group">
                <Image
                  src={`${basePath}/images/hydraulique-groupe-dinamic-oil.jpg`}
                  alt="Groupe hydraulique Dinamic Oil"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="font-label text-[#b8f568] text-xs uppercase tracking-widest font-bold bg-primary/60 px-3 py-1 rounded mb-3 block w-fit">
                    {tNav('hydraulics')}
                  </span>
                  <h3 className="font-headline font-black text-white text-3xl tracking-tight mb-3">
                    Groupe hydraulique Dinamic Oil
                  </h3>
                  <Link
                    href={`/${locale}/hydraulique`}
                    className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold text-sm px-6 py-3 rounded hover:bg-[#9dd84f] transition-colors"
                  >
                    {tCommon('learnMore')} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* 2 stacked small cards */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                <div className="flex-1 relative rounded-xl overflow-hidden group">
                  <Image
                    src={`${basePath}/images/sav-atelier-1.jpg`}
                    alt="Atelier SAV"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-label text-[#b8f568] text-xs uppercase tracking-widest font-bold block mb-2">
                      {tNav('sav')}
                    </span>
                    <h3 className="font-headline font-bold text-white text-lg">
                      Atelier SAV Reims
                    </h3>
                  </div>
                </div>
                <div className="flex-1 relative rounded-xl overflow-hidden group">
                  <Image
                    src={`${basePath}/images/sav-atelier-2.jpg`}
                    alt="Atelier technique"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-label text-[#b8f568] text-xs uppercase tracking-widest font-bold block mb-2">
                      {tNav('electronics')}
                    </span>
                    <h3 className="font-headline font-bold text-white text-lg">
                      Électronique industrielle
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner with stats */}
        <section className="bg-primary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Stats glassmorphic card */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '30', label: 'Ans d\'expérience' },
                  { value: '3', label: 'Divisions métier' },
                  { value: 'SAV', label: 'Réactif & certifié' },
                  { value: 'CE', label: 'Certifications' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                  >
                    <div className="font-headline font-black text-[#b8f568] text-4xl mb-2">
                      {stat.value}
                    </div>
                    <div className="font-label text-xs uppercase tracking-widest text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Headline + CTA */}
              <div>
                <h2 className="font-headline font-black text-white text-4xl md:text-5xl tracking-tight leading-tight mb-6">
                  {t('ctaTitle')}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {t('ctaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold px-8 py-4 rounded hover:bg-[#9dd84f] transition-all shadow-lg"
                  >
                    {tCommon('contactUs')} <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+33326790050"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-headline font-bold px-8 py-4 rounded hover:bg-white/20 transition-all"
                  >
                    (+33) (0)3.26.79.00.50
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-12">
            <div className="text-center mb-12">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Nos partenaires
              </span>
              <h2 className="font-headline font-black text-on-surface text-3xl tracking-tight">
                Ils nous font confiance
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partnerLogos.map(logo => (
                <div
                  key={logo.src}
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 flex items-center justify-center hover:border-secondary/40 hover:shadow-md transition-all"
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
      </main>
      <Footer />
    </>
  );
}
