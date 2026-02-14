import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl text-teal-600 font-bold text-primary-700">
            Pharmachy
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <li>
              <Link to="/" className="hover:text-primary-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-700 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-700 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-800 hover:text-primary-700 font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 font-medium text-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)} className="block">
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Contact
            </Link>

            <hr />

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block "
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block bg-primary-700 bg-teal-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
