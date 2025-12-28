import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

// 1. IMPORT THE LOGO HERE
import logo from '@/assets/logo.jpg'; 

const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            
            <img 
              src={logo} 
              alt="Musashi Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-sm" 
            />

            {/* FIX: Removed 'hidden sm:block' so it shows on mobile too */}
            <div className="flex flex-col justify-center">
              <h1 className="font-manga text-base sm:text-lg md:text-xl leading-none">MUSASHI</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-widest">刀剣店 | AYUSH SAHARE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-manga text-sm hover:text-accent transition-colors relative group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link 
              to="/shop" 
              className="font-manga text-sm hover:text-accent transition-colors relative group"
            >
              SHOP
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link 
              to="/about" 
              className="font-manga text-sm hover:text-accent transition-colors relative group"
            >
              LEGEND
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center border-2 border-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t-[2px] border-foreground animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="font-manga text-lg hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/shop" 
                className="font-manga text-lg hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                to="/about" 
                className="font-manga text-lg hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                LEGEND
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;