import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Shop Katanas | Musashi Blades Collection</title>
        <meta 
          name="description" 
          content="Browse our collection of authentic Japanese katanas, wakizashi, tanto, and accessories. Hand-forged with traditional techniques." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 md:pt-28 pb-20">
          <div className="container mx-auto px-4">
            {/* Page header */}
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <span className="absolute -top-6 -left-6 text-8xl font-manga text-foreground/5">刀</span>
                <h1 className="font-manga text-4xl md:text-6xl relative">
                  BLADE COLLECTION
                </h1>
              </div>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Every blade carries the soul of its maker. Find yours.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
              >
                ALL
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.toUpperCase()}
                </Button>
              ))}
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-manga text-xl text-muted-foreground">No blades found in this category</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </>
  );
};

export default Shop;
