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
  const t = await getTranslations({ locale: params.locale, namespace: 'bodywork' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function BodyworkPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'bodywork' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const methodology = [
    {
      num: '1',
      title: 'Analyse & Consultation',
      desc: 'Étude de vos besoins, contraintes techniques et cahier des charges.',
      checks: ['Audit du parc', 'Définition des specs', 'Choix des matériaux'],
    },
    {
      num: '2',
      title: 'Conception & Fabrication',
      desc: 'Bureau d\'études interne, fabrication sur-mesure dans notre atelier Reims.',
      checks: ['Plans 3D', 'Soudure certifiée', 'Contrôle qualité'],
    },
    {
      num: '3',
      title: 'Livraison & SAV',
      desc: 'Installation sur site, formation opérateurs, maintenance préventive.',
      checks: ['Mise en service', 'Formation', 'Suivi annuel'],
    },
  ];

  const expertise = [
    {
      title: t('customTitle'),
      desc: t('customDesc'),
      items: ['Plateau bois ou acier', 'Caisse fermée', 'Bâchage automatique', 'Équipements spéciaux'],
    },
    {
      title: t('skipsTitle'),
      desc: t('skipsDesc'),
      items: ['Benne basculante AR', 'Benne 3 côtés', 'Ampliroll', 'Benne déchets verts'],
    },
    {
      title: t('cranesTitle'),
      desc: t('cranesDesc'),
      items: ['Grues Palfinger', 'Grues Hiab', 'Grues Fassi', 'Bras de déchargement'],
    },
  ];

  const specData = [
    { label: 'Charge utile max', value: '20T' },
    { label: 'Matériaux', value: 'Acier S355' },
    { label: 'Certification', value: 'CE / NF' },
    { label: 'Délai', value: '4–8 sem.' },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('requestQuote'), href: `/${locale}/contact` }}
          pattern="page"
          size="medium"
        />

        {/* Notre Méthodologie */}
        <section className="bg-surface py-24">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-16">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Notre approche
              </span>
              <h2 className="font-headline font-black text-on-surface text-4xl tracking-tight">
                Notre Méthodologie
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodology.map(step => (
                <div key={step.num} className="relative">
                  {/* Giant bg number */}
                  <div className="absolute -top-4 -left-2 font-label font-black text-[120px] text-primary/5 leading-none select-none pointer-events-none">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center mb-6">
                      <span className="font-headline font-black text-white text-xl">{step.num}</span>
                    </div>
                    <h3 className="font-headline font-bold text-on-surface text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.checks.map(item => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise — left border cards */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-16">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Nos domaines
              </span>
              <h2 className="font-headline font-black text-on-surface text-4xl tracking-tight">
                Notre Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertise.map((item, i) => (
                <div
                  key={i}
                  className="border-l-4 border-secondary bg-surface-container-lowest p-8 rounded-r-xl"
                >
                  <h3 className="font-headline font-bold text-on-surface text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <ul className="space-y-2">
                    {item.items.map(li => (
                      <li
                        key={li}
                        className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured product specs block — bg-primary split card */}
        <section className="bg-primary py-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              {/* Left: specs data */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="font-label text-[#b8f568] font-bold uppercase tracking-widest text-xs block mb-4">
                  Fiche technique
                </span>
                <h2 className="font-headline font-black text-white text-3xl tracking-tight mb-8">
                  {t('customTitle')}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {specData.map(spec => (
                    <div
                      key={spec.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-4"
                    >
                      <div className="font-label text-[#b8f568] text-xs uppercase tracking-widest mb-1">
                        {spec.label}
                      </div>
                      <div className="font-headline font-black text-white text-2xl">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold px-8 py-4 rounded hover:bg-[#9dd84f] transition-colors w-fit"
                >
                  {tCommon('requestQuote')} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right: product image with glassmorphic overlay */}
              <div className="relative min-h-[300px] lg:min-h-0">
                <Image
                  src={`${basePath}/images/hydraulique-groupe-dinamic-oil.jpg`}
                  alt="Carrosserie sur mesure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/60" />
                {/* Glassmorphic overlay card */}
                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 max-w-[200px]">
                  <p className="font-headline font-bold text-white text-sm mb-1">
                    Fabrication Reims
                  </p>
                  <p className="font-label text-white/60 text-xs uppercase tracking-widest">
                    Atelier certifié
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-secondary-container py-20">
          <div className="max-w-7xl mx-auto px-12 text-center">
            <h2 className="font-headline font-black text-on-secondary-container text-4xl md:text-5xl tracking-tight mb-6">
              Votre projet carrosserie
            </h2>
            <p className="text-on-secondary-container/70 text-lg font-label max-w-2xl mx-auto mb-10">
              Nos carrossiers qualifiés réalisent vos projets sur mesure avec des matériaux de qualité certifiée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-primary text-white font-headline font-bold px-8 py-4 rounded hover:bg-primary-container transition-all shadow-lg"
              >
                {tCommon('requestQuote')} <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+33326790050"
                className="inline-flex items-center gap-2 bg-on-secondary-container/10 border border-on-secondary-container/30 text-on-secondary-container font-headline font-bold px-8 py-4 rounded hover:bg-on-secondary-container/20 transition-all"
              >
                (0)3.26.79.00.50
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
