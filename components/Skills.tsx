"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: "Expert", description: "Building scalable web applications" },
      { name: "Angular", level: "Expert", description: "Developing dynamic web applications" },
      { name: "TypeScript", level: "Proficient", description: "Enhancing JavaScript development" },
      { name: "HTML/CSS", level: "Expert", description: "Creating responsive layouts" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "PHP Laravel", level: "Expert", description: "Building robust backend systems" },
      { name: "Node.js", level: "Proficient", description: "Server-side JavaScript development" },
      { name: "CodeIgniter", level: "Proficient", description: "PHP framework for rapid development" },
      { name: "Yii", level: "Proficient", description: "High-performance PHP framework" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: "Expert", description: "Relational database management" },
      { name: "PostgreSQL", level: "Proficient", description: "Advanced SQL and performance tuning" },
      { name: "MongoDB", level: "Proficient", description: "NoSQL database for scalable applications" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "RESTful APIs", level: "Expert", description: "Designing and integrating APIs" },
      { name: "Git", level: "Proficient", description: "Version control and collaboration" },
      { name: "Docker", level: "Proficient", description: "Containerization for consistent deployments" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        >
                          <Badge
                            variant="outline"
                            className={`mr-2 mb-2 ${
                              skill.level === "Expert"
                                ? "border-purple-500 text-purple-500"
                                : skill.level === "Proficient"
                                  ? "border-blue-500 text-blue-500"
                                  : "border-green-500 text-green-500"
                            }`}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                        <p className="font-semibold mt-1">Level: {skill.level}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

