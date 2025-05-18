"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  specialization: string;
  experience: string;
  image: string;
  skills: string[];
};

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0c0c0c] text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Meet Our Team
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
        Experts bringing value to every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white dark:bg-white/5 rounded-3xl shadow-lg p-6 text-left"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{member.specialization}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.experience}</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4">
              {member.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
