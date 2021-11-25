import {useEffect,useState} from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard/MovieCard';

import './SearchPage.scss';

const SearchPage = ({match}) => {

  const [moviesList, setMoviesList] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/search/movie?query=${match.params.searchText}`, {
      params: {
        api_key: '6da54b7b2737d3c9f02b7141e0251998'
      }
    })
    .then(function (response) {
      setMoviesList({
        isFetched: true,
        data: response.data.results,
        error: false,
      })
    })
    .catch(function (error) {
      setMoviesList({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    });

  }, [match.params.searchText])
  return (
    <div>
      {
        moviesList.isFetched ? (
          <div className="movies-holder">
            {
              moviesList.data.map((item, index) => (
                <MovieCard
                  id={item.id}
                  imgLink={item.poster_path}
                  title={item.title}
                  key={index}
                  rating={item.vote_average}
                  releaseDate={item.release_date}
                />
              ))
            }
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>
  )
};


export default SearchPage;