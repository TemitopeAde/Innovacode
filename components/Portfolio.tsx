"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/images/project1.jpg"
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App",
    image: "/images/project2.jpg"
  },
  {
    title: "Corporate Website",
    category: "WordPress",
    image: "/images/project3.jpg"
  },
  {
    title: "Restaurant Booking",
    category: "Wix",
    image: "/images/project4.jpg"
  },
  {
    title: "Portfolio Site",
    category: "Squarespace",
    image: "/images/project5.jpg"
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
    image: "/images/project6.jpg"
  }
];

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      (gsap.utils.toArray(".portfolio-item") as HTMLElement[]).forEach(item => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="portfolio"
      ref={container}
      className="section-padding bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we have helped businesses
            like yours succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) =>
            <div
              key={index}
              className="portfolio-item group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  layout="fill"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
