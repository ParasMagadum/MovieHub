const categories = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Romance",
  "Horror",
  "Animation",
];

function CategoryTabs() {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-10">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-800 hover:bg-red-600 transition duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;