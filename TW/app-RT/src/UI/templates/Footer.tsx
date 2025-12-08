import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-around p-4 mt-8 border-t border-gray-600">
      <div className="w-30">
        <picture>
          <img src="/logo.png" alt="Logo" className="w-full" />
        </picture>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
