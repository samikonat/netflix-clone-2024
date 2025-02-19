import React, { useEffect, useState } from "react";
import axios from "../util/axios";
import requests from "../util/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  // https://api.themoviedb.org/3/discover/tv?api_key=950e969ccbc798833af2c6292a2fc253&with_networks=123
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // /discover/tv?api_key=${Api_key}&with_networks=213
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${movie?.backdrop_path}
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__button">
          <button className="banner__button play">Play</button>
          <button className="banner__button info ">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
