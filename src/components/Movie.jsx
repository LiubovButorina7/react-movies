function Movie({ movie }) {
  const {
    imdbID: id,
    Title: title,
    Poster: poster,
    Year: year,
    Type: type,
  } = movie;

  return (
    <div className="card movie hoverable" id={id}>
      <div className="card-image">
      {poster === 'N/A' ? (
          <img
            src={`https://placehold.jp/300x400.png?text=${title}`}
            alt="Poster"
          />
        ) : (
          <img src={poster} alt="Poster" />
        )}
      </div>

      <div className="card-content">
        <span className="card-title grey-text text-darken-4">
          {title}
        </span>
        <p className="year-type">
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
        }

export { Movie };
