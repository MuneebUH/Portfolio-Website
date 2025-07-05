import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, Book, Code, Clock } from "lucide-react";
import { generateCV } from "@/lib/cvGenerator";

interface Education {
  degree: string;
  institution: string;
  years: string;
  description: string;
}

interface Experience {
  position: string;
  company: string;
  years: string;
  description: string;
  achievements: string[];
}

export default function CVSection() {
  const experience: Experience[] = [
    {
      position: "Machine Learning Engineer",
      company: "Freelance",
      years: "June 2022 – Present",
      description: "", // Description is embedded in achievements for this format
      achievements: [
        "Developed weather prediction models achieving 89% accuracy using SVC and Logistic Regression.",
        "Trained a reinforcement learning agent for maze navigation, achieving 100% success and reducing episode length by 95%.",
        "Applied feature scaling, ensemble methods, and EDA to improve model performance and derive insights.",
        "Built ARIMA and Focus-based time series forecasting models, achieving an MSE of 105.98 for demand prediction.",
        "Delivered deep learning, IoT analytics, and web scraping solutions for diverse use cases."
      ]
    },
    {
      position: "Machine Learning Intern",
      company: "Glowingsoft Technologies",
      years: "July 2023 – August 2023, Virtual",
      description: "Built and optimized machine learning models for predictive analytics, classification, and regression.",
      achievements: []
    },
    {
      position: "R&D Intern",
      company: "Heavy Industries Taxila",
      years: "July 2023 – August 2023",
      description: "Collected and analyzed complex datasets to optimize operations, improving organizational productivity.",
      achievements: []
    }
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science (BS), Industrial Engineering",
      institution: "University of Engineering and Technology, Taxila",
      years: "", // Years not provided for degree
      description: "Relevant Coursework: Data Analytics, Probability and Statistics, Data Mining & Soft Computing, Numerical Analysis, Optimization Techniques, Operations Research"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 90 },
    { name: "Pandas/NumPy", level: 88 },
    { name: "SQL", level: 80 },
    { name: "Cloud (AWS/GCP)", level: 75 },
    { name: "Data Visualization", level: 85 }
  ];

  const handleDownloadCV = () => {
    const cvUrl = "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/Muneeb-Ul-Hassan-Machine-Learning.pdf";
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="cv" className="section-padding bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Machine Learning Engineer CV
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A comprehensive overview of my professional experience, education, and skills as a Machine Learning Engineer
            </p>
          </div>

          {/* CV Content */}
          <div className="space-y-8 mb-12 max-w-3xl mx-auto">
            {/* Experience */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-green-500" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l border-border last:pb-0">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-500/30 animate-pulse"></div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 mb-2">
                      <Clock className="w-3 h-3 mr-1" /> {exp.years}
                    </span>
                    <h4 className="text-lg font-semibold">{exp.position}</h4>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="mb-3 text-gray-700 text-base">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                          <span className="text-base text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg relative overflow-hidden">
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Book className="w-5 h-5 mr-2 text-blue-500" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l border-border last:pb-0">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500/30 animate-pulse"></div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 mb-2">
                      <Clock className="w-3 h-3 mr-1" /> {edu.years}
                    </span>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <p className="text-gray-700 text-base">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg relative overflow-hidden">
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-500" />
                Certifications
              </h3>
              <div className="space-y-4">
                {[
                  "Machine Learning Specialization – Coursera",
                  "Deep Learning Specialization – Coursera",
                  "Reinforcement Learning Specialization – Coursera"
                ].map((certification, index) => {
                  const links: { [key: string]: string } = {
                    "Machine Learning Specialization – Coursera": "https://coursera.org/verify/specialization/JMGN664Q2ZAA",
                    "Deep Learning Specialization – Coursera": "https://coursera.org/verify/specialization/SY8IUIISQYC4",
                    "Reinforcement Learning Specialization – Coursera": "https://coursera.org/verify/specialization/TDTPC8RHSLGW"
                  };
                  const link = links[certification] || "#"; // Fallback to # if link is not found
                  return (
                    <div key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline text-base"
                      >
                        {certification}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Button 
              onClick={handleDownloadCV} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" /> Download Full CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}