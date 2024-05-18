import "./App.css";
import Menubar from "./components/Menubar";
import Home from "./components/Home";
import Movie from "./pages/movie/Movie";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Shows from "./pages/shows/Shows";

function App() {
  return (
    <Router>
      <div className="app">
        <Menubar />
        <Routes>
          <Route path="/home" element={<DefaultHome />} />
          <Route path="/" element={<DefaultHome />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/shows" element={<Shows />}/>
        </Routes>
      </div>
    </Router>
  );
}
function DefaultHome() {
  return (
    <div className="app_main">
      <Home />
    </div>
  );
}
function MoviePage() {
  // Fetch the id from the URL params
  const {id } = useParams();
  return (
    <Movie
      id={id}
    />
  );
}
export default App;
