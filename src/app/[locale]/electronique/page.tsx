import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radio, Cpu, Activity, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'electronics' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function ElectronicsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'electronics' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const features = [
    t('feature1'), t('feature2'), t('feature3'),
    t('feature4'), t('feature5'), t('feature6'),
  ];

  const categories = [
    {
      id: 'radiocommandes',
      icon: <Radio size={32} className="text-[#b8f568]" />,
      title: t('radioTitle'),
      desc: t('radioDesc'),
      href: './radiocommandes',
      badge: 'Distributeur IMET',
      isLink: true,
    },
    {
      id: 'automatismes',
      icon: <Cpu size={32} className="text-[#b8f568]" />,
      title: t('autoTitle'),
      desc: t('autoDesc'),
      href: '#automatismes',
      isLink: false,
    },
    {
      id: 'capteurs',
      icon: <Activity size={32} className="text-[#b8f568]" />,
      title: t('sensorTitle'),
      desc: t('sensorDesc'),
      href: '#capteurs',
      isLink: false,
    },
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
                <p className="text-gray-600 leading-relaxed mb-6">{t('introText')}</p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Radio size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-barlow font-semibold text-primary text-sm">Distributeur Officiel IMET France</p>
                    <p className="text-xs text-gray-500 mt-0.5">Radiocommandes industrielles de référence mondiale</p>
                  </div>
                </div>
              </div>
              <div>
                <SectionTitle title={t('featuresTitle')} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-surface-container-low rounded-lg px-4 py-3">
                      <CheckCircle size={16} className="text-[#b8f568] flex-shrink-0" />
                      <span className="text-sm text-on-surface">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Nos gammes de produits" center />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {categories.map((cat) => {
                const categoryImages: Record<string, string> = {
                  radiocommandes: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/partner-imet.png`,
                  automatismes: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-carte-lld300m82.png`,
                  capteurs: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-detecteur-devers.png`,
                };
                const imgSrc = categoryImages[cat.id];
                return (
                <div key={cat.id} id={cat.id} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#b8f568]/30 hover:shadow-xl transition-all duration-300">
                  {imgSrc && (
                    <div className="mb-5 rounded-xl overflow-hidden bg-surface-container-low flex items-center justify-center h-36">
                      <Image
                        src={imgSrc}
                        alt={cat.title}
                        width={200}
                        height={144}
                        className="w-full h-36 object-contain p-3"
                      />
                    </div>
                  )}
                  <div className="w-14 h-14 bg-[#b8f568]/10 rounded-xl flex items-center justify-center mb-5">
                    {cat.icon}
                  </div>
                  {cat.badge && (
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded mb-3">
                      {cat.badge}
                    </span>
                  )}
                  <h3 className="font-barlow font-bold text-primary text-xl mb-3">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.desc}</p>
                  {cat.isLink ? (
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#9dd84f] transition-colors"
                    >
                      {tCommon('learnMore')}
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href="../contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-[#b8f568] transition-colors"
                    >
                      {tCommon('contactUs')}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-3xl font-bold text-white mb-4">Besoin d&apos;une solution électronique ?</h2>
            <p className="text-white/70 mb-8">Notre équipe technique est disponible pour étudier votre projet et vous proposer la solution adaptée.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="../contact" className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-bold px-6 py-3 rounded-lg hover:bg-[#9dd84f] transition-colors">
                {tCommon('requestQuote')} <ArrowRight size={16} />
              </Link>
              <a href="tel:+33326790050" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
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
