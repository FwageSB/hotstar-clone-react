import "./Displays.css";
import { tmdbInstance, API_KEY } from "../api/Axios";
import { useEffect, useState } from "react";

function Displays({ title, url }) {
  const [displayMovie, setDisplayMovie] = useState([]);
  useEffect(() => {
    tmdbInstance.get(`${url}?api_key=${API_KEY}`).then((rep) => {
      setDisplayMovie(rep.data.results);
      console.log(rep.data.results);
    });
  }, []);
  return (
    <div className="displays">
      <h2 className="displays_title">{title}</h2>
      {displayMovie.map((obj, key) => {
        return (
          <div className="display_items">
            <img
              src={`https://image.tmdb.org/t/p/original${obj.poster_path}`}
              alt={obj.title}
              className="display_poster"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Displays;
