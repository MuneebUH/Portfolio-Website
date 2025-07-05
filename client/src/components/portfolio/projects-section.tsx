import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: "e-commerce" | "business" | "portfolio" | "blog" | "NLP" | "Computer Vision";
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Fine-tuned DistilBART for Email Summarization",
    category: "NLP",
    image: "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/image-741x369-2-1.png",
    description:
      "Developed an email summarization pipeline using DistilBART and FastAPI, optimized for performance on AWS with Docker, ECR, and EC2, incorporating CI/CD workflows for seamless deployment.",
    technologies: ["DistilBART", "FastAPI", "AWS", "Docker", "ECR", "EC2", "CI/CD"],
    link: "https://github.com/MuneebUH/DistilBART-Text-Summarization",
  },
  {
    title: "Bird vs Drone Detection",
    category: "Computer Vision",
    image: "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/image-741x369-2.png",
    description:
      "Built a computer vision model using VGG16 to detect birds and drones, achieving 96% accuracy. Deployed the solution on a Streamlit app to improve airport and surveillance safety.",
    technologies: ["VGG16", "Streamlit", "Computer Vision", "Deep Learning"],
    link: "https://github.com/MuneebUH/BirdvsDrone_VGG16",
  },
  {
    title: "Reddit Climate Change Sentiment Analyzer",
    category: "NLP",
    image: "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2024/12/image-741x369-1-1.png",
    description:
      "Analyzed 10K Reddit comments on climate change using VADER-based NLP models, creating an interactive Streamlit app to visualize sentiment trends for researchers and policymakers.",
    technologies: ["VADER", "NLP", "Streamlit", "Data Analysis"],
    link: "https://github.com/MuneebUH/reddit-climate-change-sentiment-analyzer",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-700">
            Explore some of my recent Machine Learning and AI projects, showcasing my expertise in building intelligent systems and data-driven applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 overflow-hidden flex flex-col"
            >
              {/* Project image */}
              <div
                className="aspect-video w-full overflow-hidden relative border-none outline-none focus:outline-none"
                style={{ boxShadow: "none", border: "none !important", outline: "none !important" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-none outline-none focus:outline-none"
                  style={{ boxShadow: "none !important", border: "none !important", outline: "none !important" }}
                />
                {/* Gradient overlay at bottom for readability */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 to-transparent pointer-events-none transition-all duration-300 group-hover:from-blue-100/80 group-hover:to-transparent"></div>
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 justify-between p-6 h-full">
                <div>
                  <h3 className="text-xl font-extrabold mb-2 text-gray-900">{project.title}</h3>
                  <p
                    className={`text-gray-700 text-sm mb-4 flex-grow ${
                      project.title === "Bird vs Drone Detection" ? "mt-9" : ""
                    }`}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 mb-6 ${
                      project.title === "Bird vs Drone Detection" || project.title === "Reddit Climate Change Sentiment Analyzer"
                        ? "mt-9"
                        : ""
                    }`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="gap-2 bg-white border border-blue-200 text-primary font-semibold hover:bg-blue-100 hover:border-blue-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
