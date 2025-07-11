
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 relative bg-black">
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
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              textShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
            }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            whileHover={{ scaleX: 1.5 }}
            style={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 preserve-3d"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.02, rotateX: 5 }}
            >
              Passionate Developer & AI Enthusiast
            </motion.h3>
            
            <motion.div className="space-y-4">
              <motion.p 
                className="text-gray-300 leading-relaxed"
                whileHover={{ rotateX: 2, color: "#e5e7eb" }}
                transition={{ duration: 0.3 }}
              >
                I’m a Computer Science undergraduate at VIT Bhopal, specializing in Artificial Intelligence and Machine Learning. I enjoy solving real-world problems by integrating AI with intuitive software solutions. My experience includes building sentiment analysis tools, anomaly detection systems, and working on backend development for real-time applications.
              </motion.p>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                whileHover={{ rotateX: 2, color: "#e5e7eb" }}
                transition={{ duration: 0.3 }}
              >
                I’m passionate about creating efficient, scalable, and user-focused solutions through intelligent systems. Whether it's extracting insights from data, automating tasks, or building full-stack applications, I strive to deliver outcomes that are both technically sound and practically impactful. I thrive in dynamic environments and am 
                eager to contribute as a Data Scientist or AI Engineer, combining analytical thinking 
                with innovation.
              </motion.p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {["Python", "React", "Machine Learning", "JavaScript", "AI/ML"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                    z: 10
                  }}
                  className={`px-3 py-1 rounded-full text-sm border preserve-3d cursor-pointer ${
                    index === 0 ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    index === 1 ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                    index === 2 ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                    index === 3 ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                    'bg-red-500/20 text-red-300 border-red-500/30'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center perspective-1000"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                z: 20
              }}
              className="relative preserve-3d"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center overflow-hidden">
                <img src="/deshp_profile.jpg" alt="Parth Deshpande" />
              </div>
              
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-green-500/30 rounded-full"
                animate={{
                  x: [0, -5, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
