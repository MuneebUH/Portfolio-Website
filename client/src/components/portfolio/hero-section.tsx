import { ArrowRightIcon, ArrowDownIcon, CheckCircle, Github, Linkedin, Twitter, FileDown, ChevronRight, Code, Award, Star, Zap, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateCV } from '@/lib/cvGenerator';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = [
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Specialist",
    "Deep Learning Enthusiast"
  ];
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleDownloadCV = () => {
    const cvUrl = "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/Muneeb-Ul-Hassan-Machine-Learning.pdf";
    window.open(cvUrl, '_blank');
  };
  
  // Typewriter effect
  useEffect(() => {
    setIsVisible(true);
    
    let timeout: NodeJS.Timeout;
    
    // Type text
    if (typedText.length < textOptions[currentTextIndex].length) {
      timeout = setTimeout(() => {
        setTypedText(textOptions[currentTextIndex].substring(0, typedText.length + 1));
      }, 100);
    } 
    // Wait before erasing
    else {
      timeout = setTimeout(() => {
        // Start erasing
        timeout = setTimeout(() => {
          if (typedText.length > 0) {
            setTypedText(typedText.substring(0, typedText.length - 1));
          } else {
            // Move to next text option
            setCurrentTextIndex((currentTextIndex + 1) % textOptions.length);
          }
        }, 50);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex]);
  
  // Animated stats counter
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  });
  
  useEffect(() => {
    const targetStats = {
      projects: 100,
      clients: 65,
      experience: 7
    };
    
    const duration = 2000; // 2 seconds
    const frameRate = 20; // Update every 20ms
    const totalFrames = duration / frameRate;
    let frame = 0;
    
    const interval = setInterval(() => {
      frame++;
      
      if (frame <= totalFrames) {
        const progress = frame / totalFrames;
        setStats({
          projects: Math.floor(progress * targetStats.projects),
          clients: Math.floor(progress * targetStats.clients),
          experience: Math.floor(progress * targetStats.experience)
        });
      } else {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, frameRate);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="flex items-center relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      {/* Advanced animated background */}
      <div className="absolute inset-0 z-0">
        {/* Remove or lighten background gradients for white theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 z-0"></div>
        {/* Decorative elements, softened for white theme */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        {/* Grid overlay effect, very subtle */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left content */}
          <div className="lg:w-3/5 space-y-8">
            {/* Stylish social icons with hover effects */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/MuneebUH" 
                className="group w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muneebulhassan-ml/" 
                className="group w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              {/* Status indicator */}
              <div className="ml-2 flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full border border-green-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm text-green-700">Available for Projects</span>
              </div>
            </div>
            {/* Enhanced heading with animation */}
            <div className="space-y-3">
              <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
                <span className="text-sm uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">Machine Learning Specialist</span>
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Hi, I'm <span className="text-gradient relative inline-block">Muneeb Ul Hassan<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span></span></h1>
              <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 flex items-center">
                  <span>{typedText}</span>
                  <span className="ml-1 w-1 h-8 md:h-10 bg-primary inline-block animate-blink"></span>
                </h2>
              </div>
            </div>
            {/* Enhanced description */}
            <p className={`text-sm md:text-base text-gray-700 max-w-2xl -mt-4000 p-0 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  Machine Learning Engineer with expertise in developing AI-driven solutions to extract actionable insights from complex datasets. Proficient in Python, R, TensorFlow, Keras, and PyTorch, I specialize in deep learning, NLP, and predictive modeling. I apply data analytics and MLOps to optimize strategies and drive impactful business decisions.
</p>

            {/* Animated stats row */}
           
            {/* Enhanced service badges */}
            <div className={`flex flex-wrap gap-3 max-w-2xl transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
              {[
                { name: "Machine Learning", icon: <Code className="w-4 h-4" /> },
                { name: "Data Science", icon: <Zap className="w-4 h-4" /> },
                { name: "AI Development", icon: <Star className="w-4 h-4" /> },
                { name: "Deep Learning", icon: <MousePointer className="w-4 h-4" /> },
                { name: "Model Training", icon: <Award className="w-4 h-4" /> }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-sm text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
            {/* Enhanced CTA buttons */}
            <div className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
              <Button 
                onClick={scrollToProjects} 
                className="relative overflow-hidden group px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-blue-700/10 hover:shadow-blue-700/20 transition-all"
                size="lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative flex items-center">
                  View Projects
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                onClick={handleDownloadCV} 
                className="relative overflow-hidden group px-6 py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-xl shadow-lg shadow-green-700/10 hover:shadow-green-700/20 transition-all"
                size="lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative flex items-center">
                  Download CV
                  <FileDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                onClick={scrollToContact} 
                className="relative overflow-hidden group px-6 py-6 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-medium rounded-xl transition-all"
                size="lg"
              >
                <span className="relative flex items-center">
                  Contact Me
                  <ArrowDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
          {/* Right content - Enhanced Hero image */}
          <div className={`lg:w-2/5 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
            <div className="relative">
              {/* Main image with enhanced frame */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500">
                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10"></div>
                <img
                  src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2024/12/Muneeb-Ul-Hassan-Machine-Learning-Deep-Learning-NLP-Computer-Vision.png"
                  alt="Ameer Hamza - WordPress Developer"
                  className="w-full h-[550px] object-cover z-20 transition-transform duration-700 hover:scale-105"
                />
              </div>
             
              {/* Enhanced floating tech stack badge - REMOVED */}
              {/* <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white/90 rounded-xl py-4 px-6 shadow-2xl shadow-green-500/10 border border-gray-200 hover:border-green-300 transition-all group hover:transform hover:translate-x-2 z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="flex flex-col relative z-10">
                  <p className="font-medium text-gray-700 mb-2">Expert In:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-blue-500 font-medium">Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-purple-500 font-medium">Data Science</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-green-600 font-medium">AI Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span className="text-yellow-600 font-medium">Deep Learning</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}