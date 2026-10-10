import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Details info */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 mb-1">
              <MapPin className="h-4 w-4" />
              <span>فرعنا الرئيسي بالإسكندرية</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              تفضل بزيارتنا أو اطلب دليفري
            </h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              يسعدنا استقبالكم في فرعنا بشارع الهانوفيل الرئيسي أو توصيل وجباتكم ساخنة ومقرمشة أينما كنتم.
            </p>

            <div className="mt-6 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-zinc-400">العنوان الدقيق:</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {RESTAURANT_INFO.address}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-zinc-400">مواعيد العمل:</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {RESTAURANT_INFO.hours}
                  </div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold">
                    خدمة الطلبات والتوصيل مستمرة حتى الفجر
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                <Phone className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-zinc-400">أرقام التليفون والدليفري:</div>
                  <div className="text-sm font-semibold text-white mt-0.5" dir="ltr">
                    <a href="tel:01212202241" className="hover:text-orange-400 transition-colors">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    اتصال هاتفي مباشر أو محادثة فورية عبر واتساب
                  </div>
                </div>
              </div>
            </div>

            {/* Services features */}
            <div className="mt-6">
              <div className="text-xs font-bold text-zinc-400 mb-2">الخدمات المتوفرة بالمطعم:</div>
              <div className="grid grid-cols-2 gap-2">
                {RESTAURANT_INFO.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="mt-8">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/20 hover:bg-orange-500 transition-all cursor-pointer"
              >
                <Navigation className="h-4 w-4" />
                <span>فتح اللوكيشن على خرائط Google</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white">الفرع مفتوح الآن لاستقبال الطلبات</span>
              </div>
              <span className="text-xs text-zinc-400">الهانوفيل - الإسكندرية</span>
            </div>

            {/* Visual representation of Google Maps pin */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800 flex items-center justify-center p-4 text-center">
              {/* Background Map Graphic Accent */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-xl shadow-orange-600/40 mb-3 animate-bounce">
                  <MapPin className="h-7 w-7" />
                </div>
                <h4 className="text-base font-black text-white">
                  SINO · مطعم سينو
                </h4>
                <p className="text-xs text-zinc-300 mt-1 max-w-xs">
                  أمام بن دهب، شارع الهانوفيل، قصر القويري الرئيسي
                </p>
                <span className="text-[11px] text-amber-400 font-bold mt-2 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  أصل الحادق ... وسر الحلو
                </span>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs font-bold text-zinc-100 hover:bg-zinc-700 transition-colors"
                >
                  <span>عرض الاتجاهات المباشرة (Directions)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
