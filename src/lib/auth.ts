// src/lib/auth.ts

export const users = [
  {
    username: 'admin',
    password: 'admin123', // WARNING: in production, never store plaintext passwords
  },
];

// Basic login check
export function authenticate(username: string, password: string) {
  const user = users.find((u) => u.username === username && u.password === password);
  return !!user;
}

