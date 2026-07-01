import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedMovies =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedMovies);
  }, []);

  return (
    <div className="py-12">

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          My Favorites
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Your saved movies.
        </p>

      </div>

      {favorites.length === 0 ? (

        <div className="bg-[#181818] rounded-3xl py-28 text-center">

          <h2 className="text-3xl font-bold mb-5">
            No Favorites Yet ❤️
          </h2>

          <p className="text-gray-400">
            Click the heart icon on any movie to save it.
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

          {favorites.map((movie) => (

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

export default Favorites;