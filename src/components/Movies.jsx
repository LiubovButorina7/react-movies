import { Movie } from './Movie';

function Movies({ moviesList, response }) {
  return (
    <div className="movies">
      {response === 'True' ? (
        moviesList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
