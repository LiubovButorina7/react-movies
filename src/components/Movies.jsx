import { Movie } from './Movie';
import { useContext } from "react";
import { MovieContext } from "../Context";

function Movies() {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movies">
    {
      movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
    }  
    </div>
  );
}

export { Movies };
