import React from "react";
import Resumo from "./pages/Resumo";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { DataContextProvider } from "./context/DataContext";
import Vendas from "./pages/Vendas";

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
