
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Replace this with your real backend auth logic
  if (email === 'admin@example.com' && password === 'password123') {
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
