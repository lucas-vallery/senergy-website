import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radio, Shield, Wifi, Battery, Thermometer, Signal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'radiocontrols' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function RadioControlsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'radiocontrols' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const series = [
    {
      model: 'M880',
      image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-module-wave2.png`,
      colorClass: 'bg-primary/5 border-primary/10',
      iconColorClass: 'bg-primary/10',
      accentColorClass: 'text-primary',
      title: t('m880Title'),
      desc: t('m880Desc'),
      features: ['IP65', 'Jusqu\'à 16 fonctions', '433/868 MHz', 'Autonomie 10h'],
    },
    {
      model: 'MR900',
      image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-module-zeus2.png`,
      colorClass: 'bg-primary/5 border-primary/10',
      iconColorClass: 'bg-primary/10',
      accentColorClass: 'text-primary',
      title: t('mr900Title'),
      desc: t('mr900Desc'),
      features: ['Multi-récepteurs', 'Grande installation', 'Redondance sécurisée', 'Portée 300m'],
    },
    {
      model: 'Joystick',
      image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-carte-lld150i.jpg`,
      colorClass: 'bg-[#b8f568]/5 border-[#b8f568]/10',
      iconColorClass: 'bg-[#b8f568]/10',
      accentColorClass: 'text-[#b8f568]',
      title: t('joystickTitle'),
      desc: t('joystickDesc'),
      features: ['Contrôle précis', 'Ergonomique', 'Proportionnel', 'Robuste'],
    },
    {
      model: 'TR Series',
      image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/electronique-carte-lld300m82.png`,
      colorClass: 'bg-[#b8f568]/5 border-[#b8f568]/10',
      iconColorClass: 'bg-[#b8f568]/10',
      accentColorClass: 'text-[#b8f568]',
      title: t('trTitle'),
      desc: t('trDesc'),
      features: ['Camions-grues', 'Extérieur IP67', 'Résistant chocs', 'Grande portée'],
    },
  ];

  const specs = [
    { icon: <Wifi size={18} className="text-[#b8f568]" />, label: t('spec1') },
    { icon: <Signal size={18} className="text-[#b8f568]" />, label: t('spec2') },
    { icon: <Shield size={18} className="text-[#b8f568]" />, label: t('spec3') },
    { icon: <Radio size={18} className="text-[#b8f568]" />, label: t('spec4') },
    { icon: <Battery size={18} className="text-[#b8f568]" />, label: t('spec5') },
    { icon: <Thermometer size={18} className="text-[#b8f568]" />, label: t('spec6') },
  ];

  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('requestQuote'), href: '../../contact' }}
          pattern="page"
          size="medium"
        />

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="../../" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="../" className="hover:text-primary transition-colors">Électronique</Link>
            <span>/</span>
            <span className="text-primary font-medium">Radiocommandes</span>
          </div>
        </div>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <SectionTitle title="Radiocommandes IMET" subtitle={t('introText')} />
              <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-5 py-3 mt-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Radio size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">Distributeur Officiel IMET</p>
                  <p className="text-xs text-gray-500">Garantie constructeur — SAV officiel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('seriesTitle')} center />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {series.map((s) => (
                <div key={s.model} className={`rounded-2xl p-8 border ${s.colorClass} transition-all hover:shadow-lg`}>
                  <div className="mb-5 rounded-xl overflow-hidden bg-white/60 flex items-center justify-center h-40">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-contain"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${s.iconColorClass} rounded-xl flex items-center justify-center`}>
                      <Radio size={22} className={s.accentColorClass} />
                    </div>
                    <span className={`font-barlow font-bold text-lg ${s.accentColorClass}`}>{s.model}</span>
                  </div>
                  <h3 className="font-barlow font-bold text-primary text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="bg-white/80 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical specs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle title={t('specsTitle')} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 bg-surface-container-low rounded-xl px-4 py-3.5">
                      {spec.icon}
                      <span className="text-sm font-medium text-on-surface">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="font-barlow font-bold text-xl mb-4">Certification & conformité</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{t('certText')}</p>
                <div className="space-y-3">
                  {['Directive 2006/42/CE', 'EN 13135-1:2013', 'Radio frequency 433/868 MHz', 'SIL2 / Cat.3'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <Shield size={14} className="text-[#b8f568] flex-shrink-0" />
                      <span className="text-white/70 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-3xl font-bold text-primary mb-4">Demandez un devis</h2>
            <p className="text-gray-500 mb-8">Contactez nos experts pour trouver la radiocommande IMET adaptée à votre application.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="../../contact" className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-bold px-6 py-3 rounded-lg hover:bg-[#9dd84f] transition-colors">
                {tCommon('requestQuote')} <ArrowRight size={16} />
              </Link>
              <a href="tel:+33326790050" className="inline-flex items-center gap-2 border border-primary/20 text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors">
                Appeler notre expert
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
