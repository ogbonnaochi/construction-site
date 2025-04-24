import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: any;
}

export default async function ProjectsPage() {
  const query = `*[_type == "project"][0...6]{
    _id,
    title,
    description,
    fullDescription,
    image
  }`;

  const projects: Project[] = await client.fetch(query);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-16 space-y-24"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className={`grid md:grid-cols-2 gap-12 items-start ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
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

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
