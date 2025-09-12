import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Driven by 
              <span className="text-blue-600"> data</span> and 
              <span className="text-purple-600"> curiosity</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a technology enthusiast pursuing a Bachelor of Technology, with a deep-seated passion for uncovering stories hidden within data. My journey is fueled by a desire to leverage data science and AI to solve real-world problems.
              </p>
              
              <p>
                From cleaning and preprocessing large datasets to building predictive models and deploying interactive dashboards, I enjoy every step of the data lifecycle. My approach combines analytical rigor with a creative mindset to deliver clear, impactful insights.
              </p>
              
              <p>
                When I'm not immersed in code or data, you can find me leading campus initiatives, exploring the latest developments in generative AI, or contributing to new projects.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Core Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-sm text-gray-600 font-medium">Data Tools Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-sm text-gray-600 font-medium">Leadership Roles</div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-6xl">📊</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
              💡
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-xl text-white">
              🤖
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}