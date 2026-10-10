import React, { useState, useMemo, useCallback } from 'react';
import { Plus, Check, Flame, Utensils } from 'lucide-react';
import { MENU_ITEMS, MenuItem, EXTRAS_LIST } from '../data/restaurantData.ts';

export interface CartItem {
  cartItemId: string;
  itemId: string;
  nameAr: string;
  selectedSize?: string;
  unitPrice: number;
  quantity: number;
  extras: { id: string; nameAr: string; price: number }[];
  totalPrice: number;
  notes?: string;
}

interface MenuSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'كل الأصناف' },
  { id: 'hawawshi', label: 'ركن الحواوشي (أصل الحادق)' },
  { id: 'combo', label: 'كومبو سينو (عروض التوفير)' },
  { id: 'zalabia', label: 'ركن الزلابيا (سر الحلو)' },
  { id: 'potato', label: 'البطاطس والإضافات' },
  { id: 'beverages', label: 'المشروبات والعصائر' },
];

// 100% stable SVG data URI fallback that does not require network and cannot trigger an error loop
const FALLBACK_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-weight='bold' font-size='22' fill='%23f97316'%3ESINO · سِينو%3C/text%3E%3C/svg%3E";

const getItemImage = (item: MenuItem): string => {
  if (item.image) return item.image;
  if (item.category === 'hawawshi') return '/images/hawawshi_signature_1791391938600.jpg';
  if (item.category === 'zalabia') return '/images/zalabia_chocolate_mix_1791391951151.jpg';
  if (item.category === 'combo') return '/images/sino_combo_meal_1791391961575.jpg';
  if (item.category === 'potato') return '/images/potato_loaded_sauces_1791564385843.jpg';
  if (item.category === 'beverages') return '/images/refreshing_drinks_ice_1791564417118.jpg';
  return '/images/hero_sino_feast_1791391926279.jpg';
};

