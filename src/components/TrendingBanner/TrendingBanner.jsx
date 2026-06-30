function TrendingBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div
        className="relative rounded-3xl overflow-hidden h-[420px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl px-10">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            NOW STREAMING
          </span>

          <h2 className="text-5xl font-bold mt-6 mb-4">
            Avengers:
            <br />
            Endgame
          </h2>

          <p className="text-gray-300 leading-7 mb-8">
            After the devastating events of Infinity War, the Avengers assemble
            once again to reverse Thanos' actions and restore balance to the
            universe.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold">
              ▶ Watch Now
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-semibold">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingBanner;