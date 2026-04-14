import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Map() {
  const { language, t } = useLanguage();

  return (
    <section className="py-25 px-6 md:px-14 bg-charcoal" id="ubicaciones">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#8ee8d6] mb-3.5">
            <span className="w-[22px] h-[0.5px] bg-[#8ee8d6]" />
            {t('Coverage', 'Cobertura')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-white mb-4">
            {language === 'en' ? (
              <>In-person service in <em className="not-italic text-[#8ee8d6]">Northern Virginia, USA</em></>
            ) : (
              <>Servicio presencial en <em className="not-italic text-[#8ee8d6]">Northern Virginia, EE. UU.</em></>
            )}
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px]">
            {t(
              'We serve the entire Northern Virginia area. Contact us to coordinate your transformation.',
              'Atendemos toda el área del Norte de Virginia. Contáctanos para coordinar tu transformación.'
            )}
          </p>
        </motion.div>

        <motion.div 
          className="mt-14 bg-white/5 rounded-[26px] p-7 border border-white/10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 820 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <defs>
              <radialGradient id="glowT" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a9e8f" stopOpacity=".35"/>
                <stop offset="100%" stopColor="#1a9e8f" stopOpacity="0"/>
              </radialGradient>
            </defs>

            <rect width="820" height="520" fill="#1b2336" rx="0"/>

            <line x1="0" y1="130" x2="820" y2="130" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
            <line x1="0" y1="260" x2="820" y2="260" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
            <line x1="0" y1="390" x2="820" y2="390" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
            <line x1="205" y1="0" x2="205" y2="520" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
            <line x1="410" y1="0" x2="410" y2="520" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
            <line x1="615" y1="0" x2="615" y2="520" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>

            <path d="M 80 100 L 720 100 L 740 150 L 720 200 L 680 310 L 620 390 L 500 450 L 380 470 L 260 450 L 160 400 L 100 320 L 80 220 Z" fill="#22304a" stroke="#3a5070" strokeWidth="1.5"/>

            <path d="M 500 80 Q 560 130 530 190 Q 500 240 460 270 Q 420 300 380 340 Q 340 370 300 400" fill="none" stroke="#2a4a8f" strokeWidth="20" strokeLinecap="round" opacity=".55"/>
            <path d="M 500 80 Q 560 130 530 190 Q 500 240 460 270 Q 420 300 380 340 Q 340 370 300 400" fill="none" stroke="#4a70bf" strokeWidth="8" strokeLinecap="round" opacity=".25"/>
            
            <text x="250" y="310" fill="#5a7aaf" fontSize="15" opacity=".4">VIRGINIA</text>

            <rect x="502" y="146" width="40" height="24" rx="7" fill="#c23d82" opacity=".92"/>
            <text x="522" y="163" fill="white" fontSize="11" fontWeight="700" textAnchor="middle">D.C.</text>

            {/* Alexandria */}
            <circle cx="590" cy="225" r="26" fill="url(#glowT)"/>
            <circle cx="590" cy="225" r="11" fill="#1a9e8f"/>
            <circle cx="590" cy="225" r="5" fill="white"/>
            <rect x="608" y="212" width="90" height="26" rx="7" fill="rgba(26,158,143,.22)" stroke="rgba(26,158,143,.4)" strokeWidth="1"/>
            <text x="653" y="230" fill="#8ee8d6" fontSize="12" fontWeight="600" textAnchor="middle">Alexandria</text>

            {/* Fairfax */}
            <circle cx="530" cy="265" r="24" fill="url(#glowT)" opacity=".8"/>
            <circle cx="530" cy="265" r="10" fill="#1a9e8f"/>
            <circle cx="530" cy="265" r="4.5" fill="white"/>
            <rect x="548" y="252" width="66" height="26" rx="7" fill="rgba(26,158,143,.22)" stroke="rgba(26,158,143,.4)" strokeWidth="1"/>
            <text x="581" y="270" fill="#8ee8d6" fontSize="12" fontWeight="600" textAnchor="middle">Fairfax</text>

            {/* Ashburn */}
            <circle cx="420" cy="190" r="22" fill="url(#glowT)" opacity=".7"/>
            <circle cx="420" cy="190" r="9" fill="#1a9e8f"/>
            <circle cx="420" cy="190" r="4" fill="white"/>
            <rect x="438" y="177" width="74" height="26" rx="7" fill="rgba(26,158,143,.22)" stroke="rgba(26,158,143,.4)" strokeWidth="1"/>
            <text x="475" y="195" fill="#8ee8d6" fontSize="12" fontWeight="600" textAnchor="middle">Ashburn</text>

            {/* Burke */}
            <circle cx="500" cy="320" r="22" fill="url(#glowT)" opacity=".7"/>
            <circle cx="500" cy="320" r="9" fill="#1a9e8f"/>
            <circle cx="500" cy="320" r="4" fill="white"/>
            <rect x="518" y="307" width="60" height="26" rx="7" fill="rgba(26,158,143,.22)" stroke="rgba(26,158,143,.4)" strokeWidth="1"/>
            <text x="548" y="325" fill="#8ee8d6" fontSize="12" fontWeight="600" textAnchor="middle">Burke</text>

            {/* Legend */}
            <rect x="24" y="438" width="230" height="40" rx="10" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.09)" strokeWidth="1"/>
            <circle cx="44" cy="458" r="7" fill="#1a9e8f"/><circle cx="44" cy="458" r="3" fill="white"/>
            <text x="58" y="462" fill="rgba(255,255,255,.68)" fontSize="11">{t('Service area — Virginia', 'Área de servicio — Virginia')}</text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
