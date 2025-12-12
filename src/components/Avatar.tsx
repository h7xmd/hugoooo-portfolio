import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="animate-float">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pastel-blue via-pastel-pink to-pastel-purple blur-xl opacity-50 animate-pulse-soft" />
          
          {/* Avatar container */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-glass-lg">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              {/* Memoji-style avatar placeholder */}
              <div className="text-6xl md:text-7xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
