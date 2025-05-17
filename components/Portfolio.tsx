"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Define Project type
interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
}

// Example project data
const projects: Project[] = [
  {
    title: "African Rhapsody",
    category: "Multicurrency E-commerce",
    description: "Multicurrency e-commerce platform",
    link: "https://raphsodies.vercel.app"
  },
  {
    title: "StacPay Merchant",
    category: "Payment Platform",
    description: "Merchant payment solution",
    link: "https://preysta-2hib.vercel.app/mr-biggs-3"
  }
];

// Portfolio Item Component
const PortfolioItem = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="portfolio"
      className="relative overflow-hidden rounded-xl shadow-lg bg-white"
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-bl rounded-xl overflow-hidden" />
      {/* <div>
        <img src="/images/img-1" alt="Project Image" />
      </div> */}

      {/* Always visible content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-opacity-80 text-white">
        <div>
          <span className="text-indigo-500 font-medium">
            {project.category}
          </span>
          <h3 className="text-black text-xl font-semibold mt-1">
            {project.title}
          </h3>
          <p className="text-blue-950 text-sm mt-2">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
          >
            Visit Website
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Portfolio Section
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-gray-50 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we have helped businesses
            like yours succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) =>
            <PortfolioItem key={index} project={project} index={index} />
          )}
        </div>
      </div>
    </section>
  );
}
