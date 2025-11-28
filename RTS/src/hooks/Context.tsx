import React from "react";
import UiContextProvider from "./UiContext";
import Header from "./Header";
import UserContextProvier from "./UserContext";
import Content from "./Content";

const Context = () => {
  return (
    <UserContextProvier>
      <Header />
      <Content />
    </UserContextProvier>
  );
};

export default Context;
