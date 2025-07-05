import { Briefcase, Calendar, Award, Code, Globe, Zap, ArrowRight, Download, Users, Settings, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateCV } from '@/lib/cvGenerator';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SkillTagProps {
  name: string;
  color: string;
}

const skillTags: SkillTagProps[] = [
  { name: 'Python', color: 'bg-blue-100 text-blue-700 border border-blue-200' },
  { name: 'TensorFlow', color: 'bg-orange-100 text-orange-700 border border-orange-200' },
  { name: 'Keras', color: 'bg-red-100 text-red-700 border border-red-200' },
  { name: 'PyTorch', color: 'bg-pink-100 text-pink-700 border border-pink-200' },
  { name: 'Scikit-learn', color: 'bg-yellow-100 text-yellow-700 border border-yellow-200' },
  { name: 'Pandas', color: 'bg-indigo-100 text-indigo-700 border border-indigo-200' },
  { name: 'NumPy', color: 'bg-green-100 text-green-700 border border-green-200' },
  { name: 'Cloud Platforms (AWS/GCP)', color: 'bg-gray-100 text-gray-700 border border-gray-200' },
  { name: 'Data Visualization', color: 'bg-purple-100 text-purple-700 border border-purple-200' },
];

export default function AboutSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/Muneeb-Ul-Hassan-Machine-Learning.pdf";
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile image with effects */}
          <div className="relative">
            {/* Main image with gradient border and round shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur opacity-20 animate-pulse"></div>

            {/* Gradient border wrapper */}
            <div className="relative mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-2 shadow-xl">
              {/* Inner container with solid background to create the border effect */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <img
                  src="https://avatars.githubusercontent.com/u/133370001?v=4"
                  alt="Muneeb UL Hassan - Professional Portrait"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Skills tags */}
            <div className="mt-12 hidden md:block">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="w-4 h-4" />
                </span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {skillTags.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content area */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Machine Learning Engineer & <span className="text-gradient">AI Specialist</span>
            </h3>
            
            <p className="text-gray-600 mb-8 text-justify">
              I am a passionate Machine Learning Engineer with a strong foundation in AI. I specialize in developing and deploying Machine Learning models using Python, TensorFlow, Keras, and PyTorch to solve real-world problems. With experience in NLP, Deep Learning, and MLOps, I am driven by the challenge of turning complex datasets into actionable insights that help organizations make data-driven decisions and improve performance. My journey through academic projects, internships, and freelancing has honed my ability to collaborate, innovate, and deliver impactful results.
            </p>
            
            {/* Key Areas of Expertise */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Key Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[ 
                  "Machine Learning", 
                  "Deep Learning", 
                  "Natural Language Processing", 
                  "Reinforcement Learning" 
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-blue-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-800 font-medium">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 gap-2"
                size="lg"
                onClick={handleDownloadCV}
              >
                Download CV <Download className="w-5 h-5" />
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 gap-2"
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                My Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Skills tags - mobile view */}
            <div className="mt-8 md:hidden">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillTags.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}