import {useHistory} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navlink from '../../components/navlink/navlink';

import './Header.scss'

const Header = () => {

  let history = useHistory();

  const [ activePage, setActivePage ] = useState("");
  const [ searchText, setSearchText ] = useState("");

  useEffect(() => {
    if(searchText.length > 0) {
      history.push(`/search/${searchText}`);
    } else {
      history.push(`/`)
    }
  }, [searchText])



  return (
    <div className="header">
      <Link to="/" onClick={() => setActivePage('HomePage')}>
        <Navlink title="Home Page" active={activePage == 'HomePage'}/>
      </Link>
      <Link to="/populars" onClick={() => setActivePage('populars')}>
        <Navlink title="Popular Movies" active={activePage == 'populars'}/>
      </Link>
      <Link to="/movies" onClick={() => setActivePage('movies')}>
        <Navlink title="Movies" active={activePage == 'movies'}/>
      </Link>
      <Link to="/tvshows" onClick={() => setActivePage('tvshows')}>
        <Navlink title="TV shows" active={activePage == 'tvshows'}/>
      </Link>

      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText} 
      />
    </div>
  )
}

export default Header;