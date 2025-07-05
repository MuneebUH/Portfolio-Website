import { ShoppingCart, Globe, Settings, Rocket, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceProps[] = [
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/mlops-scaled.jpeg"
        alt="AI Research"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "AI Research",
    description:
      "Conducting cutting-edge research in AI and machine learning to explore new algorithms, techniques, and applications, pushing the boundaries of what's possible.",
  },
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/Custom-Machine-Learning-Solutions-scaled.jpeg"
        alt="Custom Machine Learning Solutions"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "Custom Machine Learning Solutions",
    description:
      "Developing tailored ML models, from traditional algorithms to deep learning architectures, to solve your specific business challenges.",
  },
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/Data-Processing-Analytics-scaled.jpeg"
        alt="Data Processing & Analytics"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "Data Processing & Analytics",
    description:
      "Expert data cleaning, transformation, exploratory data analysis (EDA), and statistical modeling to uncover insights.",
  },
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/image-210x100-2.png"
        alt="Natural Language Processing (NLP)"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "Natural Language Processing (NLP)",
    description:
      "Building models for text classification, sentiment analysis, topic modeling, and other NLP tasks to process and understand textual data.",
  },
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/ModelDeployment-scaled.jpeg"
        alt="MLOps & Model Deployment"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "MLOps & Model Deployment",
    description:
      "Deploying and managing ML models in production environments using MLOps principles and tools for scalability and reliability.",
  },
  {
    icon: (
      <img
        src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/05/AIConsulting-scaled.jpeg"
        alt="AI Consulting"
        className="w-full h-32 object-cover rounded-lg"
      />
    ),
    title: "AI Consulting",
    description:
      "Providing guidance on AI strategy, feasibility studies, model selection, and ethical considerations to help your business leverage AI effectively.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-700">
            I offer a range of Machine Learning and AI services to help you leverage data and build intelligent solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 hover:border-primary/50 hover:shadow-glow relative overflow-hidden group"
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 relative w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${
                    service.title === "AI Research"
                      ? "pt-7"
                      : service.title === "Data Processing & Analytics"
                      ? "pt-[28px]" // Custom padding value
                      : service.title === "MLOps & Model Deployment"
                      ? "pt-[28px]"
                      : service.title === "AI Consulting"
                      ? "pt-[28px]"
                      : ""
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
