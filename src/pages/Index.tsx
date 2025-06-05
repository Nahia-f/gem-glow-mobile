
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedCollections } from '@/components/FeaturedCollections';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <FeaturedCollections />
        <ProductGrid />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
