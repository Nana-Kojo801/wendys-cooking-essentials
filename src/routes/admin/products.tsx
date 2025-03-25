import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ProductForm from "../../components/ProductForm";

export const Route = createFileRoute("/admin/products")({
  component: RouteComponent,
});

const initialProducts = [
  {
    id: 1,
    name: "Professional Chef Knife",
    description: "Stainless Steel",
    price: 89.99,
    category: "Knives",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/12/38/knives-1839061_1280.jpg",
    featured: true,
    stock: 15,
  },
  {
    id: 2,
    name: "Wooden Cutting Board",
    description: "Acacia Wood",
    price: 45.99,
    category: "Cutting Boards",
    image:
      "https://cdn.pixabay.com/photo/2015/09/09/19/57/cutting-board-933088_1280.jpg",
    featured: true,
    stock: 23,
  },
  {
    id: 3,
    name: "Silicone Spatula Set",
    description: "Heat Resistant",
    price: 24.99,
    category: "Utensils",
    image:
      "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg",
    featured: true,
    stock: 42,
  },
  {
    id: 4,
    name: "Stainless Steel Measuring Cups",
    description: "Precise Measurements",
    price: 19.99,
    category: "Utensils",
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/23/50/measuring-2562169_1280.jpg",
    featured: false,
    stock: 30,
  },
  {
    id: 5,
    name: "Cast Iron Skillet",
    description: "Pre-seasoned",
    price: 59.99,
    category: "Cookware",
    image:
      "https://cdn.pixabay.com/photo/2014/07/21/23/00/frying-pan-398156_1280.jpg",
    featured: false,
    stock: 18,
  },
];

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  stock: number;
}

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Get unique categories from products
  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  // Handle product deletion
  const handleDeleteProduct = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Handle toggling featured status
  const handleToggleFeatured = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, featured: !product.featured }
          : product
      )
    );
  };

  // Handle saving a new or edited product
  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
      setEditingProduct(null);
    } else {
      // Add new product with a new ID
      const newId = Math.max(...products.map((p) => p.id), 0) + 1;
      setProducts([...products, { ...product, id: newId }]);
    }
    setIsAddingProduct(false);
  };

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <button
          onClick={() => {
            setIsAddingProduct(true);
            setEditingProduct(null);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e15b41] hover:bg-[#d04a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e15b41]"
        >
          <i className="fas fa-plus mr-2"></i> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-[#e15b41] focus:border-[#e15b41] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="focus:ring-[#e15b41] focus:border-[#e15b41] h-full py-2 pl-3 pr-7 border-gray-300 bg-white rounded-md"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Form Modal */}
      {(isAddingProduct || editingProduct) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {editingProduct ? "Edit Product" : "Add New Product"}
                  </h3>
                  <div className="mt-2">
                    <ProductForm
                      product={
                        editingProduct || {
                          id: 0,
                          name: "",
                          description: "",
                          price: 0,
                          category: "",
                          image: "",
                          featured: false,
                          stock: 0,
                        }
                      }
                      categories={categories.filter((c) => c !== "All")}
                      onSave={handleSaveProduct}
                      onCancel={() => {
                        setIsAddingProduct(false);
                        setEditingProduct(null);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Featured
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${product.price.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.stock}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleFeatured(product.id)}
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.featured
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {product.featured ? "Featured" : "Not Featured"}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="text-[#e15b41] hover:text-[#d04a30] mr-4"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
