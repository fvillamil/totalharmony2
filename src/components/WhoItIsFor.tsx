import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function WhoItIsFor() {
  const { language, t } = useLanguage();

  const personas = [
    { icon: '⏰', en: 'You lose time daily searching for things', es: 'Pierdes tiempo buscando cosas todos los días', subEn: 'Your time is your most valuable resource', subEs: 'Tu tiempo es tu recurso más valioso' },
    { icon: '🧠', en: 'Visual chaos drains your mental energy', es: 'El caos visual agota tu energía mental', subEn: 'Without you realizing how much it costs', subEs: 'Sin que notes cuánto te cuesta' },
    { icon: '📦', en: 'Spaces you\'ve been postponing for months', es: 'Espacios que llevas meses posponiendo', subEn: '"When I have time" never comes alone', subEs: '"Cuando tenga tiempo" nunca llega solo' },
    { icon: '✨', en: 'Your environment doesn\'t match your life\'s pace', es: 'Tu entorno no acompaña tu ritmo de vida', subEn: 'You deserve a space that works for you', subEs: 'Mereces un espacio que trabaje para ti' },
  ];

  return (
    <section className="py-25 px-6 md:px-14 bg-white" id="who">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          className="rounded-[28px] overflow-hidden h-[500px] relative shadow-xl shadow-black/10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://i.pinimg.com/1200x/4e/e9/c5/4ee9c59d5e644b4385bfe9c8de014f3d.jpg" 
            alt="Professional woman at home"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-charcoal/88 backdrop-blur-lg rounded-2xl p-4.5 md:p-5.5 border border-white/10">
            <div className="font-serif text-3xl md:text-4xl font-semibold text-teal leading-none">
              {t('For you,', 'Para ti,')}
            </div>
            <div className="text-[11px] text-white/55 font-semibold uppercase tracking-widest mt-1">
              {t('if you feel it\'s time', 'si sientes que es el momento')}
            </div>
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
            {t('Who this is for', 'Para quién es')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-charcoal mb-4.5">
            {language === 'en' ? (
              <>Made for women who are <em className="not-italic text-rose">done waiting</em></>
            ) : (
              <>Hecho para mujeres que <em className="not-italic text-rose">ya no quieren esperar</em></>
            )}
          </h2>
          <p className="text-[15px] text-gray leading-relaxed mb-5">
            {t(
              'Professional mothers between 35–55, women in role transitions, people with high daily stress levels, remote professionals, families with active kids.',
              'Mujeres con poco tiempo, mujeres en transición de roles, personas con altos niveles de estrés cotidiano, profesionales remotas, familias con hijos activos.'
            )}
          </p>

          <div className="flex flex-col gap-3 mt-7">
            {personas.map((p, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-4 p-4 bg-warm rounded-2xl border-l-3 border-teal transition-transform duration-300 hover:translate-x-1.5 cursor-default"
                whileHover={{ x: 6 }}
              >
                <div className="text-2xl shrink-0">{p.icon}</div>
                <div className="flex flex-col">
                  <strong className="text-sm text-charcoal">{t(p.en, p.es)}</strong>
                  <span className="text-[13px] text-gray">{t(p.subEn, p.subEs)}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 p-8 bg-teal/10 rounded-[32px] border-2 border-teal/30 shadow-xl shadow-teal/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-teal" />
            <p className="text-ink font-medium leading-relaxed italic mb-6 text-lg">
              {t(
                'An intensive service where we transform your closet into a clear, functional system aligned with the woman you are today.',
                'Un servicio intensivo donde transformamos tu clóset en un sistema claro, funcional y alineado con la mujer que eres hoy.'
              )}
            </p>
            <p className="text-teal font-serif text-2xl md:text-4xl font-bold leading-[1.1] tracking-tight">
              {t(
                "It's not about organizing. It's about deciding, simplifying, and creating structure.",
                'No se trata de organizar. Se trata de decidir, simplificar y crear estructura.'
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
