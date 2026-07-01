import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

function Categories() {

  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(null);

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    tmdb.get("/genre/movie/list").then((res) => {

      setGenres(res.data.genres);

      setSelected(res.data.genres[0].id);

    });

  }, []);

  useEffect(() => {

    if (!selected) return;

    setLoading(true);

    tmdb
      .get(`/discover/movie?with_genres=${selected}`)
      .then((res) => {

        setMovies(res.data.results);

      })
      .finally(() => {

        setLoading(false);

      });

  }, [selected]);

  return (

    <div className="py-12">

      <h1 className="text-5xl font-black mb-10">
        Categories
      </h1>

      <div className="flex flex-wrap gap-4 mb-12">

        {genres.map((genre) => (

          <button
            key={genre.id}
            onClick={() => setSelected(genre.id)}
            className={`px-6 py-3 rounded-full transition ${
              selected === genre.id
                ? "bg-red-600"
                : "bg-[#1b1b1b]"
            }`}
          >
            {genre.name}
          </button>

        ))}

      </div>

      {loading ? (
        <Loader />
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

export default Categories;