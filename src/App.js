import { useState,useEffect } from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import './assets/styles/main.scss';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import PopularsPage from './pages/PopularsPage';
import SingleMovie from './pages/SingleMovie';
import TvShows from './pages/tvshows';
import SearchPage from './pages/SearchPage';

import Header from './containers/Header';

function App() {
  const [searchText,setSearchText] = useState('');

  useEffect(() => {
    console.log('salom');

  }, [searchText] )
 
  return (
    <Router>

      <Header/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/populars" component={PopularsPage} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/search/:searchText" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;