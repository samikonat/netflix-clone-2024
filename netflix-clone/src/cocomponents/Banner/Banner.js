import { useEffect, useState } from "react";
import axiosInstance from "../util/axios";
import requests from "../util/requests";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axiosInstance.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
        console.log("Fetched Movies:", request.data.results);
        console.log("Selected Movie:", randomMovie);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
