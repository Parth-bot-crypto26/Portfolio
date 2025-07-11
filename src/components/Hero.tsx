import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'; // ✅ Corrected import

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      rotateY: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-l from-green-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-20 max-w-4xl mx-auto px-6 perspective-1000"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.span 
            className="inline-block px-6 py-3 glass-effect rounded-full text-blue-300 text-sm font-medium mb-4 preserve-3d"
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" 
            }}
          >
            👋 Hello, I'm
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent preserve-3d"
          animate={floatingVariants.floating}
        >
          <motion.span 
            className="inline-block"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              textShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
            }}
          >
            Parth Deshpande
          </motion.span>
        </motion.h1>

        {/* ✅ Typewriter effect for the title */}
        <h1 className="text-3xl font-bold text-white">
          <Typewriter
            words={['Creative Web Developer and Data Science Enthusiast']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed preserve-3d"
          whileHover={{ rotateX: 2 }}
        >
          Driven Computer Science undergraduate specializing in AI & ML at VIT-B University. 
          Passionate about building full-stack web applications that seamlessly integrate AI solutions 
          and data-driven insights.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center preserve-3d"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)",
              z: 10
            }}
            whileTap={{ scale: 0.95, rotateY: -5 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition-all duration-300 glow-effect preserve-3d"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              rotateY: -5,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95, rotateY: 5 }}
            className="px-8 py-4 border border-white/20 rounded-full text-white font-medium transition-all duration-300 glass-effect preserve-3d"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 preserve-3d"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotateX: [0, 10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex flex-col items-center cursor-pointer preserve-3d"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [180, 540],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
