import Image from "next/image";

// This is a server component, no "use client" needed
async function getProject(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/projects?slug=${slug}`, {
    cache: "no-store",
  });
  const projects = await res.json();
  // If you add a /api/projects/[slug] route, you can fetch just one project
  return projects[0]; // Assuming the API returns an array
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

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
      <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
    </main>
  );
}