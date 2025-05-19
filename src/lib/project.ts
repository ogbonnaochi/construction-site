// src/lib/projects.ts

export const projects = [
  {
    id: '1',
    slug: 'civil-engineering',
    category: 'House',
    title: 'Civil Engineering Construction',
    description: 'Delivering top-tier engineering solutions with precision and innovation.',
    image: '/office.jpg',
  },
  {
    id: '2',
    slug: 'repair-maintenance',
    category: 'Road',
    title: 'Repair & Maintenance',
    description: 'Ensuring long-lasting durability with expert maintenance services.',
    image: '/road.png',
  },
  // Add more projects here
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
