import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Beta Soft Technology (BST)",
    position: "Data Analyst Intern",
    duration: "Sep. 2024 - Nov. 2024",
    location: "New Delhi, India",
    description: "Gained hands-on experience in the complete data analysis lifecycle, from data acquisition and cleaning to visualization and reporting.",
    achievements: [
      "Performed data cleaning, preprocessing, and analysis on large datasets using Python (Pandas, NumPy) and Excel to derive actionable insights.",
      "Designed and automated interactive dashboards using Power BI to visualize KPIs and enhance decision-making processes.",
      "Collaborated with cross-functional teams to track product performance metrics and recommend data-driven strategies."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Excel", "Power BI", "SQL"]
  }
];

export default function Experience() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Applying my skills in a professional setting to drive business value.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-4">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities:</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}