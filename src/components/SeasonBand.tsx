import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

export default function SeasonBand() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-[#009999] via-[#007a7a] to-[#005c5c] py-16 md:py-20 px-6 md:px-14 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-15 -right-15 w-[400px] h-[400px] rounded-full bg-radial-gradient from-gold/18 to-transparent pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[280px] h-[280px] rounded-full bg-radial-gradient from-teal/14 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-[#f5c580] px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase mb-5">
            🌸 {t('Seasonal Service · Limited Spots', 'Servicio de Temporada · Cupos Limitados')}
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white mb-4">
            {language === 'en' ? (
              <>Closet Reset<br /><em className="text-[#8ee8d6] not-italic">Spring — Summer</em></>
            ) : (
              <>Reset de Clóset<br /><em className="text-[#8ee8d6] not-italic">Primavera — Verano</em></>
            )}
          </h2>

          <p className="text-white/85 leading-relaxed mb-7 text-base md:text-lg">
            {t(
              'Stop storing clothes you no longer wear. It is time to renew your closet for this new season.',
              'Deja de guardar ropa que ya no usas. Es momento de renovar tu clóset para esta nueva temporada.'
            )}
          </p>

          <div className="flex flex-col gap-2.5 mb-8">
            {[
              { icon: '❄️', en: 'Winter clothes still taking up space', es: 'Ropa de invierno aún ocupando espacio' },
              { icon: '👗', en: 'Clothes you never wear', es: 'Prendas que ya no usas' },
              { icon: '😩', en: 'Full closet, zero real options', es: 'Clóset lleno, sin opciones claras' },
              { icon: '🔁', en: 'Same combinations every day', es: 'Mismas combinaciones todos los días' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/75 text-[15px]">
                <div className="w-7 h-7 rounded-full bg-rose/20 border border-rose/40 flex items-center justify-center text-xs shrink-0">
                  {item.icon}
                </div>
                {t(item.en, item.es)}
              </div>
            ))}
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-br from-gold to-[#f0b55a] text-charcoal px-10 py-5 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-xl shadow-gold/40 hover:-translate-y-1 hover:scale-105"
          >
            🌸 {t('Reserve my seasonal reset', 'Reservar mi reset de temporada')}
          </a>

          <div className="mt-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <div className="inline-block bg-rose text-white px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-[0.15em] uppercase mb-6 shadow-lg shadow-rose/20">
              🎁 {t('Exclusive Bonus', 'Bonus Exclusivo')}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-tight">
              {t('Gifts included with your Reset:', 'Regalos incluidos con tu Reset:') }
            </h3>
            <div className="grid gap-6">
              {[
                { en: 'Rotation guide included', es: 'Guía de rotación incluida' },
                { en: 'Maintenance mini-plan', es: 'Mini plan de mantenimiento' },
                { en: 'Post-service check-in', es: 'Check-in post servicio' },
              ].map((gift, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-charcoal font-serif font-bold text-xl shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    {i + 1}
                  </div>
                  <p className="text-white text-lg md:text-xl font-sans font-medium tracking-wide">
                    {t(gift.en, gift.es)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] md:aspect-auto md:h-[580px]">
            <img 
              src="https://totalharmonyservices.com/imgtotal/total31.jpeg" 
              alt="Seasonal Reset"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="text-2xl font-serif italic mb-1">Closet</div>
            <div className="text-[10px] font-bold tracking-widest uppercase opacity-80">Reset</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
