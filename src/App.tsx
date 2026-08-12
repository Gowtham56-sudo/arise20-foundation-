import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { SuccessStories } from './components/SuccessStories';
import { GallerySection } from './components/GallerySection';
import { EventsTimeline } from './components/EventsTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { DonationSection } from './components/DonationSection';
import { VolunteerSection } from './components/VolunteerSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Modals } from './components/Modals';

import { Program, GalleryItem, EventItem } from './types';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleOpenDonate = (amount?: number, programId?: string) => {
    const donateElem = document.getElementById('donate');
    if (donateElem) {
      donateElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVolunteer = () => {
    const volElem = document.getElementById('volunteer');
    if (volElem) {
      volElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#154C9E] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDonate={handleOpenDonate} onOpenVolunteer={handleOpenVolunteer} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenDonate={handleOpenDonate} onOpenVolunteer={handleOpenVolunteer} />

        {/* 2. Impact Statistics (Removed due to irrelevant mock data) */}
        {/* <ImpactStats /> */}

        {/* 3. About Foundation (Vision, Mission, Founder, Values) */}
        <AboutSection />

        {/* 4. Programs & Initiatives */}
        <ProgramsSection
          onSelectProgram={(program) => setSelectedProgram(program)}
          onOpenDonate={handleOpenDonate}
        />

        {/* 5. Success Stories Spotlight (Removed) */}
        {/* <SuccessStories /> */}

        {/* 6. Masonry Gallery with Lightbox */}
        <GallerySection onOpenLightbox={(item) => setSelectedGalleryItem(item)} />

        {/* 7. Upcoming Events Timeline (Removed) */}
        {/* <EventsTimeline onRegisterEvent={(event) => setSelectedEvent(event)} /> */}

        {/* 8. Testimonials Slider (Removed) */}
        {/* <TestimonialsSection /> */}

        {/* 9. Partner Logos & Institutional Trust Wall (Removed) */}
        {/* <PartnersSection /> */}

        {/* 10. Direct Donation Engine with UPI/QR & Tax Exemption 80G */}
        <DonationSection />

        {/* 11. Multi-step Volunteer Application Wizard */}
        <VolunteerSection />

        {/* 12. Searchable FAQ Accordion */}
        <FAQSection />

        {/* 13. Contact & HQ Map Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Live-Chat & Sticky Mobile Controls */}
      <FloatingActions onOpenDonate={() => handleOpenDonate()} />

      {/* Modals Container */}
      <Modals
        selectedProgram={selectedProgram}
        onCloseProgram={() => setSelectedProgram(null)}
        selectedGalleryItem={selectedGalleryItem}
        onCloseGallery={() => setSelectedGalleryItem(null)}
        selectedEvent={selectedEvent}
        onCloseEvent={() => setSelectedEvent(null)}
        onOpenDonate={handleOpenDonate}
      />
    </div>
  );
}
