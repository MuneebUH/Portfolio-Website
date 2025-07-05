import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      let currentActive = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is just below the header
          if (rect.top <= 150) { // Adjust 150px based on header height and desired offset
            currentActive = section;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
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