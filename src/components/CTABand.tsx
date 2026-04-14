import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function CTABand() {
  const { language, t } = useLanguage();

  return (
    <section className="py-25 px-6 md:px-14 bg-gradient-to-br from-rose-dark via-rose to-[#e87aab] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08)_0,transparent_55%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06)_0,transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/12 border border-white/25 text-white/85 px-4.5 py-2 rounded-full text-xs font-semibold mb-5">
          ⏱️ {t('2 minutes to schedule · 0 commitment', '2 minutos para agendar · 0 compromiso')}
        </div>
        
        <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#ffdcce]/80 mb-2.5 mx-auto table">
          <span className="w-[22px] h-[0.5px] bg-[#ffdcce]/80" />
          {t('Ready to start?', '¿Lista para empezar?')}
        </div>

        <h2 className="font-serif text-5xl md:text-[58px] text-white mb-4.5">
          {language === 'en' ? (
            <>Your most functional life<br />starts with <em className="italic opacity-88 not-italic">one decision.</em></>
          ) : (
            <>Tu vida más funcional<br />empieza con <em className="italic opacity-88 not-italic">una decisión.</em></>
          )}
        </h2>

        <p className="text-white/82 text-lg max-w-[520px] mx-auto mb-9 leading-relaxed">
          {t(
            'Schedule your free Harmony Diagnosis. 20 minutes. No pressure. Just an honest conversation about your space and what we can achieve together.',
            'Agenda tu Diagnóstico de Armonía gratuito. 20 minutos. Sin presión. Solo una conversación honesta sobre tu espacio y lo que podemos lograr juntas.'
          )}
        </p>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/14075065027" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-rose px-10 py-5 rounded-full font-bold text-base shadow-lg shadow-black/18 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/24 hover:scale-105"
          >
            📅 {t('Book my free diagnosis via WhatsApp', 'Agendar mi diagnóstico gratis por WhatsApp')}
          </a>
        </div>

        <p className="text-white/50 text-[13px] mt-4.5">
          {t('✅ Free Estimate · No commitment · Response in less than 24 hours', '✅ Estimado Gratis · Sin compromiso · Respuesta en menos de 24 horas')}
        </p>
      </div>
    </section>
  );
}
