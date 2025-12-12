import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Github, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "A conversational AI assistant built with modern LLM technologies, featuring real-time responses and context awareness.",
    image: "🤖",
    technologies: ["React", "Node.js", "OpenAI", "TypeScript"],
    category: "AI",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
    image: "🛒",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Web",
    featured: true,
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website generator that creates stunning personal sites from templates.",
    image: "✨",
    technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
    category: "Tools",
    featured: false,
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and custom charts.",
    image: "📊",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    category: "Data",
    featured: false,
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans and progress monitoring.",
    image: "💪",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile",
    featured: true,
  },
  {
    title: "Smart Home Controller",
    description: "IoT dashboard for managing smart home devices with voice control and automation rules.",
    image: "🏠",
    technologies: ["Vue.js", "Node.js", "MQTT", "WebSocket"],
    category: "IoT",
    featured: false,
  },
];

const categories = ["All", "AI", "Web", "Tools", "Data", "Mobile", "IoT"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageLayout 
      title="Projects" 
      subtitle="A collection of my recent work and side projects"
    >
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-glow"
                : "glass-card hover:bg-white/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Project Image/Icon */}
            <div className="h-48 bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink flex items-center justify-center relative overflow-hidden">
              <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </span>
              {project.featured && (
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-medium">Featured</span>
                </div>
              )}
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
