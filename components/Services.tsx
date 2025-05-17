"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaMobileAlt,
  FaWordpress,
  FaWix,
  FaServer
} from "react-icons/fa";
import { SiSquarespace } from "react-icons/si";

// Register ScrollTrigger pluginöte
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <FaCode className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Custom Web Development",
    description:
      "Tailored websites built with modern technologies like Next.js, React, and Node.js for optimal performance."
  },
  {
    icon: (
      <FaMobileAlt className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android using React Native and Flutter."
  },
  {
    icon: (
      <FaWordpress className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "WordPress Solutions",
    description:
      "Custom WordPress themes, plugins, and eCommerce solutions with WooCommerce."
  },
  {
    icon: (
      <FaWix className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Wix Development",
    description:
      "Professional Wix website design with custom functionality and integrations."
  },
  {
    icon: (
      <SiSquarespace className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Squarespace Design",
    description:
      "Beautiful Squarespace websites with custom coding for enhanced features."
  },
  {
    icon: (
      <FaServer className="text-5xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Hosting & Maintenance",
    description: "Reliable hosting solutions and ongoing maintenance packages."
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading animations
      gsap.from(".services-heading", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".services-subheading", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Service cards staggered animation
      gsap.to(".service-card", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      // Icon bounce animation on hover (set up in CSS with group-hover)
    },
    { scope: container }
  );

  return (
    <section
      id="services"
      ref={container}
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="services-heading text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Services
          </h2>
          <p className="services-subheading text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help your
            business thrive online and reach new heights.
          </p>
        </div>

        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
            <div
              key={index}
              className="service-card group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background color overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon with bounce effect on hover */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title and description */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Learn more link */}
              <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300">
                <a
                  href="#contact"
                  className="inline-flex items-center text-indigo-600 group-hover:text-white font-medium transition-colors duration-300"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to transform your digital presence?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us discuss how our services can help your business grow and
            succeed online.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-indigo-600 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
