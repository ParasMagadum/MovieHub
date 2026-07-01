import axios from "axios";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

console.log("ENV TEST:", import.meta.env);
console.log("TOKEN:", TOKEN);

if (!TOKEN) {
  console.error("TMDB Token is missing in .env file");
}

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
});

export default tmdb;