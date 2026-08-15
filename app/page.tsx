'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { BeforeAfterSection } from '@/components/before-after-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { ForWhomSection } from '@/components/for-whom-section';
import { BonusSection } from '@/components/bonus-section';
import { OfferSection } from '@/components/offer-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

const treinos = [
  'Velocidade e aceleração', 'Resistência e ritmo', 'Corrida com barreiras', 'Revezamentos',
  'Saltos e impulsão', 'Arremessos e lançamentos', 'Técnica de corrida', 'Coordenação e agilidade',
];

const treinoImages: Record<string, string> = {
  'Velocidade e aceleração': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_51_50-YNUogSQUMAL46b3nxfGh9jsBhtC8bT.webp',
  'Resistência e ritmo': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_55_16-B57y34oS2somQvCpOFwTcAcYtRAuAK.webp',
  'Corrida com barreiras': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_59_21-3NQxbugx8yvGu7PsncKsVkxSEUgDwz.webp',
  'Revezamentos': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_45_15-MQ7iZvm7S6Bu3Yzz1SBPjhHHUpzCqC.webp',
  'Saltos e impulsão': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_51_30-vCPTWtYOs1HK9k4l8PGooxRVHlaRtt.webp',
  'Arremessos e lançamentos': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_44_38-mBW0QSHb2wUCkVWu5hcYxhlUvfRdck.webp',
  'Técnica de corrida': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_47_10-x8q8cPGb4JdD4PnrtydOcx38lif5YN.webp',
  'Coordenação e agilidade': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_49_39-jp5oeizORSY9i32vRq48n3uoR88sly.webp',
};

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  const slides = treinos.map((title) => ({ image: '', title }));
  const slidesWithImages = treinos.map((title) => ({ image: treinoImages[title] ?? '', title }));

  return (
    <main className="min-h-screen bg-background pt-14 sm:pt-16 md:pt-20">
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <BeforeAfterSection />
      <ProductCarousel title="Conheça os Treinos por Dentro" subtitle="Páginas visuais com objetivo, duração, execução, diagrama e progressão." items={slidesWithImages} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="Uma Biblioteca para Diferentes Níveis" subtitle="Consulte durante a preparação e adapte cada sessão ao seu público." items={slides} reverse={true} />
      <ForWhomSection />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef} id="checkout"><OfferSection onCtaClick={handleCtaClick} /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
