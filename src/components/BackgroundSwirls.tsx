import { motion } from "framer-motion";

const BackgroundSwirls = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pastel Blue Swirl */}
      <motion.div
        className="swirl w-[600px] h-[600px] bg-pastel-blue -top-32 -left-32 animate-swirl-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />
      
      {/* Pastel Pink Swirl */}
      <motion.div
        className="swirl w-[500px] h-[500px] bg-pastel-pink top-1/4 -right-20 animate-swirl-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 0.3 }}
      />
      
      {/* Pastel Purple Swirl */}
      <motion.div
        className="swirl w-[450px] h-[450px] bg-pastel-purple bottom-20 left-1/4 animate-swirl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.6 }}
      />
      
      {/* Pastel Mint Swirl */}
      <motion.div
        className="swirl w-[400px] h-[400px] bg-pastel-mint top-1/2 left-1/3 animate-swirl-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, delay: 0.9 }}
      />
      
      {/* Pastel Peach Swirl */}
      <motion.div
        className="swirl w-[350px] h-[350px] bg-pastel-peach bottom-1/4 right-1/4 animate-swirl-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
    </div>
  );
};

export default BackgroundSwirls;
