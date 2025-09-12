import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mic, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const engagements = [
  {
    role: "Vice President – GFS (GTBIT Finishing Society)",
    organization: "GTBIT",
    duration: "Sep. 2023 - Sep. 2024",
    icon: Mic,
    description: "Led the content and operations team in organizing 10+ personality development events including workshops, debates, open mics, and JAMs. Spearheaded event planning and execution, boosting engagement through structured promotion strategies and targeted outreach.",
  },
  {
    role: "Vice President – Panorama (Health Club)",
    organization: "GTBIT",
    duration: "Oct. 2023 - Present",
    icon: Heart,
    description: "Coordinated multiple health and wellness drives including yoga sessions, mental health awareness talks, and fitness campaigns. Collaborated with NGOs and campus faculty to conduct impactful health initiatives and awareness programs.",
  }
];

export default function Campus() {
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
            Campus Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Developing leadership and organizational skills beyond the classroom.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {item.role}
                            </h3>
                            <h4 className="text-md text-purple-600 font-semibold">
                                {item.organization}
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {item.description}
                    </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}