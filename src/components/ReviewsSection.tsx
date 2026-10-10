import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { REVIEWS_LIST, RESTAURANT_INFO } from '../data/restaurantData.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with verified badge */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>تقييمات موثقة من زبائن حقيقيين على Google Maps</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              ثقة أهل الهانوفيل والإسكندرية في SINO
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              5.0 / 5.0
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_LIST.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all shadow-sm"
            >
              <div>
                {/* Author and Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm shadow ${review.avatarColor}`}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {review.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Tag */}
              <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>مراجعة مؤكدة على خرائط جوجل</span>
                </span>
                <span>مطعم SINO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Message Showcase from screenshots */}
        <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-950/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 mb-1">
                <Heart className="h-4 w-4 fill-orange-400 text-orange-400" />
                <span>كلمة من إدارة مطعم SINO:</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {RESTAURANT_INFO.aboutText}
              </p>
            </div>

            <div className="text-left shrink-0">
              <span className="text-sm font-extrabold text-amber-400">
                {RESTAURANT_INFO.tagline}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
