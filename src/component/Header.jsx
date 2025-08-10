import { NavLink } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Img from "../assets/transparent-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to set active link styles
  const getNavLinkClass = ({ isActive }) =>
    `text-black hover:text-white px-2 py-1 rounded transition text-center${
      isActive ? " text-white font-bold" : ""
    }`;

  return (
    <header className="bg-purple-700 shadow-md px-4 py-3 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-around">
        <NavLink to="/">
          <img src={Img} alt="" className="w-[50px]" />
        </NavLink>
        {/* Mobile menu icon */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex flex-row gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={() => {
              if (window.location.pathname === "/help") {
                window.location.href = "/";
                window.scrollTo(0, 0);
              }
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/riders"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={(e) => {
              e.preventDefault();
              // Set active class manually for scroll navigation
              document
                .querySelectorAll(".text-white.font-bold")
                .forEach((el) => {
                  el.classList.remove("text-white", "font-bold");
                });
              e.currentTarget.classList.add("text-white", "font-bold");
              const section = document.getElementById("riders");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Passengers / Drivers
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={(e) => {
              e.preventDefault();
              // Set active class manually for scroll navigation
              document
                .querySelectorAll(".text-white.font-bold")
                .forEach((el) => {
                  el.classList.remove("text-white", "font-bold");
                });
              e.currentTarget.classList.add("text-white", "font-bold");
              const section = document.getElementById("faq");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            FAQ
          </NavLink>
          <button
            className="bg-purple-900 text-white font-semibold px-4 py-1 rounded hover:bg-purple-100 hover:text-purple-800 transition text-center"
            onClick={() => {
              window.location.href = "/help";
              window.scrollTo(0, 0);
            }}
          >
            <NavLink to="/help">Help Center</NavLink>
          </button>
        </nav>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 mt-3 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={() => {
              if (window.location.pathname === "/help") {
                window.location.href = "/";
                window.scrollTo(0, 0);
              }
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/riders"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              // Set active class manually for scroll navigation
              document
                .querySelectorAll(".text-white.font-bold")
                .forEach((el) => {
                  el.classList.remove("text-white", "font-bold");
                });
              e.currentTarget.classList.add("text-white", "font-bold");
              const section = document.getElementById("riders");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Riders / Drivers
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => getNavLinkClass({ isActive })}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              // Set active class manually for scroll navigation
              document
                .querySelectorAll(".text-white.font-bold")
                .forEach((el) => {
                  el.classList.remove("text-white", "font-bold");
                });
              e.currentTarget.classList.add("text-white", "font-bold");
              const section = document.getElementById("faq");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            FAQ
          </NavLink>
          <button
            className="bg-purple-900 text-white font-semibold px-4 py-1 rounded hover:bg-purple-100 hover:text-purple-800 transition text-center"
            onClick={() => {
              window.location.href = "/help";
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}
          >
            <NavLink to="/help">Help Center</NavLink>
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
