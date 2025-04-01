import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products";

// ✅ Fetch a single product (GET)
export async function GET(req, { params }) {
  try {
    const res = await fetch(`${API_URL}/${params.id}`);
    if (!res.ok) throw new Error("Product not found");
    const product = await res.json();
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching product" },
      { status: 404 }
    );
  }
}

// ✅ Update a product (PUT)
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const res = await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const updatedProduct = await res.json();
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating product" },
      { status: 500 }
    );
  }
}

// ✅ Delete a product (DELETE)
export async function DELETE(req, { params }) {
  try {
    await fetch(`${API_URL}/${params.id}`, { method: "DELETE" });
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting product" },
      { status: 500 }
    );
  }
}
