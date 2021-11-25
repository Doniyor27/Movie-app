import { Link } from 'react-router-dom'

import './artistcard.scss'

const ArtistCard = ({id, name, charName, imgLink}) => {
  return (
    <Link to={`actor/${id}`} className="artist-card">
      <img className="artistcard-img" src={imgLink} alt="img"/>
      <h3 className="artistcard-name">{name}</h3>
      <h4 className="artistcard-char">{charName}</h4>

    </Link>
  )
}

export default ArtistCard;