import resumo from "../assets/icons/resumo.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import { FintechSVG } from "../assets/icons/FintechSVG";
import { NavLink } from "react-router";

const SideNav = () => {
  return (
    <aside>
      <nav className="sidenav box bg-3">
        <FintechSVG title="Fintech" />
        <ul>
          <li>
            <span>
              <img src={resumo} />
            </span>
            <NavLink to="/">Resumo</NavLink>
          </li>
          <li>
            <span>
              <img src={vendas} />
            </span>
            <NavLink to="/vendas">Vendas</NavLink>
          </li>
          <li>
            <span>
              <img src={webhooks} />
            </span>
            <a>Webhooks</a>
          </li>
          <li>
            <span>
              <img src={configuracoes} />
            </span>
            <a>Configuracoes</a>
          </li>
          <li>
            <span>
              <img src={contato} />
            </span>
            <a>Contato</a>
          </li>
          <li>
            <span>
              <img src={sair} />
            </span>
            <a>Sair</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
