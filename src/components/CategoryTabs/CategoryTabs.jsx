import { useState } from "react";

const categories = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Animation",
  "Crime",
  "Romance",
  "Horror",
];

function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <section className="mb-20">

      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActive(category)}
            className={`whitespace-nowrap px-7 py-3 rounded-full font-semibold transition-all duration-300
            ${
              active === category
                ? "bg-red-600 text-white scale-105"
                : "bg-[#1d1d1d] text-gray-300 hover:bg-[#2b2b2b]"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}

export default CategoryTabs;