import { Routes, Route } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import Login from "./UI/pages/Login";
import Perfil from "./UI/pages/Perfil";
import Produtos from "./UI/pages/Produtos";

function App() {
  return (
    <>
      <LoginProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route index path="/perfil" element={<Perfil />} />
          <Route path="/produtos" element={<Produtos />}></Route>
        </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
