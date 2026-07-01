function CastCard({ actor }) {
  return (
    <div className="bg-[#1b1b1b] rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">

      <img
        src={actor.image}
        alt={actor.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold text-white">
          {actor.name}
        </h3>

        <p className="text-gray-400 mt-1">
          {actor.role}
        </p>

      </div>

    </div>
  );
}

export default CastCard;