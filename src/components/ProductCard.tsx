import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  variant?: 'default' | 'featured';
}

export default function ProductCard({ title, description, category, href, icon, badge, variant = 'default' }: ProductCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={href} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-orange/30 hover:shadow-xl transition-all duration-300">
        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center overflow-hidden">
          <div className="w-20 h-20 bg-navy/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon || (
              <div className="w-10 h-10 bg-navy/20 rounded-lg" />
            )}
          </div>
          {badge && (
            <span className="absolute top-3 right-3 bg-orange text-white text-xs font-semibold px-2 py-1 rounded-md">
              {badge}
            </span>
          )}
          {/* Orange corner accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange/0 via-orange to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {/* Content */}
        <div className="p-5">
          <span className="text-xs font-semibold text-orange uppercase tracking-wider">{category}</span>
          <h3 className="font-barlow font-semibold text-navy text-lg mt-1 mb-2 group-hover:text-orange transition-colors">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
          <div className="flex items-center gap-1 text-orange text-sm font-semibold">
            <span>En savoir plus</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-navy/20 hover:shadow-lg transition-all duration-300 p-5">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange/10 transition-colors">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-orange uppercase tracking-wider">{category}</span>
          <h3 className="font-barlow font-semibold text-navy text-base mt-0.5 mb-1.5 group-hover:text-orange transition-colors">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
        <ArrowRight size={16} className="text-gray-300 group-hover:text-orange group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}
