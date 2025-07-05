import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Join our waitlist to be first in line when we launch. Early adopters get exclusive benefits."
    },
    {
      number: 2,
      title: "Get Access",
      description: "Receive your exclusive invitation and set up your account with our guided onboarding."
    },
    {
      number: 3,
      title: "Transform Your Work",
      description: "Start using our product and experience the difference in your daily workflow."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes it easy to get started and see results quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="inline-flex items-center">
            <a href="#waitlist">
              <span>Get Started Now</span>
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
