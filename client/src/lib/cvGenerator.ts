import { jsPDF } from 'jspdf';

interface Education {
  degree: string;
  institution: string;
  location: string;
  years: string;
  description: string;
}

interface Experience {
  position: string;
  company: string;
  location: string;
  years: string;
  description: string[];
}

interface Skill {
  category: string;
  items: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
}

interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: string[];
}

const cvData: CVData = {
  personalInfo: {
    name: "Muneeb Ul Hassan",
    title: "(Machine Learning)",
    email: "mulhassan146@gmail.com",
    phone: "+92 318 7813997",
    website: "https://dev-muneebulhassan.pantheonsite.io/",
    github: "https://github.com/MuneebUH",
    linkedin: "https://www.linkedin.com/in/muneebulhassan-ml/"
  },
  education: [
    {
      degree: "Bachelor of Science - BS, Industrial Engineering",
      institution: "University of Engineering and Technology, Taxila",
      location: "Taxila, Pakistan",
      years: "Oct 2020 - Jul 2024",
      description:
        "Coursework: Data Mining & Soft Computing, Data Analytics, Probability and Statistics, Numerical Analysis, Optimization Techniques, Operations Research"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "R", "C/C++"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["TensorFlow", "Keras", "PyTorch", "NumPy", "Pandas", "Scikit-Learn", "Seaborn"]
    },
    {
      category: "NLP",
      items: ["LLMs fine-tuning", "RAG", "Langchain", "Text Classification"]
    },
    {
      category: "Deep Learning",
      items: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "Transfer Learning"]
    },
    {
      category: "Tools & Platforms",
      items: ["Jupyter Notebook", "VSCode", "PyCharm", "Hugging Face", "Selenium"]
    },
    {
      category: "MLOps",
      items: ["Docker", "CI/CD (GitHub Actions)", "AWS (EC2, ECR)", "MLflow", "DagsHub", "Model Deployment"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-Solving", "Critical Thinking", "Attention to Detail", "Collaboration", "Research"]
    }
  ],
  experience: [
    {
      position: "Machine Learning Engineer",
      company: "Freelance",
      location: "Remote",
      years: "Jun 2022 – Present",
      description: [
        "Built classification models for weather prediction (89% accuracy using SVC & Logistic Regression).",
        "Created custom RL agent for maze navigation (100% success rate, 95% episode reduction).",
        "Used EDA, feature scaling, ensemble methods for performance boosts.",
        "Developed ARIMA and time-series forecasting (MSE = 105.98).",
        "Worked across deep learning, IoT data analytics, and web scraping pipelines."
      ]
    },
    {
      position: "Machine Learning Intern",
      company: "Glowingsoft Technologies",
      location: "Remote",
      years: "Jul 2023 – Aug 2023",
      description: [
        "Designed ML models for predictive analytics.",
        "Built NLP classification, regression, and sentiment analysis models.",
        "Scraped product data from e-commerce platforms."
      ]
    },
    {
      position: "R&D Intern",
      company: "Heavy Industries Taxila",
      location: "On-site",
      years: "Jul 2023 – Aug 2023",
      description: [
        "Analyzed HRF department data to identify inefficiencies.",
        "Proposed data-driven solutions for productivity improvement."
      ]
    }
  ],
  projects: [
    {
      name: "AI-Driven Cultural Classification System",
      description: "Deep learning model using ResNet50 for visual data classification with 85% accuracy.",
      technologies: ["ResNet50", "Transfer Learning"]
    },
    {
      name: "DistilBART-Based Email Summarization",
      description: "Email summarization pipeline using DistilBART & FastAPI with CI/CD and AWS deployment.",
      technologies: ["DistilBART", "FastAPI", "Docker", "EC2"],
      url: "https://github.com/MuneebUH/DistilBART-Text-Summarization"
    },
    {
      name: "Bird vs Drone Detection",
      description: "VGG16-based CV system for drone/bird detection with 96% accuracy, Streamlit deployed.",
      technologies: ["VGG16", "Computer Vision"],
      url: "https://github.com/MuneebUH/BirdvsDrone_VGG16"
    },
    {
      name: "Reddit Climate Change Sentiment Analyzer",
      description: "Analyzed 10K Reddit comments using VADER and visualized in Streamlit.",
      technologies: ["VADER", "Streamlit"],
      url: "https://github.com/MuneebUH/reddit-climate-change-sentiment-analyzer"
    }
  ],
  certifications: [
    "Machine Learning Specialization – Coursera",
    "Deep Learning Specialization – Coursera",
    "Reinforcement Learning Specialization – Coursera"
  ]
};

