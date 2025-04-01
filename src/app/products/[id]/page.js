import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              {product.rating && (
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-1"
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
          </div>
        </div>
      </div>
    </div>
  );
}
