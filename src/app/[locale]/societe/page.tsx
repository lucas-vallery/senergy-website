import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Target, Zap, Heart, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'company' });
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
  },
  {
    name: 'David Vallery',
    role: 'Commercial',
    email: 'david.vallery@senergy.fr',
    initials: 'DV',
  },
  {
    name: 'José Charoy',
    role: 'Technicien',
    email: 'jose.charoy@senergy.fr',
    initials: 'JC',
  },
  {
    name: 'Emeric Baudouin',
    role: 'Technicien',
    email: 'emeric.baudouin@senergy.fr',
    initials: 'EB',
  },
];

export default async function CompanyPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'company' });

  const values = [
    { icon: <Target size={24} className="text-[#b8f568]" />, title: t('value1Title'), desc: t('value1Desc') },
    { icon: <Heart size={24} className="text-[#b8f568]" />, title: t('value2Title'), desc: t('value2Desc') },
    { icon: <Zap size={24} className="text-[#b8f568]" />, title: t('value3Title'), desc: t('value3Desc') },
    { icon: <Clock size={24} className="text-[#b8f568]" />, title: t('value4Title'), desc: t('value4Desc') },
  ];

  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <Hero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          pattern="page"
          size="medium"
        />

        {/* History */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionTitle title={t('historyTitle')} />
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{t('historyText1')}</p>
                  <p>{t('historyText2')}</p>
                  <p>{t('historyText3')}</p>
                </div>
              </div>
              {/* Timeline visual */}
              <div className="space-y-6">
                {[
                  { year: '1990s', label: 'Création de SENERGY à Reims', desc: 'Fondation de l\'entreprise spécialisée dans le levage industriel' },
                  { year: '2000s', label: 'Développement des 3 divisions', desc: 'Expansion vers l\'hydraulique et la carrosserie industrielle' },
                  { year: '2010s', label: 'Partenariat officiel IMET', desc: 'Distributeur officiel des radiocommandes IMET en France' },
                  { year: 'Aujourd\'hui', label: '30+ ans d\'expertise', desc: 'Leader régional en levage et manutention industrielle', current: true },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${item.current ? 'bg-[#b8f568] text-[#467000]' : 'bg-primary/10 text-primary'}`}>
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-0.5 h-full bg-gray-100 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-semibold text-[#b8f568] uppercase tracking-wider">{item.year}</span>
                      <h4 className="font-barlow font-semibold text-primary text-sm mt-0.5">{item.label}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('valuesTitle')} center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {values.map((val, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#b8f568]/30 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 bg-[#b8f568]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-barlow font-semibold text-primary mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('teamTitle')} subtitle={t('teamSubtitle')} center />
            <p className="text-center text-gray-500 max-w-xl mx-auto -mt-4 mb-10">{t('teamText')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.email} className="bg-surface-container-low rounded-2xl p-6 text-center border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-barlow font-bold text-white text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="font-barlow font-semibold text-primary text-lg">{member.name}</h3>
                  <p className="text-sm text-[#b8f568] font-medium mt-1 mb-3">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-500 hover:text-primary transition-colors break-all"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle title={t('certTitle')} light />
                <p className="text-white/70 leading-relaxed">{t('certText')}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {['Certification CE', 'Directive Machine 2006/42/CE', 'Distributeur officiel IMET', 'Normes EN 13135'].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                      <div className="w-2 h-2 bg-[#b8f568] rounded-full flex-shrink-0" />
                      <span className="text-white/70 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle title={t('locationTitle')} light />
                <p className="text-white/70 leading-relaxed mb-6">{t('locationText')}</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#b8f568] flex-shrink-0 mt-0.5" />
                    <div className="text-white/70 text-sm">
                      <p className="font-semibold text-white">SAS SENERGY</p>
                      <p>6 Rue du Capitaine Georges Madon</p>
                      <p>ZAC La Croix Blandin</p>
                      <p>51100 REIMS — France</p>
                    </div>
                  </div>
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
