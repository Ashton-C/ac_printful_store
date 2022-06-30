import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/about">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    About
                  </a>
                </Link>
                <Link href="/terms-of-sale">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    Terms of Sale
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.77778in"
                      height="2.75in"
                      viewBox="0 0 200 198"
                    >
                      <path
                        id="Selection"
                        fill="none"
                        stroke="black"
                        strokeWidth="1"
                        d="M 105.00,27.00
           C 113.30,28.69 114.23,21.11 111.26,17.56
             105.97,11.22 81.22,11.93 83.38,27.00
             84.76,36.65 96.17,39.32 102.98,43.96
             106.41,46.30 109.10,49.68 106.82,53.89
             103.67,59.71 94.10,58.91 90.60,53.89
             88.57,50.98 89.44,48.20 90.00,45.00
             80.17,43.34 78.45,54.26 86.02,59.16
             91.23,62.53 103.51,63.14 108.98,60.31
             114.49,57.48 117.51,50.79 114.69,45.00
             111.68,38.84 101.77,35.27 96.02,31.54
             93.15,29.68 89.71,26.94 90.84,23.04
             92.47,17.43 101.29,16.71 104.39,20.43
             106.15,22.55 105.50,24.61 105.00,27.00 Z
           M 65.00,69.00
           C 56.46,75.34 60.26,76.72 61.68,85.00
             62.45,89.52 61.03,92.20 66.00,94.00
             66.00,94.00 69.08,75.00 69.08,75.00
             69.08,75.00 65.00,69.00 65.00,69.00 Z
           M 131.00,69.00
           C 122.46,75.34 126.26,76.72 127.68,85.00
             128.45,89.52 127.03,92.20 132.00,94.00
             132.00,94.00 135.08,75.00 135.08,75.00
             135.08,75.00 131.00,69.00 131.00,69.00 Z
           M 82.00,73.00
           C 77.86,74.45 78.08,75.85 78.00,80.00
             78.00,80.00 78.00,109.00 78.00,109.00
             77.90,114.41 77.43,116.35 72.00,118.00
             72.00,118.00 72.00,121.00 72.00,121.00
             72.00,121.00 90.00,121.00 90.00,121.00
             90.00,121.00 90.00,118.00 90.00,118.00
             90.00,118.00 84.02,114.77 84.02,114.77
             84.02,114.77 83.00,108.00 83.00,108.00
             83.00,108.00 83.00,87.00 83.00,87.00
             83.00,87.00 112.00,123.00 112.00,123.00
             116.53,121.18 115.97,119.60 116.00,115.00
             116.00,115.00 116.00,79.00 116.00,79.00
             119.54,78.38 119.80,78.42 121.00,75.00
             121.00,75.00 104.00,75.00 104.00,75.00
             104.00,75.00 109.40,82.14 109.40,82.14
             109.40,82.14 110.00,89.00 110.00,89.00
             110.00,89.00 109.00,109.00 109.00,109.00
             109.00,109.00 82.00,73.00 82.00,73.00 Z
           M 105.00,147.00
           C 113.30,148.69 114.23,141.11 111.26,137.56
             105.97,131.22 81.22,131.93 83.38,147.00
             84.76,156.65 96.17,159.32 102.98,163.96
             106.41,166.30 109.10,169.68 106.82,173.89
             103.67,179.71 94.10,178.91 90.60,173.89
             88.57,170.98 89.44,168.20 90.00,165.00
             80.17,163.34 78.45,174.26 86.02,179.16
             91.23,182.53 103.51,183.14 108.98,180.31
             114.49,177.48 117.51,170.79 114.69,165.00
             111.68,158.84 101.77,155.27 96.02,151.54
             93.15,149.68 89.71,146.94 90.84,143.04
             92.47,137.43 101.29,136.71 104.39,140.43
             106.15,142.55 105.50,144.61 105.00,147.00 Z
           M 87.00,11.43
           C 110.19,8.56 134.20,13.69 153.00,27.90
             191.94,57.33 199.14,116.39 167.72,154.00
             160.23,162.96 151.34,170.24 141.00,175.68
             124.06,184.59 111.47,185.21 93.00,185.00
             63.65,184.65 33.68,163.08 21.32,137.00
             13.39,120.27 12.97,110.89 13.00,93.00
             13.01,83.40 14.76,75.97 18.05,67.00
             29.36,36.16 54.99,16.67 87.00,11.43 Z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">
                    Shirts &aposn&apos Stuff
                  </span>
                </a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              {/* Where <Link> component for wishlist and required logic was */}
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Powered by
            <a
              href="https://headlessdropshipping.com"
              title="Learn more about how this site was made"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              Headless Dropshipping Starter
            </a>
            , Built by{" "}
            <a
              href="https://twitter.com/notrab"
              title="Follow the creator on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              @notrab
            </a>
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                FAQS
              </a>
            </Link>
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
