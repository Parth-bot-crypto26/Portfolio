import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Github, Linkedin, Code } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: "Cloud Computing (NPTEL)",
      logo: "/public/NPTEL icon.png",
      link: "https://drive.google.com/file/d/1FMUSstrAiXnQyyve22dpmvDeeDk1aFGE/view?usp=drive_link"
    },
    {
      title: "Advanced SQL for Technical Interviews (Bosscoder Academy)",
      logo: "/public/Bosscoder_academy icon.png",
      link: "https://drive.google.com/file/d/1OHSHuGFHkSeEC-EpIFtsXtCjU6kLnpwC/view?usp=drive_link"
    },
    {
      title: "Java Course - Mastering the Fundamentals (Scaler)",
      logo: "/public/scaler icon.jpg",
      link: "https://drive.google.com/file/d/1qXfEB8JhSUq6o3izQpUorFtd-cfQ6itl/view?usp=drive_link"
    },
    {
      title: "Fundamentals of A.I. & M.L. (VITyarthi)",
      logo: "/public/vityarthi icon.png",
      link: "https://drive.google.com/file/d/1X0xlUPlks_7cywl4z-vJZIonPnk3ods1/view?usp=drive_link"
    },
    {
      title: "Python Essentials (VITyarthi)",
      logo: "/public/vityarthi icon.png",
      link: "https://drive.google.com/file/d/1mz1urcfU91X6PVQK8GiZDm5muVGMpqN3/view?usp=drive_link"
    },
    {
      title: "Python (Basics) (HackerRank)",
      logo: "/public/hackerrank icon.png",
      link: "https://drive.google.com/file/d/1sfYH_4A_uRTAYgGvJ3tq0QqCV8RfZW7t/view?usp=drive_link"
    },
    {
      title: "Learn Python Programming (CodeChef)",
      logo: "/public/codechef icon.png",
      link: "https://drive.google.com/file/d/1m3z7IvZy8NTWGf2Da-t4IdgNKGDk-qFc/view?usp=drive_link"
    },
    {
      title: "MATLAB Onramp (MathWorks)",
      logo: "/public/mathworks icon.jpeg",
      link: "https://drive.google.com/file/d/1ym6oXmAPTEGrGaLKAn2ih7ygwJe9QNEl/view?usp=drive_link"
    }
  ];

  const profiles = [
    {
      icon: Github,
      name: "GitHub",
      username: "Parth-bot-crypto26",
      url: "https://github.com/Parth-bot-crypto26",
      color: "text-gray-300 hover:text-white",
      bgColor: "bg-gray-600/20 hover:bg-gray-600/30"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "parth-deshpande",
      url: "https://www.linkedin.com/in/parth-deshpande-93578027b/",
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-600/20 hover:bg-blue-600/30"
    },
    {
      icon: Code,
      name: "LeetCode",
      username: "parth_crypto",
      url: "https://leetcode.com/u/parth-bot-crypto-26/",
      color: "text-orange-400 hover:text-orange-300",
      bgColor: "bg-orange-600/20 hover:bg-orange-600/30"
    },
    {
      icon: Code,
      name: "GeeksforGeeks",
      username: "parthcrypto",
      url: "https://www.geeksforgeeks.org/user/parth23bt7uq/",
      color: "text-green-400 hover:text-green-300",
      bgColor: "bg-green-600/20 hover:bg-green-600/30"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications & Profiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 5,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass-effect rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 preserve-3d cursor-pointer group flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={cert.logo} alt={cert.title} className="w-8 h-8 object-contain" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {cert.title}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Public Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <ExternalLink className="w-8 h-8 text-blue-400" />
            Public Profiles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                className={`${profile.bgColor} backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-current transition-all duration-300 preserve-3d group text-center`}
              >
                <motion.div
                  whileHover={{ rotateY: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <profile.icon className={`w-12 h-12 mx-auto ${profile.color} transition-colors`} />
                </motion.div>
                
                <h4 className={`text-lg font-bold mb-2 ${profile.color} transition-colors`}>
                  {profile.name}
                </h4>
                
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  @{profile.username}
                </p>
                
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4 mx-auto text-gray-400" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
