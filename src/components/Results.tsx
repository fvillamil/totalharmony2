import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BACardProps {
  type: 'before' | 'after';
  img: string;
}

function BACard({ type, img }: BACardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="rounded-[28px] overflow-hidden relative aspect-[4/3] group shadow-xl">
      <img 
        src={img} 
        alt={`${type}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
      
      <div className={`absolute top-6 left-6 px-6 py-2.5 rounded-full text-[13px] font-bold tracking-[0.16em] uppercase border-2 shadow-lg ${
        type === 'before' 
          ? 'bg-rose border-rose text-white' 
          : 'bg-teal border-teal text-white'
      }`}>
        {type === 'before' ? t('Before', 'Antes') : t('After', 'Después')}
      </div>
    </div>
  );
}

export default function Results() {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const pairs = [
    {
      before: "https://totalharmonyservices.com/imgtotal/closet1_1.jpeg",
      after: "https://totalharmonyservices.com/imgtotal/closet1_2.jpeg"
    },
    {
      before: "https://totalharmonyservices.com/imgtotal/closet2_1.jpeg",
      after: "https://totalharmonyservices.com/imgtotal/closet2_2.jpeg"
    },
    {
      before: "https://totalharmonyservices.com/imgtotal/closet3_1.jpeg",
      after: "https://totalharmonyservices.com/imgtotal/closet3_2.jpeg"
    },
    {
      before: "https://totalharmonyservices.com/imgtotal/total26.jpeg",
      after: "https://totalharmonyservices.com/imgtotal/total25.jpeg"
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % pairs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + pairs.length) % pairs.length);

  return (
    <section className="py-30 px-6 md:px-14 bg-cream relative overflow-hidden" id="results">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-3.5">
            <span className="w-[22px] h-[0.5px] bg-teal" />
            {t('Real Transformations', 'Transformaciones Reales')}
          </div>
          <h2 className="font-serif text-5xl leading-tight text-charcoal">
            {language === 'en' ? (
              <>From <span className="text-rose">chaos</span> to <em className="not-italic text-teal">clarity</em></>
            ) : (
              <>Del <span className="text-rose">caos</span> a la <em className="not-italic text-teal">claridad</em></>
            )}
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          {pairs.map((pair, i) => (
            <React.Fragment key={i}>
              <BACard type="before" img={pair.before} />
              <BACard type="after" img={pair.after} />
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <BACard type="before" img={pairs[current].before} />
              <BACard type="after" img={pairs[current].after} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-teal text-teal flex items-center justify-center shadow-md active:scale-95 transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="text-sm font-bold text-charcoal">
              {current + 1} / {pairs.length}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-teal text-teal flex items-center justify-center shadow-md active:scale-95 transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
