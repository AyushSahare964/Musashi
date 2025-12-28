import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const navigate = useNavigate();

  return (
    // CHANGE 1: Reduced padding from py-20 to py-12 on mobile
    <section className="py-12 md:py-24 bg-secondary relative overflow-hidden">
      
      {/* Panel borders - Thinner on mobile (2px) vs desktop (4px) */}
      <div className="absolute inset-0 border-y-2 md:border-y-[4px] border-foreground pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Section header - Compact for mobile */}
        {/* CHANGE 2: Reduced bottom margin from mb-12 to mb-8 */}
        <div className="text-center mb-8 md:mb-16 relative z-10">
          <div className="inline-block relative">
            {/* CHANGE 3: Smaller Kanji background text */}
            <span className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-4xl md:text-6xl font-manga text-foreground/10 select-none">
              斬
            </span>
            
            {/* CHANGE 4: Responsive text size (3xl mobile -> 5xl desktop) */}
            <h2 className="font-manga text-3xl md:text-5xl relative z-10 tracking-tight">
              LEGENDARY BLADES
            </h2>
            
            <div className="h-1 bg-accent mt-2 transform skew-x-[-12deg]" />
          </div>
          
          <p className="text-muted-foreground mt-3 md:mt-4 text-xs md:text-base max-w-sm md:max-w-md mx-auto leading-relaxed">
            Each blade tells a story. Discover our most sought-after masterpieces.
          </p>
        </div>

        {/* Products grid */}
        {/* CHANGE 5: Tighter gap on mobile (gap-4) vs desktop (gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-sm md:max-w-none mx-auto">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* CHANGE 6: Reduced top margin */}
        <div className="text-center mt-8 md:mt-16">
          <Button
            onClick={() => navigate('/shop')}
            // CHANGE 7: w-full on mobile, auto on desktop.
            className="w-full md:w-auto min-w-[180px] bg-red-700 hover:bg-red-800 text-white rounded-sm h-12 text-sm md:text-base tracking-wide shadow-lg hover:shadow-red-900/20 transition-all group border border-foreground"
          >
            VIEW ALL BLADES
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;