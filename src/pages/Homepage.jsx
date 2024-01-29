import { useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieContext, MovieDispatchContext } from "../Context";
import { MovieReducer } from "../MovieReducer";

import { Search } from '../components/Search';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { RangeResults } from '../components/RangeResults';
import { PaginationComp } from '../components/PaginationComp';

const API_KEY = process.env.REACT_APP_API_KEY;

const pageSize = 10;

export function Homepage() {

  const [searchParams, setSearchParams] = useSearchParams();

  const initialMovieState = {  
    movies: [],
    loading: true,
    totalResults: 0,
    pagesQty: 1,
    range1: 0,
    range2: 0,
    search: searchParams.has('search') ? searchParams.get('search') : 'space odyssey',
    searchString: searchParams.has('search') ? searchParams.get('search') : 'space odyssey',
    type: searchParams.has('type') ? searchParams.get('type') : 'all',
    page: parseInt(searchParams.has('page') ? searchParams.get('page') : 1),
  };

  const [movieState, dispatch] = useReducer(MovieReducer, initialMovieState);

  const setURLSearchParamsFromFilters = () => {
    const params = {};
    params.search = movieState.searchString.trim();
    params.type = movieState.type;
    params.page = movieState.page;
    setSearchParams(params);
  }

  const setFiltersFromSearchParams = () => {
    dispatch({
      type: 'setSearchValue',
      payload: searchParams.has('search') ? searchParams.get('search').trim() : 'space odyssey'
    });
    dispatch({
      type: 'handleFind',
      payload: searchParams.has('search') ? searchParams.get('search').trim() : 'space odyssey',
    });
    dispatch({
      type: 'handleFilter',
      payload: searchParams.has('type') ? searchParams.get('type') : 'all'
    });
    dispatch({
      type: 'setPage',
      payload: parseInt(searchParams.has('page') ? searchParams.get('page') : 1)
    });
  }

  const getData = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieState.search.trim()}${
        movieState.type !== 'all' ? `&type=${movieState.type}` : ``
      }&page=${movieState.page}`
    )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "setMovies",
        payload: data.Search || [],
      });
      dispatch({
        type: "setTotalResults",
        payload: data.totalResults,
      })
      dispatch({
        type: "setPagesQty",
        payload: {totalResults: data.totalResults, pageSize}
      })

      if (data.Search) {
        dispatch({
          type: "setRanges",
          payload: {length: data.Search.length, page: movieState.page, pageSize}
        })
      } 
    })
    .catch((error) => {
      alert(error);
    });
  }
  
  useEffect(() => {
    setURLSearchParamsFromFilters();
    getData();
  // eslint-disable-next-line  
  }, [movieState.searchString, movieState.type, movieState.page]);

  useEffect(() => {
    setFiltersFromSearchParams();
    getData();
  // eslint-disable-next-line    
  }, [searchParams]);

  return (
    <MovieContext.Provider value={movieState}>
      <MovieDispatchContext.Provider value={dispatch}>
          <Search />
          {movieState.loading ? (
            <Preloader />
          ) : 
          (
            <div>
              <RangeResults />
              {movieState.pagesQty >= 1 && 
                <PaginationComp />
              }  
              <Movies />
              {movieState.pagesQty >= 1 && 
                <PaginationComp />
              } 
            </div>
          )
          }
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
}