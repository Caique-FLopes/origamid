import React from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../hooks/useAuthContext.ts";

const Perfil = () => {
  const { validateToken, setLoading, setUser, user } = useAuth();

  const token = validateToken();
  if (!token) return null;

  const userToken = jwtDecode(token);

  React.useEffect(() => {
    async function teste() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://fakestoreapi.com/users/${userToken.sub}`
        );
        const json = await res.json();
        setUser(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    teste();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Olá, {user?.name.firstname}</h1>
    </div>
  );
};

export default Perfil;
