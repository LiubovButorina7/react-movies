import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY;

export function AboutMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  
  const goBack = () => navigate(-1);  
    
  useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot='full''`)
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => {
          alert(error);
        });
  }, [id]);
    
  return (
    <>
      { !Object.keys(movie).length && <Preloader /> }
      { movie.Response === "False" && navigate(`/about/${id}/not_exist`) } 
      { movie.Response === 'True' && (
        <>
          <i className="material-icons goBack" title='Back' onClick={goBack}>navigate_before</i>
          <div className="info">    
            <div>
              <img src={movie.Poster === 'N/A' ? `https://placehold.jp/300x400.png?text=${movie.Title}` : movie.Poster} alt="Poster"/>
            </div>
            <div className="about-movie">
              <div className='movieTitle'>
                <div >{movie.Title}</div>
                <div style={{fontSize:"70%"}}>({movie.Year}, {movie.Type === 'N/A' ? '-' : movie.Type})</div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="td-title">Released</td>  
                    <td>{movie.Released === 'N/A' ? '-' : movie.Released}</td> 
                  </tr> 
                  <tr>
                    <td className="td-title">Runtime</td>  
                    <td>{movie.Runtime === 'N/A' ? '-' : movie.Runtime}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Genre</td>  
                    <td>{movie.Genre === 'N/A' ? '-' : movie.Genre}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Director</td>  
                    <td>{movie.Director === 'N/A' ? '-' : movie.Director}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Writer</td>  
                    <td>{movie.Writer === 'N/A' ? '-' : movie.Writer}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Actors</td>  
                    <td>{movie.Actors === 'N/A' ? '-' : movie.Actors}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Country</td>  
                    <td>{movie.Country === 'N/A' ? '-' : movie.Country}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Awards</td>  
                    <td>{movie.Awards === 'N/A' ? '-' : movie.Awards}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">IMDb Rating</td>  
                    <td>{movie.imdbRating === 'N/A' ? '-' : `${movie.imdbRating}/10`}</td>   
                  </tr>
                  <tr>
                    <td className="td-title">Box Office</td>  
                    <td>{movie.BoxOffice === 'N/A' ? '-' : movie.BoxOffice}</td>   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="plot">{movie.Plot === 'N/A' ? '' : movie.Plot}</div>
        </>
        )
      }
    </>    
  );    
}