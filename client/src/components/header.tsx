import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/mobile-menu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-white fixed w-[98vw] shadow-sm z-50 relative pr-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo section - allow shrinking */}
          <div className="flex items-center flex-shrink">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ProductName</span>
            </a>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">How it Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium transition-colors">Testimonials</a>
          </nav>
          
          {/* Buttons Container - allow shrinking */}
          <div className="flex items-center flex-shrink">
            {/* CTA Button */}
            <Button
              asChild
              variant="default"
              className="hidden md:inline-flex"
            >
              <a href="#waitlist">Join Waitlist</a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </header>
  );
}
