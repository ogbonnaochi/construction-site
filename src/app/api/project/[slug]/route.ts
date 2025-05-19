import { NextResponse } from 'next/server';
import { projects } from '../../../../lib/project';

export async function GET(
  _request: Request,
  context: { params: { slug: string } }
) {
  const project = projects.find((p) => p.slug === context.params.slug);

  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}