export function generateCV(): void {
  const doc = new jsPDF();
  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(cvData.personalInfo.name, margin, y);
  y += 8;

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(cvData.personalInfo.title, margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.text(`${cvData.personalInfo.email} | ${cvData.personalInfo.phone}`, margin, y);
  y += 5;
  doc.text(`${cvData.personalInfo.website}`, margin, y);
  y += 5;
  doc.text(`${cvData.personalInfo.linkedin} | ${cvData.personalInfo.github}`, margin, y);
  y += 10;

  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;

  // Education
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(33, 33, 33);
  doc.text("EDUCATION", margin, y);
  y += 8;

  const edu = cvData.education[0];
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(`${edu.degree}`, margin, y);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  const eduDateWidth = doc.getTextWidth(edu.years);
  doc.text(edu.years, pageWidth - margin - eduDateWidth, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.text(`${edu.institution}, ${edu.location}`, margin, y);
  y += 5;
  const eduDesc = doc.splitTextToSize(edu.description, contentWidth);
  doc.text(eduDesc, margin, y);
  y += eduDesc.length * 5 + 10;

  // Skills
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(33, 33, 33);
  doc.text("SKILLS SUMMARY", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  cvData.skills.forEach(skill => {
    const items = skill.items.join(", ");
    const textLines = doc.splitTextToSize(`${skill.category}: ${items}`, contentWidth);
    doc.text(textLines, margin, y);
    y += textLines.length * 5 + 5;
  });

  y += 5;

  // Experience
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(33, 33, 33);
  doc.text("WORK EXPERIENCE", margin, y);
  y += 8;

  cvData.experience.forEach(exp => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(`${exp.position}`, margin, y);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    const dateWidth = doc.getTextWidth(exp.years);
    doc.text(exp.years, pageWidth - margin - dateWidth, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.company}, ${exp.location}`, margin, y);
    y += 5;
    
    doc.setFontSize(10);
    exp.description.forEach(item => {
      const bulletPoint = "• ";
      const itemLines = doc.splitTextToSize(bulletPoint + item, contentWidth);
      doc.text(itemLines, margin, y);
      y += itemLines.length * 4.5;
    });
    y += 8;
  });

  y += 5;

  // Projects
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(33, 33, 33);
  doc.text("PROJECTS", margin, y);
  y += 8;

  cvData.projects.forEach(project => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(project.name, margin, y);
    if (project.url) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 255);
        doc.textWithLink("Link", pageWidth - margin - doc.getTextWidth("Link"), y + 1, { url: project.url });
        doc.setTextColor(80, 80, 80);
    }
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const descLines = doc.splitTextToSize(project.description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 5 + 2;
    
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text(`Technologies: ${project.technologies.join(", ")}`, margin, y);
    y += 8;
  });

  y += 5;

  // Certifications
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(33, 33, 33);
  doc.text("CERTIFICATIONS", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  cvData.certifications.forEach(cert => {
    const bulletPoint = "• ";
    const textLines = doc.splitTextToSize(bulletPoint + cert, contentWidth);
    doc.text(textLines, margin, y);
    y += textLines.length * 5;
  });

  doc.save("Muneeb_Ul_Hassan_CV.pdf");
}
