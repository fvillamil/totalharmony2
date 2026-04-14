import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

import { Home } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 md:px-14 h-[72px] flex items-center justify-between transition-all duration-400",
      scrolled ? "bg-cream/96 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img 
          src="https://totalharmonyservices.com/imgtotal/logototal1.png" 
          alt="Total Harmony Services" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <a href="#services" className={cn(
            "text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 hover:text-teal",
            scrolled ? "text-ink" : "text-ink/85"
          )}>
            {t('Services', 'Servicios')}
          </a>
        </li>
        <li>
          <a href="#about" className={cn(
            "text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 hover:text-teal",
            scrolled ? "text-ink" : "text-ink/85"
          )}>
            {t('About', 'Sobre Mí')}
          </a>
        </li>
        <li>
          <a href="#contact" className={cn(
            "text-[13px] font-medium tracking-widest uppercase transition-colors duration-200 hover:text-teal",
            scrolled ? "text-ink" : "text-ink/85"
          )}>
            {t('Contact', 'Contacto')}
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <button 
            onClick={() => setLanguage('en')}
            className={cn(
              "px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest transition-all duration-200",
              language === 'en' 
                ? "bg-teal border-teal text-white" 
                : cn("bg-transparent", scrolled ? "border-ink/30 text-ink" : "border-ink/30 text-ink/70")
            )}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('es')}
            className={cn(
              "px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest transition-all duration-200",
              language === 'es' 
                ? "bg-teal border-teal text-white" 
                : cn("bg-transparent", scrolled ? "border-ink/30 text-ink" : "border-ink/30 text-ink/70")
            )}
          >
            ES
          </button>
        </div>
        
        <a 
          href="#contact" 
          className="bg-rose hover:bg-rose-dark text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-px"
        >
          {t('Free Diagnosis', 'Diagnóstico Gratis')}
        </a>
      </div>
    </nav>
  );
}
