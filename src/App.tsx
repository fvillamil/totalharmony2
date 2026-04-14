/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeasonBand from './components/SeasonBand';
import Results from './components/Results';
import WhoItIsFor from './components/WhoItIsFor';
import Services from './components/Services';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import About from './components/About';
import FreeResource from './components/FreeResource';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <SeasonBand />
          <Results />
          <WhoItIsFor />
          <Services />
          <Method />
          <Testimonials />
          <Map />
          <About />
          <FreeResource />
          <CTABand />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
