import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <HeroCanvas />

      {/* Split background images */}
      <div className="absolute top-0 left-0 w-[52%] h-full z-0 overflow-hidden">
        <img 
          src="https://i.pinimg.com/1200x/4e/e9/c5/4ee9c59d5e644b4385bfe9c8de014f3d.jpg" 
          alt="Organized space"
          className="w-full h-full object-cover animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
        />
      </div>
      <div className="absolute top-0 right-0 w-[50%] h-full z-0 overflow-hidden">
        <img 
          src="https://totalharmonyservices.com/imgtotal/total41.jpeg" 
          alt="Organized closet"
          className="w-full h-full object-cover object-top animate-[slowZoom2_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-warm/95 via-warm/85 to-teal/5" />
      <div className="absolute bottom-0 left-0 right-0 h-[180px] z-20 bg-gradient-to-t from-cream to-transparent" />

      {/* Diagonal teal flash */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_44%,rgba(42,157,143,0.08)_44.5%,rgba(42,157,143,0.04)_56%,transparent_56.5%)] pointer-events-none" />

      <div className="relative z-30 max-w-[1200px] mx-auto px-6 md:px-14 py-20 grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 bg-gold/15 border border-gold/30 text-gold-dark px-5 py-2 rounded-full text-[16px] font-bold tracking-[0.18em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {t('✦ Spring · Summer Campaign 2026', '✦ Campaña Primavera · Verano 2026')}
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-ink mb-5">
            {language === 'en' ? (
              <>Your space.<br />Your life.<br /><em className="text-teal not-italic">Finally aligned.</em></>
            ) : (
              <>Tu espacio.<br />Tu vida.<br /><em className="text-teal not-italic">Por fin en armonía.</em></>
            )}
          </h1>

          <p className="text-lg md:text-xl text-ink font-medium leading-relaxed mb-9 max-w-[540px]">
            {t(
              'I help moms and busy professional women reclaim control of their homes through Conscious Order functional, sustainable systems that reduce stress and free your time.',
              'Ayudo a mamás y mujeres profesionales ocupadas a recuperar el control de su hogar a través del Orden Consciente, sistemas funcionales y sostenibles que reducen el estrés y liberan tu tiempo.'
            )}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-rose hover:bg-rose-dark text-white px-10 py-5 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-lg shadow-rose/40 hover:-translate-y-0.5"
            >
              📅 {t('Book your Harmony Diagnosis in 2 min', 'Agenda tu Diagnóstico en 2 min')}
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 bg-ink/5 border border-ink/20 hover:bg-ink/10 hover:border-ink/40 text-ink px-9 py-5 rounded-full font-bold text-base transition-all duration-300 backdrop-blur-sm"
            >
              {t('See services →', 'Ver servicios →')}
            </a>
          </div>

          <div className="flex items-center gap-3 mt-8 bg-white/50 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-ink/10 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
            <span className="text-sm md:text-base text-ink font-bold tracking-wide">
              {t('Limited seasonal spots available — Northern Virginia', 'Cupos de temporada limitados — Northern Virginia')}
            </span>
          </div>
        </motion.div>

        {/* Hero right: floating photos */}
        <motion.div 
          className="relative h-[540px] hidden md:block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute w-[265px] h-[345px] top-0 right-0 rounded-3xl overflow-hidden shadow-2xl border-3 border-teal/60 z-10 group">
            <img 
              src="https://totalharmonyservices.com/imgtotal/closet2_2.jpeg" 
              alt="Organized closet"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute w-[205px] h-[250px] bottom-0 right-[190px] rounded-3xl overflow-hidden shadow-2xl border-3 border-rose/50 z-20 group">
            <img 
              src="https://totalharmonyservices.com/imgtotal/closet1_2.jpeg" 
              alt="Organized home"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute w-[160px] h-[188px] top-[95px] right-[298px] rounded-3xl overflow-hidden shadow-2xl border-3 border-gold/50 z-30 group">
            <img 
              src="https://i.pinimg.com/1200x/4e/e9/c5/4ee9c59d5e644b4385bfe9c8de014f3d.jpg" 
              alt="Transformed space"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating stat pills */}
          <div className="absolute bottom-12 -left-5 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-ink/10 shadow-xl z-40">
            <div className="font-serif text-3xl font-semibold text-teal leading-none">200+</div>
            <div className="text-[11px] text-ink/60 font-semibold tracking-widest uppercase">
              {t('Lives transformed', 'Vidas transformadas')}
            </div>
          </div>
          <div className="absolute top-4 left-1 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-ink/10 shadow-xl z-40">
            <div className="font-serif text-3xl font-semibold text-teal leading-none">⭐ 5.0</div>
            <div className="text-[11px] text-ink/60 font-semibold tracking-widest uppercase">
              {t('Client rating', 'Calificación')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
