function MovieSection({ title, movies }) {
  return (
    <section className="my-20">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-4xl font-black">
          {title}
        </h2>

      </div>

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

    </section>
  );
}

import MovieCard from "../MovieCard/MovieCard";

export default MovieSection;