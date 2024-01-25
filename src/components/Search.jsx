import { useContext } from "react";
import { MovieContext, MovieDispatchContext } from "../Context";

export function Search() {
  const { type, search } = useContext(MovieContext);
  const dispatch = useContext(MovieDispatchContext);

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <i 
            className="material-icons prefix"
            title="Search"
            onClick={() => {
              dispatch({
                type: "handleFind",  
                payload: search.trim(),
              });
            }}>
            search
          </i>
          <input
            id="searchMovie"
            type="search"
            className="validate"
            placeholder="Type a movie's title"
            value={search}
            onChange={(e) => 
              dispatch({
                type: 'setSearchValue',
                payload: e.target.value,
              })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch({
                  type: "handleFind",  
                  payload: search.trim(),
                });
              }
              
            }}
          />
        </div>  

        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              checked={type === 'all'}
              onChange={(e) => 
                dispatch({
                  type: "handleFilter",
                  payload: e.target.value,
                })
              }
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              checked={type === 'movie'}
              onChange={(e) => 
                dispatch({
                  type: "handleFilter",
                  payload: e.target.value,
                })}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              checked={type === 'series'}
              onChange={(e) => 
                dispatch({
                  type: "handleFilter",
                  payload: e.target.value,
                })}
            />
            <span>Series only</span>
          </label>
          </div>
      </div>
    </div>
  );
}