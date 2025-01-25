"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pr-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Banupriya C, <br />a Full Stack Developer
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            With 4+ years of experience, I specialize in building scalable web and mobile applications using React,
            Angular, and PHP Laravel. I'm passionate about creating efficient, user-friendly solutions that drive
            business success.
          </p>
          <div className="flex space-x-4">
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
            >
              View Projects
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="John Doe"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

