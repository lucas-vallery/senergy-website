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
      title: 'Groupe hydraulique standard',
      pressure: '250 bar',
      flow: '20 L/min',
      material: 'Acier',
      hasImage: true,
    },
    {
      id: 'distributeurs',
      title: 'Distributeur hydraulique',
      pressure: '350 bar',
      flow: '60 L/min',
      material: 'Aluminium',
      hasImage: false,
    },
    {
      id: 'verins',
      title: 'Vérins hydrauliques',
      pressure: '200 bar',
      flow: '—',
      material: 'Acier chromé',
      hasImage: false,
    },
    {
      id: 'pompes',
      title: 'Pompes industrielles',
      pressure: '400 bar',
      flow: '100 L/min',
      material: 'Fonte',
      hasImage: false,
    },
    {
      id: 'sur-mesure',
      title: 'Groupe sur mesure',
      pressure: 'Sur devis',
      flow: 'Sur devis',
      material: 'Au choix',
      hasImage: false,
    },
    {
      id: 'compact',
      title: 'Pack hydraulique compact',
      pressure: '180 bar',
      flow: '12 L/min',
      material: 'Aluminium',
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
      <main className="pt-20">
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

                {/* Technical specs filters */}
                <div className="bg-surface-container-high rounded-xl p-6">
                  <h3 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs mb-4">
                    Spécifications
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                        Pression max (bar)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        defaultValue="400"
                        className="w-full accent-secondary"
                      />
                      <div className="flex justify-between font-label text-xs text-on-surface-variant mt-1">
                        <span>0</span>
                        <span>500 bar</span>
                      </div>
                    </div>
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                        Débit (L/min)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="120"
                        defaultValue="100"
                        className="w-full accent-secondary"
                      />
                      <div className="flex justify-between font-label text-xs text-on-surface-variant mt-1">
                        <span>0</span>
                        <span>120 L/min</span>
                      </div>
                    </div>
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                        Matériau
                      </label>
                      <select className="w-full bg-surface-container text-on-surface text-sm font-label px-3 py-2 rounded border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary/30">
                        <option value="">Tous</option>
                        <option>Acier</option>
                        <option>Aluminium</option>
                        <option>Fonte</option>
                        <option>Acier chromé</option>
                      </select>
                    </div>
                  </div>
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
                        {/* Spec chips */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-surface-container text-on-surface-variant font-label text-xs px-2 py-1 rounded uppercase tracking-wider">
                            {product.pressure}
                          </span>
                          <span className="bg-surface-container text-on-surface-variant font-label text-xs px-2 py-1 rounded uppercase tracking-wider">
                            {product.flow}
                          </span>
                          <span className="bg-surface-container text-on-surface-variant font-label text-xs px-2 py-1 rounded uppercase tracking-wider">
                            {product.material}
                          </span>
                        </div>
                        <Link
                          href={`/${locale}/contact`}
                          className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold text-xs px-4 py-2 rounded hover:bg-[#9dd84f] transition-colors"
                        >
                          Voir Détails <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical comparison table */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-10">
              <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-3">
                Comparatif technique
              </span>
              <h2 className="font-headline font-black text-on-surface text-3xl tracking-tight">
                Tableau de spécifications
              </h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-outline-variant/20">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-label font-bold uppercase tracking-widest text-xs">
                      Produit
                    </th>
                    <th className="text-left px-6 py-4 font-label font-bold uppercase tracking-widest text-xs">
                      Pression max
                    </th>
                    <th className="text-left px-6 py-4 font-label font-bold uppercase tracking-widest text-xs">
                      Débit max
                    </th>
                    <th className="text-left px-6 py-4 font-label font-bold uppercase tracking-widest text-xs">
                      Matériau
                    </th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high bg-surface-container-lowest">
                  {products.map((product, i) => (
                    <tr
                      key={product.id}
                      className={`hover:bg-surface-container-low transition-colors ${
                        i % 2 === 0 ? '' : 'bg-surface-container/40'
                      }`}
                    >
                      <td className="px-6 py-4 font-headline font-semibold text-on-surface">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 font-label text-on-surface-variant text-xs uppercase tracking-wider">
                        {product.pressure}
                      </td>
                      <td className="px-6 py-4 font-label text-on-surface-variant text-xs uppercase tracking-wider">
                        {product.flow}
                      </td>
                      <td className="px-6 py-4 font-label text-on-surface-variant text-xs uppercase tracking-wider">
                        {product.material}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/${locale}/contact`}
                          className="inline-flex items-center gap-1 text-secondary font-headline font-bold text-xs hover:underline"
                        >
                          Devis <ArrowRight size={10} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
