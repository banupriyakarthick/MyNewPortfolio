"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Tips for Writing Clean and Maintainable Code",
    excerpt: "Discover best practices for writing code that's easy to read, understand, and maintain over time.",
    date: "May 15, 2023",
    readMoreLink: "#",
  },
  {
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt: "Explore upcoming technologies and methodologies that will shape the future of web development.",
    date: "April 22, 2023",
    readMoreLink: "#",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn techniques to improve the speed and efficiency of your React-based web applications.",
    date: "March 10, 2023",
    readMoreLink: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Button asChild>
                    <a href={post.readMoreLink}>Read More</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

