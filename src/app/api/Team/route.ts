// app/api/team/route.ts
// app/api/team/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
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
  ]);
}

