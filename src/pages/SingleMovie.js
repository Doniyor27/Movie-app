import { useEffect, useState } from 'react';
import axios from 'axios';

import ArtistCard from '../components/artistcard/artistcard'

import './pages.scss'

const SingleMovie = ({ match }) => {

  const [movieInfo, setMovieInfo] = useState({
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
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieInfo({
        isFetched: true,
        data: response.data,
        error: false,
      })
    })
    .catch(function (error) {
      setMovieInfo({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    });

    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setActorsList({
        isFetched: true,
        data: response.data,
        error: false,
      })
    })
    .catch(function (error) {
      setActorsList({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    });
  }, [])

  // console.log(actorsList.data);
  

  return (
    <>
    {
      movieInfo.isFetched ? (
        <div className="movie-Info">
          <img className="movie-info-back" src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.backdrop_path}`} alt=""/>
          <div className="movie-info-front">
            <div className="img-wrapper">
              <img className="single-img" src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.poster_path}`} alt=""/>
            </div>
            <div className="info-wrapper">
              <h1>{movieInfo.data.title}</h1>
              <h2>{movieInfo.data.original_title}</h2>
              <h3>{movieInfo.data.tagline}</h3>
              <p>{movieInfo.data.overwiew}</p>
              <h4>Budget: ${movieInfo.data.budget}</h4>
              <h4>Relaese date: <span>{movieInfo.data.relaese_date}</span></h4>
              <h4>Runtime: {movieInfo.data.runtime}</h4>

              <a className="single-btn" href={movieInfo.data.homepage} target="_blank"> Official site</a>

              {
                movieInfo.data.genres.map((genre,index) => (
                  <button className="film-genre" key={index}>{genre.name}</button>
                ))
              }

              <h2>Actors</h2>

              {
                actorsList.isFetched ? (
                  <div className="actors-list">
                    {
                      actorsList.data.cast.map((actor,index) => (
                        <ArtistCard
                          id={actor.id}
                          key={index}
                          name={actor.name}
                          charName={actor.character}
                          imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        />
                      ))
                    }
                  </div>
                ) : (
                   <h2>Loading...</h2>
                )
              }
            </div>
          </div>
          
        </div>
      ) : (
        <h1>Loading...</h1>
      )
    }
    </>
    
  )
}

export default SingleMovie;
