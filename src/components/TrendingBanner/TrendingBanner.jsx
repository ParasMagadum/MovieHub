import { FaFire } from "react-icons/fa";

function TrendingBanner() {
  return (
    <section
      className="
      relative
      rounded-3xl
      overflow-hidden
      my-24
      "
    >
      <img
        src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600"
        alt="Trending"
        className="w-full h-[350px] object-cover"
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-red-700/90
        via-black/70
        to-black/50
        "
      />

      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-between
        px-12
        flex-wrap
        gap-8
        "
      >
        <div className="max-w-xl space-y-5">

          <div className="flex items-center gap-3">

            <FaFire className="text-yellow-400 text-3xl" />

            <span className="uppercase tracking-widest text-gray-200">
              Trending This Week
            </span>

          </div>

          <h2 className="text-5xl font-black leading-tight">
            Discover the
            <br />
            Hottest Movies
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Browse the most popular blockbuster movies that
            everyone is watching this week.
          </p>

        </div>

        <button
          className="
          bg-red-600
          hover:bg-red-700
          px-10
          py-4
          rounded-lg
          text-lg
          font-semibold
          transition
          shadow-xl
          "
        >
          Explore Now
        </button>

      </div>
    </section>
  );
}

export default TrendingBanner;