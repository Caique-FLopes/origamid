import React from "react";
import { useUi } from "./UiContext";
import { useUserContext } from "./UserContext";

const Header = () => {
  const { user } = useUserContext();
  return (
    <header>
      <h2>{user?.nome}</h2>
    </header>
  );
};

export default Header;
