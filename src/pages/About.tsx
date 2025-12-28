import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import MusashiModel from '@/components/MusashiModel';

// New Image Path
const prayerImage = "https://i.pinimg.com/originals/ff/e5/ba/ffe5baa7abe9458a51af5dc435456bd2.jpg";

// Placeholder text for his thoughts - feel free to replace this.
const prayerThoughts = "Before the blade is drawn, the battle is fought within. The true Way is not found merely in conflict, but in the profound silence of preparation. To seek perfection is to first align the spirit with the Void, finding stillness amidst chaos.";

const legendCards = [
  { id: 1, title: '無敵 (Muteki)', quote: "Invincible is merely a word. The moment you believe you have reached the peak, you have already begun your descent." },
  { id: 2, title: '視野 (Shiya)', quote: "Preoccupied with a single leaf, you won't see the tree. Preoccupied with a single tree, you'll miss the entire forest." },
  { id: 3, title: '自戒 (Jikai)', quote: "Think lightly of yourself and deeply of the world. Do not let the ego cloud your vision." },
  { id: 4, title: '鍛錬 (Tanren)', quote: "It takes 1,000 days to forge the spirit, and 10,000 days to polish it. You must practice day and night." },
  { id: 5, title: '克己 (Kokki)', quote: "Today is victory over yourself of yesterday; tomorrow is your victory over lesser men." },
  { id: 6, title: '心眼 (Shingan)', quote: "Perception is strong and sight is weak. See distant things as if they were close, and take a distanced view of close things." },
  { id: 7, title: '不悔 (Fukai)', quote: "Do not regret what you have done. Once a decision is made, do not look back with hesitation." },
  { id: 8, title: '一心 (Isshin)', quote: "Do not let the mind stop. In a single breath, the outcome is decided." },
  { id: 9, title: '受容 (Juyō)', quote: "Accept everything just the way it is. Do not seek pleasure for its own sake." },
  { id: 10, title: '空 (Kū)', quote: "By knowing things that exist, you can know that which does not exist. This is the Void." },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Legend | Musashi's Path</title>
      </Helmet>

      <div className="min-h-screen bg-[#FDFDFD] text-black overflow-x-hidden selection:bg-black selection:text-white font-sans flex flex-col">
        <Header />
        <CartDrawer />

        {/* --- GLOBAL BACKGROUND --- */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>


        {/* === SECTION 1: STATIC INTRO === */}
        <section className="relative z-10 pt-32 pb-12 md:pt-48 md:pb-20 container mx-auto px-4 text-center bg-[#FDFDFD]">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="font-manga text-5xl md:text-8xl font-black tracking-tighter mb-4"
           >
             LEGEND
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="font-serif italic text-zinc-500 text-lg"
           >
             The path of the solitary warrior
           </motion.p>
        </section>

        {/* === NEW SECTION 1.5: THE PRAYER / THOUGHTS === */}
        <section className="relative z-10 container mx-auto px-4 md:px-12 pb-32 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Image Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2 relative"
            >
              {/* Manga Panel styling for the image */}
              <div className="border-[3px] border-black p-2 shadow-[8px_8px_0px_#000] bg-white transform -rotate-2 relative z-10">
                 <img 
                   src={prayerImage} 
                   alt="Musashi Praying" 
                   className="w-full h-auto object-cover grayscale contrast-125 mix-blend-multiply"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 font-manga text-8xl opacity-10 pointer-events-none z-0">祈り</div>
            </motion.div>

            {/* Text Panel - ADDED WHITE BACKGROUND STYLING HERE */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
               // Added bg-white, border, and shadow to make the text visible and consistent
               className="w-full md:w-1/2 space-y-6 bg-white border-[3px] border-black p-6 md:p-10 shadow-[8px_8px_0px_#000]"
            >
                <div className="flex items-center gap-4">
                   <div className="h-[2px] w-12 bg-black"></div>
                   <h2 className="font-manga text-2xl md:text-3xl font-black uppercase tracking-widest">The Stillness</h2>
                </div>
                
                <div className="min-h-[150px]">
                  <TypewriterText text={prayerThoughts} />
                </div>
                
                <p className="font-serif italic text-zinc-500 text-sm text-right">— Miyamoto Musashi, Before the duel</p>
            </motion.div>

          </div>
        </section>


        {/* === SECTION 2: THE STICKY STAGE (Scrolling Cards) === */}
        <div className="relative w-full">
          
          {/* A. THE MODEL (Sticky) */}
          <div className="sticky top-0 h-screen w-full z-0 flex items-center justify-center overflow-hidden">
             <MusashiModel />
          </div>

          {/* B. THE CARDS (Scrolling) */}
          <div className="relative z-10 w-full -mt-[100vh] pt-[50vh]">
             <div className="container mx-auto px-4 md:px-12 max-w-6xl pb-32">
                
                <div className="text-center mb-32">
                  <span className="bg-black text-white px-4 py-1 font-manga text-xl uppercase tracking-[0.2em]">The Ten Scrolls</span>
                </div>

                <div className="flex flex-col gap-[45vh]">
                  {legendCards.map((card, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <div 
                        key={card.id} 
                        className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                        >
                           <div className="bg-white border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0px_#000] relative group hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] transition-all">
                              {/* Tail */}
                              <div className={`absolute top-1/2 w-6 h-6 bg-black transform -translate-y-1/2 rotate-45 
                                ${isLeft ? '-right-3' : '-left-3'} 
                                hidden md:block`
                              }></div>

                              {/* Header */}
                              <div className="flex justify-between items-center mb-3 border-b-2 border-zinc-100 pb-1">
                                 <span className="font-black text-lg md:text-xl">{card.title.split(' ')[0]}</span>
                                 <span className="font-serif italic text-zinc-400 text-xs">{String(card.id).padStart(2, '0')}</span>
                              </div>
                              
                              {/* Quote */}
                              <div className="min-h-[60px]">
                                <TypewriterText text={card.quote} />
                              </div>

                              {/* Decoration */}
                              <div className="absolute -bottom-4 -right-4 opacity-10 pointer-events-none">
                                  <span className="font-manga text-6xl">武</span>
                              </div>
                           </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
             </div>
             <div className="h-[20vh]"></div>
          </div>

        </div> 
        
        {/* === SECTION 3: FOOTER === */}
        <div className="relative z-20 bg-background border-t-2 border-black">
          <Footer />
        </div>

      </div>
    </>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const characters = text.split("");
  return (
    <p className="font-manga text-sm md:text-base leading-relaxed font-bold">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0, delay: index * 0.015 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default About;