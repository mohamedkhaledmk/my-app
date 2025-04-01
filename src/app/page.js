"use client";
import dynamic from "next/dynamic";
import axios from "axios";
import Image from "next/image";
// import Card from "./components/Card";
import { useEffect, useState } from "react";
import Head from "next/head";
async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await axios.get(`${baseURL}/api/products`);
  console.log("data", res.data);
  return res.data;
}
const Card = dynamic(() => import("./components/Card"), {
  ssr: false, // Prevents rendering on the server
});

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        console.log("Fetching products...");
        console.log("products", fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {" "}
      <Head>
        <title>Products App | Best Deals Online</title>
        <meta
          name="description"
          content="Discover the best products with amazing deals. Shop now!"
        />
        <meta
          name="keywords"
          content="products, ecommerce, best deals, buy online"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Products App | Best Deals Online" />
        <meta
          property="og:description"
          content="Discover the best products with amazing deals. Shop now!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/preview-image.jpg"
        />
        <meta property="og:type" content="website" />
        <Head>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Product Name",
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              description: "This is an amazing product!",
              brand: { "@type": "Brand", name: "FakeStore" },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "39.99",
                availability: "https://schema.org/InStock",
                url: "https://yourwebsite.com/product/1",
              },
            })}
          </script>
        </Head>
      </Head>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-12 mt-6 text-blue-500 text-center">
          Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </div>
      </div>
    </>
  );
}
