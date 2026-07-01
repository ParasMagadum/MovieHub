import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout"; // match actual case exactly

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Categories from "../pages/Categories/Categories";
import Trending from "../pages/Trending/Trending";
import Favorites from "../pages/Favorites/Favorites";
import Search from "../pages/Search/Search";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movie/:id" element={<MovieDetails />} />

        <Route path="categories" element={<Categories />} />

        <Route path="trending" element={<Trending />} />

        <Route path="favorites" element={<Favorites />} />

        <Route path="search" element={<Search />} />

        <Route path="about" element={<About />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;