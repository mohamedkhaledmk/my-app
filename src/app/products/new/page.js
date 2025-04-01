"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !price) return toast.error("All fields are required.");
    try {
      await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ title, price }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle success (e.g., show a success message or redirect)
      console.log("Product created successfully!");
      toast.success("Product created successfully!");
      setTitle(""); // Reset form fields
      setPrice("");
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error creating product:", error);
      toast.error("Error creating product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Create Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
