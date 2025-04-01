import axios from "axios";
import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products";

// ✅ Fetch all products (GET)
export async function GET() {
  try {
    const res = await fetch(API_URL);
    const products = await res.json();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

// ✅ Create a new product (POST)

export async function POST(req) {
  try {
    const { title, price } = await req.json();

    const res = axios.post(API_URL, { title, price });
    if (!res.ok) {
      // Handle non-successful responses from fakestoreapi
      return NextResponse.json(
        { message: "Error creating product on external API" },
        { status: res.status }
      );
    }

    const newProduct = await res.json();
    console.log("res", res); // Corrected console log
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error in POST route:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}
