import React from "react";
import { jwtDecode } from "jwt-decode";
import { useLoginContext } from "../../contexts/LoginContext";

const Perfil = () => {
  const { token, loading, setLoading } = useLoginContext();
  if (!token) return null;

  const userToken = jwtDecode(token);

  React.useEffect(() => {
    async function teste() {
      try {
        setLoading(true);
        console.log(userToken);
        const res = await fetch(
          `https://fakestoreapi.com/users/${userToken.sub}`
        );
        const json = await res.json();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    teste();
  }, []);

  return <div>Perfil</div>;
};

export default Perfil;
