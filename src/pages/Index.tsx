import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Musashi Blades | Authentic Japanese Katanas</title>
        <meta 
          name="description" 
          content="Discover legendary Japanese katanas inspired by Miyamoto Musashi. Authentic hand-forged blades with centuries of samurai tradition." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 md:pt-20">
          <HeroSection />
          <FeaturedProducts />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
};

export default Index;
