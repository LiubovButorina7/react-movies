function Movie({ movie }) {
  const {
    imdbID: id,
    Title: title,
    Poster: poster,
    Year: year,
    Type: type,
  } = movie;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://placehold.jp/300x400.png?text=${title}`}
            alt="Poster"
          />
        ) : (
          <img className="activator" src={poster} alt="Poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
