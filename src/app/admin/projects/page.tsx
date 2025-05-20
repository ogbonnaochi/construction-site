"use client";
import { useState, useEffect } from "react";
import {toast, Toaster} from 'sonner';
export default function CreateProject() {
  const [loading, setLoading] = useState(true);

  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [category, setCategory] = useState("");


  const [categories, setCategories] = useState([]);


  type categoryType = {
      _id: string,
      description: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      status: string,
      __v: number,
      category: string,
  }
  useEffect(() => {

      const fetchCategories = async () => {
          try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/categories`);
              const data = await response.json();
              setCategories(data?.categories);
          } catch (error) {
              console.error('Error fetching categories:', error);
          }
      };

      fetchCategories();
      // Cleanup function to reset categories if needed
      return () => {
          setCategories([]);
      }

  }, [])
  const [selectedCategory, setSelectedCategory] = useState({} as categoryType);

  if(!categories) {
      return (
          <div className="bg-white p-4">
              <h1 className="text-2xl font-bold mb-4 text-[#131313]">Loading...</h1>
          </div>
      )
  }



  const handleProjectCreation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("description", description);
    if (image) {
      formData.append("image", image); // add image
    }
    formData.append("category_id", category);
  
     if (!image) {
    alert("Please select an image");
    return;
  }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/projects`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Response:", data);
      toast.info("Project created successfully!");
    } catch (error) {
      alert(`${error}`);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="bg-white p-4" onSubmit={handleProjectCreation}>
       <Toaster richColors />
      <div className="md:w-1/2 mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#131313]">
          Create New Project
        </h1>
        <form className="flex flex-col gap-4" method="POST" encType="multipart/form-data" onSubmit={handleProjectCreation}>
          <input
            type="text"
            placeholder="Project Name"
            className="border border-gray-300 text-[#888] p-2 rounded placeholder:text-[#888]"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            type="text"
            placeholder="Project Description"
            className="border border-gray-300 text-[#888] p-2 rounded placeholder:text-[#888]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            name="image"
            className="border border-gray-300 text-[#888] p-2 rounded file:text-[#888]"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
          <select
            className="border border-gray-300 text-[#888] p-2 rounded"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSelectedCategory(selectedCategory || ({} as categoryType));
            }}
          >
            <option value="">Select Category</option>
            {categories && categories.map((cat: categoryType) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
            {!categories && (<option value="">No categories available</option>)}
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Create Project
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
    </div>
  );
}
