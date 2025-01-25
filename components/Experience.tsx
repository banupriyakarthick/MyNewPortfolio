"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    jobTitle: "Associate",
    company: "KGISL Technologies Private Limited",
    location: "Coimbatore, India",
    duration: "Dec 2022 - Present",
    responsibilities: [
      "Designed and maintained scalable web applications using React.",
      "Implemented reusable React components, reducing development time.",
      "Enhanced API integration processes.",
      "Collaborated with cross-functional teams to deliver features under tight deadlines in an Agile environment.",
    ],
  },
  {
    jobTitle: "MEAN Stack Developer",
    company: "Knila IT Solutions",
    location: "Coimbatore, India",
    duration: "Sep 2018 - Aug 2019",
    responsibilities: [
      "Developed dynamic web applications using Angular, Node.js, and MySQL.",
      "Optimized database queries, reducing application load time.",
      "Debugged and resolved critical issues, improving system reliability.",
    ],
  },
  {
    jobTitle: "PHP Developer",
    company: "CodeKhadi Mobile Solutions",
    location: "Coimbatore, India",
    duration: "May 2017 - Aug 2018",
    responsibilities: [
      "Built and deployed custom applications with Laravel and CodeIgniter, meeting client deadlines.",
      "Streamlined backend processes, increasing efficiency.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.jobTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.jobTitle}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.location} | {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

