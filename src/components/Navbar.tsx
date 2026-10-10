import React from 'react';
import { ShoppingBag, Phone, Flame } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg shadow-orange-600/30 group-hover:bg-orange-500 transition-colors">
            <Flame className="h-5 w-5 fill-white text-white animate-pulse" />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white">
              SINO <span className="text-orange-500 font-bold">| سِينو</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a
            href="#menu"
            className="text-orange-400 font-bold hover:text-orange-300 transition-colors"
          >
            المنيو والطلب أونلاين
          </a>

          <a 
            href="#combos" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            عروض الكومبو
          </a>

          <a 
            href="#reviews" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            آراء وتقييمات العملاء
          </a>

          <a 
            href="#location" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            الموقع بالهانوفيل
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:01212202241"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-orange-500" />
            <span dir="ltr">012 12202241</span>
          </a>

          {/* Cart Trigger Button */}
          <button
            onClick={onOpenCart}
            aria-label="سلة المشتريات"
            className="relative flex items-center gap-2 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-orange-600/30 hover:bg-orange-500 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">السلة</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] font-black text-orange-700 tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

