"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "civil-engineering",
      title: "Civil Engineering Construction",
      description: "Delivering top-tier engineering solutions with precision and innovation.",
      image: "/office.jpg",
    },
    {
      id: "repair-maintenance",
      title: "Repair & Maintenance",
      description: "Ensuring long-lasting durability with expert maintenance services.",
      image: "/road.png",
    },
    {
      id: "power-supply",
      title: "Power Supply",
      description: "Providing reliable power solutions for industries and communities.",
      image: "/power.jpg",
    },
    {
      id: "consultancy",
      title: "Consultancy",
      description: "Expert guidance to help you navigate complex engineering projects.",
      image: "/tosh.png",
    },
    {
      id: "equipment",
      title: "Equipment",
      description: "Supplying high-quality machinery and tools for your projects.",
      image: "/equipment.jpg",
    },
  ];

  const team = [
    {
      name: "John Lee",
      specialization: "Civil Engineer - MSc, PhD",
      experience: "15 years of experience",
      image: "/images/team1.jpg",
      skills: ["Structural Design", "Project Management", "Site Supervision"],
    },
    {
      name: "Judith Sandra",
      specialization: "Electrical Engineer - MSc, PhD",
      experience: "10 years of experience",
      image: "/doctor.jpg",
      skills: ["Power Systems", "Automation", "Smart Grids"],
    },
    {
      name: "Jessica Ben",
      specialization: "Mechanical Engineer - PhD, MSc",
      experience: "10 years of experience",
      image: "/images/team3.jpg",
      skills: ["HVAC Systems", "Product Design", "Manufacturing"],
    },
  ];

  const testimonials = [
    {
      name: "Alex Ibekwe",
      feedback: "Exceptional service and high-quality work. Would definitely recommend!",
      image: "/images/client1.jpg",
    },
    {
      name: "Okonkwo Williams",
      feedback: "A team of true professionals who exceeded our expectations.",
      image: "/images/client2.jpg",
    },
    {
      name: "David Okeke",
      feedback: "Their expertise and dedication made all the difference in our project.",
      image: "/public/doctor.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

return (
  <>
    {/* Projects Overview */}
    {/* Projects Section */}
    <section
      id="projects"
      className="relative py-24 px-6 lg:px-20 text-center overflow-hidden bg-white dark:bg-[#0c0c0c]"
    >
      {/* Optional Video Background */}
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
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-16">
          Explore the key areas where we deliver value and excellence.
        </p>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
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


      {/* Team Section */}
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10">Meet Our Experts</h2>
        <p className="text-gray-600 mb-12">Skilled professionals powering our success.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-xl border text-center">
              <Image src={member.image} alt={member.name} width={160} height={160} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.specialization}</p>
              <p className="text-sm text-gray-400">{member.experience}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Client Testimonials</h2>

        <div className="relative p-8 bg-gray-100 rounded-xl shadow-lg">
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500">❮</button>
          <Image src={testimonials[current].image} alt={testimonials[current].name} width={80} height={80} className="rounded-full mx-auto mb-4" />
          <p className="font-semibold">{testimonials[current].name}</p>
          <p className="text-gray-600 mt-2">"{testimonials[current].feedback}"</p>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500">❯</button>
        </div>
      </section>
    </>
  );
}
