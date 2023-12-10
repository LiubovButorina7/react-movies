import { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';

import { Pagination } from '@mui/material';
import { RangeResults } from '../components/RangeResults';

const API_KEY = process.env.REACT_APP_API_KEY;

const pageSize = 10;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalResults, setTotalResults] = useState(0);

  const [search, setSearchValue] = useState('matrix');
  const [type, setType] = useState('all');
  
  const [page, setPage] = useState(1);
  const [pagesQty, setPagesQty] = useState(1);
  
  const [searchString, setSearchString] = useState(search); 
  const [range1, setRange1] = useState(0);  
  const [range2, setRange2] = useState(0);
      
  function getData() {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search.trim()}${
        type !== 'all' ? `&type=${type}` : ``
      }&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        
        setTotalResults(data.totalResults ? data.totalResults : 0);
        setPagesQty(Math.ceil(data.totalResults / pageSize));

        if (data.Search) {
          setRanges(data.Search.length);
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  const handleChange = (e, p) => {
    setPage(p);
    
  };

  const setRanges = (length) => {
    setRange1(page * 10 - 9);
    setRange2(length < pageSize ? (page * 10 - pageSize + length) : (page * 10));
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line  
  }, [type, page]);

  return (
    <main className="container content">

      <Search fetchData={getData} type={type} search={search} setSearchValue={setSearchValue} setType={setType} setPage={setPage} setSearchString={setSearchString}/>
      
      {loading ? (
        <Preloader />
      ) : 
      (
        <div>
          <RangeResults data={{totalResults, searchString, range1, range2}} />
          
          {pagesQty > 1 && 
            <Pagination className="pagination"
              count={pagesQty}
              size="large"
              page={page}
              color="primary"
              siblingCount={1}
              showFirstButton
              showLastButton
              onChange={handleChange}
            />
          }  

          {totalResults > 0 && <Movies moviesList={movies} />}
        </div>
      )
      }
    </main>
  );
}

export { Main };
