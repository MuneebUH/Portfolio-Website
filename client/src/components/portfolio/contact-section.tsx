import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast({
      title: 'Message sent!',
      description: 'Thanks for reaching out. I\'ll get back to you soon.',
      variant: 'default',
    });
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative blurred gradient blobs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-green-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 via-blue-100/40 to-green-100/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-700">
            Ready to start a project or have a question? Fill out the form below and let's connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 justify-items-center">
          {/* Contact info */}
          <div className="space-y-8 w-full max-w-md">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-blue-100 shadow-xl hover:shadow-blue-200 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 p-4 rounded-xl text-white shadow-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:mulhassan146@gmail.com" className="hover:text-primary font-medium text-gray-900 transition-colors">
                      mulhassan146@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 p-4 rounded-xl text-white shadow-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="font-medium text-gray-900">+92 318 7813997</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-gray-900">Follow Me</h4>
                <div className="flex gap-4">
                  {/* Update LinkedIn link */}
                  <a 
                    href="https://www.linkedin.com/in/muneebulhassan-ml/" 
                    className="w-11 h-11 bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-blue-300 transition-all duration-200" 
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  {/* Update GitHub link */}
                  <a 
                    href="https://github.com/MuneebUH" 
                    className="w-11 h-11 bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-blue-300 transition-all duration-200" 
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}