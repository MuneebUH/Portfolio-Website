import PortfolioHeader from '@/components/portfolio/header';
import HeroSection from '@/components/portfolio/hero-section';
import AboutSection from '@/components/portfolio/about-section';
import ServicesSection from '@/components/portfolio/services-section';
import ProcessSection from '@/components/portfolio/process-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import TestimonialsSection from '@/components/portfolio/testimonials-section';
import ContactSection from '@/components/portfolio/contact-section';
import CVSection from '@/components/portfolio/cv-section';
import Footer from '@/components/portfolio/footer';
import { useEffect } from 'react';

export default function Portfolio() {
  // Scroll to section if URL has hash
  useEffect(() => {
    // Handle hash links for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add slight delay to ensure page is ready
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 100, // 100px offset for header
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Run on initial load
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <CVSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}