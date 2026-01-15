import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timelineItems = [
  {
    year: "2024",
    title: "Desenvolvedor IA Sênior",
    company: "Empresa de Tecnologia",
    description: "Liderando iniciativas de IA e construindo sistemas inteligentes",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Desenvolvedor Full Stack",
    company: "Startup Inc",
    description: "Construindo aplicações web escaláveis do zero",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Graduação em Ciência da Computação",
    company: "Universidade",
    description: "Especialização em Machine Learning e Tecnologias Web",
    icon: GraduationCap,
  },
];

const Me = () => {
  return (
    <PageLayout 
      title="Sobre Mim" 
      subtitle="Um desenvolvedor apaixonado criando experiências digitais com IA e tecnologias modernas"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Coluna Esquerda - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Avatar e informações básicas */}
          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pastel-blue to-pastel-purple flex items-center justify-center text-5xl shadow-soft">
                👨‍💻
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Seu Nome</h2>
                <p className="text-primary font-medium mb-3">Desenvolvedor IA & Full Stack</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Texto da bio */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Minha História</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado que adora criar soluções inovadoras na interseção entre IA e tecnologias web. Com uma base sólida em desenvolvimento frontend e backend, crio experiências digitais fluidas.
              </p>
              <p>
                Minha jornada na tecnologia começou com curiosidade e evoluiu para uma missão de tornar a tecnologia mais acessível e inteligente. Acredito em código limpo, design centrado no usuário e aprendizado contínuo.
              </p>
              <p>
                Quando não estou programando, você me encontra explorando novos artigos de pesquisa em IA, contribuindo para open source, ou saboreando um bom café enquanto penso em novas ideias.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Coluna Direita - Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Linha do Tempo</h3>
          
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover rounded-2xl p-6 relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-mint to-pastel-blue flex items-center justify-center shadow-soft flex-shrink-0">
                    <item.icon className="w-6 h-6 text-foreground/80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-primary mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Me;
