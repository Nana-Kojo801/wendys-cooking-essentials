import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative bg-[#2a3d45] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/kitchen-image.jpg"
            alt="Kitchen background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Have questions about our products or need assistance? We're here to
            help you find the perfect kitchen tools for your needs.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-[#e15b41] to-[#d04a30] sm:px-10 xl:p-12 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width="343"
                  height="388"
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width="359"
                  height="339"
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width="160"
                  height="678"
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Contact Information
              </h3>
              <p className="mt-6 text-base text-white max-w-3xl">
                Visit our store, give us a call, or send us a message. We'd love
                to hear from you!
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="flex text-base text-white">
                  <i className="fas fa-map-marker-alt flex-shrink-0 h-6 w-6 text-white"></i>
                  <span className="ml-3">
                    123 Culinary Street
                    <br />
                    Gourmet City, GC 12345
                  </span>
                </dd>
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-white">
                  <i className="fas fa-phone-alt flex-shrink-0 h-6 w-6 text-white"></i>
                  <span className="ml-3">(555) 123-4567</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-white">
                  <i className="fas fa-envelope flex-shrink-0 h-6 w-6 text-white"></i>
                  <span className="ml-3">info@wendyskitchen.com</span>
                </dd>
                <dt>
                  <span className="sr-only">Hours</span>
                </dt>
                <dd className="flex text-base text-white">
                  <i className="fas fa-clock flex-shrink-0 h-6 w-6 text-white"></i>
                  <span className="ml-3">
                    Monday-Saturday: 9AM-6PM
                    <br />
                    Sunday: Closed
                  </span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-6">
                <li>
                  <a className="text-white hover:text-[#f9c49a]" href="#">
                    <span className="sr-only">Facebook</span>
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#f9c49a]" href="#">
                    <span className="sr-only">Instagram</span>
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#f9c49a]" href="#">
                    <span className="sr-only">Twitter</span>
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#f9c49a]" href="#">
                    <span className="sr-only">Pinterest</span>
                    <i className="fab fa-pinterest text-xl"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h3>
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-[#e15b41] focus:border-[#e15b41] border-gray-300 rounded-md"
                      aria-describedby="message-max"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#e15b41] hover:bg-[#d04a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e15b41] sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visit Our Store
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're conveniently located in downtown Gourmet City
            </p>
          </div>
          <div className="mt-12 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center p-6">
                <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">
                  Interactive Map Would Be Embedded Here
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-[#e15b41] hover:text-[#d04a30]"
                >
                  <span>Get Directions</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
