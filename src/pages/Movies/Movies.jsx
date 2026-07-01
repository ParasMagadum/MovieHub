import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import useMovies from "../../hooks/useMovies";

function Movies() {

  const { movies, loading } = useMovies();

  const [visibleMovies, setVisibleMovies] = useState(20);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-12">

      {/* Heading */}

      <div className="mb-12">

        <h1 className="text-5xl font-black mb-4">
          Browse Movies
        </h1>

        <p className="text-gray-400 text-lg">
          Explore popular movies from TMDB.
        </p>

      </div>

      {/* Movies Grid */}

      <div
        className="
        grid
        gap-8
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        "
      >
        {movies.slice(0, visibleMovies).map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}
      </div>

      {/* Load More */}

      {visibleMovies < movies.length && (

        <div className="flex justify-center mt-16">

          <button
            onClick={() =>
              setVisibleMovies((prev) => prev + 10)
            }
            className="
            bg-red-600
            hover:bg-red-700
            transition
            px-8
            py-4
            rounded-xl
            text-lg
            font-semibold
            "
          >
            Load More
          </button>

        </div>

      )}

    </div>
  );
}

export default Movies;