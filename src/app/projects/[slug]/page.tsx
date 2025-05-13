"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const projectDetails = Array.from({ length: 18 }, (_, index) => ({
  id: `project-${index + 1}`,
  title: `Project ${index + 1}`,
  fullDescription: `This is a detailed description of Project ${index + 1}, showcasing its modern architectural design and the cutting-edge construction materials used. The project is expected to be a landmark in the city.`,
  image: `/office${(index % 5) + 1}.jpg`,
}));

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  const project = projectDetails.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-6 text-center text-red-500">Project not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="rounded-xl mb-6 w-full h-auto object-cover"
      />
      <p className="text-gray-700 text-lg leading-relaxed">{project.fullDescription}</p>
    </main>
  );
}
