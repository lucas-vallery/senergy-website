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
  const t = await getTranslations({ locale: params.locale, namespace: 'hydraulics' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function HydraulicsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hydraulics' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const products = [
    {
      id: 'groupes',
      title: t('groupsTitle'),
      desc: t('groupsDesc'),
      hasImage: true,
    },
    {
      id: 'distributeurs',
      title: t('distributorsTitle'),
      desc: t('distributorsDesc'),
      hasImage: false,
    },
    {
      id: 'verins',
      title: t('cylindersTitle'),
      desc: t('cylindersDesc'),
      hasImage: false,
    },
    {
      id: 'pompes',
      title: t('pumpsTitle'),
      desc: t('pumpsDesc'),
      hasImage: false,
    },
  ];

  const categories = [
    { id: 'groupes', label: t('groupsTitle') },
    { id: 'distributeurs', label: t('distributorsTitle') },
    { id: 'verins', label: t('cylindersTitle') },
    { id: 'pompes', label: t('pumpsTitle') },
  ];

  return (
    <>
      <Header />
      <main className="">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('requestQuote'), href: `/${locale}/contact` }}
          pattern="page"
          size="medium"
        />

        {/* 2-col layout: sidebar + product grid */}
        <section className="bg-surface py-16">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Category filter */}
                <div className="bg-surface-container-high rounded-xl p-6">
                  <h3 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs mb-4">
                    Catégories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat.id}>
                        <a
                          href={`#${cat.id}`}
                          className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-secondary font-label transition-colors py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {cat.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise highlights */}
                <div className="bg-surface-container-high rounded-xl p-6">
                  <h3 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs mb-4">
                    Notre expertise
                  </h3>
                  <ul className="space-y-2">
                    {[t('feature1'), t('feature2'), t('feature3'), t('feature4')].map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-on-surface-variant font-label">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-headline font-bold text-base mb-2">Besoin d&apos;aide ?</h3>
                  <p className="text-white/70 text-xs font-label mb-4 leading-relaxed">
                    Notre équipe vous accompagne dans le choix de votre équipement hydraulique.
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="block text-center bg-[#b8f568] text-[#467000] text-xs font-bold font-label uppercase tracking-widest px-4 py-2.5 rounded hover:bg-[#9dd84f] transition-colors"
                  >
                    Nous contacter
                  </Link>
                </div>
              </aside>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map(product => (
                    <div
                      key={product.id}
                      id={product.id}
                      className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Image area */}
                      <div className="h-40 relative bg-surface-container">
                        {product.hasImage ? (
                          <Image
                            src={`${basePath}/images/hydraulique-groupe-dinamic-oil.jpg`}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">
                              build
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-headline font-bold text-on-surface text-base mb-3">
                          {product.title}
                        </h3>
                        <p className="text-on-surface-variant text-xs leading-relaxed mb-4">
                          {product.desc}
                        </p>
                        <Link
                          href={`/${locale}/contact`}
                          className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold text-xs px-4 py-2 rounded hover:bg-[#9dd84f] transition-colors"
                        >
                          {tCommon('requestQuote')} <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom design section */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-10">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Sur mesure
              </span>
              <h2 className="font-headline font-black text-on-surface text-3xl tracking-tight">
                {t('customTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <p className="text-on-surface-variant leading-relaxed">
                {t('customText')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  t('feature1'), t('feature2'), t('feature3'),
                  t('feature4'), t('feature5'), t('feature6'),
                ].map(feat => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 text-sm text-on-surface"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="max-w-3xl mx-auto px-12 text-center">
            <h2 className="font-headline font-black text-white text-3xl tracking-tight mb-4">
              Votre projet hydraulique
            </h2>
            <p className="text-white/70 mb-8 font-label text-sm uppercase tracking-widest">
              De la conception à la mise en service
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold px-8 py-4 rounded hover:bg-[#9dd84f] transition-colors shadow-lg"
            >
              {tCommon('requestQuote')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
