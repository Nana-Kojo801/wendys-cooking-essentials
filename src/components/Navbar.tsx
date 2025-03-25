import { useState } from "react"
import { Link } from "@tanstack/react-router"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-[#e15b41] font-bold text-xl">
              Wendy's Kitchen Essentials
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              activeProps={{
                className:
                  "border-[#e15b41] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
              inactiveProps={{
                className:
                  "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              activeProps={{
                className:
                  "border-[#e15b41] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
              inactiveProps={{
                className:
                  "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
            >
              Products
            </Link>
            <Link
              to="/contact"
              activeProps={{
                className:
                  "border-[#e15b41] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
              inactiveProps={{
                className:
                  "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              }}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e15b41] hover:bg-[#d04a30]"
            >
              Admin
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e15b41]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? "" : "hidden"}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            activeProps={{ className: "bg-[#e15b41] text-white block pl-3 pr-4 py-2 text-base font-medium" }}
            inactiveProps={{
              className:
                "text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium",
            }}
          >
            Home
          </Link>
          <Link
            to="/products"
            activeProps={{ className: "bg-[#e15b41] text-white block pl-3 pr-4 py-2 text-base font-medium" }}
            inactiveProps={{
              className:
                "text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium",
            }}
          >
            Products
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "bg-[#e15b41] text-white block pl-3 pr-4 py-2 text-base font-medium" }}
            inactiveProps={{
              className:
                "text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium",
            }}
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

