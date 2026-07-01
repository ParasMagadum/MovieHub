import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import tmdb from "../../api/tmdb";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const searchMovies = async () => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    try {
      setLoading(true);

      const res = await tmdb.get("/search/movie", {
        params: {
          query,
        },
      });

      setMovies(res.data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12">

      <h1 className="text-5xl font-black mb-8">
        Search Movies
      </h1>

      <div className="relative max-w-3xl mb-12">

        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
          w-full
          pl-14
          pr-5
          py-4
          rounded-full
          bg-[#181818]
          border
          border-gray-700
          focus:border-red-600
          outline-none
          text-lg
          "
        />

      </div>

      {loading ? (
        <Loader />
      ) : movies.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-3xl font-bold">
            Search Your Favorite Movies
          </h2>

          <p className="text-gray-400 mt-3">
            Results will appear here.
          </p>

        </div>

      ) : (

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

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Search;