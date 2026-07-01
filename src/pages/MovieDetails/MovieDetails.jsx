import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import tmdb from "../../api/tmdb";
import Loader from "../../components/Loader/Loader";
import MovieSection from "../../components/MovieSection/MovieSection";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieRes = await tmdb.get(`/movie/${id}`);
        const similarRes = await tmdb.get(`/movie/${id}/similar`);

        setMovie(movieRes.data);
        setSimilarMovies(similarRes.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;

  if (!movie) {
    return (
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pb-20">

      {/* Banner */}

      <div className="relative h-[80vh] rounded-3xl overflow-hidden">

        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-3xl ml-16">

            <Link
              to="/movies"
              className="flex items-center gap-2 mb-8 text-gray-300 hover:text-white"
            >
              <FaArrowLeft />
              Back
            </Link>

            <h1 className="text-6xl font-black mb-6">
              {movie.title}
            </h1>

            <div className="flex gap-8 mb-6 text-lg">

              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </span>

              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                {movie.release_date}
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                {movie.runtime} min
              </span>

            </div>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              {movie.overview}
            </p>

            <div className="flex gap-3 flex-wrap">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-red-600 px-5 py-2 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Similar Movies */}

      <div className="mt-20">

        <MovieSection
          title="Similar Movies"
          movies={similarMovies}
        />

      </div>

    </div>
  );
}

export default MovieDetails;