
import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-gray-900 font-bold">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Collections</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Rings</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Necklaces</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Earrings</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Bracelets</a>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Collections</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Rings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Necklaces</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Earrings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Bracelets</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
