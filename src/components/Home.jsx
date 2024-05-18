import Displays from "./Displays";
import Hero from "./Hero";
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="disp">
        <Displays title="Trending" url="trending/movie/week?" isBig/>
        <Displays title="YRF" url="discover/movie?with_companies=1569&"/>
        <Displays
          title="AGS Entertainment"
          url="discover/movie?with_companies=5907&"
        />
        <Displays
          title="Sree Gokulam Movies"
          url="discover/movie?with_companies=77110&"
        />
        <Displays title="Hotstar" url="discover/movie?with_companies=136786&" />
        <Displays title="Marvel" url="discover/movie?with_companies=7505&" />
        <Displays
          title="Hombale Movies"
          url="discover/movie?with_companies=111627&"
        />
        <Displays title="Top Rated" url="movie/top_rated?" isBig />
        <Displays title="Upcoming" url="movie/upcoming?"/>
        <Displays title="Pixar" url="discover/movie?with_companies=3&" isBig/>
      </div>
    </div>
  );
}

export default Home;
