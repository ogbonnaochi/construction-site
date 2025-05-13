"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      image: "/images/repair-maintenance.jpg",
    },
    {
      id: "power-supply",
      title: "Power Supply",
      description: "Providing reliable power solutions for industries and communities.",
      image: "/images/power-supply.jpg",
    },
    {
      id: "consultancy",
      title: "Consultancy",
      description: "Expert guidance to help you navigate complex engineering projects.",
      image: "/images/consultancy.jpg",
    },
    {
      id: "equipment",
      title: "Equipment",
      description: "Supplying high-quality machinery and tools for your projects.",
      image: "/images/equipment.jpg",
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
      <section id="projects" className="max-w-7xl mx-auto py-16 px-6 text-center bg-white">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">Explore our service categories below.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
              <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="inline-block mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
