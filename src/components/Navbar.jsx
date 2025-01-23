import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiOutlineHeart, HiOutlineUser } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useState } from 'react';
import iconUser from '../assets/avatar.png';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navbarItems = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Sign Up', href: '/signup' },
];

const navigation = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Orders', href: '/orders' },
  { name: 'Cart Page', href: '/cart' },
  { name: 'Check out', href: '/checkout' },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logOut } = useAuth();

  const handleLogOut = () => {
    console.log('logging out');
    logOut();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 border-b border-gray-200">
      <nav className="flex justify-between items-center px-4 md:px-10">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            TheSparynxStore<sup>®</sup>
          </Link>
        </div>

        {/* middle */}
        <div className="flex-grow justify-center hidden lg:flex">
          <ul className="flex gap-8">
            {navbarItems.map((items) => (
              <li key={items.name}>
                <Link
                  to={items.href}
                  className="text-gray-800 hover:underline hover:text-gray-800 transition duration-300 ease-in-out"
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {/* search bar */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <BiSearchAlt2 className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="search a product"
              className="bg-[#EAEAEA] w-full py-1 px-6 md:px-8 rounded-md focus:outline-none"
            />
          </div>

          {/* heart icon */}
          <button className="p-1 sm:px-6 flex items-center justify-center rounded-md">
            <HiOutlineHeart className="size-6 hidden sm:block" />
          </button>

          {/* icon for account */}
          <div className="mt-1">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={iconUser}
                    alt=""
                    className={`w-8 h-8 rounded-full ${
                      currentUser ? 'ring-2 ring-red-600' : ''
                    }`}
                  />
                </button>
                {/* show the drop down */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-75 shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 text-left w-full"
                          onClick={handleLogOut}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          {/* shopping cart icon */}
          <Link to="/cart" className="p-1 sm:px-6 flex items-center justify-center rounded-md">
            <HiOutlineShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>

          {/* mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4">
            {navbarItems.map((items) => (
              <li key={items.name}>
                <Link
                  to={items.href}
                  className="text-gray-800 hover:underline hover:text-gray-800 transition duration-300 ease-in-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;