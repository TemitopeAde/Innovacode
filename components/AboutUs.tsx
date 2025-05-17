"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatsItem {
  value: string;
  label: string;
}

const stats: StatsItem[] = [
  {
    value: "1+",
    label: "Years Experience"
  },
  {
    value: "2+",
    label: "Projects Completed"
  },
  {
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    value: "3",
    label: "Team Members"
  }
];

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              variants={itemVariants} 
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              About Our Company
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="services-heading text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              We Create Digital Experiences That Drive Results
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6"
            >
              Founded in 2024, we are a team of passionate designers, developers, and digital strategists committed to delivering exceptional digital solutions. We collaborate closely with our clients to understand their unique challenges and create tailored solutions that exceed expectations.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8"
            >
              Our expertise spans e-commerce, payment solutions, and custom web applications. We pride ourselves on building robust, scalable platforms that help businesses grow and succeed in the digital landscape.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a 
                href="#contact" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="text-3xl text-indigo-400 md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}