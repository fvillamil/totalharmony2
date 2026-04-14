import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, MessageCircle, Home } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0d111c] text-white/60 px-6 md:px-14 pt-13 pb-7">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-12 pb-9 border-b border-white/7">
        <div className="flex flex-col">
          <div 
            className="flex items-center gap-3 mb-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="https://totalharmonyservices.com/imgtotal/logototal1.png" 
              alt="Total Harmony Services" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>
          <p className="text-[13px] leading-relaxed mb-5.5">
            {t(
              'Professional organizer for homes, offices and moving in Northern Virginia. Certified Interior Planner · Method RESET.',
              'Organizadora profesional de hogares, oficinas y mudanzas en Northern Virginia. Certified Interior Planner · Método RESET.'
            )}
          </p>
          <div className="flex gap-2.5">
            <a href="https://www.facebook.com/profile.php?id=61563271061869" target="_blank" rel="noopener noreferrer" className="w-9.5 h-9.5 rounded-full bg-white/7 flex items-center justify-center text-sm transition-colors hover:bg-teal">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/totalharmony.op/" target="_blank" rel="noopener noreferrer" className="w-9.5 h-9.5 rounded-full bg-white/7 flex items-center justify-center text-sm transition-colors hover:bg-teal">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-teal font-bold mb-4.5">
            {t('Contact', 'Contacto')}
          </h4>
          <div className="space-y-1.5 text-[13px] leading-loose">
            <p>(407) 506-5027</p>
            <p>totalharmony.info@gmail.com</p>
            <p>@totalharmony.op</p>
            <p className="mt-2.5">
              {t('Mon–Fri 9am–7pm', 'Lun–Vie 9am–7pm')}<br />
              {t('Saturdays 10am–4pm', 'Sábados 10am–4pm')}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-teal font-bold mb-4.5">
            {t('Service areas', 'Áreas de servicio')}
          </h4>
          <p className="text-[13px] leading-loose">
            Alexandria · Fairfax<br />
            Falls Church · Arlington<br />
            Reston · Herndon<br />
            Chantilly · Annandale<br />
            Springfield · Vienna<br />
            Manassas · Ashburn<br />
            Burke
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-5.5 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[11px] text-white/25">© 2026 Total Harmony Services. All Rights Reserved.</p>
        <p className="text-[11px] text-white/25">Northern Virginia · @totalharmony.op</p>
      </div>
    </footer>
  );
}
