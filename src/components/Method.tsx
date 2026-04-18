import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Method() {
  const { language, t } = useLanguage();

  const steps = [
    { char: 'R', en: 'Recognize', es: 'Reconocer', descEn: 'Understand what\'s happening in the space and why', descEs: 'Entender qué pasa en el espacio y por qué', color: 'bg-[#e0f5f1] text-[#1a6b60]' },
    { char: 'E', en: 'Eliminate', es: 'Eliminar', descEn: 'Guided depuration with decision criteria, not overwhelm', descEs: 'Depuración guiada con criterio, sin abrumarte', color: 'bg-[#b2e6dc] text-[#1a6b60]' },
    { char: 'S', en: 'Systematize', es: 'Sistematizar', descEn: 'Build functional, logical and sustainable structures', descEs: 'Construir estructuras funcionales y sostenibles', color: 'bg-[#8ee8d6] text-[#1a6b60]' },
    { char: 'E', en: 'Stabilize', es: 'Estabilizar', descEn: 'Implement habits that sustain the system long-term', descEs: 'Implementar hábitos que sostengan el sistema', color: 'bg-teal text-white' },
    { char: 'T', en: 'Transform', es: 'Transformar', descEn: 'Measurable results: time, clarity and wellbeing', descEs: 'Resultados medibles: tiempo, claridad y bienestar', color: 'bg-teal-dark text-white' },
  ];

  return (
    <section className="py-25 px-6 md:px-14 bg-charcoal">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#8ee8d6]/80 mb-3.5 justify-center">
            <span className="w-[22px] h-[0.5px] bg-[#8ee8d6]/80" />
            {t('The Method', 'El Método')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-white text-center">
            {language === 'en' ? (
              <>Method <em className="not-italic text-teal">RESET</em></>
            ) : (
              <>Método <em className="not-italic text-teal">RESET</em></>
            )}
          </h2>
          <p className="text-lg text-white/55 leading-relaxed max-w-[560px] mx-auto mt-3">
            {t(
              'Five stages that transform not just your space — but how you live in it.',
              'Cinco etapas que transforman no solo tu espacio — sino cómo vives en él.'
            )}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 mt-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Background dimmed line */}
          <div className="absolute top-9 left-[10%] right-[10%] h-[2px] bg-white/10 z-0 hidden md:block" />
          
          {/* Animated highlighted line */}
          <motion.div 
            className="absolute top-9 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal to-rose z-0 hidden md:block origin-left"
            variants={{
              hidden: { scaleX: 0 },
              visible: { 
                scaleX: [0, 0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1],
                transition: {
                  duration: 4, 
                  ease: "linear",
                  times: [0, 0.1875, 0.25, 0.4375, 0.5, 0.6875, 0.75, 0.9375, 1],
                }
              }
            }}
          />
          
          {steps.map((step, i) => (
            <div key={i} className="text-center relative z-10 px-3">
              <motion.div 
                className={cn(
                  "w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 font-serif text-[64px] font-black leading-none overflow-hidden transition-all duration-500",
                  step.color
                )}
                variants={{
                  hidden: { scale: 0.8, opacity: 0.2, filter: "grayscale(100%)", boxShadow: "0 0 0 rgba(0,0,0,0)" },
                  visible: {
                    scale: [0.8, 1.15, 1], 
                    opacity: [0.2, 1, 1],
                    filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)"],
                    boxShadow: ["0 0 0 rgba(142,232,214,0)", "0 0 20px rgba(142,232,214,0.4)", "0 0 10px rgba(142,232,214,0.2)"],
                    transition: { delay: i * 1, duration: 0.8, times: [0, 0.4, 1] }
                  }
                }}
              >
                {step.char}
              </motion.div>
              
              <motion.h4 
                className="text-base font-bold mb-2"
                variants={{
                  hidden: { color: "rgba(255,255,255,0.2)" },
                  visible: {
                    color: ["rgba(255,255,255,0.2)", "#8ee8d6", "#ffffff"],
                    transition: { delay: i * 1, duration: 1, times: [0, 0.3, 1] }
                  }
                }}
              >
                {t(step.en, step.es)}
              </motion.h4>
              
              <motion.p 
                className="text-[13px] leading-relaxed"
                variants={{
                  hidden: { color: "rgba(255,255,255,0.2)" },
                  visible: {
                    color: ["rgba(255,255,255,0.2)", "#ffffff", "rgba(255,255,255,0.7)"],
                    transition: { delay: i * 1, duration: 1, times: [0, 0.3, 1] }
                  }
                }}
              >
                {t(step.descEn, step.descEs)}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
