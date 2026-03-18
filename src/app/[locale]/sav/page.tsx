import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Zap, Shield, Package, Headphones, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'sav' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function SAVPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'sav' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const services = [
    {
      icon: <Zap size={24} className="text-primary" />,
      title: t('service1Title'),
      desc: t('service1Desc'),
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: t('service2Title'),
      desc: t('service2Desc'),
    },
    {
      icon: <Package size={24} className="text-primary" />,
      title: t('service3Title'),
      desc: t('service3Desc'),
    },
    {
      icon: <Headphones size={24} className="text-primary" />,
      title: t('service4Title'),
      desc: t('service4Desc'),
    },
  ];

  const commitments = [
    t('commitment1'),
    t('commitment2'),
    t('commitment3'),
    t('commitment4'),
  ];

  const hotlinePhone = t('hotlinePhone');
  const hotlineEmail = t('hotlineEmail');
  const contactSAVEmail = t('contactSAVEmail');

  return (
    <>
      <Header />
      <main className="">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          ctaPrimary={{ label: tCommon('contactUs'), href: `/${locale}/contact` }}
          pattern="page"
          size="medium"
        />

        {/* Intro + Hotline */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionTitle title={t('introTitle')} />
                <p className="text-on-surface-variant leading-relaxed mb-8">{t('introText')}</p>
                <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-headline font-bold text-white text-xl">BL</span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-on-surface">{t('contactSAV')}</p>
                      <p className="text-secondary text-sm font-medium mb-2">
                        {t('contactSAVRole')}
                      </p>
                      <a
                        href={`mailto:${contactSAVEmail}`}
                        className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <Mail size={13} />
                        {contactSAVEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotline */}
              <div className="bg-primary rounded-xl p-8 text-white">
                <div className="w-12 h-12 bg-[#b8f568]/20 rounded-xl flex items-center justify-center mb-5">
                  <Phone size={22} className="text-[#b8f568]" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3">{t('hotlineTitle')}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{t('hotlineText')}</p>
                <div className="space-y-3">
                  <a
                    href="tel:+33326790050"
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 hover:bg-white/20 transition-colors"
                  >
                    <Phone size={18} className="text-[#b8f568] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/60">Téléphone</p>
                      <p className="font-headline font-semibold">{hotlinePhone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${hotlineEmail}`}
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 hover:bg-white/20 transition-colors"
                  >
                    <Mail size={18} className="text-[#b8f568] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-white/60">Email</p>
                      <p className="font-headline font-semibold">{hotlineEmail}</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-5 bg-white/5 rounded-lg px-3 py-2">
                  <Clock size={14} className="text-[#b8f568] flex-shrink-0" />
                  <p className="text-white/60 text-sm">Lun – Ven : 8h00 – 18h00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop photos */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image
                src={`${basePath}/images/sav-atelier-1.jpg`}
                alt="Atelier SAV Senergy"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full h-64 object-cover"
              />
              <Image
                src={`${basePath}/images/sav-atelier-2.jpg`}
                alt="Atelier SAV Senergy — vue 2"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full h-64 object-cover"
              />
              <Image
                src={`${basePath}/images/sav-intervention.jpg`}
                alt="Intervention terrain SAV Senergy"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-12">
            <SectionTitle title="Nos prestations SAV" center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 hover:border-primary/20 hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {s.icon}
                  </div>
                  <h3 className="font-headline font-semibold text-on-surface mb-2">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-12">
            <SectionTitle title={t('commitmentTitle')} center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {commitments.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-surface-container-low rounded-xl px-5 py-4 border border-outline-variant/20"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-on-surface">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAV form */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-12">
            <SectionTitle title={t('formTitle')} subtitle={t('formSubtitle')} center />
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/20 mt-8">
              <ContactForm includeEquipment={true} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
