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
        <div className={`inline-flex items-center gap-2 text-orange text-sm font-semibold uppercase tracking-wider mb-3`}>
          <span className="w-6 h-0.5 bg-orange" />
          {accent}
        </div>
      )}
      <h2 className={`font-barlow text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${center ? 'justify-center' : ''}`}>
        <div className="flex gap-1">
          <span className="w-8 h-1 bg-orange rounded-full" />
          <span className="w-2 h-1 bg-orange/40 rounded-full" />
          <span className="w-2 h-1 bg-orange/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
