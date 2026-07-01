import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get("/movie/popular");

        setMovies(response.data?.results || []);
      } catch (err) {
        console.error("TMDB Error:", err);
        setError(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}

export default useMovies;