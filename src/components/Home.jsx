import Displays from "./Displays";
import Hero from "./Hero";
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="disp">
        <Displays title="Trending" url="trending/movie/week"/>
      </div>
    </div>
  );
}

export default Home;
