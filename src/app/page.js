import axios from "axios";
import Image from "next/image";
import Card from "./components/Card";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-12 mt-6 text-blue-500 text-center">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
