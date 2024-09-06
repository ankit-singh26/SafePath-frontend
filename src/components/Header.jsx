import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked!");
    console.log("isMenuOpen:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen after toggle:", isMenuOpen);
  };
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-center">
        <div className="flex justify-between items-center w-full max-w-screen-lg">
          <a href="#" className="text-lg md:text-xl font-bold">
            SafePath
          </a>
          <button
            className="lg:hidden flex justify-center w-8 h-8 bg-gray-900 rounded-full cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`lg:flex hidden ${isMenuOpen ? "block" : "hidden"
              } flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 md:space-x-10`}
          >
            <li>
              <Link to={"/"} className="text-sm md:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/emergency-guide"} className="text-sm md:text-base">
                Emergency Guides
              </Link>
            </li>
            <li>
              <Link to={"/about-us"} className="text-sm md:text-base">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/distress-form"} className="text-sm md:text-base">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;