import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    handle: "@seunome",
    url: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Seu Nome",
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    name: "Twitter",
    handle: "@seuhandle",
    url: "https://twitter.com",
    color: "hover:text-sky-500",
  },
  {
    icon: Mail,
    name: "Email",
    handle: "ola@exemplo.com",
    url: "mailto:ola@exemplo.com",
    color: "hover:text-primary",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada! 🎉",
      description: "Obrigado por entrar em contato. Responderei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout 
      title="Entre em Contato" 
      subtitle="Vamos construir algo incrível juntos"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Enviar Mensagem</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full input-glass rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
                  placeholder="João Silva"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full input-glass rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
                  placeholder="joao@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full input-glass rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none min-h-[150px] resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-glow hover:shadow-lg transition-shadow"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Informações de Contato & Redes Sociais */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Cards de Informação */}
          <div className="grid gap-4">
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-blue to-pastel-purple flex items-center justify-center">
                <MapPin className="w-6 h-6 text-foreground/80" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="text-foreground font-medium">São Paulo, Brasil</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-mint to-pastel-blue flex items-center justify-center">
                <Clock className="w-6 h-6 text-foreground/80" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tempo de Resposta</p>
                <p className="text-foreground font-medium">Geralmente em 24 horas</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Conecte-se comigo</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-all group ${link.color}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
