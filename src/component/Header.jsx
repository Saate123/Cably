import { NavLink } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to set active link styles
  const getNavLinkClass = ({ isActive }) =>
    `text-gray-700 hover:text-green-800 px-2 py-1 rounded transition text-center${
      isActive ? " text-green-800 font-bold" : ""
    }`;

  return (
    <header className="bg-white shadow-md px-4 py-3 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-around">
        <h4 className="text-xl font-bold text-green-800">Roader</h4>
        {/* Mobile menu icon */}
        <button
          className="md:hidden text-2xl text-green-800"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row gap-6 items-center">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/riders" className={getNavLinkClass}>
            Riders
          </NavLink>
          <NavLink to="/drivers" className={getNavLinkClass}>
            Drivers
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/faq" className={getNavLinkClass}>
            FAQ
          </NavLink>
          <button className="bg-green-800 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-center">
            Help Center
          </button>
        </nav>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 mt-3 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              getNavLinkClass({ isActive }) + " w-full"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/riders"
            className={({ isActive }) =>
              getNavLinkClass({ isActive }) + " w-full"
            }
            onClick={() => setMenuOpen(false)}
          >
            Riders
          </NavLink>
          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              getNavLinkClass({ isActive }) + " w-full"
            }
            onClick={() => setMenuOpen(false)}
          >
            Drivers
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              getNavLinkClass({ isActive }) + " w-full"
            }
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              getNavLinkClass({ isActive }) + " w-full"
            }
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </NavLink>
          <button className="bg-green-800 text-white px-4 py-1 rounded hover:bg-blue-700 transition w-full text-center">
            Help Center
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
