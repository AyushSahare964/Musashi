import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Thank You | Musashi Blades</title>
        <meta
          name="description"
          content="Thank you for exploring the Musashi Blades prototype experience."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 md:pt-28 pb-20">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="manga-panel-lg p-8 max-w-xl text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-foreground rounded-full bg-background">
                  <Check className="h-8 w-8 text-accent" />
                </div>
              </div>

              <h1 className="font-manga text-3xl md:text-4xl mb-4">
                THANK YOU FOR EXPLORING
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                This is a prototype experience of <span className="font-manga">Musashi&apos;s Blade Bazaar</span>.
                Your journey through these legendary blades means a lot.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                If you&apos;d like to create more immersive websites like this, contact
                {' '}
                <span className="font-manga">AYUSH SAHARE</span>, creator of this experience,
                at{' '}
                <a
                  href="mailto:ayush.sahare24@vit.edu"
                  className="underline underline-offset-4 text-accent"
                >
                  ayush.sahare24@vit.edu
                </a>
                .
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="crimson" size="lg" onClick={() => navigate('/')}> 
                BACK TO HOME
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/shop')}>
                RETURN TO SHOP
              </Button>
            </div>
          </div>
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </>
  );
};

export default ThankYou;
