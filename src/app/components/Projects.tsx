"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "civil-engineering",
      category: "House",
      title: "Civil Engineering Construction",
      description: "Delivering top-tier engineering solutions with precision and innovation.",
      image: "/office.jpg",
    },
    {
      id: "repair-maintenance",
      category: "Road",
      title: "Repair & Maintenance",
      description: "Ensuring long-lasting durability with expert maintenance services.",
      image: "/road.png",
    },
    {
      id: "power-supply",
      category: "Power Plant",
      title: "Power Supply",
      description: "Providing reliable power solutions for industries and communities.",
      image: "/power.jpg",
    },
    {
      id: "consultancy",
      category: "House",
      title: "Consultancy",
      description: "Expert guidance to help you navigate complex engineering projects.",
      image: "/tosh.png",
    },
    {
      id: "equipment",
      category: "Equipment",
      title: "Equipment",
      description: "Supplying high-quality machinery and tools for your projects.",
      image: "/equipment.jpg",
    },
  ];

  const categories = ["All", "Road", "Equipment", "House", "Power Plant"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <>
      {/* Project Section */}
      <section
        id="projects"
        className="relative py-24 px-6 lg:px-20 text-center overflow-hidden bg-white dark:bg-[#0c0c0c]"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-10"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Explore the key areas where we deliver value and excellence.
          </p>

          {/* === NEW: Project Navigation Tabs === */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border transition duration-300 font-medium ${
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white/80 dark:bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-3xl transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link href={`/projects/${project.id}`}>
                    <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                      View Project
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
