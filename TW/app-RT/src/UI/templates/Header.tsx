import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthContext";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="flex border border-gray-600 justify-between align-center mx-9 py-2 px-8 rounded-4xl">
      <div className="w-18">
        <img src="/logo.png" alt="Logo" className="w-full" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/perfil"}>Perfil</NavLink>
          </li>
          <li>
            <NavLink to={"/produtos"}>Produtos</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {user && (
          <h2 className="text-2xl text-sky-50 font-medium">
            {user?.name.firstname}
          </h2>
        )}
      </div>
    </header>
  );
};

export default Header;
