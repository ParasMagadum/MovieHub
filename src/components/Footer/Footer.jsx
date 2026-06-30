import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-red-600">
              MovieFlix
            </h2>

            <p className="text-gray-400 mt-4 max-w-sm">
              Discover trending, popular and top-rated movies from around the
              world. Your next favorite movie is just one click away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">Movies</li>
              <li className="hover:text-red-500 cursor-pointer">TV Shows</li>
              <li className="hover:text-red-500 cursor-pointer">Trending</li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Genres
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
              <li>Horror</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

                <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />

                <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

                <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />

                <FaYoutube className="cursor-pointer hover:text-red-600 transition" />

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} MovieFlix. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;