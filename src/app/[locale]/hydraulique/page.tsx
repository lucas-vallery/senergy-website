import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Gauge, GitBranch, ArrowUpDown, Droplets, CheckCircle, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
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

  const categories = [
    {
      id: 'groupes',
      icon: <Gauge size={32} className="text-orange" />,
      title: t('groupsTitle'),
      desc: t('groupsDesc'),
      items: ['Centrale compacte', 'Centrale haute pression', 'Centrale sur châssis', 'Centrale submersible'],
    },
    {
      id: 'distributeurs',
      icon: <GitBranch size={32} className="text-orange" />,
      title: t('distributorsTitle'),
      desc: t('distributorsDesc'),
      items: ['Distributeur manuel', 'Électrodistributeur', 'Distributeur proportionnel', 'Bloc logique'],
    },
    {
      id: 'verins',
      icon: <ArrowUpDown size={32} className="text-orange" />,
      title: t('cylindersTitle'),
      desc: t('cylindersDesc'),
      items: ['Vérin simple effet', 'Vérin double effet', 'Vérin télescopique', 'Vérin spécial'],
    },
    {
      id: 'pompes',
      icon: <Droplets size={32} className="text-orange" />,
      title: t('pumpsTitle'),
      desc: t('pumpsDesc'),
      items: ['Pompe à engrenages', 'Pompe à pistons', 'Pompe à palettes', 'Pompe tandem'],
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-lightbg rounded-lg px-4 py-3">
                      <CheckCircle size={15} className="text-orange flex-shrink-0" />
                      <span className="text-sm text-textdark">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Image
                  src="/images/hydraulique-groupe-dinamic-oil.jpg"
                  alt="Groupe hydraulique Dinamic Oil"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              <div className="bg-navy rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-5">
                  <Wrench size={24} className="text-orange" />
                </div>
                <h3 className="font-barlow font-bold text-2xl mb-3">{t('customTitle')}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{t('customText')}</p>
                <Link
                  href="../contact"
                  className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-dark transition-colors"
                >
                  Nous contacter <ArrowRight size={14} />
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Nos gammes de produits hydrauliques" center />
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
            <h2 className="font-barlow text-3xl font-bold text-white mb-4">Votre projet hydraulique</h2>
            <p className="text-white/70 mb-8">De la conception à la mise en service, notre bureau d&apos;études vous accompagne.</p>
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
