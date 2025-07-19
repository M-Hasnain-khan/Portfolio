'use client';

import Header from '@/components/header/Header';
import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Header */}
      <Header />
       
        <HeroSection />
    </main>
  );
}
