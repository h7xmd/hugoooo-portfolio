import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-pastel-blue to-pastel-purple",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "from-pastel-mint to-pastel-blue",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "AI & ML",
    color: "from-pastel-pink to-pastel-peach",
    skills: [
      { name: "OpenAI", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "Prompt Engineering", level: 88 },
      { name: "RAG Systems", level: 82 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-pastel-purple to-pastel-pink",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 70 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

const softSkills = [
  { name: "Problem Solving", emoji: "🧩" },
  { name: "Team Leadership", emoji: "👥" },
  { name: "Communication", emoji: "💬" },
  { name: "Creativity", emoji: "💡" },
  { name: "Adaptability", emoji: "🔄" },
  { name: "Time Management", emoji: "⏰" },
];

const Skills = () => {
  return (
    <PageLayout 
      title="Skills" 
      subtitle="Technologies and tools I work with"
    >
      {/* Technical Skills */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-6">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-hover rounded-2xl p-6 text-center"
            >
              <span className="text-4xl mb-3 block">{skill.emoji}</span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Skills;
