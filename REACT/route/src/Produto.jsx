import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.params);
  console.log(search.get('q'));
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliacao</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
