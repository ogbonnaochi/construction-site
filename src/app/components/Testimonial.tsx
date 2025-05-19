"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mr. Felix Odu",
    position: "Project Manager, UrbanBuild Ltd.",
    image: "/images/testimonial1.jpg",
    comment:
      "Working with the team has been a game-changer. Their professionalism, communication, and delivery exceeded expectations. I look forward to future collaborations.",
  },
  {
    name: "Engr. Amaka Obi",
    position: "Lead Engineer, PowerGrid Solutions",
    image: "/images/testimonial2.jpg",
    comment:
      "I was impressed by the attention to detail and timely execution. They clearly understand what it means to deliver value in engineering projects.",
  },
  {
    name: "Mrs. Nkechi Umeh",
    position: "Director, TechWorks Nigeria",
    image: "/images/testimonial3.jpg",
    comment:
      "They brought creative ideas to life while sticking to budget and timeline. The results speak for themselves — excellent job!",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-white dark:bg-[#0c0c0c] py-20 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
        What Our Clients Say
      </h2>

      <div className="relative p-8 bg-gray-100 dark:bg-white/5 rounded-2xl shadow-xl transition-all duration-500">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 dark:text-gray-300"
        >
          ❮
        </button>

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4 object-cover"
        />
        <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{testimonial.position}</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-sm">
          “{testimonial.comment}”
        </p>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 dark:text-gray-300"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
