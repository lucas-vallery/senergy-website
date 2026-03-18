import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Radio, Gauge, Truck, Cpu, Activity, GitBranch, ArrowUpDown, Droplets, Package, LifeBuoy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'products' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

interface ProductItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

export default async function ProductsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'products' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const electronicsProducts: ProductItem[] = [
    {
      title: 'Radiocommande IMET M880',
      desc: 'Radiocommande compacte IP65, jusqu\'à 16 fonctions, pour ponts roulants et grues industrielles.',
      href: '../electronique/radiocommandes',
      icon: <Radio size={22} className="text-primary" />,
      badge: 'Best-seller',
    },
    {
      title: 'Radiocommande IMET MR900',
      desc: 'Solution multi-récepteurs pour grandes installations industrielles. Sécurité et redondance.',
      href: '../electronique/radiocommandes',
      icon: <Radio size={22} className="text-primary" />,
    },
    {
      title: 'Radiocommande Joystick IMET',
      desc: 'Contrôle précis par joystick pour les applications nécessitant une grande dextérité.',
      href: '../electronique/radiocommandes',
      icon: <Radio size={22} className="text-primary" />,
    },
    {
      title: 'Radiocommande IMET TR',
      desc: 'Conçue pour camions-grues, résistante aux conditions extérieures. IP67.',
      href: '../electronique/radiocommandes',
      icon: <Radio size={22} className="text-primary" />,
    },
    {
      title: 'Automatismes industriels',
      desc: 'Systèmes d\'automatisation pour optimiser vos processus de levage et manutention.',
      href: '../electronique',
      icon: <Cpu size={22} className="text-primary" />,
    },
    {
      title: 'Capteurs & détection',
      desc: 'Solutions de pesage, mesure et détection pour la sécurité de vos installations.',
      href: '../electronique',
      icon: <Activity size={22} className="text-primary" />,
    },
  ];

  const hydraulicsProducts: ProductItem[] = [
    {
      title: 'Groupe hydraulique standard',
      desc: 'Centrales hydrauliques compactes pour applications industrielles courantes.',
      href: '../hydraulique',
      icon: <Gauge size={22} className="text-primary" />,
    },
    {
      title: 'Groupe hydraulique sur mesure',
      desc: 'Conception et fabrication de centrales hydrauliques selon vos spécifications.',
      href: '../hydraulique',
      icon: <Gauge size={22} className="text-primary" />,
      badge: 'Sur mesure',
    },
    {
      title: 'Distributeurs hydrauliques',
      desc: 'Distributeurs manuels, électrohydrauliques et proportionnels pour tous types d\'actionneurs.',
      href: '../hydraulique',
      icon: <GitBranch size={22} className="text-primary" />,
    },
    {
      title: 'Vérins hydrauliques',
      desc: 'Vérins simple et double effet, télescopiques, pour toutes charges et courses.',
      href: '../hydraulique',
      icon: <ArrowUpDown size={22} className="text-primary" />,
    },
    {
      title: 'Pompes hydrauliques',
      desc: 'Pompes à engrenages, pistons et palettes pour tous débits et pressions.',
      href: '../hydraulique',
      icon: <Droplets size={22} className="text-primary" />,
    },
  ];

  const bodyworkProducts: ProductItem[] = [
    {
      title: 'Carrosseries sur mesure',
      desc: 'Conception et fabrication de carrosseries spéciales pour véhicules utilitaires.',
      href: '../carrosserie',
      icon: <Truck size={22} className="text-primary" />,
      badge: 'Sur mesure',
    },
    {
      title: 'Bennes basculantes',
      desc: 'Bennes AR, 3 côtés, ampliroll pour véhicules de travaux et collecte.',
      href: '../carrosserie',
      icon: <Package size={22} className="text-primary" />,
    },
    {
      title: 'Grues auxiliaires',
      desc: 'Installation et maintenance de grues Palfinger, Hiab, Fassi sur camions.',
      href: '../carrosserie',
      icon: <LifeBuoy size={22} className="text-primary" />,
    },
    {
      title: 'Hayons élévateurs',
      desc: 'Hayons colonne, bras et sous-caisse pour faciliter le chargement/déchargement.',
      href: '../carrosserie',
      icon: <ArrowUpDown size={22} className="text-primary" />,
    },
  ];

  const renderProductGrid = (products: ProductItem[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((p, i) => (
        <Link
          key={i}
          href={p.href}
          className="group bg-white rounded-xl border border-gray-100 hover:border-[#b8f568]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="h-36 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              {p.icon}
            </div>
            {p.badge && (
              <span className="absolute top-3 right-3 bg-[#b8f568] text-[#467000] text-xs font-bold px-2 py-0.5 rounded">
                {p.badge}
              </span>
            )}
          </div>
          <div className="p-5">
            <h3 className="font-barlow font-semibold text-primary text-sm mb-1.5 group-hover:text-[#467000] transition-colors">{p.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.desc}</p>
            <div className="flex items-center gap-1 text-[#b8f568] text-xs font-semibold">
              {tCommon('learnMore')} <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          pattern="page"
          size="small"
        />

        {/* Electronics section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#b8f568] text-sm font-semibold uppercase tracking-wider">Division 01</span>
                <SectionTitle title={t('sectionsElectronics')} />
              </div>
              <Link href="../electronique" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-[#b8f568] transition-colors">
                {tNav('electronics')} <ArrowRight size={14} />
              </Link>
            </div>
            {renderProductGrid(electronicsProducts)}
          </div>
        </section>

        {/* Hydraulics section */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#b8f568] text-sm font-semibold uppercase tracking-wider">Division 02</span>
                <SectionTitle title={t('sectionsHydraulics')} />
              </div>
              <Link href="../hydraulique" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-[#b8f568] transition-colors">
                {tNav('hydraulics')} <ArrowRight size={14} />
              </Link>
            </div>
            {renderProductGrid(hydraulicsProducts)}
          </div>
        </section>

        {/* Bodywork section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#b8f568] text-sm font-semibold uppercase tracking-wider">Division 03</span>
                <SectionTitle title={t('sectionsBodywork')} />
              </div>
              <Link href="../carrosserie" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-[#b8f568] transition-colors">
                {tNav('bodywork')} <ArrowRight size={14} />
              </Link>
            </div>
            {renderProductGrid(bodyworkProducts)}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-3xl font-bold text-white mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
            <p className="text-white/70 mb-8">Contactez notre équipe pour une solution personnalisée adaptée à votre projet.</p>
            <Link href="../contact" className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-bold px-7 py-3.5 rounded-lg hover:bg-[#9dd84f] transition-colors">
              {tCommon('contactUs')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
