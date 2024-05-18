import { API_KEY, tmdbInstance } from "../api/Axios";
import "./Hero.css";
import { useState, useEffect } from "react";

function Hero() {
  const [heroMovie, setHeroMovie] = useState({});
  const [heroMovieBackdrop, setHeroMovieBackdrop] = useState("");

  useEffect(() => {
    tmdbInstance
      .get(`discover/movie?with_companies=5907&api_key=${API_KEY}`)
      .then((response) => {
        setHeroMovie(response.data.results[0]);
        tmdbInstance
          .get(`movie/${response.data.results[0].id}/images?api_key=${API_KEY}`)
          .then((resp) => {
            resp.data.backdrops.map((obj) => {
              if (obj.aspect_ratio == 1.778) {
                setHeroMovieBackdrop(obj.file_path);
              }
            });
          });
      });
  }, []);
  return (
    <div className="hero">
      <div
        className="hero_backdrop"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${heroMovieBackdrop}")`,
        }}
      ></div>
      <div className="hero_content">
        <h1>{heroMovie.title}</h1>
        <h4
          style={{
            color: "rgb(83, 103, 255)",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Newly Added
        </h4>
        <h4 className="hero_detail">
          {heroMovie.release_date} &middot; {heroMovie.original_language}{" "}
          &middot;
        </h4>
        <p className="hero_desc">{heroMovie.overview}</p>
        <div className="hero_btn">
          <button>▶ Subscribe To Watch</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
