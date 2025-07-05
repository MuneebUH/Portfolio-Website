import { useState, useEffect } from 'react';
import { SiWordpress, SiPhp, SiHtml5, SiCss3, SiJavascript, SiElementor, SiGithub, SiGooglesearchconsole } from 'react-icons/si';
import { Database, Code, Layers, MessageSquare, BarChart2, Cloud, Zap } from 'lucide-react';

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

  const skills: Skill[] = [
    {
      name: 'Machine Learning',
      percentage: 95,
      icon: <Code size={20} />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Deep Learning',
      percentage: 90,
      icon: <Layers size={20} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Natural Language Processing',
      percentage: 85,
      icon: <MessageSquare size={20} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Data Analysis & Visualization',
      percentage: 92,
      icon: <BarChart2 size={20} />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'MLOps & Model Deployment',
      percentage: 80,
      icon: <Cloud size={20} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Reinforcement Learning',
      percentage: 80,
      icon: <Zap size={20} />,
      color: 'from-red-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I specialize in developing AI-driven solutions and machine learning models that transform complex data into actionable insights, optimizing business performance and decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center mb-3">
                <div className={`text-2xl mr-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{skill.name}</h3>
              </div>
              
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
              
              <div className="text-right text-sm font-medium text-gray-600">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-24 -right-32 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}