interface MenuItemCardProps {
  item: MenuItem;
  imageSrc: string;
  isJustAdded: boolean;
  onCustomize: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = React.memo(({
  item,
  imageSrc,
  isJustAdded,
  onCustomize,
  onQuickAdd,
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src.startsWith('data:image/svg+xml')) return;
    target.src = FALLBACK_PLACEHOLDER;
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 hover:border-zinc-700 hover:bg-zinc-900 transition-all shadow-sm">
      <div>
        {/* Item Image with Fallback */}
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-zinc-950">
          <img
            src={imageSrc}
            alt={item.nameAr}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          {item.popular && (
            <div className="absolute top-2.5 right-2.5 rounded-md bg-orange-600/90 px-2 py-0.5 text-[11px] font-bold text-white shadow">
              الأكثر طلباً
            </div>
          )}
        </div>

        {/* Title & English Subtitle */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
            {item.nameAr}
          </h3>
        </div>

        {item.nameEn && (
          <p className="text-xs text-zinc-400 mt-0.5 font-medium" dir="ltr">
            {item.nameEn}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
          {item.descriptionAr}
        </p>
      </div>

      {/* Footer with Price and Add Action */}
      <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-amber-400 tabular-nums">
              {item.price}
            </span>
            <span className="text-xs font-semibold text-zinc-400">ج.م</span>
          </div>
          {item.sizes && item.sizes.length > 1 && (
            <span className="text-[11px] text-zinc-400">
              يبدأ من {item.sizes[0].price} ج.م
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {item.sizes && item.sizes.length > 1 ? (
            <button
              onClick={() => onCustomize(item)}
              className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-500 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>اختيار الحجم</span>
            </button>
          ) : item.allowPizzaWesh ? (
            <button
              onClick={() => onCustomize(item)}
              className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-500 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>تخصيص وإضافة</span>
            </button>
          ) : (
            <button
              onClick={() => onQuickAdd(item)}
              disabled={isJustAdded}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                isJustAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-orange-600 text-white hover:bg-orange-500 active:scale-95'
              }`}
            >
              {isJustAdded ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>تمت الإضافة!</span>
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5" />
                  <span>إضافة للسلة</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

MenuItemCard.displayName = 'MenuItemCard';

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCustomizingItem, setSelectedCustomizingItem] = useState<MenuItem | null>(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    if (activeCategory === 'potato') {
      return MENU_ITEMS.filter((item) => item.category === 'potato' || item.category === 'addons');
    }
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const triggerAddedFeedback = useCallback((id: string) => {
    setJustAddedId(id);
    const timer = setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenCustomize = useCallback((item: MenuItem) => {
    setSelectedCustomizingItem(item);
    setSelectedSizeIndex(0);
    setSelectedExtras([]);
    setNotes('');
  }, []);

  const handleQuickAdd = useCallback((item: MenuItem) => {
    if (item.sizes && item.sizes.length > 1) {
      handleOpenCustomize(item);
      return;
    }

    const cartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      itemId: item.id,
      nameAr: item.nameAr,
      unitPrice: item.price,
      quantity: 1,
      extras: [],
      totalPrice: item.price,
    };

    onAddToCart(cartItem);
    triggerAddedFeedback(item.id);
  }, [handleOpenCustomize, onAddToCart, triggerAddedFeedback]);

  const handleConfirmCustomize = useCallback(() => {
    if (!selectedCustomizingItem) return;

    let basePrice = selectedCustomizingItem.price;
    let sizeLabel: string | undefined = undefined;

    if (selectedCustomizingItem.sizes && selectedCustomizingItem.sizes.length > 0) {
      const sizeObj = selectedCustomizingItem.sizes[selectedSizeIndex];
      basePrice = sizeObj.price;
      sizeLabel = sizeObj.label;
    }

    const appliedExtras = EXTRAS_LIST.filter((e) => selectedExtras.includes(e.id));
    const extrasTotal = appliedExtras.reduce((sum, e) => sum + e.price, 0);
    const itemTotal = basePrice + extrasTotal;

    const cartItem: CartItem = {
      cartItemId: `${selectedCustomizingItem.id}-${Date.now()}`,
      itemId: selectedCustomizingItem.id,
      nameAr: selectedCustomizingItem.nameAr,
      selectedSize: sizeLabel,
      unitPrice: itemTotal,
      quantity: 1,
      extras: appliedExtras,
      totalPrice: itemTotal,
      notes: notes.trim() || undefined,
    };

    onAddToCart(cartItem);
    triggerAddedFeedback(selectedCustomizingItem.id);
    setSelectedCustomizingItem(null);
  }, [notes, onAddToCart, selectedCustomizingItem, selectedExtras, selectedSizeIndex, triggerAddedFeedback]);

  return (
    <section id="menu" className="py-16 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
              <Flame className="h-4 w-4" />
              <span>منيو مطعم SINO الرسمي بالإسكندرية</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              قائمة الطعام والوجبات
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-400 max-w-md">
            جميع الأسعار بالجنيه المصري (ج.م). يتم تجهيز الحواوشي فريش عند الطلب ويصلكم ساخناً ومقرمشاً.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              imageSrc={getItemImage(item)}
              isJustAdded={justAddedId === item.id}
              onCustomize={handleOpenCustomize}
              onQuickAdd={handleQuickAdd}
            />
          ))}
        </div>
      </div>

      {/* Customize & Size Selection Modal */}
      {selectedCustomizingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-400">تخصيص الطلب</span>
                <h3 className="text-xl font-black text-white mt-0.5">
                  {selectedCustomizingItem.nameAr}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCustomizingItem(null)}
                aria-label="إغلاق النافذة"
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Sizes (Small / Medium / Large) */}
            {selectedCustomizingItem.sizes && selectedCustomizingItem.sizes.length > 0 && (
              <div className="mt-5">
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  اختر الحجم المناسب:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {selectedCustomizingItem.sizes.map((sz, index) => (
                    <button
                      key={sz.label}
                      onClick={() => setSelectedSizeIndex(index)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        selectedSizeIndex === index
                          ? 'border-orange-500 bg-orange-600/20 text-orange-400 shadow-sm'
                          : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <span className="text-sm">{sz.label}</span>
                      <span className="text-amber-400 font-extrabold mt-1 tabular-nums">
                        {sz.price} ج.م
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Extras like Pizza Wesh or Cheese */}
            {selectedCustomizingItem.allowPizzaWesh && (
              <div className="mt-5">
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  إضافات وتوبينج سبيشال:
                </label>
                <div className="space-y-2">
                  {EXTRAS_LIST.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <label
                        key={extra.id}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          isChecked
                            ? 'border-amber-500/50 bg-amber-500/10 text-white'
                            : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedExtras([...selectedExtras, extra.id]);
                              } else {
                                setSelectedExtras(selectedExtras.filter((id) => id !== extra.id));
                              }
                            }}
                            className="h-4 w-4 rounded accent-orange-600"
                          />
                          <span>{extra.nameAr}</span>
                        </div>
                        <span className="text-amber-400 font-bold tabular-nums">
                          +{extra.price} ج.م
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special notes */}
            <div className="mt-4">
              <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                ملاحظات خاصة (بدون فلفل، تسوية زيادة، إلخ):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="مثال: مقرمش زيادة، صوص كاتشب إضافي..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
              />
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setSelectedCustomizingItem(null)}
                className="rounded-xl px-4 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={handleConfirmCustomize}
                className="flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-500 shadow-md shadow-orange-600/30 cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>إضافة للطلب</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
