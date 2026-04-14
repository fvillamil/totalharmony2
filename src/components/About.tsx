import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const credentials = [
    { icon: '🎓', titleEn: 'Trained Interior Planner', titleEs: 'Trained Interior Planner', subEn: 'Things in Place, USA · 2024', subEs: 'Things in Place, USA · 2024' },
    { icon: '📊', titleEn: 'Marketing & Business Mgmt', titleEs: 'Marketing & Gestión Empresarial', subEn: 'University degree', subEs: 'Formación universitaria' },
    { icon: '🇺🇸', titleEn: 'Northern Virginia', titleEs: 'Northern Virginia', subEn: 'In-person + Online worldwide', subEs: 'Presencial + Online internacional' },
    { icon: '🌱', titleEn: 'Sustainable approach', titleEs: 'Enfoque sostenible', subEn: 'Donations & responsible discarding', subEs: 'Donaciones y descarte responsable' },
  ];

  return (
    <section className="py-25 px-6 md:px-14 bg-white" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          className="relative hidden md:flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[380px] h-[480px] rounded-[26px] overflow-hidden shadow-2xl border-3 border-teal relative">
            <img 
              src="https://totalharmonyservices.com/imgtotal/total00.jpg" 
              alt="Yadira Florez González"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-charcoal text-white rounded-[22px] p-6 shadow-xl text-center border border-white/10 w-full max-w-[340px]">
            <div className="text-3xl mb-2">🏅</div>
            <div className="text-xs font-bold tracking-widest text-teal uppercase">Certified</div>
            <div className="text-sm text-white/80 mt-1">Interior Planner<br />Things in Place USA · 2024</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-3">
            <span className="w-[22px] h-[0.5px] bg-teal" />
            {t('About Yadira', 'Sobre Yadira')}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-charcoal mb-1.5">Yadira Florez González</h2>
          <div className="text-base md:text-lg text-teal font-serif italic mb-6.5">
            {t('Trained Interior Planner · Wellbeing Facilitator', 'Trained Interior Planner · Facilitadora de Bienestar')}
          </div>
          <p className="text-sm md:text-[15px] text-gray leading-relaxed mb-3.5">
            {language === 'en' ? (
              <>I don't just organize spaces. I help moms and professional women reclaim their time, clarity and mental wellbeing through <strong>Conscious Order</strong>. My approach integrates the functional, emotional and identity dimension.</>
            ) : (
              <>No solo organizo espacios. Ayudo a mamás y mujeres profesionales a recuperar su tiempo, claridad y bienestar mental a través del <strong>Orden Consciente</strong>. Mi enfoque integra la dimensión funcional, emocional y de identidad.</>
            )}
          </p>
          <p className="text-sm md:text-[15px] text-gray leading-relaxed mb-3.5">
            {t(
              'Certified as an International Trained Interior Planner by Things in Place, USA (2024). Background in Marketing & Business Management. I work with you in a personalized way, achieving the wellbeing you expect.',
              'Certificada como Trained Interior Planner Internacional por Things in Place, USA (2024). Formación en Marketing y Gestión Empresarial. Trabajo contigo de una forma personalizada logrando el bienestar que esperas.'
            )}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-start gap-3 bg-warm rounded-xl p-3.5">
                <div className="text-xl shrink-0">{cred.icon}</div>
                <div>
                  <strong className="block text-[13px] text-charcoal">{t(cred.titleEn, cred.titleEs)}</strong>
                  <span className="text-xs text-gray">{t(cred.subEn, cred.subEs)}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
