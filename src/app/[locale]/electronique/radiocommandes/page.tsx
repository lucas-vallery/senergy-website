import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
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
      colorClass: 'bg-blue-50 border-blue-100',
      iconColorClass: 'bg-blue-100',
      accentColorClass: 'text-blue-600',
      title: t('m880Title'),
      desc: t('m880Desc'),
      features: ['IP65', 'Jusqu\'à 16 fonctions', '433/868 MHz', 'Autonomie 10h'],
    },
    {
      model: 'MR900',
      colorClass: 'bg-purple-50 border-purple-100',
      iconColorClass: 'bg-purple-100',
      accentColorClass: 'text-purple-600',
      title: t('mr900Title'),
      desc: t('mr900Desc'),
      features: ['Multi-récepteurs', 'Grande installation', 'Redondance sécurisée', 'Portée 300m'],
    },
    {
      model: 'Joystick',
      colorClass: 'bg-green-50 border-green-100',
      iconColorClass: 'bg-green-100',
      accentColorClass: 'text-green-600',
      title: t('joystickTitle'),
      desc: t('joystickDesc'),
      features: ['Contrôle précis', 'Ergonomique', 'Proportionnel', 'Robuste'],
    },
    {
      model: 'TR Series',
      colorClass: 'bg-orange-50 border-orange-100',
      iconColorClass: 'bg-orange-100',
      accentColorClass: 'text-orange-600',
      title: t('trTitle'),
      desc: t('trDesc'),
      features: ['Camions-grues', 'Extérieur IP67', 'Résistant chocs', 'Grande portée'],
    },
  ];

  const specs = [
    { icon: <Wifi size={18} className="text-orange" />, label: t('spec1') },
    { icon: <Signal size={18} className="text-orange" />, label: t('spec2') },
    { icon: <Shield size={18} className="text-orange" />, label: t('spec3') },
    { icon: <Radio size={18} className="text-orange" />, label: t('spec4') },
    { icon: <Battery size={18} className="text-orange" />, label: t('spec5') },
    { icon: <Thermometer size={18} className="text-orange" />, label: t('spec6') },
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
            <Link href="../../" className="hover:text-navy transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="../" className="hover:text-navy transition-colors">Électronique</Link>
            <span>/</span>
            <span className="text-navy font-medium">Radiocommandes</span>
          </div>
        </div>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <SectionTitle title="Radiocommandes IMET" subtitle={t('introText')} />
              <div className="inline-flex items-center gap-3 bg-navy/5 border border-navy/10 rounded-xl px-5 py-3 mt-2">
                <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
                  <Radio size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Distributeur Officiel IMET</p>
                  <p className="text-xs text-gray-500">Garantie constructeur — SAV officiel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series */}
        <section className="py-16 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('seriesTitle')} center />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {series.map((s) => (
                <div key={s.model} className={`rounded-2xl p-8 border ${s.colorClass} transition-all hover:shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${s.iconColorClass} rounded-xl flex items-center justify-center`}>
                      <Radio size={22} className={s.accentColorClass} />
                    </div>
                    <span className={`font-barlow font-bold text-lg ${s.accentColorClass}`}>{s.model}</span>
                  </div>
                  <h3 className="font-barlow font-bold text-navy text-xl mb-2">{s.title}</h3>
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
                    <div key={i} className="flex items-center gap-3 bg-lightbg rounded-xl px-4 py-3.5">
                      {spec.icon}
                      <span className="text-sm font-medium text-textdark">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="font-barlow font-bold text-xl mb-4">Certification & conformité</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{t('certText')}</p>
                <div className="space-y-3">
                  {['Directive 2006/42/CE', 'EN 13135-1:2013', 'Radio frequency 433/868 MHz', 'SIL2 / Cat.3'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <Shield size={14} className="text-orange flex-shrink-0" />
                      <span className="text-white/70 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-lightbg">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-3xl font-bold text-navy mb-4">Demandez un devis</h2>
            <p className="text-gray-500 mb-8">Contactez nos experts pour trouver la radiocommande IMET adaptée à votre application.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="../../contact" className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition-colors">
                {tCommon('requestQuote')} <ArrowRight size={16} />
              </Link>
              <a href="tel:+33326790050" className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy/5 transition-colors">
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
