import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <section className="mb-20">

      <div className="relative max-w-3xl mx-auto">

        <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="text"
          placeholder="Search Movies..."
          className="
          w-full
          pl-16
          pr-6
          py-5
          rounded-full
          bg-[#1d1d1d]
          border
          border-gray-700
          text-lg
          outline-none
          focus:border-red-600
          transition
          "
        />

      </div>

    </section>
  );
}

export default Searchbar;