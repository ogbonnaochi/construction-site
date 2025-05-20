'use client';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
export default function AdminDashboard() {

  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/users/me`, {headers: {Authorization: `Bearer ${localStorage.getItem('accesstoken')}`}});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const {data} = await response.json();
        setLoading(false);
        setUser(data);
      } catch (error) {
        console.log(error)
        setLoading(false);
        setError('Attention: You are not authorized to view this page. Please log in as an admin.');
        setTimeout(() => {
          router.push('/admin/login');
        }, 1000);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
}, [])


if(!user) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
}
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
      <p className="text-gray-700">You are now logged in!</p>
    </div>
  );
}
