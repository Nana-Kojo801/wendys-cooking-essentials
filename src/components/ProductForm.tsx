import type React from "react"
import { useState } from "react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  featured: boolean
  stock: number
}

interface ProductFormProps {
  product: Product
  categories: string[]
  onSave: (product: Product) => void
  onCancel: () => void
}

const ProductForm: React.FC<ProductFormProps> = ({ product, categories, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Product>(product)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData({ ...formData, [name]: checked })
    } else if (type === "number") {
      setFormData({ ...formData, [name]: Number.parseFloat(value) || 0 })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (formData.price <= 0) {
      newErrors.price = "Price must be greater than 0"
    }

    if (!formData.category) {
      newErrors.category = "Category is required"
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required"
    }

    if (formData.stock < 0) {
      newErrors.stock = "Stock cannot be negative"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSave(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            className={`mt-1 block w-full border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            className={`mt-1 block w-full border ${errors.stock ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
          />
          {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.category ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.image ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e15b41] focus:border-[#e15b41] sm:text-sm`}
        />
        {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
      </div>

      <div className="flex items-center">
        <input
          id="featured"
          name="featured"
          type="checkbox"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          className="h-4 w-4 text-[#e15b41] focus:ring-[#e15b41] border-gray-300 rounded"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
          Featured product
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e15b41]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#e15b41] hover:bg-[#d04a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e15b41]"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ProductForm

