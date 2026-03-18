import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  pattern?: 'home' | 'page';
  size?: 'large' | 'medium' | 'small';
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  pattern = 'page',
}: HeroProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  if (pattern === 'page') {
    return (
      <section className="relative bg-primary-container pt-[calc(104px+4rem)] pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-1/2 h-full"
            style={{
              backgroundImage:
                'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8f568]" />
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <h1 className="font-headline text-white text-5xl font-black tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-on-primary-container max-w-2xl text-lg leading-relaxed">
            {subtitle}
          </p>
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold px-8 py-3.5 rounded hover:bg-[#9dd84f] transition-all shadow-lg"
                >
                  {ctaPrimary.label}
                  <ArrowRight size={18} />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-headline font-bold px-8 py-3.5 rounded hover:bg-white/20 transition-all"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Home hero
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src={`${basePath}/images/hero-grappin-ferraille.png`}
          alt="Équipement industriel Senergy"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <span className="font-label text-[#b8f568] tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">
            Spécialiste Levage &amp; Manutention
          </span>
          <h1 className="font-headline font-extrabold text-white text-6xl md:text-7xl leading-[1.05] tracking-tighter mb-8">
            {title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>
          <div className="flex items-center gap-6">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="bg-[#b8f568] text-[#467000] px-8 py-4 rounded font-headline font-black uppercase tracking-wider text-sm shadow-lg hover:-translate-y-1 transition-all"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="flex items-center gap-3 text-white font-headline font-bold uppercase tracking-widest text-xs group"
              >
                <span className="w-12 h-px bg-[#b8f568] group-hover:w-16 transition-all" />
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Asymmetric decor */}
      <div className="absolute bottom-10 right-12 hidden lg:block opacity-20 select-none pointer-events-none">
        <span className="font-label text-white text-[120px] font-black leading-none">
          SENERGY-24
        </span>
      </div>
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8f568]" />
    </section>
  );
}
