import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons
import logo3 from "/sparkupsummit/images/logo/SPARK COLOUR WHITE.png"; // Ensure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full py-2 md:py-2 flex justify-center items-center z-30 fixed top-0 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full max-w-7xl px-4">
        {/* Left Polygonal Section */}
        <div className="hidden md:block relative w-1/3">
          <div
            className="z-10"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
              backgroundColor: "#db0c26",
              border: "2px solid #d9d9d9",
            }}
          >
            <div className="flex justify-around items-center px-4 py-2">
              {["Home", "About", "Events"].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white text-sm lg:text-lg  hover:text-yellow-300 transition-all cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center w-1/3">
          <a href="/" className="text-3xl font-bold">
            <img
              src={logo3}
              alt="Logo"
              className="h-14 w-auto md:h-14" // Reduced height for mobile, larger for md+
            />
          </a>
        </div>

        {/* Right Polygonal Section */}
        <div className="hidden md:block relative w-1/3">
          <div
            className="z-10"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
              backgroundColor: "#db0c26",
              border: "2px solid #d9d9d9",
            }}
          >
            <div className="flex justify-around items-center px-4 py-2">
              {["Glimpse", "Team", "Contact"].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white text-sm lg:text-lg  hover:text-yellow-300 transition-all cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl z-50 relative"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              backgroundImage: "url('/sparkupsummit/images/mask2.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute top-0 left-0 h-screen w-full z-40 md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-6">
              {["Home", "About", "Events", "Glimpse", "Team", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-white text-lg  hover:text-yellow-300 transition-all cursor-pointer"
                      onClick={toggleMenu} // Close the menu after clicking
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
