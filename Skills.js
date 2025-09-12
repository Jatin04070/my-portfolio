import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "HTML/CSS", level: 85 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Pandas & NumPy", level: 95 },
      { name: "Scikit-learn", level: 90 },
      { name: "Matplotlib & Seaborn", level: 85 },
      { name: "React & Node.js", level: 75 },
      { name: "Flask & FastAPI", level: 80 }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL & MySQL", level: 85 },
      { name: "Power BI & Tableau", level: 90 },
      { name: "Google BigQuery", level: 80 },
      { name: "Git & Docker", level: 88 },
      { name: "Jupyter Notebook", level: 95 }
    ]
  }
];

export default function Skills() {
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A versatile toolkit for data analysis, machine learning, and development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Core Competencies
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Beyond tools, I have a strong foundation in data-centric methodologies and practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Data Cleaning", "EDA", "Data Visualization", "Machine Learning", "Feature Engineering", "Model Evaluation"].map((topic, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}