import { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');

  function fetchData(search, type = 'all') {
    if (!search) {
      search = undefined;
    }
    setLoading(true);
    setResponse('False');

    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type !== 'all' ? `&type=${type}` : ``
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        setResponse(data.Response);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container content">
      <Search fetchData={fetchData} />
      {loading ? (
        <Preloader />
      ) : (
        <Movies moviesList={movies} response={response} />
      )}
    </main>
  );
}

export { Main };
