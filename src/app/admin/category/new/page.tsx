"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner';

export default function CreateCategory() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URI}/api/categories`,
        {
          method: 'POST',
          body: JSON.stringify({ name, description }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await res.json();
      console.log("Response data:", data);
      if (res.ok) {
        toast.info(data?.message || "Category created successfully");
        setTimeout(() => {
          router.push("/admin/category");
        }, 1000);
      } else {
        toast.error(data?.message || "Category already exists!");
      }
    } catch (error) {
      toast.error(`${error}`);
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4">
          <Toaster richColors />
      <form method="POST" onSubmit={handleSubmit} className="md:w-2/5 mx-auto w-4/5">
        <h2 className="text-2xl text-[#131313] font-bold mb-4">
          Create New Category
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter category name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter category description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
