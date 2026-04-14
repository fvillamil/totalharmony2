import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/14075065027" 
      className="fixed bottom-6.5 right-6.5 z-[999] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#25d366]/38 animate-pulse hover:scale-110 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={28} />
    </a>
  );
}
