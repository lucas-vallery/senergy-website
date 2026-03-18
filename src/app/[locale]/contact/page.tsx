import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

const team = [
  {
    name: 'Benoît Lallement',
    role: 'Responsable SAV',
    email: 'benoit.lallement@senergy.fr',
    initials: 'BL',
    specialty: 'Service Après-Vente',
  },
  {
    name: 'David Vallery',
    role: 'Commercial',
    email: 'david.vallery@senergy.fr',
    initials: 'DV',
    specialty: 'Ventes & Devis',
  },
  {
    name: 'José Charoy',
    role: 'Technicien',
    email: 'jose.charoy@senergy.fr',
    initials: 'JC',
    specialty: 'Support Technique',
  },
  {
    name: 'Emeric Baudouin',
    role: 'Technicien',
    email: 'emeric.baudouin@senergy.fr',
    initials: 'EB',
    specialty: 'Support Technique',
  },
];

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

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

        {/* Main contact section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <SectionTitle title={t('formTitle')} />
                <div className="bg-lightbg rounded-2xl p-8 border border-gray-100">
                  <ContactForm />
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-6">
                <SectionTitle title={t('infoTitle')} />

                {/* Address card */}
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">{t('addressLabel')}</p>
                      <p className="text-sm text-white">6 Rue du Capitaine Georges Madon</p>
                      <p className="text-sm text-white/80">ZAC La Croix Blandin</p>
                      <p className="text-sm text-white/80">51100 REIMS — France</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+33326790050"
                    className="flex items-center gap-3 bg-lightbg rounded-xl px-4 py-3.5 border border-gray-100 hover:border-navy/20 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                      <Phone size={16} className="text-navy group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400">{t('phoneLabel')}</p>
                      <p className="text-sm font-semibold text-navy">(+33) (0)3.26.79.00.50</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contactsite@senergy.fr"
                    className="flex items-center gap-3 bg-lightbg rounded-xl px-4 py-3.5 border border-gray-100 hover:border-navy/20 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                      <Mail size={16} className="text-navy group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400">{t('emailLabel')}</p>
                      <p className="text-sm font-semibold text-navy">contactsite@senergy.fr</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 bg-lightbg rounded-xl px-4 py-3.5 border border-gray-100">
                    <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center">
                      <Clock size={16} className="text-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400">{t('hoursLabel')}</p>
                      <p className="text-sm font-semibold text-navy">{t('hoursValue')}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={28} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">6 Rue du Capitaine Georges Madon</p>
                      <p className="text-xs text-gray-400">51100 REIMS</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white border-t border-gray-100">
                    <a
                      href="https://maps.google.com/?q=6+Rue+du+Capitaine+Georges+Madon+51100+Reims"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-navy font-semibold hover:text-orange transition-colors flex items-center gap-1"
                    >
                      Ouvrir dans Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('teamTitle')} center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {team.map((member) => (
                <div key={member.email} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-barlow font-bold text-white text-base">{member.initials}</span>
                    </div>
                    <div>
                      <p className="font-barlow font-semibold text-navy text-sm">{member.name}</p>
                      <p className="text-xs text-orange font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-3 bg-lightbg rounded px-2 py-1">{member.specialty}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-navy transition-colors break-all"
                  >
                    <Mail size={11} />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
