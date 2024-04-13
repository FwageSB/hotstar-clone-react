import Displays from "./Displays";
import Hero from "./Hero";
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="disp">
        <Displays title="Trending" url="trending/movie/week?" />
        <Displays
          title="Sree Gokulam Movies"
          url="discover/movie?with_companies=77110&"
          isBig
        />
        <Displays title="Hotstar" url="discover/movie?with_companies=136786&" />
        <Displays title="Marvel" url="discover/movie?with_companies=7505&" />
        <Displays
          title="Hombale Movies"
          url="discover/movie?with_companies=111627&"
        />

        <Displays title="Top Rated" url="movie/top_rated?" isBig />
        <Displays title="Upcoming" url="movie/upcoming?" isBig />
        <Displays title="Pixar" url="discover/movie?with_companies=3&" />
        <Displays title="AGS Entertainment" url="discover/movie?with_companies=5907&" />      </div>
    </div>
  );
}

export default Home;
