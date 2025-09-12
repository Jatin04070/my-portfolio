import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description: "Built a machine learning model to predict customer churn using historical customer data. Performed data cleaning, preprocessing, and feature engineering to improve prediction accuracy. Evaluated multiple classification algorithms including Logistic Regression, Random Forest, and XGBoost.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib"],
    results: ["Achieved 91% prediction accuracy with XGBoost", "Identified key drivers of churn for strategic intervention"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jatin04070"
  },
  {
    title: "GenAI Code Assistant",
    category: "Generative AI",
    description: "Developed a smart code assistant using a fine-tuned language model (LLM). The tool understands natural language queries and generates Python code snippets for common data analysis tasks in Pandas and Matplotlib, boosting productivity.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tags: ["Generative AI", "LLM", "FastAPI", "Python", "Docker"],
    results: ["Reduced boilerplate code writing time by 60%", "Supports complex queries like 'plot a bar chart of top 10 categories'"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jatin04070"
  },
  {
    title: "Real-Time Sentiment Analysis Dashboard",
    category: "Data Engineering & Visualization",
    description: "Engineered a data pipeline to stream tweets, perform sentiment analysis in real-time, and visualize the results on an interactive dashboard. The system provides live insights into public opinion on various topics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    tags: ["Data Pipeline", "Sentiment Analysis", "Power BI", "SQL", "REST APIs"],
    results: ["Processed over 10,000 tweets per hour", "Enabled live tracking of brand sentiment during marketing campaigns"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jatin04070"
  }
];

export default function Projects() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in data science, machine learning, and AI.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <Button 
                        asChild
                        size="sm" 
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-gray-900"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="sm" 
                        variant="outline"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700">
                    {project.category}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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