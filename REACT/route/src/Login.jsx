import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Login = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate('/sobre');
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
