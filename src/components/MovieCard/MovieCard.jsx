import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setIsFavorite(
      favorites.some((item) => item.id === movie.id)
    );
  }, [movie.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter(
        (item) => item.id !== movie.id
      );
    } else {
      favorites.push(movie);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/movie/${movie.id}`}>

      <div
        className="
        bg-[#181818]
        rounded-2xl
        overflow-hidden
        transition
        duration-300
        hover:scale-105
        hover:shadow-2xl
        group
        "
      >
        {/* Poster */}

        <div className="relative">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="
            w-full
            h-[360px]
            object-cover
            "
          />

          <button
            onClick={toggleFavorite}
            className="
            absolute
            top-4
            right-4
            bg-black/60
            p-3
            rounded-full
            hover:bg-red-600
            transition
            "
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-white text-xl" />
            )}
          </button>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* Details */}

        <div className="p-5">

          <h3 className="text-xl font-bold truncate">
            {movie.title}
          </h3>

          <div className="flex justify-between mt-4">

            <span className="text-gray-400">
              {movie.release_date?.slice(0, 4)}
            </span>

            <span className="flex items-center gap-2 text-yellow-400">
              <FaStar />
              {movie.vote_average.toFixed(1)}
            </span>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default MovieCard;