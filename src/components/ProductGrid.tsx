
import { useState } from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 2850,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      category: "rings",
      description: "Elegant 18k gold solitaire with brilliant cut diamond"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 650,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      category: "earrings",
      description: "Lustrous freshwater pearls in 14k gold setting"
    },
    {
      id: 3,
      name: "Tennis Bracelet",
      price: 1200,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      category: "bracelets",
      description: "Classic tennis bracelet with cubic zirconia stones"
    },
    {
      id: 4,
      name: "Infinity Necklace",
      price: 980,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      category: "necklaces",
      description: "Delicate infinity pendant in rose gold"
    },
    {
      id: 5,
      name: "Vintage Emerald Ring",
      price: 3200,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      category: "rings",
      description: "Art deco inspired emerald ring with diamond accents"
    },
    {
      id: 6,
      name: "Sapphire Stud Earrings",
      price: 890,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      category: "earrings",
      description: "Beautiful blue sapphire studs in white gold"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our exquisite range of handcrafted jewellery pieces
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
