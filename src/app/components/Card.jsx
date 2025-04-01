"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Card = ({ product, products, setProducts }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${product.id}`);
      setProducts(products.filter((p) => p.id !== product.id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 dark:bg-gray-800">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
          {product.title}
        </h5>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </span>
          {product.rating && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 1.863a.678.678 0 0 0-.583-.38h-1.96c-.083 0-.166.033-.208.098l-4.152 3.352-4.153-3.352c-.042-.065-.125-.098-.208-.098H2.636a.676.676 0 0 0-.583.38A.685.685 0 0 0 2.4 3.131l1.833 1.59 4.995 4.35-1.79 1.985a.679.679 0 0 0-.11.107l-2.84 3.105c-.14.153.132.369.333.369h.057c.201 0 .331-.216.185-.359l2.84-3.105c.095-.104.214-.107.333.002l7.98 7.007a.685.685 0 0 0 1.03-.247.686.686 0 0 0 .268-.764l-1.873-1.631 4.995-4.35 1.833-1.59c.229-.2.229-.599.017-.836z" />
              </svg>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                {product.rating.rate}
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-around p-4">
          <Link
            href={`/products/${product.id}`}
            className="m-auto p-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaEye />
          </Link>
          <Link
            href={`/products/edit/${product.id}`}
            className="m-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaEdit />
          </Link>
          <button
            onClick={handleDelete}
            className="m-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 cursor-pointer rounded"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
