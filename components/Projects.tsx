"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Dhofar Global",
    description:
      "Developed and maintained the Dhofar Global e-commerce platform using React and PHP Laravel, enhancing the site's performance and user experience.",
    image: "https://picsum.photos/300/200?random=1",
    technologies: ["React", "PHP Laravel", "PostgreSQL", "MySQL", "RESTful APIs"],
    duration: "Jan 2024 - Present",
    achievements: [
      "Implemented RESTful APIs to integrate new features, such as the free delivery mechanism, and increase order efficiency.",
      "Collaborated with a team of developers to introduce sustainability-focused products, leading to a rise in environmentally-conscious client acquisitions.",
      "Utilized skills in PostgreSQL and MySQL to optimize database queries, reducing data retrieval and improving overall site responsiveness.",
    ],
    liveDemo: "https://www.dhofarglobal.com/",
  },
  {
    title: "Careerx",
    description:
      "Built a robust platform using Node.js, Angular 7, and MySQL for grocery and food delivery with real-time order tracking.",
    image: "https://picsum.photos/300/200?random=2",
    technologies: ["Node.js", "Angular 7", "MySQL"],
    duration: "Dec 2022 - Dec 2023",
    achievements: ["Improved delivery efficiency, increasing customer retention."],
    liveDemo: "#",
  },
  {
    title: "Choose Cubby",
    description:
      "Developed a scalable luggage storage platform for travelers using Node.js, Angular 7, and MySQL with booking, payment, and map-based navigation.",
    image: "https://picsum.photos/300/200?random=3",
    technologies: ["Node.js", "Angular 7", "MySQL"],
    duration: "Jan 2021 - Dec 2021",
    achievements: ["Successfully implemented a feature-rich system for luggage storage bookings."],
    liveDemo: "https://stasher.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project`}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover md:w-48"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {project.duration}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="mt-4 list-disc pl-5 space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

