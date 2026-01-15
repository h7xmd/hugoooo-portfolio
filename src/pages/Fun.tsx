import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Coffee, Music, Gamepad2, Book, Camera, Plane } from "lucide-react";

const hobbies = [
  {
    icon: Coffee,
    title: "Entusiasta de Café",
    description: "Explorando cafés especiais de todo o mundo",
    color: "from-amber-200 to-amber-400",
    emoji: "☕",
  },
  {
    icon: Music,
    title: "Amante de Música",
    description: "De lo-fi beats a música eletrônica",
    color: "from-pastel-purple to-pastel-pink",
    emoji: "🎵",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "RPGs e jogos indie nos fins de semana",
    color: "from-pastel-blue to-pastel-mint",
    emoji: "🎮",
  },
  {
    icon: Book,
    title: "Leitura",
    description: "Ficção científica e blogs de tecnologia",
    color: "from-pastel-mint to-emerald-300",
    emoji: "📚",
  },
  {
    icon: Camera,
    title: "Fotografia",
    description: "Capturando paisagens urbanas e natureza",
    color: "from-pastel-pink to-pastel-peach",
    emoji: "📸",
  },
  {
    icon: Plane,
    title: "Viagens",
    description: "Explorando novas culturas e culinárias",
    color: "from-pastel-blue to-sky-300",
    emoji: "✈️",
  },
];

const funFacts = [
  { fact: "Primeira linha de código aos 12 anos", emoji: "👶" },
  { fact: "Resolvo cubo mágico em menos de 2 minutos", emoji: "🧊" },
  { fact: "Visitei mais de 15 países", emoji: "🌍" },
  { fact: "Construí meu primeiro robô com Arduino", emoji: "🤖" },
  { fact: "Entusiasta do modo escuro (obviamente)", emoji: "🌙" },
  { fact: "Atalhos de teclado para tudo", emoji: "⌨️" },
];

const Fun = () => {
  return (
    <PageLayout 
      title="Diversão & Hobbies" 
      subtitle="Além do código - o que me motiva"
    >
      {/* Grid de Hobbies */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Cabeçalho com gradiente */}
            <div className={`h-24 bg-gradient-to-r ${hobby.color} flex items-center justify-center relative overflow-hidden`}>
              <motion.span 
                className="text-5xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.5,
                }}
              >
                {hobby.emoji}
              </motion.span>
            </div>
            
            {/* Conteúdo */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <hobby.icon className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {hobby.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {hobby.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fatos Divertidos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-6">Fatos Divertidos</h3>
        <div className="glass-card rounded-3xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors"
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-foreground">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Easter Egg */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-16 text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block"
        >
          <span className="text-6xl cursor-pointer hover:animate-spin">🎉</span>
        </motion.div>
        <p className="text-muted-foreground mt-4 text-sm">Você encontrou o Easter egg!</p>
      </motion.div>
    </PageLayout>
  );
};

export default Fun;
