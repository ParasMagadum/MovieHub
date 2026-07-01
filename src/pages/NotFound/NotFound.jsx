import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">

      <div className="text-center max-w-2xl">

        <FaExclamationTriangle
          className="text-red-600 text-8xl mx-auto mb-8"
        />

        <h1 className="text-8xl font-black mb-4">
          404
        </h1>

        <h2 className="text-4xl font-bold mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="
          inline-flex
          items-center
          gap-3
          bg-red-600
          hover:bg-red-700
          px-8
          py-4
          rounded-xl
          text-lg
          font-semibold
          transition
          "
        >
          <FaHome />
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;