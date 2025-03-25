import { createFileRoute } from "@tanstack/react-router";
import CategoryForm from "../../components/CategoryForm";
import { useState } from "react";

export const Route = createFileRoute("/admin/categories")({
  component: RouteComponent,
});

const initialCategories = [
  {
    id: 1,
    name: "Knives",
    description: "Professional and home kitchen knives",
    productCount: 8,
  },
  {
    id: 2,
    name: "Cutting Boards",
    description: "Wooden and plastic cutting surfaces",
    productCount: 5,
  },
  {
    id: 3,
    name: "Utensils",
    description: "Cooking and serving utensils",
    productCount: 12,
  },
  {
    id: 4,
    name: "Cookware",
    description: "Pots, pans, and bakeware",
    productCount: 10,
  },
  {
    id: 5,
    name: "Gadgets",
    description: "Specialized kitchen tools and gadgets",
    productCount: 15,
  },
];

// Category type definition
interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

function RouteComponent() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle category deletion
  const handleDeleteCategory = (id: number) => {
    if (
      window.confirm(
        "Are you sure you want to delete this category? This may affect products assigned to this category."
      )
    ) {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  // Handle saving a new or edited category
  const handleSaveCategory = (category: Category) => {
    if (editingCategory) {
      // Update existing category
      setCategories(
        categories.map((c) => (c.id === category.id ? category : c))
      );
      setEditingCategory(null);
    } else {
      // Add new category with a new ID
      const newId = Math.max(...categories.map((c) => c.id), 0) + 1;
      setCategories([...categories, { ...category, id: newId }]);
    }
    setIsAddingCategory(false);
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
        <button
          onClick={() => {
            setIsAddingCategory(true);
            setEditingCategory(null);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e15b41] hover:bg-[#d04a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e15b41]"
        >
          <i className="fas fa-plus mr-2"></i> Add Category
        </button>
      </div>

      {/* Search */}
      <div className="mt-6">
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
            placeholder="Search categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Form Modal */}
      {(isAddingCategory || editingCategory) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {editingCategory ? "Edit Category" : "Add New Category"}
                  </h3>
                  <div className="mt-2">
                    <CategoryForm
                      category={
                        editingCategory || {
                          id: 0,
                          name: "",
                          description: "",
                          productCount: 0,
                        }
                      }
                      onSave={handleSaveCategory}
                      onCancel={() => {
                        setIsAddingCategory(false);
                        setEditingCategory(null);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories Table */}
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
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Products
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
                  {filteredCategories.map((category) => (
                    <tr key={category.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {category.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">
                          {category.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {category.productCount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="text-[#e15b41] hover:text-[#d04a30] mr-4"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={category.productCount > 0}
                          title={
                            category.productCount > 0
                              ? "Cannot delete category with products"
                              : "Delete category"
                          }
                        >
                          <i
                            className={`fas fa-trash ${
                              category.productCount > 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredCategories.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        No categories found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Category Management Tips */}
      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <i className="fas fa-info-circle text-blue-400 text-xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Category Management Tips
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Categories with products cannot be deleted. Reassign or delete
                  products first.
                </li>
                <li>
                  Keep category names short and descriptive for better
                  navigation.
                </li>
                <li>
                  Use the description field to provide additional details about
                  the category.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
