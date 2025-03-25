import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_layout/products")({
  component: RouteComponent,
});

const products = [
  {
    id: 1,
    name: "Professional Chef Knife",
    price: "$89.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
  {
    id: 2,
    name: "Wooden Cutting Board",
    price: "$45.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
  {
    id: 3,
    name: "Silicone Spatula Set",
    price: "$24.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
  {
    id: 4,
    name: "Stainless Steel Measuring Cups",
    price: "$19.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
  {
    id: 5,
    name: "Cast Iron Skillet",
    price: "$59.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
  {
    id: 6,
    name: "Bamboo Utensil Set",
    price: "$34.99",
    image:
      "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg",
  },
  {
    id: 7,
    name: "Digital Kitchen Scale",
    price: "$29.99",
    image:
      "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-2610864_1280.jpg",
  },
  {
    id: 8,
    name: "Stainless Steel Mixing Bowls",
    price: "$39.99",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
  },
];

const categories = [
  "All Products",
  "Knives",
  "Cutting Boards",
  "Utensils",
  "Cookware",
  "Gadgets",
];

function RouteComponent() {
  const [activeCategory, setActiveCategory] = React.useState("All Products");

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Our Products</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Browse our collection of high-quality kitchen utensils and tools.
              All items are available for purchase in our physical store.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category
                    ? "bg-[#e15b41] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
