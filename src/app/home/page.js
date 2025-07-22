'use client';

import Header from '@/components/header/Header';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import Skills from '@/components/skill/Skills';
import Projects from '@/components/project/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Header */}
      <Header />
       
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </main>
  );
}
