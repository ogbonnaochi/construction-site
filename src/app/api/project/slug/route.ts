// src/api/projects/[slug]/route.ts
import { NextResponse } from 'next/server';
import { projects } from '../../../../lib/project';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
