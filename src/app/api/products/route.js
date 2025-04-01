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
    const body = await req.json();
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const newProduct = await res.json();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}
