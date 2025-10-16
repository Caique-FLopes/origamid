import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import React from 'react';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Home{' '}
        </NavLink>
        <NavLink to="sobre">Sobre </NavLink>
        <NavLink to="login">Login </NavLink>
      </nav>
    </header>
  );
};

export default Header;
