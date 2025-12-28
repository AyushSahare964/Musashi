import React from 'react';
import { Link } from 'react-router-dom';
import { Swords, Code, Github, Linkedin, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-[4px] border-accent relative overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background text-foreground flex items-center justify-center rounded-sm">
                <span className="font-manga text-2xl">武</span>
              </div>
              <div>
                <h3 className="font-manga text-xl tracking-wide">MUSASHI</h3>
                <p className="text-[10px] uppercase tracking-widest text-background/60">Legacy of the Sword</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Forged in the spirit of Miyamoto Musashi. We craft digital experiences sharp enough to cut through the noise.
            </p>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="font-manga text-sm mb-6 flex items-center gap-2 text-accent">
              <Swords className="h-4 w-4" /> NAVIGATE
            </h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'Shop', 'Legend', 'Checkout'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-background/60 hover:text-white hover:translate-x-1 transition-all text-sm w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Developer Info (The Architect) */}
          <div>
            <h4 className="font-manga text-sm mb-6 flex items-center gap-2 text-accent">
              <Code className="h-4 w-4" /> THE ARCHITECT
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-lg">Ayush Sahare</p>
                <p className="text-background/50 text-xs uppercase tracking-wider">Full Stack Developer</p>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Framer'].map((tech) => (
                  <span key={tech} className="text-[10px] border border-background/20 px-2 py-1 text-background/60 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Links - Replace # with your actual URLs */}
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/AyushSahare964" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-sahare-8204292b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-manga text-sm mb-6 flex items-center gap-2 text-accent">
              <Cpu className="h-4 w-4" /> CONTACT
            </h4>
            <div className="text-background/60 text-sm space-y-3 font-mono">
              <p>Pune, India</p>
              <p>ayush.sahare24@vit.edu</p>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs">
            © 2025 Musashi Blades. Built by Ayush Sahare.
          </p>
          <div className="flex items-center gap-2 text-background/40 text-xs uppercase tracking-widest">
            <span>Forged with Code</span>
            <div className="w-1 h-1 bg-accent rounded-full" />
            <span>Honored by Tradition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;