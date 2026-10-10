import React from 'react';
import { Flame, Phone, MapPin, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white shadow-md shadow-orange-600/30">
              <Flame className="h-5 w-5 fill-white text-white" />
            </span>
            <div>
              <span className="text-xl font-black text-white">
                SINO <span className="text-orange-500 font-bold">| سِينو</span>
              </span>
              <p className="text-xs text-zinc-400">
                {RESTAURANT_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-zinc-300">
            <a href="tel:01212202241" className="flex items-center gap-1.5 hover:text-white transition-colors" dir="ltr">
              <Phone className="h-3.5 w-3.5 text-orange-400" />
              <span>012 12202241</span>
            </a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-orange-400" />
              <span>الهانوفيل، الإسكندرية</span>
            </div>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span className="text-amber-400 font-bold">مفتوح حتى 05:00 فجراً</span>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>
            © {new Date().getFullYear()} مطعم SINO الإسكندرية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>صُنع بعناية وجودة إسكندرانية أصيلة</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
