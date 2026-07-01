import { useEffect, useState } from "react";

import tmdb from "../../api/tmdb";

import Loader from "../../components/Loader/Loader";

import TrendingBanner from "../../components/TrendingBanner/TrendingBanner";

import MovieSection from "../../components/MovieSection/MovieSection";

function Trending() {

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTrending = async () => {

      try {

        const res = await tmdb.get("/trending/movie/week");

        setMovies(res.data.results);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchTrending();

  }, []);

  if (loading) return <Loader />;

  return (

    <div className="py-12">

      <TrendingBanner />

      <MovieSection
        title="🔥 Trending This Week"
        movies={movies}
      />

    </div>

  );

}

export default Trending;