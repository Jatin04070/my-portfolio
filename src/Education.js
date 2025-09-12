import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, School } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Guru Tegh Bahadur Institute Of Technology",
    degree: "Bachelor of Technology",
    duration: "Aug. 2022 - Aug. 2026",
    location: "New Delhi, India",
  },
  {
    institution: "Sanatam Dharma Public School",
    degree: "XII",
    duration: "Mar. 2020 - July 2021",
    location: "New Delhi, India",
  },
  {
    institution: "Little Fairy Public School",
    degree: "X",
    duration: "Mar. 2018 - May 2019",
    location: "New Delhi, India",
  }
];

export default function Education() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and foundational learning.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <School className="w-4 h-4" />
                        <h3 className="text-xl font-bold text-gray-900">
                            {edu.institution}
                        </h3>
                    </div>

                    <h4 className="text-lg text-blue-600 font-semibold mb-4">
                        {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}