import Displays from "../../components/Displays";
import "./Shows.css";

function Shows() {
  return (
    <div className="shows">
      <div className="disp">
        <Displays
          title="Trending"
          url="discover/tv?"
          isBig
        />
        <Displays
          title="Top Rated"
          url="tv/top_rated?"
        />
      </div>
    </div>
  );
}

export default Shows;
