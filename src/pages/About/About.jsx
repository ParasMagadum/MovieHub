import {
  FaFilm,
  FaStar,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

function About() {
  const features = [
    {
      id: 1,
      icon: <FaFilm className="text-4xl text-red-600" />,
      title: "100+ Movies",
      description: "Browse a growing collection of blockbuster movies from different genres.",
    },
    {
      id: 2,
      icon: <FaStar className="text-4xl text-yellow-400" />,
      title: "Top Rated",
      description: "Discover the highest-rated and most popular movies around the world.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Movie Community",
      description: "Created for movie lovers who enjoy exploring new films every day.",
    },
    {
      id: 4,
      icon: <FaHeart className="text-4xl text-pink-500" />,
      title: "Favorites",
      description: "Save your favorite movies and build your personal watchlist.",
    },
  ];

  return (
    <div className="py-16">

      {/* Heading */}

      <div className="text-center max-w-4xl mx-auto mb-20">

        <h1 className="text-5xl md:text-6xl font-black mb-6">
          About MovieFlix
        </h1>

        <p className="text-xl text-gray-400 leading-8">
          MovieFlix is a Netflix-inspired movie recommendation website
          built with React, React Router and Tailwind CSS.
          Browse trending movies, discover new releases,
          and build your personal watchlist.
        </p>

      </div>

      {/* Feature Cards */}

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-24">

        {features.map((item) => (

          <div
            key={item.id}
            className="
            bg-[#1b1b1b]
            rounded-3xl
            p-8
            hover:bg-[#252525]
            transition-all
            duration-300
            hover:-translate-y-2
            "
          >

            <div className="mb-6">
              {item.icon}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-gray-400 leading-7">
              {item.description}
            </p>

          </div>

        ))}

      </div>

      {/* Developer */}

      <div className="bg-[#181818] rounded-3xl p-12 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Developed By
        </h2>

        <p className="text-2xl font-semibold text-red-500 mb-4">
          Paras Magadum
        </p>

        <p className="text-gray-400 max-w-3xl mx-auto leading-8 text-lg">
          Passionate Computer Science student focused on building
          modern, responsive web applications using React,
          JavaScript, Tailwind CSS and REST APIs.
          This project demonstrates routing, reusable components,
          responsive layouts and a Netflix-inspired user interface.
        </p>

      </div>

    </div>
  );
}

export default About;