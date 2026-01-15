import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Github, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Assistente IA de Chat",
    description: "Um assistente de IA conversacional construído com tecnologias LLM modernas, com respostas em tempo real e consciência de contexto.",
    image: "🤖",
    technologies: ["React", "Node.js", "OpenAI", "TypeScript"],
    category: "IA",
    featured: true,
  },
  {
    title: "Plataforma E-Commerce",
    description: "Solução completa de e-commerce com integração de pagamentos, gestão de estoque e painel de análises.",
    image: "🛒",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Web",
    featured: true,
  },
  {
    title: "Gerador de Portfólio",
    description: "Gerador automatizado de sites de portfólio que cria sites pessoais impressionantes a partir de templates.",
    image: "✨",
    technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
    category: "Ferramentas",
    featured: false,
  },
  {
    title: "Dashboard de Visualização",
    description: "Dashboard interativo para visualização de datasets complexos com atualizações em tempo real e gráficos personalizados.",
    image: "📊",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    category: "Dados",
    featured: false,
  },
  {
    title: "App Fitness Mobile",
    description: "Aplicativo de rastreamento de fitness multiplataforma com planos de treino e monitoramento de progresso.",
    image: "💪",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile",
    featured: true,
  },
  {
    title: "Controlador Casa Inteligente",
    description: "Dashboard IoT para gerenciar dispositivos de casa inteligente com controle por voz e regras de automação.",
    image: "🏠",
    technologies: ["Vue.js", "Node.js", "MQTT", "WebSocket"],
    category: "IoT",
    featured: false,
  },
];

const categories = ["Todos", "IA", "Web", "Ferramentas", "Dados", "Mobile", "IoT"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageLayout 
      title="Projetos" 
      subtitle="Uma coleção dos meus trabalhos recentes e projetos pessoais"
    >
      {/* Filtro de Categorias */}
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

      {/* Grid de Projetos */}
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
            {/* Imagem/Ícone do Projeto */}
            <div className="h-48 bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink flex items-center justify-center relative overflow-hidden">
              <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </span>
              {project.featured && (
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-medium">Destaque</span>
                </div>
              )}
            </div>
            
            {/* Conteúdo do Projeto */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tecnologias */}
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
              
              {/* Ações */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Código</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo ao Vivo</span>
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
