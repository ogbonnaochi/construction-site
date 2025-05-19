'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Project = {
  id: number;
  title: string;
  description: string;
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = { id: Date.now(), title, description };
    setProjects([newProject, ...projects]);
    setTitle('');
    setDescription('');
  };

  const handleLogout = () => {
    // If you use authentication, clear tokens/cookies here
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleAddProject} className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Project
        </button>
      </form>

      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects added yet.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}