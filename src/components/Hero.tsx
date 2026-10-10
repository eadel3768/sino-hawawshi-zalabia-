import React from 'react';
import { MapPin, Star, Clock, UtensilsCrossed, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_sino_feast_1791391926279.jpg"
          alt="سفرة مطعم سينو - حواوشي وزلابيا إسكندراني"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.startsWith('data:image/svg+xml')) return;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600' width='1200' height='600'%3E%3Crect width='1200' height='600' fill='%2318181b'/%3E%3C/svg%3E";
          }}
          className="h-full w-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-zinc-950/60 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Trust Metadata Line (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-300 mb-4">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{RESTAURANT_INFO.rating.toFixed(1)} تقييم ممتاز على خرائط Google</span>
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <MapPin className="h-3.5 w-3.5 text-orange-400" />
              <span>شارع الهانوفيل، الإسكندرية</span>
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Clock className="h-3.5 w-3.5" />
              <span>شغالين لـ 5:00 فجراً</span>
            </span>
          </div>

          {/* Main Brand Headline */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-tight">
            SINO <span className="text-orange-500 font-extrabold">· سِينو</span>
            <span className="block text-2xl sm:text-4xl font-extrabold text-amber-400 mt-2">
              {RESTAURANT_INFO.tagline}
            </span>
          </h1>

          {/* SINO Story Description */}
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            أقوى تجربة حواوشي إسكندراني مقرمش بلحمة صافي وتتبيلة سرية، مع زلابيا سخنة ذهبية غرقانة شيكولاتة ولوتس. جودة ونظافة باعتراف أهل إسكندرية!
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreMenu}
              className="flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-600/30 hover:bg-orange-500 active:scale-95 transition-all cursor-pointer"
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>تصفح المنيو واطلب عبر واتساب</span>
            </button>

            <a
              href="tel:01212202241"
              className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-3.5 text-sm font-bold text-zinc-200 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 text-orange-400" />
              <span dir="ltr">012 12202241</span>
            </a>
          </div>

          {/* Feature Highlights Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-800/80 pt-6 sm:grid-cols-4">
            <div>
              <div className="text-xl font-bold text-white tabular-nums">100%</div>
              <div className="text-xs text-zinc-400 mt-0.5">لحمة صافي وتتبيلة خاصة</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums">5.0 ★</div>
              <div className="text-xs text-zinc-400 mt-0.5">تقييم كامل من زبائن الهانوفيل</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums">05:00 ص</div>
              <div className="text-xs text-zinc-400 mt-0.5">خدمة دليفري وسفري لوش الصبح</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums">سريع ومباشر</div>
              <div className="text-xs text-zinc-400 mt-0.5">طلب بضغطة واحدة على واتساب</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

