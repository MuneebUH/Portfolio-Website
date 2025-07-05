import { Globe, Laptop, Building, Briefcase } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center opacity-80">
          <p className="text-gray-500 font-medium w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            Trusted by industry leaders
          </p>
          
          {/* Company Logos */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-8 items-center">
            <div className="h-10 flex items-center text-gray-400">
              <Globe className="h-8 w-auto" />
              <span className="ml-2 font-semibold">GlobalTech</span>
            </div>
            <div className="h-10 flex items-center text-gray-400">
              <Laptop className="h-8 w-auto" />
              <span className="ml-2 font-semibold">TechCorp</span>
            </div>
            <div className="h-10 flex items-center text-gray-400">
              <Building className="h-8 w-auto" />
              <span className="ml-2 font-semibold">EnterpriseX</span>
            </div>
            <div className="h-10 flex items-center text-gray-400">
              <Briefcase className="h-8 w-auto" />
              <span className="ml-2 font-semibold">BizSolutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
