import MovieCard from "../MovieCard/MovieCard";

function MovieSection({ title, movies }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <button className="text-red-500 hover:text-red-400">
          View All →
        </button>

      </div>

      {/* Movie Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
}

export default MovieSection;