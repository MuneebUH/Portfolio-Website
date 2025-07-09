import { useState, useEffect } from 'react';
import { SiWordpress, SiPhp, SiHtml5, SiCss3, SiJavascript, SiElementor, SiGithub, SiGooglesearchconsole } from 'react-icons/si';
import { Database, Code, Layers, MessageSquare, BarChart2, Cloud, Zap, Settings } from 'lucide-react';
import { SiBootstrap, SiReact, SiNodedotjs } from 'react-icons/si';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Software & Web Development skills
  const devSkills: Skill[] = [
    {
      name: 'API Integration & RESTful API',
      percentage: 85,
      icon: <Cloud size={20} />,
      color: 'from-blue-400 to-green-400'
    },
    
    {
      name: 'Tailwind CSS & Bootstrap',
      percentage: 82,
      icon: <SiJavascript size={20} />,
      color: 'from-yellow-400 to-purple-600'
    },
    {
      name: 'Javascript & Typescript',
      percentage: 87,
      icon: <SiReact size={20} />,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'React',
      percentage: 85,
      icon: <Cloud size={20} />,
      color: 'from-pink-500 to-blue-500'
    },
    {
      name: 'MongoDB',
      percentage: 80,
      icon: <Database size={20} />,
      color: 'from-green-600 to-gray-700'
    },
    {
      name: 'Express.js',
      percentage: 80,
      icon: <SiNodedotjs size={20} />,
      color: 'from-gray-700 to-gray-400'
    },
    {
      name: 'Node.js',
      percentage: 83,
      icon: <SiNodedotjs size={20} />,
      color: 'from-green-700 to-green-400'
    },
    
  ];

  // AI & Data Science skills
  const aiSkills: Skill[] = [
    {
      name: 'Machine & Deep Learning',
      percentage: 95,
      icon: <Layers size={20} />,
      color: 'from-blue-500 to-pink-500'
    },
    {
      name: 'Natural Language Processing (NLP)',
      percentage: 85,
      icon: <MessageSquare size={20} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'RAG & Agentic AI',
      percentage: 80,
      icon: <Layers size={20} />,
      color: 'from-pink-500 to-blue-500'
    },
    
    {
      name: 'LLMs Fine-tuning',
      percentage: 88,
      icon: <Settings size={20} />,
      color: 'from-orange-500 to-purple-500'
    },
   
    {
      name: 'Reinforcement Learning',
      percentage: 80,
      icon: <Zap size={20} />,
      color: 'from-red-500 to-purple-500'
    },
    {
      name: 'Data Analysis & Visualization',
      percentage: 90,
      icon: <BarChart2 size={20} />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'MLOps & Model Deployment',
      percentage: 82,
      icon: <Cloud size={20} />,
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I specialize in developing AI-driven solutions and modern web applications, combining deep technical expertise in both software engineering and data science.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 relative">
          {/* Vertical line with bullets between containers (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 z-10" style={{transform: 'translateX(-50%)'}}>
            <div className="relative h-full flex flex-col items-center justify-between">
              {/* Top bullet */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 shadow-lg border-4 border-white"></div>
              {/* Vertical line */}
              <div className="flex-1 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 opacity-80"></div>
              {/* Bottom bullet */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 shadow-lg border-4 border-white"></div>
            </div>
          </div>
          {/* Software & Web Development */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center text-center mx-auto">Software & Web Development</h3>
            <div className="space-y-3">
              {devSkills.map((skill, index) => (
                <div key={index} className="bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 rounded-xl p-1 shadow hover:shadow-primary/10" style={{maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto'}}>
                  <div className="flex items-center mb-2">
                    <div className={`text-2xl mr-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-md text-gray-800">{skill.name}</h4>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.percentage}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-right text-xs font-medium text-gray-600">
                    {skill.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* AI & Data Science */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center text-center mx-auto">AI & Data Science</h3>
            <div className="space-y-3">
              {aiSkills.map((skill, index) => (
                <div key={index} className="bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-100 rounded-xl p-1 shadow hover:shadow-primary/10" style={{maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto'}}>
                  <div className="flex items-center mb-2">
                    <div className={`text-2xl mr-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-md text-gray-800">{skill.name}</h4>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.percentage}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-right text-xs font-medium text-gray-600">
                    {skill.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-24 -right-32 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}