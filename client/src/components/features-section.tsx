import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Wand2, 
  RefreshCw, 
  TrendingUp, 
  Smartphone 
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Zap className="text-primary w-6 h-6" />,
      title: "Lightning Fast",
      description: "Experience blazing speeds that will transform how you work. No more waiting around."
    },
    {
      icon: <ShieldCheck className="text-primary w-6 h-6" />,
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security protocols and encryption."
    },
    {
      icon: <Wand2 className="text-primary w-6 h-6" />,
      title: "Intuitive Interface",
      description: "Designed with simplicity in mind, our interface makes complex tasks feel effortless."
    },
    {
      icon: <RefreshCw className="text-primary w-6 h-6" />,
      title: "Seamless Integration",
      description: "Works perfectly with your existing tools and platforms for a consistent workflow."
    },
    {
      icon: <TrendingUp className="text-primary w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights through detailed analytics and customizable reports."
    },
    {
      icon: <Smartphone className="text-primary w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Enjoy the full experience on any device, anywhere, anytime with perfect responsiveness."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600">
            Our product is packed with cutting-edge capabilities designed to transform your experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-y-[-5px] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
