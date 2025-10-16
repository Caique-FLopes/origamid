import { Link } from 'react-router-dom';
import Dogs from '../../Assets/dogs.svg?react';
import styles from './Header.module.css';
import { UserContext } from '../Contexts/UserContext';
import React from 'react';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
          </>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
