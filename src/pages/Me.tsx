import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
const timelineItems = [{
  year: "2024",
  title: "Senior AI Developer",
  company: "Tech Company",
  description: "Leading AI initiatives and building intelligent systems",
  icon: Briefcase
}, {
  year: "2022",
  title: "Full Stack Developer",
  company: "Startup Inc",
  description: "Building scalable web applications from ground up",
  icon: Briefcase
}, {
  year: "2020",
  title: "Computer Science Degree",
  company: "University",
  description: "Specialized in Machine Learning and Web Technologies",
  icon: GraduationCap
}];
const Me = () => {
  return <PageLayout title="About Me" subtitle="A passionate developer crafting digital experiences with AI and modern technologies">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Bio */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          {/* Avatar and basic info */}
          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pastel-blue to-pastel-purple flex items-center justify-center text-5xl shadow-soft">
                👨‍💻
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Hugo</h2>
                <p className="text-primary font-medium mb-3">AI & Full Stack Developer</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio text */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer who loves building innovative solutions at the intersection of AI and web technologies. With a strong foundation in both frontend and backend development, I create seamless digital experiences.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a mission to make technology more accessible and intelligent. I believe in clean code, user-centric design, and continuous learning.
              </p>
              
            </div>
          </div>
        </motion.div>
        
        {/* Right Column - Timeline */}
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Career Timeline</h3>
          
          <div className="space-y-6">
            {timelineItems.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1
          }} className="glass-card-hover rounded-2xl p-6 relative">
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
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </PageLayout>;
};
export default Me;