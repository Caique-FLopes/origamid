import { useAuth } from "../hooks/useAuthContext.ts";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../UI/templates/Header";
import Footer from "../UI/templates/Footer";

const ProtectedRoute = () => {
  const { validateToken } = useAuth();

  return !validateToken() ? (
    <Navigate to="/login" replace />
  ) : (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProtectedRoute;
