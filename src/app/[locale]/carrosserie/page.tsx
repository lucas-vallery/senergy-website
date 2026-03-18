import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Truck, Package, LifeBuoy, ArrowUpDown, CheckCircle, Hammer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
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

  const categories = [
    {
      id: 'sur-mesure',
      icon: <Truck size={32} className="text-orange" />,
      title: t('customTitle'),
      desc: t('customDesc'),
      items: ['Plateau bois ou acier', 'Caisse fermée', 'Bâchage automatique', 'Équipements spéciaux'],
    },
    {
      id: 'bennes',
      icon: <Package size={32} className="text-orange" />,
      title: t('skipsTitle'),
      desc: t('skipsDesc'),
      items: ['Benne basculante AR', 'Benne 3 côtés', 'Ampliroll', 'Benne déchets verts'],
    },
    {
      id: 'grues',
      icon: <LifeBuoy size={32} className="text-orange" />,
      title: t('cranesTitle'),
      desc: t('cranesDesc'),
      items: ['Grues Palfinger', 'Grues Hiab', 'Grues Fassi', 'Bras de déchargement'],
    },
    {
      id: 'hayons',
      icon: <ArrowUpDown size={32} className="text-orange" />,
      title: t('tailliftsTitle'),
      desc: t('tailliftsDesc'),
      items: ['Hayon colonne', 'Hayon bras', 'Hayon sous-caisse', 'Hayon rail'],
    },
  ];

  const features = [
    t('feature1'), t('feature2'), t('feature3'),
    t('feature4'), t('feature5'), t('feature6'),
  ];

  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('requestQuote'), href: '../contact' }}
          pattern="page"
          size="medium"
        />

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle title={t('introTitle')} />
                <p className="text-gray-600 leading-relaxed mb-8">{t('introText')}</p>
                <Link
                  href="../contact"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
                >
                  {tCommon('requestQuote')} <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                    <Hammer size={22} className="text-orange" />
                  </div>
                  <h3 className="font-barlow font-bold text-navy text-lg">{t('workshopTitle')}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{t('workshopText')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-orange flex-shrink-0" />
                      <span className="text-xs text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Nos solutions carrosserie" center />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange/30 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                    {cat.icon}
                  </div>
                  <h3 className="font-barlow font-bold text-navy text-xl mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="../contact"
                    className="inline-flex items-center gap-2 text-orange font-semibold text-sm mt-5 hover:text-orange-dark transition-colors"
                  >
                    Demander un devis <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-3xl font-bold text-white mb-4">Votre projet carrosserie</h2>
            <p className="text-white/70 mb-8">Nos carrossiers qualifiés réalisent vos projets sur mesure avec des matériaux de qualité.</p>
            <Link href="../contact" className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-dark transition-colors">
              {tCommon('requestQuote')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
