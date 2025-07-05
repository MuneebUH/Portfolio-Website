import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Smooth scroll function (similar to header)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(`Found element with ID: ${id}. Attempting to scroll.`);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID: ${id} not found.`);
    }
  };
  
  return (
    <footer className="bg-white shadow-[0_2px_24px_rgba(56,189,248,0.07)] border-t border-blue-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <span className="text-2xl font-bold mb-4 block cursor-pointer">
              <span className="text-gradient">Muneeb Ul Hassan</span>
            </span>
            <p className="text-gray-600 mb-6">
              Machine Learning Engineer building intelligent solutions that solve complex problems.
            </p>
            <p className="flex items-center text-sm text-gray-500">
              <Heart className="h-4 w-4 text-red-500 mr-2" /> 
              Built with passion and code
            </p>
          </div>
          
          {/* Services */}
          <div className="hidden md:block md:col-span-4 md:col-start-5">
            <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors cursor-pointer text-left w-full">
                  Machine Learning Model Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors cursor-pointer text-left w-full">
                  Deep Learning Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors cursor-pointer text-left w-full">
                  Natural Language Processing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors cursor-pointer text-left w-full">
                  Reinforcement Learning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors cursor-pointer text-left w-full">
                  Data Analysis & Visualization
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-4 md:col-end-13">
            <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <span className="text-primary">Email:</span> mulhassan146@gmail.com
              </li>
              <li className="text-gray-700">
                <span className="text-primary">Phone:</span> +92 318 7813997
              </li>
            </ul>
            
            {/* Social links */}
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/muneebulhassan-ml/"
                className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 rounded-full flex items-center justify-center text-white shadow hover:scale-110 hover:shadow-blue-300 transition-all duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://github.com/MuneebUH"
                className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 rounded-full flex items-center justify-center text-white shadow hover:scale-110 hover:shadow-blue-300 transition-all duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-100 text-center text-gray-400 text-sm bg-white">
          <p>© {currentYear} <span className="font-semibold text-gray-700">Muneeb Ul Hassan</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}