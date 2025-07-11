
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "A.I. Developer",
      company: "AlgoFed",
      type: "Internship (Remote)",
      period: "Dec 2024 - Feb 2025",
      location: "Remote",
      description: [
        "Developed Python scripts to accurately extract and parse hardware details (CPU, RAM, serial numbers) from PDFs using PyPDF2/pdfminer.",
        "Created a comparison tool to identify missing or mismatched hardware data by comparing extracted PDF info against predefined datasets.",
        "Ensured robust error handling for corrupted PDFs and generated detailed mismatch reports in JSON/text formats."
      ],
      tech: ["Python", "PyPDF2", "Data Analysis", "JSON"]
    },
    {
      title: "C++ Developer",
      company: "Code Casa Pvt. Ltd.",
      type: "Internship (Remote)",
      period: "Sep 2023 - Oct 2023",
      location: "Remote",
      description: [
        "Implemented a file-based user registration and login system in C++ handling secure user data storage and authentication.",
        "Developed a hotel management system to manage customer records, enabling booking, searching, updating, and deleting records with file I/O operations.",
        "Enhanced understanding of file handling, data structures, and basic system design through practical coding projects."
      ],
      tech: ["C++", "File I/O", "System Design", "Data Structures"]
    }
  ];

  const education = [
    {
      institution: "VIT Bhopal University",
      degree: "B.tech-Computer Science (Specialization in A.I. & M.L.)",
      period: "August 2023 - Present",
      location: "Ashta, MP",
      cgpa: "9.11 cgpa"
    },
    {
      institution: "Govt. Excellence H.S. School High School",
      degree: "High School (9th to 12th std.)",
      period: "April 2019 - March 2023",
      location: "Betul, MP",
      grade: "10th (100%) 12th (94%)"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs mt-1">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                  <p className="text-purple-400 font-medium mb-3">{edu.degree}</p>
                  
                  <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {edu.cgpa || edu.grade}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
