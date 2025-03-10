import Link from "next/link";

import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-3 md:py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-evenly">
            <div className="flex-1 flex items-center justify-left">
              <Link href="/">
                <a className="flex items-center text-gray-900"></a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              {/* Where <Link> component for wishlist and required logic was */}
              {/* <button
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
              </button> */}
            </div>
          </div>
        </div>
      </header>
      <main className="py-2 md:py-2">
        {/* THIS IS MAIN FRAME WITH PRODUCT GRID INSIDE */}
        {/* <div className="mx-auto px-6 sm:mx-auto">{children}</div> */}
        <div className="main-logo text-center justify-center px-auto">
          ZHIRTZ.STORE is under construction. Presales starting soon!
        </div>
        <iframe
          src="https://giphy.com/embed/10GVNnqO2ZoAh2"
          width="287"
          height="480"
          frameBorder="0"
          className="giphy-embed place-content-center mx-auto"
          allowFullScreen
        ></iframe>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            {/* <Link href="/about">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                FAQS
              </a>
            </Link> */}
            {/* <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link> */}
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
