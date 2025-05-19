import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  slug: String,
  image: String,
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
}

export async function GET(_request: any, { params }: { params: { slug: string } }) {
  await connectDB();
  const project = await Project.findOne({ slug: params.slug });
  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  return NextResponse.json(project);
}