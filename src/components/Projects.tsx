import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Sentiment Analysis Web Application - Moodify",
      description: "Built a Flask-based web application that analyzes and visualizes user emotions from text input using a BERT-based NLP model; utilizes HTML, CSS, JavaScript, and Python, achieving 87-90% accuracy in sentiment classification.",
      tech: ["Python", "Flask", "BERT", "HTML/CSS", "JavaScript", "NLP"],
      link: "https://github.com/Shrishkd/TEAM-26-DSN-PROJECT",  
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Predictive Network Traffic Analyzer - NetHat",
      description: "Developed an offline desktop tool for real-time network anomaly detection using Scapy and machine learning. Implemented Random Forest and Gradient Boosting with Dash for visualization, embedded in a PyQt5 GUI. Achieved 99.18% accuracy.",
      tech: ["Python", "Scapy", "PyQt5", "Dash", "Scikit-learn", "Machine Learning"],
      link: "https://github.com/Netlyze/Netlyze",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Cyber Safety Educational Website - NetNinja",
      description: "Created an interactive educational platform for kids to learn about cybersecurity and online safety. Features engaging content, quizzes, and interactive modules to teach digital citizenship and safe internet practices.",
      tech: ["HTML/CSS", "JavaScript", "React", "Bootstrap", "Educational Design"],
      link: "https://netninja-admin.web.app", 
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Text-based Adventure Game",
      description: "Developed an immersive text-based adventure game with complex branching narratives, character progression, and inventory management. Features multiple storylines and decision-making mechanics for enhanced gameplay experience.",
      tech: ["Python", "Game Logic", "OOP", "File I/O", "Interactive Fiction"],
      link: "https://github.com/Parth-bot-crypto26/Text-Based-Adventure-Game",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 perspective-1000"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent preserve-3d"
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            whileHover={{ scaleX: 1.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15, rotateY: 5, scale: 1.02 }}
              className="group glass-effect rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 preserve-3d cursor-pointer"
            >
              <motion.div 
                className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
                <motion.div 
                  className="text-white text-6xl font-bold opacity-30 group-hover:opacity-60 transition-all duration-500 preserve-3d"
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                >
                  {project.title.split(' ')[0]}
                </motion.div>
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/50 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors preserve-3d"
                  whileHover={{ rotateX: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors"
                  whileHover={{ rotateX: 2 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 preserve-3d"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-500/80 rounded-lg text-white text-sm transition-colors preserve-3d"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
