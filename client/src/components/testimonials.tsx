import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
  avatarColor: string;
  initials: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      quote: "This product has completely changed how I approach my work. It's intuitive, powerful, and saves me hours every week.",
      name: "Sarah J.",
      title: "Product Manager",
      avatarColor: "bg-blue-400",
      initials: "SJ"
    },
    {
      rating: 5,
      quote: "As a team leader, I've seen productivity increase by 40% since we started using this tool. The ROI is undeniable.",
      name: "Michael T.",
      title: "Team Lead",
      avatarColor: "bg-green-400",
      initials: "MT"
    },
    {
      rating: 4.5,
      quote: "The interface is beautiful and the features are exactly what I needed. Customer support has been fantastic as well.",
      name: "Emily R.",
      title: "Designer",
      avatarColor: "bg-purple-400",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Users Say</h2>
          <p className="text-lg text-gray-600">
            Our beta testers have experienced the difference, and here's what they think.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <div className="relative">
                      <Star className="fill-current" />
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-70"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full mr-4 ${testimonial.avatarColor} flex items-center justify-center text-white font-medium`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
