import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one interest.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      interests: [],
    },
  });

  const interestOptions = [
    { id: "personal", label: "Personal use" },
    { id: "business", label: "Business use" },
    { id: "enterprise", label: "Enterprise solutions" },
  ];

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      const response = await apiRequest("POST", "/api/waitlist", values);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setShowSuccess(true);
        form.reset();
        toast({
          title: "Success!",
          description: "You've been added to the waitlist.",
        });
      } else {
        toast({
          title: "Something went wrong.",
          description: data.message || "Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: FormValues) {
    mutate(values);
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Join me on the waitlist for this amazing new product!");

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-r from-primary/90 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-lg opacity-90">
            Be among the first to experience our revolutionary product when we launch. Early adopters receive exclusive benefits.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {!showSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 text-gray-700" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="you@example.com" 
                                type="email"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 text-gray-700" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium mb-2 block">I'm interested in:</FormLabel>
                            <div className="space-y-2">
                              {interestOptions.map((option) => (
                                <FormField
                                  key={option.id}
                                  control={form.control}
                                  name="interests"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={option.id}
                                        className="flex flex-row items-center space-x-2 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(option.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, option.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== option.id
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-gray-700 font-normal cursor-pointer">
                                          {option.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit"
                        className="w-full py-3"
                        disabled={isPending}
                      >
                        {isPending ? "Submitting..." : "Join the Waitlist"}
                      </Button>
                      
                      <p className="text-gray-500 text-sm mt-4 text-center">
                        By signing up, you agree to our <a href="#" className="text-primary hover:underline">Terms</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-green-100 border border-green-200 text-green-800 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <svg className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="font-semibold text-green-800">You're on the list!</h3>
              </div>
              <p className="mt-2">Thank you for joining our waitlist. We'll notify you as soon as we launch. Check your email for confirmation.</p>
            </motion.div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-5">
            <a 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
          <p className="mt-4 text-white text-opacity-80">Spread the word and invite your friends</p>
        </div>
      </div>
    </section>
  );
}
