import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Login from "./UI/pages/Login";
import Perfil from "./UI/pages/Perfil";
import Produtos from "./UI/pages/Produtos";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          {/* page login */}
          <Route path="/login" element={<Login />} />

          {/* page login */}
          <Route element={<ProtectedRoute />}>
            <Route index path="/perfil" element={<Perfil />} />
            <Route path="/produtos" element={<Produtos />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
