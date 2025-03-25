import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <nav className="bg-[#2a3d45] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-white font-bold text-xl">Wendy's Admin</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/admin"
                  activeProps={{
                    className:
                      "border-[#e15b41] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                  inactiveProps={{
                    className:
                      "border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/products"
                  activeProps={{
                    className:
                      "border-[#e15b41] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                  inactiveProps={{
                    className:
                      "border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                >
                  Products
                </Link>
                <Link
                  to="/admin/categories"
                  activeProps={{
                    className:
                      "border-[#e15b41] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                  inactiveProps={{
                    className:
                      "border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  }}
                >
                  Categories
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium">
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
