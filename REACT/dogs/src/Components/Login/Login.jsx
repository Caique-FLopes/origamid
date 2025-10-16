import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginReset from './LoginReset';
import React from 'react';
import { UserContext } from '../Contexts/UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
