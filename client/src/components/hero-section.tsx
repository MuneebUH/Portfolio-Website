import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-800">Product</span> Is Here
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              Our innovative solution revolutionizes how you interact with technology. Join the waitlist today and be the first to experience the future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <Button 
                asChild 
                size="lg"
                className="text-white shadow-md"
              >
                <a href="#waitlist">Join Waitlist</a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-primary border-primary-200 shadow-sm"
              >
                <a href="#how-it-works" className="inline-flex justify-center items-center">
                  <span>Learn More</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </motion.div>
            
            {waitlistCount > 0 && (
              <motion.div 
                className="mt-8 flex items-center text-gray-500"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs">
                    1
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs">
                    2
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">
                    3
                  </div>
                </div>
                <span className="text-sm">Join <span className="font-medium">{waitlistCount.toLocaleString()}+</span> people already on the waitlist</span>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700 rounded-xl transform rotate-3 scale-105 opacity-20 animate-pulse"></div>
              <svg 
                className="relative rounded-xl shadow-xl w-full h-full"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="600" rx="20" fill="#f8fafc" />
                <rect x="50" y="50" width="700" height="40" rx="10" fill="#e2e8f0" />
                <rect x="50" y="110" width="500" height="30" rx="8" fill="#94a3b8" />
                <rect x="50" y="150" width="700" height="200" rx="10" fill="#e2e8f0" />
                <rect x="50" y="370" width="300" height="180" rx="10" fill="#cbd5e1" />
                <rect x="370" y="370" width="380" height="180" rx="10" fill="#cbd5e1" />
                <circle cx="700" cy="75" r="15" fill="#3b82f6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
