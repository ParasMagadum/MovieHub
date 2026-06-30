function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Spider-Man
          <br />
          No Way Home
        </h1>

        <p className="text-gray-300 text-lg mb-6 leading-8">
          With Spider-Man's identity now revealed, Peter asks Doctor Strange
          for help. When a spell goes wrong, dangerous enemies from other
          worlds start to appear.
        </p>

        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
            ▶ Watch Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            Trailer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;