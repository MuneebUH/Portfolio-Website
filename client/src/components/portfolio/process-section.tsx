import { CheckCircle, Code, FileSearch, Rocket, Settings, Users } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const processSteps: ProcessStep[] = [
    {
      icon: <FileSearch className="h-10 w-10 text-primary" />,
      title: "Problem Definition & Planning",
      description: "Understanding the business problem, defining objectives, and planning the project approach."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Data Acquisition & Preparation",
      description: "Collecting, cleaning, transforming, and preparing the data for model training."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Model Development & Training",
      description: "Selecting appropriate models, training them on the prepared data, and tuning hyperparameters."
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Evaluation & Validation",
      description: "Assessing model performance using relevant metrics and validating against unseen data."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Deployment & Integration",
      description: "Deploying the trained model into a production environment and integrating it with existing systems."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Monitoring & Maintenance",
      description: "Continuously monitoring the model's performance, retraining as needed, and providing ongoing maintenance."
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Process</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            My systematic process for developing and deploying machine learning solutions ensures
            effective and reliable outcomes for your projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 opacity-80 hidden md:block"></div>
          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 shadow-lg border-4 border-white hidden md:block"></div>
                <div className={`process-content ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:col-end-3 md:row-start-1 md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.1),_0_5px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2),_0_10px_15px_rgba(0,0,0,0.08)] hover:border-blue-400 hover:scale-105 flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center text-primary mb-4 text-2xl shadow group-hover:shadow-blue-200 transition-all duration-300">
                      {step.icon}
                    </div>
                    <h3 className="font-extrabold mb-2 text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent tracking-tight group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{step.title}</h3>
                    <p className="text-gray-700 text-base font-medium leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Empty div for alignment in the grid */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:col-end-2 md:row-start-1'}`}></div>
              </div>
            ))}
          </div>
          {/* Final checkmark */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center shadow-lg border-4 border-white hidden md:flex">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}