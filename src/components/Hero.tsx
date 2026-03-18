import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  pattern?: 'home' | 'page';
  size?: 'large' | 'medium' | 'small';
}

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary, pattern = 'page', size = 'medium' }: HeroProps) {
  const sizeClasses = {
    large: 'min-h-[85vh]',
    medium: 'min-h-[45vh]',
    small: 'min-h-[30vh]',
  };

  if (pattern === 'page') {
    return (
      <section className="relative flex items-center bg-navy-dark overflow-hidden py-12">
        {/* Accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange-light to-orange" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-barlow text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              {title}
            </h1>
            <p className="text-base text-white/70 leading-relaxed">
              {subtitle}
            </p>
            {(ctaPrimary || ctaSecondary) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3 rounded-lg hover:bg-orange-dark transition-all shadow-md"
                  >
                    {ctaPrimary.label}
                    <ArrowRight size={18} />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/20 transition-all"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative flex items-center ${sizeClasses[size]} bg-navy overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/hero-grappin-ferraille.png`}
          alt="Grappin ferraille industriel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-navy opacity-80" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-white" />
          <div className="absolute top-32 right-32 w-64 h-64 rounded-full border border-white" />
          <div className="absolute -top-20 right-20 w-72 h-72 rounded-full border border-orange" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange-light to-orange" />
      </div>

      {/* Home hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/30 text-orange text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange rounded-full" />
            30 ans d&apos;expertise industrielle
          </div>
          <h1 className="font-barlow text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-dark transition-all hover:gap-3 shadow-lg shadow-orange/30"
              >
                {ctaPrimary.label}
                <ArrowRight size={18} />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-all"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
