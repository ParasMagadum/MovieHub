import { Star } from "lucide-react";

function MovieCard({ movie }) {
  return (
    <div className="group bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-red-500/20 transition duration-300 cursor-pointer">
      
      {/* Movie Poster */}
      <div className="overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Movie Details */}
      <div className="p-4">

        <h2 className="text-lg font-bold truncate">
          {movie.title}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {movie.genre}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-gray-400 text-sm">
            {movie.year}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {movie.rating}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MovieCard;