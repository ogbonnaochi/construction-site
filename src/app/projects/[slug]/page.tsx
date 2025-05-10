import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image?: any;
}

export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("Fetching project with slug:", slug);

  // Safety check
  if (!slug) {
    console.error("No slug provided");
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Invalid Slug</h1>
        <p className="text-gray-600 mt-4">Please check the URL or try again.</p>
      </div>
    );
  }

  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    fullDescription,
    image
  }`;

  let project: Project | null = null;

  try {
    project = await client.fetch(query, { slug });
  } catch (err) {
    console.error("Error fetching project:", err);
  }

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Project Not Found</h1>
        <p className="text-gray-600 mt-4">The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-16 space-y-12"
    >
      {project.image ? (
        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={urlFor(project.image).width(1200).height(800).url()}
            alt={project.title}
            width={1200}
            height={800}
            className="rounded-xl shadow-xl object-cover w-full"
          />
        </motion.div>
      ) : (
        <p className="text-center text-gray-500">No image available</p>
      )}

      <p className='text centtre text-grey active '>retain image  </p>

      <div>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">{project.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {project.fullDescription || project.description}
        </p>
      </div>
    </motion.section>
  );
}
