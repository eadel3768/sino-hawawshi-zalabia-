import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send, MapPin, Phone, User, CheckCircle2 } from 'lucide-react';
import { CartItem } from './MenuSection.tsx';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    // Build formatted WhatsApp message
    let message = `*طلب جديد من موقع مطعم SINO - سينو* 🔥🍔\n`;
    message += `-------------------------------------\n`;
    message += `👤 *الاسم:* ${customerName.trim() || 'عميل محترم'}\n`;
    if (customerPhone.trim()) {
      message += `📞 *الهاتف:* ${customerPhone.trim()}\n`;
    }
    message += `🛵 *نوع الطلب:* ${orderType === 'delivery' ? 'توصيل دليفري' : 'استلام من الفرع بالهانوفيل'}\n`;
    if (orderType === 'delivery' && deliveryAddress.trim()) {
      message += `📍 *العنوان:* ${deliveryAddress.trim()}\n`;
    }
    message += `-------------------------------------\n`;
    message += `*الأصناف المطلوبة:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.nameAr}*`;
      if (item.selectedSize) {
        message += ` (حجم ${item.selectedSize})`;
      }
      message += ` × ${item.quantity}\n`;
      if (item.extras && item.extras.length > 0) {
        message += `   ↳ إضافات: ${item.extras.map((e) => e.nameAr).join(' + ')}\n`;
      }
      if (item.notes) {
        message += `   ↳ ملاحظة: ${item.notes}\n`;
      }
      message += `   السعر: ${item.unitPrice * item.quantity} ج.م\n`;
    });

    message += `-------------------------------------\n`;
    message += `💰 *إجمالي الحساب:* ${subtotal} ج.م\n`;
    if (orderNotes.trim()) {
      message += `📝 *ملاحظات عامة:* ${orderNotes.trim()}\n`;
    }
    message += `\nأصل الحادق ... وسر الحلو – SINO`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedMessage}`;

    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccess(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex h-full w-full max-w-md flex-col justify-between border-r border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-orange-500" />
            <h3 className="text-lg font-bold text-white">سلة المشتريات</h3>
            <span className="text-xs text-zinc-400">({cart.length} صنف)</span>
          </div>
          <button
            onClick={onClose}
            aria-label="إغلاق السلة"
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-900 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-zinc-600 mb-3">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <p className="text-sm font-semibold text-zinc-300">سلتك فارغة حالياً</p>
              <p className="text-xs text-zinc-500 mt-1">تصفح المنيو واطلب الحواوشي والزلابيا المفضلة لديك</p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 text-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-white text-sm">
                          {item.nameAr}
                        </div>
                        {item.selectedSize && (
                          <div className="text-[11px] text-orange-400 mt-0.5">
                            الحجم: {item.selectedSize}
                          </div>
                        )}
                        {item.extras.length > 0 && (
                          <div className="text-[11px] text-zinc-400 mt-0.5">
                            + {item.extras.map((e) => e.nameAr).join('، ')}
                          </div>
                        )}
                        {item.notes && (
                          <div className="text-[11px] text-zinc-500 italic mt-0.5">
                            "{item.notes}"
                          </div>
                        )}
                      </div>

                      <div className="text-sm font-extrabold text-amber-400 tabular-nums">
                        {item.unitPrice * item.quantity} ج.م
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-2">
                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-zinc-500 hover:text-rose-400 p-1 cursor-pointer"
                        title="حذف الصنف"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700 cursor-pointer"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-bold text-white tabular-nums px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700 cursor-pointer"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Details Form */}
              <form onSubmit={handleSendWhatsAppOrder} className="border-t border-zinc-800 pt-4 space-y-3">
                <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    🛵 توصيل دليفري
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      orderType === 'pickup'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    🏪 استلام من الفرع
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                    الاسم بالكامل:
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="اسم حضرتك"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 pr-8 pl-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                    رقم الهاتف:
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="رقم المحمول للتواصل"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 pr-8 pl-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                      عنوان التوصيل بالتفصيل (الهانوفيل / العجمي):
                    </label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                      <input
                        type="text"
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="الشارع، رقم العمارة، الشقة، علامة مميزة"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 pr-8 pl-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                    ملاحظات عامة على الطلب (اختياري):
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="أي طلب خاص لتجهيز الأوردر..."
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </form>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-zinc-400">الإجمالي النهائي:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-amber-400 tabular-nums">
                  {subtotal}
                </span>
                <span className="text-xs font-bold text-zinc-300">ج.م</span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              disabled={isSuccess}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-500 active:scale-95 transition-all cursor-pointer"
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  <span>جاري توجيهك إلى واتساب...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>إرسال الطلب عبر واتساب (01212202241)</span>
                </>
              )}
            </button>

            <p className="mt-2 text-center text-[11px] text-zinc-500">
              الدفع عند الاستلام كاش · خدمة التوصيل متوفرة حتى 5:00 فجراً
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
