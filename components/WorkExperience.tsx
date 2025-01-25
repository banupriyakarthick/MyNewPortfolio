import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Associate",
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
    title: "MEAN Stack Developer",
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
    title: "PHP Developer",
    company: "CodeKhadi Mobile Solutions",
    location: "Coimbatore, India",
    duration: "May 2017 - Aug 2018",
    responsibilities: [
      "Built and deployed custom applications with Laravel and CodeIgniter, meeting client deadlines.",
      "Streamlined backend processes, increasing efficiency.",
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

