import "./Displays.css";
import { tmdbInstance, API_KEY } from "../api/Axios";
import { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";

export const MovieContext = createContext();

function Displays({ title, url, isBig }) {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    tmdbInstance.get(`${url}api_key=${API_KEY}`).then((rep) => {
      setDisplayMovie(rep.data.results);
    });
  }, []);

  return (
    <div className="displays">
      <h2 className="displays_title">{title}</h2>
      <div className="display_items">
        {displayMovie.map((obj) => {
          if (isBig === true) {
            return (
              <Link
                to={`/movie/${obj.id}`}
                id={obj.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`}
                  alt={obj.title}
                  className="display_poster_big"
                />
              </Link>
            );
          } else {
            return (
              <Link to={`/movie/${obj.id}`} id={obj.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${obj.poster_path}`}
                  alt={obj.title}
                  className="display_poster"
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Displays;
