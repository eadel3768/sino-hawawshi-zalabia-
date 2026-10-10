import React, { useState, useCallback, useMemo } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MenuSection, CartItem } from './components/MenuSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationHours } from './components/LocationHours.tsx';
import { Footer } from './components/Footer.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddToCart = useCallback((newItem: CartItem) => {
    setCart((prev) => {
      // Check if exact same item with same size and extras already in cart
      const existingIndex = prev.findIndex(
        (item) =>
          item.itemId === newItem.itemId &&
          item.selectedSize === newItem.selectedSize &&
          JSON.stringify(item.extras) === JSON.stringify(newItem.extras)
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  }, []);

  const handleRemoveItem = useCallback((cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  }, []);

  const handleUpdateQuantity = useCallback((cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  }, [handleRemoveItem]);

  const handleClearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const totalCartPrice = useMemo(() => cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0), [cart]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-orange-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Menu & Ordering */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Location & Operating Hours */}
        <LocationHours />
      </main>

      {/* Floating Bottom Cart CTA (When Cart has items on mobile) */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between rounded-2xl bg-orange-600 p-4 font-bold text-white shadow-2xl shadow-orange-600/50 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm">عرض السلة ({totalCartCount} صنف)</span>
            </div>
            <div className="flex items-baseline gap-1 text-base font-black text-amber-300">
              <span className="tabular-nums">{totalCartPrice}</span>
              <span className="text-xs">ج.م</span>
            </div>
          </button>
        </div>
      )}

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

