import { Link, NavLink } from "react-router-dom";
import { FaFilm, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold"
      : "hover:text-red-500 transition";

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-black text-red-600"
        >
          <FaFilm />
          MovieFlix
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10 text-lg">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navClass}>
            Movies
          </NavLink>

          <NavLink to="/categories" className={navClass}>
            Categories
          </NavLink>

          <NavLink to="/trending" className={navClass}>
            Trending
          </NavLink>

          <NavLink to="/favorites" className={navClass}>
            Favorites
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-6">

          <Link
            to="/search"
            className="hover:text-red-500 transition"
          >
            <FaSearch size={22} />
          </Link>

          <Link
            to="/favorites"
            className="hover:text-red-500 transition"
          >
            <FaHeart size={22} />
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#111] px-6 pb-6">

          <nav className="flex flex-col gap-5 text-lg">

            <NavLink to="/" onClick={() => setOpen(false)} className={navClass}>
              Home
            </NavLink>

            <NavLink to="/movies" onClick={() => setOpen(false)} className={navClass}>
              Movies
            </NavLink>

            <NavLink to="/categories" onClick={() => setOpen(false)} className={navClass}>
              Categories
            </NavLink>

            <NavLink to="/trending" onClick={() => setOpen(false)} className={navClass}>
              Trending
            </NavLink>

            <NavLink to="/favorites" onClick={() => setOpen(false)} className={navClass}>
              Favorites
            </NavLink>

            <NavLink to="/search" onClick={() => setOpen(false)} className={navClass}>
              Search
            </NavLink>

            <NavLink to="/about" onClick={() => setOpen(false)} className={navClass}>
              About
            </NavLink>

          </nav>

        </div>

      )}

    </header>
  );
}

export default Navbar;