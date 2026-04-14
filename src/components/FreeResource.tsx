import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Download } from 'lucide-react';

export default function FreeResource() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-14 bg-warm/30" id="resource">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          className="bg-white rounded-[32px] p-8 md:p-16 shadow-xl border border-teal/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-rose mb-4">
              <span className="w-[22px] h-[0.5px] bg-rose" />
              {t('Exclusive Gift', 'Regalo Exclusivo')}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-charcoal mb-6">
              {t('I have a Free Resource for you', 'Tengo un Recurso Gratuito para ti')}
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8 max-w-[500px]">
              {t(
                'Start your transformation today with my specialized guide. Practical tools to bring order to your life.',
                'Comienza tu transformación hoy con mi guía especializada. Herramientas prácticas para traer orden a tu vida.'
              )}
            </p>
            <a 
              href="https://totalharmonyservices.com/imgtotal/checklist.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-br from-rose to-[#d14d8d] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-rose/30 transition-all duration-300"
            >
              <Download size={20} />
              {t('Download Checklist', 'Descargar Checklist')}
            </a>
          </div>

          <div className="w-full md:w-[340px] shrink-0 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80" 
                alt="Free Guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose shadow-xl">
                  <Download size={32} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
