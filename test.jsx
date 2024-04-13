<div className="movie_content">
  <h1>{movie.title}</h1>
  <h4
    style={{
      color: "rgb(83, 103, 255)",
      fontSize: "20px",
      marginBottom: "10px",
    }}
  >
    Newly Added
  </h4>
  
  <p className="movie_desc">{movie.overview}</p>
  <div className="movie_btn">
    <button>▶ Subscribe To Watch</button>
    <button>+</button>
  </div>
</div>;
