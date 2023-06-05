import style from'./Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => { 
  const logoHenry = require("../../assets/img/logoamarillo.png")
  return (
    <div className={style.nav}>
      <NavLink to='/' className={style.btn}>
        <button onClick={logout}>Inicio</button>
      </NavLink>
    
      <SearchBar onSearch={onSearch}/>
        <div className={style.logo}>
      
          <NavLink to='https://www.soyhenry.com/' target="_blank" >
            <img src={logoHenry} alt='Logo de henry'/>
          </NavLink>
        </div>
      <nav>
        <ul className={style.navlinks}>
          <li>
          </li>
          <li>
            <NavLink className='Link' to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink className='Link' to='pokemons'>Pokemons</NavLink>
          </li>
          <li>
          <NavLink className='Link' to='/pokebola'>Pokeboola</NavLink>
          </li>
        </ul>
      </nav>
     
      <NavLink to='/about'className={style.btn}>
        <button>About me</button>
      </NavLink> 
      
    </div>
  )
}

export default Nav;