import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <Header />
      <main className="">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          pattern="page"
          size="small"
        />

        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Contact info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-primary rounded-xl p-8 text-white">
                  <h2 className="font-headline font-bold text-xl mb-6">Nos coordonnées</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#b8f568] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold mb-0.5">Adresse</p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          6 Rue du Capitaine Georges Madon<br />
                          ZAC La Croix Blandin<br />
                          51100 REIMS — France
                        </p>
                      </div>
                    </div>
                    <a
                      href="tel:+33326790050"
                      className="flex items-center gap-3 hover:text-[#b8f568] transition-colors"
                    >
                      <Phone size={18} className="text-[#b8f568] flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Téléphone</p>
                        <p className="text-white/60 text-sm">(+33) (0)3.26.79.00.50</p>
                      </div>
                    </a>
                    <a
                      href="mailto:contactsite@senergy.fr"
                      className="flex items-center gap-3 hover:text-[#b8f568] transition-colors"
                    >
                      <Mail size={18} className="text-[#b8f568] flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Email</p>
                        <p className="text-white/60 text-sm">contactsite@senergy.fr</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-[#b8f568] flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Horaires</p>
                        <p className="text-white/60 text-sm">Lun – Ven : 8h00 – 18h00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SAV direct contact */}
                <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
                  <p className="font-headline font-bold text-on-surface text-sm mb-1">
                    Service Après-Vente
                  </p>
                  <p className="text-on-surface-variant text-xs mb-3">
                    Pour toute demande technique urgente
                  </p>
                  <a
                    href="mailto:benoit.lallement@senergy.fr"
                    className="text-sm text-primary hover:text-primary-container transition-colors font-medium"
                  >
                    benoit.lallement@senergy.fr
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20">
                  <h2 className="font-headline font-bold text-on-surface text-xl mb-6">
                    {t('formTitle')}
                  </h2>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
