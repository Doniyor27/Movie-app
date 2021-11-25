import './navlink.scss';

const Navlink = ({title,active}) => {

  return (
    <button className={`nav-link ${active ? 'active' : ''}`}>
      <span>{title}</span>
    </button>
  )
}

export default Navlink;