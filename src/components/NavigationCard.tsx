import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient: string;
}

const NavigationCard = ({ to, icon: Icon, title, description, delay = 0, gradient }: NavigationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Link to={to}>
        <motion.div
          className="glass-card rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
          whileHover={{ 
            scale: 1.03,
            y: -5,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {/* Gradient overlay on hover */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`}
          />
          
          {/* Icon container */}
          <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
            <Icon className="w-6 h-6 text-foreground/80" />
          </div>
          
          {/* Text content */}
          <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          
          {/* Hover glow effect */}
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default NavigationCard;
