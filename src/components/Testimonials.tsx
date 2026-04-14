import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "Yadira es una verdadera profesional que transformó por completo mi casa en tan solo tres días. Me asombró la eficiencia con la que reorganizó cada habitación. Ahora que todo está impecable, me he dado cuenta de que tengo mucho más espacio del que jamás imaginé.",
      author: "Bianca L Baswell",
      locationEn: "Home Organization · Virginia",
      locationEs: "Organización de Hogar · Virginia",
      initial: "B",
      color: "bg-gradient-to-br from-teal to-teal-dark"
    },
    {
      quote: "Estoy muy agradecida con Yadira por organizar mi casa, especialmente mi clóset. ¡Mi clóset se ve increíble, nunca pensé que pudiera estar así! Además, me enseñó a doblar mis jeans correctamente y ahora puedo mantener mi clóset organizado.",
      author: "Andrea Munoz",
      locationEn: "Closet Organization · Virginia",
      locationEs: "Organización de Clóset · Virginia",
      initial: "A",
      color: "bg-gradient-to-br from-rose to-rose-dark"
    },
    {
      quote: "¡Yadira es absolutamente increíble! Su atención al detalle al limpiar y organizar es increíble. Mi casa siempre luce impecable después de nuestras limpiezas programadas, lo cual es todo un logro teniendo en cuenta que tengo dos perros grandes.",
      author: "Paula Reynal",
      locationEn: "Home Maintenance · Virginia",
      locationEs: "Mantenimiento de Hogar · Virginia",
      initial: "P",
      color: "bg-gradient-to-br from-gold to-gold-dark"
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isAuto) {
      timerRef.current = setInterval(next, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAuto]);

  return (
    <section className="py-25 px-6 md:px-14 bg-warm">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-3.5 justify-center">
            <span className="w-[22px] h-[0.5px] bg-teal" />
            {t('Testimonials', 'Testimonios')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-charcoal text-center">
            {language === 'en' ? (
              <>Words from women who <em className="not-italic text-teal">transformed</em></>
            ) : (
              <>Palabras de mujeres que <em className="not-italic text-teal">se transformaron</em></>
            )}
          </h2>
        </div>

        <div 
          className="mt-14 overflow-hidden relative"
          onMouseEnter={() => setIsAuto(false)}
          onMouseLeave={() => setIsAuto(true)}
        >
          <div className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((testi, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-lg bg-white text-charcoal">
                  <div className="absolute top-[-6px] right-4.5 font-serif text-[120px] leading-none opacity-10 pointer-events-none text-teal">
                    "
                  </div>
                  
                  <div className="text-amber-400 text-base tracking-[2px] mb-3.5">
                    ★★★★★
                  </div>

                  <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed mb-8 text-charcoal">
                    {testi.quote}
                  </blockquote>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-base shrink-0",
                        testi.color || "bg-teal"
                      )}>
                        {testi.initial}
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-sm text-charcoal">
                          {testi.author}
                        </strong>
                        <span className="text-xs text-gray">
                          {t(testi.locationEn, testi.locationEs)}
                        </span>
                      </div>
                    </div>
                    
                    <a 
                      href="https://share.google/ze3NWXIJIv7WkvweG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold text-teal hover:text-teal-dark transition-colors uppercase tracking-widest"
                    >
                      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 w-auto" />
                      {t('Review', 'Reseña')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4.5 mt-7">
          <button 
            onClick={prev}
            className="w-10.5 h-10.5 rounded-full border-1.5 border-teal bg-transparent text-teal flex items-center justify-center transition-all duration-300 hover:bg-teal hover:text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === i ? "bg-teal w-6" : "bg-gray/30 w-2"
                )}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="w-10.5 h-10.5 rounded-full border-1.5 border-teal bg-transparent text-teal flex items-center justify-center transition-all duration-300 hover:bg-teal hover:text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
