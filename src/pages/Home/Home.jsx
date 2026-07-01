import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";
import MovieSection from "../../components/MovieSection/MovieSection";
import TrendingBanner from "../../components/TrendingBanner/TrendingBanner";
import Loader from "../../components/Loader/Loader";

import useMovies from "../../hooks/useMovies";

export default function Home() {
  const { movies, loading } = useMovies();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-20">
      <Hero />

      <Searchbar />

      <CategoryTabs />

      <MovieSection
        title="🔥 Popular Movies"
        movies={movies?.slice(0, 10) || []}
      />

      <TrendingBanner />

      <MovieSection
        title="⭐ Recommended For You"
        movies={movies?.slice(10, 20) || []}
      />

      <MovieSection
        title="🎬 Latest Releases"
        movies={movies?.slice(20, 30) || []}
      />
    </div>
  );
}