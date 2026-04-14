import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  num: string;
  img: string;
  title: string;
  desc: string;
  tags: { en: string; es: string; color?: 'teal' | 'rose' | 'gold' }[];
  price?: string;
  priceSub?: string;
}

function ServiceCard({ num, img, title, desc, tags, price, priceSub }: ServiceCardProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      className="rounded-3xl overflow-hidden bg-white transition-all duration-400 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-black/10 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="h-[220px] overflow-hidden relative group">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <div className="font-serif text-6xl font-bold text-teal/20 leading-none mb-[-20px] relative z-0">{num}</div>
        <h3 className="font-serif text-2xl text-charcoal mb-2.5 relative z-10">{title}</h3>
        <p className="text-sm text-gray leading-relaxed flex-1">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-4.5">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold",
                tag.color === 'rose' ? "bg-rose-light text-rose-dark" :
                tag.color === 'gold' ? "bg-gold-light text-[#7a5020]" :
                "bg-teal-light text-teal-dark"
              )}
            >
              {t(tag.en, tag.es)}
            </span>
          ))}
        </div>

        {price && (
          <div className="font-serif text-3xl text-charcoal font-semibold mt-4.5">
            {price} <span className="text-sm font-sans text-gray font-normal">{priceSub}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "https://totalharmonyservices.com/imgtotal/total12.jpeg",
    "https://totalharmonyservices.com/imgtotal/total8.jpeg",
    "https://totalharmonyservices.com/imgtotal/total9.jpeg",
    "https://totalharmonyservices.com/imgtotal/total5.jpeg",
    "https://totalharmonyservices.com/imgtotal/total6.jpeg",
    "https://totalharmonyservices.com/imgtotal/total17.jpeg",
    "https://totalharmonyservices.com/imgtotal/total18.jpeg",
    "https://totalharmonyservices.com/imgtotal/total20.jpeg",
    "https://totalharmonyservices.com/imgtotal/total19.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <section className="py-25 px-6 md:px-14 bg-cream" id="services">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-3.5 justify-center">
            <span className="w-[22px] h-[0.5px] bg-teal" />
            {t('Services', 'Servicios')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-charcoal">
            {language === 'en' ? (
              <>Where do you want to <em className="not-italic text-teal">start?</em></>
            ) : (
              <>¿Por dónde quieres <em className="not-italic text-teal">empezar?</em></>
            )}
          </h2>
        </div>

        {/* FEATURED: RESET ESENCIAL PREMIUM */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-ink shadow-xl shadow-black/18 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-full overflow-hidden hidden md:block relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={sliderImages[currentSlide]} 
                alt="RESET Essential Premium"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-[#f5c580] px-4.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase mb-5 w-fit">
              ⭐ {t('Signature Service', 'Servicio Estrella')}
            </div>
            <h3 className="font-serif text-4xl md:text-[42px] text-white leading-tight mb-3.5">
              {t('RESET Essential Premium', 'RESET Esencial Premium')}
            </h3>
            <p className="text-[15px] text-white/65 leading-relaxed mb-6">
              {t(
                'Intensive service to transform 1 or 2 key spaces in your home into functional systems that truly work in your daily life. Not just aesthetic — strategic.',
                'Servicio intensivo para transformar 1 o 2 espacios clave del hogar en sistemas funcionales que realmente funcionen en tu día a día. No solo estética — estrategia.'
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-7">
              {[
                { en: 'Strategic space evaluation', es: 'Evaluación estratégica' },
                { en: 'Guided depuration', es: 'Depuración guiada' },
                { en: 'Functional organization', es: 'Organización funcional' },
                { en: 'Custom system design', es: 'Diseño de sistema personalizado' },
                { en: 'Complete implementation', es: 'Implementación completa' },
                { en: 'Space optimization', es: 'Optimización del espacio' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-white/75">
                  <Check className="text-[#8ee8d6] w-3.5 h-3.5" />
                  {t(item.en, item.es)}
                </div>
              ))}
            </div>
            <div className="text-[13px] text-white/45 mb-4.5">
              {t('1 space: 4–7 hrs · 2 spaces: 1–2 days · Price on diagnosis', '1 espacio: 4–7 hrs · 2 espacios: 1–2 días · Precio en diagnóstico')}
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2.5 bg-rose hover:bg-rose-dark text-white px-7.5 py-3.5 rounded-full font-bold text-sm transition-all duration-300 w-fit"
            >
              📅 {t('Request my free diagnosis', 'Solicitar mi diagnóstico gratis')}
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <ServiceCard 
            num="01"
            img="https://totalharmonyservices.com/imgtotal/total46.jpeg"
            title={t('Closet & Space Organization', 'Organización de Clóset y Espacios')}
            desc={t(
              'Your closet holds life stages. We don\'t just organize clothes — we help you release what no longer represents you and build a system that flows with your current life.',
              'Tu clóset guarda etapas de vida. No solo organizamos ropa — te ayudamos a soltar lo que ya no te representa y construimos un sistema que fluye con tu vida actual.'
            )}
            tags={[
              { en: 'Closets', es: 'Clósets' },
              { en: 'Kitchen', es: 'Cocina' },
              { en: 'Pantry', es: 'Despensa' },
              { en: 'Basement', es: 'Sótano' },
            ]}
          />
          <ServiceCard 
            num="02"
            img="https://totalharmonyservices.com/imgtotal/total9.jpeg"
            title={t('Office Productivity Reset', 'Reset de Productividad Oficina')}
            desc={t(
              'When your workspace is clear, your mind is clear. We design office systems that support your professional performance and eliminate the cognitive load of visual chaos.',
              'Cuando tu espacio de trabajo es claro, tu mente es clara. Diseñamos sistemas de oficina que sostienen tu desempeño profesional y eliminan la carga cognitiva del caos visual.'
            )}
            tags={[
              { en: 'Home office', es: 'Oficina en casa', color: 'rose' },
              { en: 'Filing systems', es: 'Archivos', color: 'rose' },
              { en: 'Digital org', es: 'Digital', color: 'rose' },
            ]}
          />
          <ServiceCard 
            num="03"
            img="https://totalharmonyservices.com/imgtotal/total15.jpeg"
            title={t('Stress-Free Moving', 'Mudanza Sin Estrés')}
            desc={t(
              'Strategic accompaniment before, during or after a move. We integrate conscious emotional support to facilitate decisions and detachment — so you don\'t recreate the same chaos in a new space.',
              'Acompañamiento estratégico antes, durante o después de la mudanza. Integramos acompañamiento emocional para facilitar decisiones y desapego — para no repetir el mismo caos en un nuevo espacio.'
            )}
            tags={[
              { en: 'Packing', es: 'Embalaje', color: 'gold' },
              { en: 'Unpacking', es: 'Desembalaje', color: 'gold' },
              { en: 'Post-move org', es: 'Org. post mudanza', color: 'gold' },
            ]}
            price={t('From $550', 'Desde $550')}
            priceSub={t('depending on scope', 'según alcance')}
          />
        </div>
      </div>
    </section>
  );
}
