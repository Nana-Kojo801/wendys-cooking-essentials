import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Quality Kitchen Tools</span>
                  <span className="block text-[#e15b41] xl:inline">
                    {" "}
                    for Every Chef
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover our premium selection of cooking utensils that make
                  cooking a joy. From professional chefs to home cooks, we have
                  the perfect tools for everyone.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e15b41] hover:bg-[#d04a30] md:py-4 md:text-lg md:px-10"
                    >
                      View Products
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#e15b41] bg-[#f9c49a] hover:bg-[#f7b785] md:py-4 md:text-lg md:px-10"
                    >
                      Visit Our Shop
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
            alt="Kitchen utensils"
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-gray-500">
            Check out some of our most popular kitchen essentials
          </p>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* Product 1 */}
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src="/src/assets/knife-image.jpg"
                  alt="Professional Chef Knife"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="/products">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Professional Chef Knife
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Stainless Steel</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$89.99</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src="/src/assets/knife-image.jpg"
                  alt="Wooden Cutting Board"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="/products">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Wooden Cutting Board
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Acacia Wood</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$45.99</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg"
                  alt="Silicone Spatula Set"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="/products">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Silicone Spatula Set
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Heat Resistant</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$24.99</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#e15b41] hover:bg-[#d04a30]"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
