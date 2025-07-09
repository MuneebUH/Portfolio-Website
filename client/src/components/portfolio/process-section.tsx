import { CheckCircle, Code, FileSearch, Rocket, Settings, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string; // Added link property
}

export default function ProcessSection() {
  const processSteps: ProcessStep[] = [
    {
      icon: (
        <img
          src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/07/Microsoft.VisualStudio.Services.Icons-removebg-preview.png"
          alt="Color Folders Logo"
          className="h-10 w-10 rounded"
        />
      ),
      title: "Color Folders - VS Code Extension",
      description: "Assign custom colors to folders and files in VS Code for better navigation and visual organization. Instantly add flair and clarity to your coding environment.",
      link: "https://marketplace.visualstudio.com/items?itemName=ColorFolders.folder-colorizer"
    },
    {
      icon: (
        <img
          src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/07/ty.png"
          alt="Select2Copy Logo"
          className="h-10 w-10 rounded"
        />
      ),
      title: "Select2Copy - Copy Multiple Text Selections Instantly",
      description: "Select and collect multiple text snippets from any webpage, then copy them all at once with a single click. Perfect for research, note-taking, and productivity.",
      link: "https://chromewebstore.google.com/detail/nheigelejfplfamkfbeankgapnkhphjh?utm_source=item-share-cb"
    },
    {
      icon: (
        <img
          src="https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/07/Tabs.png"
          alt="SnoozeTab Logo"
          className="h-10 w-10 rounded"
        />
      ),
      title: "SnoozeTab - Smarter Tab Management",
      description: `Snooze and manage tabs with ease using search, sort, and session control. Bring them back only when needed for a focused, clutter-free workflow.`,
      link: "https://chromewebstore.google.com/detail/snoozetab/dfmfeehlcfpjcacnkeechjidojkbffpe"
    }
  ];

  return (
    <section id="process" className="bg-white py-20 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Builds</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
          Tools, extensions, and side projects I've built to solve real problems and boost productivity.
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
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.1),_0_5px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2),_0_10px_15px_rgba(0,0,0,0.08)] hover:border-blue-400 hover:scale-105 flex flex-col items-center text-center group cursor-pointer relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center text-primary mb-4 text-2xl shadow group-hover:shadow-blue-200 transition-all duration-300">
                      {step.icon}
                    </div>
                    <h3 className="font-extrabold mb-2 text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent tracking-tight group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{step.title}</h3>
                    <p className="text-gray-700 text-base font-medium leading-relaxed">{step.description}</p>
                    {/* Visit Extension button at the bottom-right corner, compact width */}
                    {step.link && (
                      <div className="flex justify-end w-full mt-6">
                        <a href={step.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            className="gap-2 bg-white border border-blue-200 text-primary font-semibold hover:bg-blue-100 hover:border-blue-400 transition-all min-w-32 px-4"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Extension
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                {/* Empty div for alignment in the grid */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:col-end-2 md:row-start-1'}`}></div>
              </div>
            ))}
            {/* Final checkmark at the end of the cards */}
            <div className="flex justify-center mt-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center shadow-lg border-4 border-white">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}