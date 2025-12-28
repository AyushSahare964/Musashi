import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { CreditCard, Truck, Shield, Check, Smartphone, Banknote, Wallet } from 'lucide-react';

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod' | 'wallet'>('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success(
      <div className="flex items-center gap-2">
        <Check className="h-5 w-5" />
        <span className="font-manga">
          ORDER PLACED VIA {paymentMethod.toUpperCase()} — Your blade awaits...
        </span>
      </div>
    );
    
    clearCart();
    setIsProcessing(false);
    navigate('/thank-you');
  };

  return (
    <>
      <Helmet>
        <title>Checkout | Musashi Blades</title>
        <meta name="description" content="Complete your order for authentic Japanese katanas from Musashi Blades." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 md:pt-28 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="font-manga text-4xl md:text-5xl text-center mb-12">
              CHECKOUT
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-manga text-xl text-muted-foreground mb-4">Your cart is empty</p>
                <Button variant="outline" onClick={() => navigate('/shop')}>
                  Browse Blades
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Order Summary */}
                <div className="order-2 lg:order-1">
                  <div className="manga-panel-lg p-6">
                    <h2 className="font-manga text-xl mb-6 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      ORDER SUMMARY
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      {items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-border">
                          <div className="w-16 h-16 bg-muted border-2 border-foreground flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-manga text-sm truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4 border-t-2 border-foreground">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>FREE</span>
                      </div>
                      <div className="flex justify-between font-manga text-xl pt-2">
                        <span>TOTAL</span>
                        <span className="text-accent">₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="manga-panel p-4 text-center">
                      <Truck className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-xs font-manga">FREE WORLDWIDE SHIPPING</p>
                    </div>
                    <div className="manga-panel p-4 text-center">
                      <Shield className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-xs font-manga">SECURE PAYMENT</p>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <div className="order-1 lg:order-2">
                  <form onSubmit={handleSubmit} className="manga-panel-lg p-6">
                    <h2 className="font-manga text-xl mb-6">SHIPPING DETAILS</h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required className="mt-1" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="zip">Postal Code</Label>
                          <Input id="zip" required className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required className="mt-1" />
                      </div>
                    </div>

                    <h2 className="font-manga text-xl mt-8 mb-4">PAYMENT METHOD</h2>

                    {/* Payment method selector */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <Button
                        type="button"
                        variant={paymentMethod === 'card' ? 'crimson' : 'outline'}
                        className="flex items-center gap-2 justify-center"
                        onClick={() => setPaymentMethod('card')}
                      >
                        <CreditCard className="h-4 w-4" />
                        <span className="text-xs font-manga">CARD</span>
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === 'upi' ? 'crimson' : 'outline'}
                        className="flex items-center gap-2 justify-center"
                        onClick={() => setPaymentMethod('upi')}
                      >
                        <Smartphone className="h-4 w-4" />
                        <span className="text-xs font-manga">UPI</span>
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === 'wallet' ? 'crimson' : 'outline'}
                        className="flex items-center gap-2 justify-center"
                        onClick={() => setPaymentMethod('wallet')}
                      >
                        <Wallet className="h-4 w-4" />
                        <span className="text-xs font-manga">WALLET</span>
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === 'cod' ? 'crimson' : 'outline'}
                        className="flex items-center gap-2 justify-center"
                        onClick={() => setPaymentMethod('cod')}
                      >
                        <Banknote className="h-4 w-4" />
                        <span className="text-xs font-manga">CASH ON DELIVERY</span>
                      </Button>
                    </div>

                    {/* Payment details per method */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="4242 4242 4242 4242"
                            required={paymentMethod === 'card'}
                            className="mt-1"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              required={paymentMethod === 'card'}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                              required={paymentMethod === 'card'}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="manga-panel p-4 mt-2 text-sm text-muted-foreground">
                        <p className="font-manga mb-1">UPI PAYMENT (PROTOTYPE)</p>
                        <p>
                          In a real build, this would open your UPI app with a QR or UPI ID.
                          For this prototype, clicking PAY will simply complete the order flow.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'wallet' && (
                      <div className="manga-panel p-4 mt-2 text-sm text-muted-foreground">
                        <p className="font-manga mb-1">WALLET / NETBANKING</p>
                        <p>
                          In production, this would redirect to a secure payment gateway.
                          Here it is simulated for demo purposes.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="manga-panel p-4 mt-2 text-sm text-muted-foreground">
                        <p className="font-manga mb-1">CASH ON DELIVERY</p>
                        <p>
                          Pay in cash when your blade arrives at your doorstep. No online
                          payment required in this prototype.
                        </p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="crimson" 
                      size="lg" 
                      className="w-full mt-8"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'PROCESSING...' : `PAY ₹${totalPrice.toLocaleString('en-IN')}`}
                    </Button>
                  </form>
                </div>
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

export default Checkout;
