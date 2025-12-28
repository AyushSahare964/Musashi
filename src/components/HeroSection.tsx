import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Swords, ChevronRight, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Reduced parallax movement for better performance on mobile
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={containerRef} 
      // Changed min-h-screen to accommodate mobile browser bars (dvh) and added padding
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-zinc-950 text-zinc-50 py-20"
    >
      {/* --- LAYER 1: Background & Texture --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Darker, cleaner gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black z-0" />
      
      {/* --- LAYER 2: Parallax Kanji (Scaled Down) --- */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Significantly reduced size [15vw] -> [40vw] max to prevent overwhelming the screen */}
        <span className="absolute top-[5%] left-[5%] text-[30vw] md:text-[20vw] leading-none font-bold text-zinc-800/10 select-none blur-[2px]">
          武
        </span>
        <span className="absolute bottom-[5%] right-[5%] text-[30vw] md:text-[20vw] leading-none font-bold text-zinc-800/10 select-none blur-[2px]">
          士
        </span>
      </motion.div>

      {/* --- LAYER 3: Responsive Borders --- */}
      {/* Changed inset to be tighter on mobile (2) and standard on desktop (8) */}
      <div className="absolute inset-3 md:inset-8 border border-zinc-800/60 z-20 pointer-events-none">
        {/* Corner accents - made smaller */}
        <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-red-700"></div>
        <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-red-700"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-red-700"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-red-700"></div>
      </div>

      {/* --- LAYER 4: Main Content (Compact) --- */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        
        {/* Badge - Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-full text-[10px] md:text-xs tracking-widest text-zinc-400 uppercase shadow-lg">
            <Swords className="h-3 w-3 text-red-600" />
            <span>Est. 1584</span>
            <Swords className="h-3 w-3 text-red-600" />
          </div>
        </motion.div>

        {/* Typography - Tighter Vertical Spacing */}
        <motion.div 
          style={{ y: yText }}
          className="space-y-1 mb-6 md:mb-8 relative"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl font-medium tracking-[0.3em] text-red-600"
          >
            THE WAY OF
          </motion.h2>

          {/* Title - Responsive Sizes: text-[13vw] (fluid mobile) -> text-9xl (desktop) */}
          {/* Added 'whitespace-nowrap' to prevent breaking */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            className="text-[13vw] md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-zinc-100 whitespace-nowrap"
          >
            {/* Removed 'block', added 'inline-block' so they stay side-by-side */}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
              MUSA
            </span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
              SHI
            </span>
          </motion.h1>
          
          {/* Divider Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-red-700 mx-auto w-24 md:w-48 mt-4 shadow-[0_0_15px_rgba(185,28,28,0.6)]"
          />
        </motion.div>

        {/* Subtitle - More readable width */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto text-zinc-400 text-sm md:text-lg font-light leading-relaxed mb-8 px-4"
        >
          Forged with centuries of tradition. <br className="hidden md:block"/>
          Own a piece of the legend.
        </motion.p>

        {/* Buttons - Compact Mobile Version */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center px-6"
        >
          <Link to="/shop" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto min-w-[160px] bg-red-700 hover:bg-red-800 text-white rounded-sm h-12 text-sm md:text-base tracking-wide shadow-lg hover:shadow-red-900/20 transition-all">
              VIEW BLADES
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto min-w-[160px] rounded-sm border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 h-12 text-sm md:text-base tracking-wide">
              OUR HISTORY
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* --- Quote - HIDDEN on Mobile to save space --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 max-w-[200px] hidden lg:block text-right z-20"
      >
        <div className="h-12 w-[1px] bg-zinc-800 ml-auto mb-2"></div>
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Earth Scroll</p>
        <p className="text-xs text-zinc-500 font-serif italic mt-1">
          "Study strategy over the years..."
        </p>
      </motion.div>

      {/* Scroll Indicator - Adjusted position */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 z-20 opacity-70"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
};

export default HeroSection;