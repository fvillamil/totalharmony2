import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Instagram, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      location: formData.get('location'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error(err);
      setError(t('An error occurred. Please try again later or contact me via WhatsApp.', 'Ocurrió un error. Por favor intenta más tarde o contáctame por WhatsApp.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-25 px-6 md:px-14 bg-white" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-3">
            <span className="w-[22px] h-[0.5px] bg-teal" />
            {t('Contact', 'Contacto')}
          </div>
          <h3 className="font-serif text-4xl md:text-[42px] text-charcoal mb-4">
            {t('Let\'s talk about your space.', 'Hablemos de tu espacio.')}
          </h3>
          <p className="text-[15px] text-gray leading-relaxed mb-8">
            {t(
              'Whether you\'re ready to start or just have questions, I\'m here. The first conversation is always free.',
              'Ya sea que estés lista para empezar o solo tengas preguntas, estoy aquí. La primera conversación es siempre gratuita.'
            )}
          </p>

          <div className="flex flex-col gap-3.5">
            {[
              { icon: <Phone size={20} />, titleEn: 'Phone / WhatsApp', titleEs: 'Teléfono / WhatsApp', val: '(407) 506-5027' },
              { icon: <Mail size={20} />, titleEn: 'Email', titleEs: 'Email', val: 'totalharmony.info@gmail.com', rose: true },
              { icon: <Instagram size={20} />, titleEn: 'Instagram', titleEs: 'Instagram', val: '@totalharmony.op' },
              { icon: <MapPin size={20} />, titleEn: 'Service area', titleEs: 'Área de servicio', valEn: 'Northern Virginia', valEs: 'Northern Virginia', rose: true },
              { icon: <Clock size={20} />, titleEn: 'Hours', titleEs: 'Horario', valEn: 'Mon–Fri 9am–7pm · Sat 10am–4pm', valEs: 'Lun–Vie 9am–7pm · Sáb 10am–4pm' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={cn(
                  "flex items-center gap-4 p-4.5 rounded-2xl bg-warm border-l-4 transition-transform duration-300 hover:translate-x-1.5",
                  item.rose ? "border-rose" : "border-teal"
                )}
                whileHover={{ x: 5 }}
              >
                <div className="text-teal shrink-0">{item.icon}</div>
                <div>
                  <strong className="block text-[11px] text-charcoal font-bold tracking-widest uppercase">
                    {t(item.titleEn, item.titleEs)}
                  </strong>
                  <span className="text-sm text-gray">
                    {item.val || t(item.valEn!, item.valEs!)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-8 bg-warm rounded-[32px] border-2 border-teal/20"
            >
              <CheckCircle2 size={64} className="text-teal mb-6" />
              <h4 className="font-serif text-3xl text-charcoal mb-4">
                {t('Message Sent!', '¡Mensaje Enviado!')}
              </h4>
              <p className="text-gray leading-relaxed">
                {t(
                  'Thank you for reaching out. We will get in touch with you as soon as possible.',
                  'Enviado, nos pondremos en contacto lo mas pronto posible'
                )}
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-teal font-bold text-sm uppercase tracking-widest hover:underline"
              >
                {t('Send another message', 'Enviar otro mensaje')}
              </button>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-rose/10 border border-rose/30 p-4 rounded-xl text-rose-dark text-sm mb-2">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('First name', 'Nombre')}</label>
                  <input name="firstName" required type="text" className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('Last name', 'Apellido')}</label>
                  <input name="lastName" required type="text" className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('Phone', 'Teléfono')}</label>
                  <input name="phone" required type="tel" placeholder="(000) 000-0000" className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">Email</label>
                  <input name="email" required type="email" className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('City / Location', 'Ciudad / Ubicación')}</label>
                <input name="location" required type="text" placeholder="Alexandria, Fairfax, Online..." className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('Service of interest', 'Servicio de interés')}</label>
                <select name="service" required className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors appearance-none">
                  <option value="">{t('Select a service', 'Seleccionar un servicio')}</option>
                  <option>🌸 Closet Reset Spring–Summer</option>
                  <option>⭐ RESET Essential Premium</option>
                  <option>💼 Office Productivity Reset</option>
                  <option>📦 {t('Stress-Free Moving', 'Mudanza Sin Estrés')}</option>
                  <option>💻 {t('Online Consulting', 'Asesoría Online')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold tracking-widest uppercase text-charcoal">{t('Tell me about your space', 'Cuéntame sobre tu espacio')}</label>
                <textarea name="message" required className="p-3.5 border-2 border-gray/20 rounded-xl font-sans text-[15px] text-charcoal bg-white focus:border-teal outline-none transition-colors resize-y min-h-[110px]" />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={cn(
                  "bg-gradient-to-br from-teal-dark to-teal text-white border-none p-4.5 rounded-full font-sans text-[15px] font-bold cursor-pointer transition-all duration-300 shadow-lg shadow-teal/28 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/38 flex items-center justify-center gap-2",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>📅 {t('Request my free harmony diagnosis →', 'Solicitar mi diagnóstico de armonía gratis →')}</>
                )}
              </button>
              <p className="text-xs text-gray text-center mt-2">
                {t('No commitment · Response in less than 24 hours', 'Sin compromiso · Respuesta en menos de 24 horas')}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
