import { useState, useEffect } from "react";
import { tmdbInstance, API_KEY } from "../../api/Axios";
import './Movie.css'

function Movie({ id }) {
  const [mainMovie, setMainMovie] = useState();

  useEffect(() => {
    tmdbInstance.get(`movie/${id}?api_key=${API_KEY}`).then((resp) => {
      setMainMovie(resp.data);
      console.log(resp.data);
    });
  }, []);

  return (
    <div className="movie">
      <div
        className="movie_backdrop"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${mainMovie?.backdrop_path}")`,
        }}
      ></div>
      <div className="movie_content">
        <h1>{mainMovie?.title}</h1>
        <h4 className="movie_detail">
          {mainMovie?.release_date} &middot; {mainMovie?.original_language}{" "}
          &middot;
        </h4>
        <span>
          <h4>|</h4>
          {mainMovie?.genres.map((genre, index) => {
            return <h4>&nbsp;{genre.name} |</h4>;
          })}
        </span>
        <p className="hero_desc">{mainMovie?.overview}</p>
        <div className="movie_btn">
          <button style={{ backgroundColor: "white", color: "black" }}>
            ▶ Subscribe To Watch
          </button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
