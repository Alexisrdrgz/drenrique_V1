import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
       Dr Enrique Bermudez
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to='/form'>Registrar paciente</Link></li>
        <li className="p__opensans"><Link to='/buscar'>Buscar paciente</Link></li>

      </ul>
      <div className="app__navbar-login">
      <Link to='/login' className="p__opensans">Salir</Link>
      </div>
    </nav>
  );
};

export default Navbar;