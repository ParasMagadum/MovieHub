import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-red-600">
              MovieFlix
            </h2>

            <p className="text-gray-400 mt-2">
              Discover your next favorite movie.
            </p>

          </div>

          <div className="flex gap-5 text-2xl">

            <FaGithub className="hover:text-red-500 cursor-pointer" />

            <FaLinkedin className="hover:text-red-500 cursor-pointer" />

            <FaInstagram className="hover:text-red-500 cursor-pointer" />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;