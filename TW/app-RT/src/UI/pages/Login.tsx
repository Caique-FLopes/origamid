import { useLoginContext } from "../../contexts/LoginContext";
import FormLogin from "../templates/FormLogin";

const Login = () => {
  const { loading, ...controlsForm } = useLoginContext();
  return (
    <div className="h-screen flex justify-center items-center">
      {loading ? (
        <p className="text-sky-50 font-extrabold">Carregando...</p>
      ) : (
        <FormLogin controlsForm />
      )}
    </div>
  );
};

export default Login;
