import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-md mx-auto"
    >
      <div 
        className={`relative transition-all duration-300 ${
          isFocused ? "scale-[1.02]" : ""
        }`}
      >
        {/* Glow effect when focused */}
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pastel-blue via-pastel-pink to-pastel-purple blur-xl transition-opacity duration-300 ${
            isFocused ? "opacity-30" : "opacity-0"
          }`}
        />
        
        <div className="relative input-glass rounded-2xl flex items-center gap-3 px-5 py-4">
          <Sparkles className="w-5 h-5 text-primary/60" />
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </motion.div>
  );
};

export default SearchInput;
