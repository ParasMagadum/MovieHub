import { Search, Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-red-600 cursor-pointer">
            MovieHub
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="hover:text-red-500 transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            Movies
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            TV Shows
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            Trending
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            My List
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Search
            className="cursor-pointer hover:text-red-500 transition"
            size={22}
          />

          <Bell
            className="cursor-pointer hover:text-red-500 transition"
            size={22}
          />

          <UserCircle
            className="cursor-pointer hover:text-red-500 transition"
            size={30}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;