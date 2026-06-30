import { Search } from "lucide-react";

function Searchbar() {
  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
      <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3">
        <Search className="text-gray-400 mr-3" size={20} />

        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

export default Searchbar;