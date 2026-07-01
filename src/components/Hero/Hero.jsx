import { FaPlay, FaInfoCircle, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="relative h-[90vh] w-full rounded-3xl overflow-hidden mb-20 mt-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      <div className="relative z-10 flex items-center h-full px-8 lg:px-20">

        <div className="max-w-2xl space-y-8">

          <span className="bg-red-600 px-4 py-2 rounded-full font-semibold text-sm">
            Netflix Original
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Avengers
            <br />
            Endgame
          </h1>

          <div className="flex items-center gap-6 text-gray-300">

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>8.4</span>
            </div>

            <span>2019</span>

            <span>3h 1m</span>

            <span className="border px-2 py-1 rounded text-sm">
              UHD
            </span>

          </div>

          <p className="text-lg text-gray-300 leading-8 max-w-xl">
            After the devastating events of Infinity War,
            the remaining Avengers unite for one final battle
            to restore the universe.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition">
              <FaPlay />
              Play
            </button>

            <button className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition">
              <FaInfoCircle />
              More Info
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;