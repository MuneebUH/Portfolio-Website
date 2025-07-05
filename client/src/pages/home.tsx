import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SocialProof from "@/components/social-proof";
import FeaturesSection from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import WaitlistForm from "@/components/waitlist-form";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // Get waitlist count
  const { data: waitlistCount } = useQuery({
    queryKey: ['/api/waitlist/count'],
    queryFn: async ({ queryKey }) => {
      const response = await fetch(queryKey[0] as string);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection waitlistCount={waitlistCount?.count || 0} />
        <SocialProof />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <WaitlistForm />
      </main>
      
      <Footer />
    </div>
  );
}
