import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'news' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'news' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const newsItems = [
    {
      title: t('news1Title'),
      date: t('news1Date'),
      excerpt: t('news1Excerpt'),
      category: t('products'),
      featured: true,
    },
    {
      title: t('news2Title'),
      date: t('news2Date'),
      excerpt: t('news2Excerpt'),
      category: t('events'),
    },
    {
      title: t('news3Title'),
      date: t('news3Date'),
      excerpt: t('news3Excerpt'),
      category: 'Services',
    },
    {
      title: t('news4Title'),
      date: t('news4Date'),
      excerpt: t('news4Excerpt'),
      category: t('company'),
    },
    {
      title: t('news5Title'),
      date: t('news5Date'),
      excerpt: t('news5Excerpt'),
      category: 'Formation',
    },
    {
      title: t('news6Title'),
      date: t('news6Date'),
      excerpt: t('news6Excerpt'),
      category: t('company'),
    },
  ];

  const categories = [t('all'), t('products'), t('events'), t('company')];

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

        <section className="py-20 bg-lightbg">
          <div className="max-w-7xl mx-auto px-4">
            {/* Categories filter (static display) */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? 'bg-navy text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured article */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-navy/10 to-navy/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Tag size={28} className="text-orange" />
                    </div>
                    <span className="text-navy/50 text-sm">Photo à venir</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-orange text-white text-xs font-semibold px-2.5 py-1 rounded mb-4 self-start">
                    {newsItems[0].category}
                  </span>
                  <h2 className="font-barlow font-bold text-navy text-2xl mb-3 leading-tight">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
                    <Calendar size={14} />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:text-orange-dark transition-colors self-start"
                  >
                    {t('readMore')} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* News grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.slice(1).map((news, i) => (
                <article key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-navy/20 hover:shadow-lg transition-all">
                  <div className="h-44 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                      <Tag size={20} className="text-navy/40" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-2.5 py-1 rounded mb-3">
                      {news.category}
                    </span>
                    <h3 className="font-barlow font-bold text-navy text-lg mb-2 leading-tight group-hover:text-orange transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar size={12} />
                        {news.date}
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-orange text-xs font-semibold hover:text-orange-dark transition-colors"
                      >
                        {t('readMore')} <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-barlow text-2xl font-bold text-white mb-3">Restez informé</h2>
            <p className="text-white/70 mb-6">Suivez les actualités de SENERGY pour rester à la pointe des innovations en levage industriel.</p>
            <Link href="../contact" className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition-colors">
              {tCommon('contactUs')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
