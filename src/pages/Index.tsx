import { motion } from "framer-motion";
import BackgroundSwirls from "@/components/BackgroundSwirls";
import Avatar from "@/components/Avatar";
import SearchInput from "@/components/SearchInput";
import NavigationCard from "@/components/NavigationCard";
import { User, FolderOpen, Zap, Gamepad2, Mail } from "lucide-react";
const Index = () => {
  const navigationItems = [{
    to: "/me",
    icon: User,
    title: "Me",
    description: "Get to know who I am",
    gradient: "bg-gradient-to-br from-pastel-blue to-pastel-purple"
  }, {
    to: "/projects",
    icon: FolderOpen,
    title: "Projects",
    description: "Explore my work",
    gradient: "bg-gradient-to-br from-pastel-pink to-pastel-peach"
  }, {
    to: "/skills",
    icon: Zap,
    title: "Skills",
    description: "Technologies I master",
    gradient: "bg-gradient-to-br from-pastel-mint to-pastel-blue"
  }, {
    to: "/fun",
    icon: Gamepad2,
    title: "Fun",
    description: "Beyond the code",
    gradient: "bg-gradient-to-br from-pastel-purple to-pastel-pink"
  }, {
    to: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Let's connect",
    gradient: "bg-gradient-to-br from-pastel-peach to-pastel-mint"
  }];
  return <div className="min-h-screen relative overflow-hidden">
      <BackgroundSwirls />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
          
          {/* Greeting */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-lg md:text-xl text-muted-foreground mb-4">
            Hey, I'm <span className="text-foreground font-medium">Hugo</span> 👋
          </motion.p>
          
          {/* Avatar */}
          <div className="mb-6">
            <Avatar />
          </div>
          
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
            <span className="text-gradient">AI Portfolio</span>
          </motion.h1>
          
          {/* Search Input */}
          <div className="w-full max-w-lg mb-12">
            <SearchInput />
          </div>
          
          {/* Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-5xl">
            {navigationItems.map((item, index) => <NavigationCard key={item.to} {...item} delay={0.5 + index * 0.1} />)}
          </div>
        </div>
      </div>
    </div>;
};
export default Index;