import { Link } from "@tanstack/react-router"

const Footer = () => {
  return (
    <footer className="bg-[#2a3d45] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-xl font-bold">Wendy's Kitchen Essentials</h2>
            <p className="text-gray-300 text-base">
              Providing quality kitchen tools for professional chefs and home cooks since 2005.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white">
                      Knives
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white">
                      Cutting Boards
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-base text-gray-300 hover:text-white">
                      Utensils
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                    <span>123 Culinary Street, Gourmet City, GC 12345</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-phone mt-1 mr-2"></i>
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-envelope mt-1 mr-2"></i>
                    <span>info@wendyskitchen.com</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-clock mt-1 mr-2"></i>
                    <span>Mon-Sat: 9AM-6PM, Sun: Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-base text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Wendy's Kitchen Essentials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

