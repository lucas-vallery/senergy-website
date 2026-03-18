interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  accent?: string;
}

export default function SectionTitle({ title, subtitle, center = false, light = false, accent }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {accent && (
        <div className="inline-flex items-center gap-2 text-secondary font-label font-bold text-xs uppercase tracking-widest mb-3">
          <span className="w-6 h-0.5 bg-secondary" />
          {accent}
        </div>
      )}
      <h2 className={`font-headline text-3xl md:text-4xl font-black tracking-tight leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-on-surface-variant'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${center ? 'justify-center' : ''}`}>
        <div className="flex gap-1">
          <span className="w-8 h-1 bg-[#b8f568] rounded-full" />
          <span className="w-2 h-1 bg-[#b8f568]/40 rounded-full" />
          <span className="w-2 h-1 bg-[#b8f568]/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
