import { Movie } from './Movie';

function Movies({ moviesList }) {
  return (
    <div className="movies">
    {
      moviesList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
    }  
    </div>
  );
}

export { Movies };
