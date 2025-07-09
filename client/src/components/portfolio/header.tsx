import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Builds', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Highlights', href: '#highlights' },
];

export default function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  // Scroll event to change header background
  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''));
    let observer: IntersectionObserver | null = null;

    const tryObserve = () => {
      const sectionElements = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sectionElements.length !== sectionIds.length) {
        setTimeout(tryObserve, 200);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          // Debug: log all entries
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
              console.log('Intersected section:', entry.target.id, 'ratio:', entry.intersectionRatio);
            }
          });
          // Find all intersecting sections
          const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => ({
              id: (entry.target as HTMLElement).id,
              top: entry.boundingClientRect.top,
            }));

          if (visibleSections.length > 0) {
            // Pick the section closest to the top (but still visible)
            const nearest = visibleSections.reduce((a, b) =>
              a.top < b.top ? a : b
            );
            setActiveSection(nearest.id);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      sectionElements.forEach(el => observer!.observe(el));
    };

    tryObserve();

    // Fallback: scroll event to detect if user is at the bottom or top
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      // If near the bottom, set last section as active
      if (scrollY + windowHeight >= fullHeight - 10) {
        const lastId = sectionIds[sectionIds.length - 1];
        setActiveSection(lastId);
        console.log('Scroll fallback: set active section to', lastId);
        return;
      }

      // If at the very top, set first section as active
      if (scrollY === 0) {
        setActiveSection(sectionIds[0]);
        console.log('Scroll fallback: set active section to', sectionIds[0]);
        return;
      }

      // Explicitly check if CV section is in view
      const cvSection = document.getElementById('cv');
      if (cvSection) {
        const rect = cvSection.getBoundingClientRect();
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0
        ) {
          setActiveSection('cv');
          console.log('Scroll fallback: cv section is in view');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-[100vw] md:w-[99.5vw] z-50 pr-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-b border-gray-200 shadow-md py-3' 
          : 'bg-white py-5 border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
          >
            <span className="text-gradient">Muneeb Ul Hassan</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.href}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`nav-link text-gray-700 hover:text-primary ${
                  activeSection === item.href.replace('#', '') ? 'nav-link-active text-primary font-semibold' : ''
                } cursor-pointer`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="btn-primary bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            >
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700 transition-transform duration-300 ease-in-out transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 rotate-180" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-5 p-5 rounded-md shadow-lg border border-gray-200 max-w-sm">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button 
                  key={item.href}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`nav-link text-left text-gray-700 hover:text-primary ${
                    activeSection === item.href.replace('#', '') ? 'nav-link-active text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="btn-primary w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}