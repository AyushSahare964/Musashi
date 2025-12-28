import React from 'react';
import { Plus, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      nameJp: product.nameJp,
      price: product.price,
      image: product.image,
    });
    toast.success(
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4" />
        <span className="font-manga">{product.name} ADDED!</span>
      </div>
    );
  };

  return (
    <div 
      className="manga-panel group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-all duration-200"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden border-b-[3px] border-foreground">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        
        {/* Action lines effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 speed-lines" />
        </div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 font-manga text-xs border-l-[2px] border-b-[2px] border-foreground">
            FEATURED
          </div>
        )}

        {/* Legend quote */}
        {product.legend && (
          <div className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background px-3 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs italic text-center">&quot;{product.legend}&quot;</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-manga text-lg leading-tight">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.nameJp}</p>
          </div>
          <span className="font-manga text-accent text-lg">₹{product.price.toLocaleString('en-IN')}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <Button 
          variant="outline" 
          className="w-full group/btn"
          onClick={handleAddToCart}
        >
          <Plus className="h-4 w-4 mr-2 group-hover/btn:rotate-90 transition-transform" />
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
