import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stats from './components/Stats';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all reveal elements (re-query after each render)
    const attach = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    };
    attach();

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}