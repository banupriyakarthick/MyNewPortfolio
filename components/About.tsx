"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Users, Lightbulb, MessageSquare } from "lucide-react"

const qualities = [
  { icon: Code, title: "Technical Expertise", description: "Proficient in React, Angular, Laravel, and more" },
  { icon: Users, title: "Team Collaboration", description: "Experienced in working with cross-functional teams" },
  { icon: Lightbulb, title: "Problem Solver", description: "Adept at tackling complex technical challenges" },
  {
    icon: MessageSquare,
    title: "Effective Communicator",
    description: "Skilled in conveying technical concepts clearly",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Highly skilled Front-End and Back-End Developer with 4+ years of experience building scalable web and mobile
            applications. I have proven expertise in creating responsive, user-friendly interfaces, optimizing
            application performance, and integrating RESTful APIs. I'm adept at solving complex technical problems,
            leading cross-functional teams, and delivering measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <quality.icon className="w-12 h-12 mb-4 mx-auto text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{quality.description}</p>
              </motion.div>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

