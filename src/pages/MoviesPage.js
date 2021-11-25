import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  const [actorsList, setActorsList] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
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

    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
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
    
  }, [])

  // console.log(moviesList);

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
}

export default MoviesPage;
