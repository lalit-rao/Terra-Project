import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white borderQ-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            TERRA
          </span>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive ? "text-green-700" : "text-gray-900"
                  } hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0`
                }
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive ? "text-green-700" : "text-gray-900"
                  } hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/EcoScore"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive ? "text-green-700" : "text-gray-900"
                  } hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0`
                }
              >
                ECOSCORE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Marketplace"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive ? "text-green-700" : "text-gray-900"
                  } hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0`
                }
              >
                MARKETPLACE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/EcoRoutes"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${
                    isActive ? "text-green-700" : "text-gray-900"
                  } hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0`
                }
              >
                ECOROUTES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
