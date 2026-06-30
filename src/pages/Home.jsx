import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Searchbar from "../components/Searchbar/Searchbar.jsx";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs.jsx";
import MovieSection from "../components/MovieSection/MovieSection.jsx";
import TrendingBanner from "../components/TrendingBanner/TrendingBanner.jsx";
import Footer from "../components/Footer/Footer.jsx";

import movies from "../data/Movies.js";

function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Search */}
      <Searchbar />

      {/* Categories */}
      <CategoryTabs />

      {/* Trending Movies */}
      <MovieSection
        title="🔥 Trending Movies"
        movies={movies.slice(0, 5)}
      />

      {/* Popular Movies */}
      <MovieSection
        title="🎬 Popular Movies"
        movies={movies.slice(5, 10)}
      />

      {/* Top Rated */}
      <MovieSection
        title="⭐ Top Rated Movies"
        movies={movies.slice(10, 15)}
      />

      {/* Banner */}
      <TrendingBanner />

      {/* New Releases */}
      <MovieSection
        title="🆕 New Releases"
        movies={movies.slice(15, 20)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;