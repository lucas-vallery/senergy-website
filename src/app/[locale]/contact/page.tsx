import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactWizard from '@/components/ContactWizard';

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

  return (
    <>
      <Header />
      <main className="pt-20 bg-surface min-h-screen">
        <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left col */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <span className="font-label text-secondary font-bold uppercase tracking-widest text-xs block mb-4">
                  Contactez-nous
                </span>
                <h1 className="font-headline font-black text-on-surface text-5xl tracking-tight leading-tight">
                  Engineering
                  <br />
                  <span className="text-primary">Precision.</span>
                </h1>
              </div>

              {/* Why Senergy card */}
              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="font-headline font-bold text-base mb-6 text-[#b8f568]">
                  Pourquoi Senergy ?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: 'schedule',
                      title: 'Réponse en 4h',
                      desc: 'Notre équipe SAV intervient rapidement.',
                    },
                    {
                      icon: 'verified',
                      title: 'Certifications',
                      desc: 'Distributeur officiel IMET, équipements CE.',
                    },
                    {
                      icon: 'workspace_premium',
                      title: 'ISO Quality',
                      desc: "30 ans d'expertise industrielle à Reims.",
                    },
                  ].map(item => (
                    <div key={item.icon} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#b8f568] text-xl flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-headline font-bold text-sm text-white">{item.title}</p>
                        <p className="text-white/60 text-xs font-label leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                  <a
                    href="tel:+33326790050"
                    className="flex items-center gap-2 text-[#b8f568] font-headline font-bold text-sm hover:underline"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    (0)3.26.79.00.50
                  </a>
                  <a
                    href="mailto:contactsite@senergy.fr"
                    className="flex items-center gap-2 text-white/60 text-xs font-label hover:text-[#b8f568] transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    contactsite@senergy.fr
                  </a>
                  <p className="text-white/40 text-xs font-label pl-6">Lun–Ven 8h00–18h00</p>
                </div>
              </div>
            </div>

            {/* Right col — Wizard Form */}
            <div className="lg:col-span-8">
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm ring-1 ring-outline-variant/20">
                <ContactWizard />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
