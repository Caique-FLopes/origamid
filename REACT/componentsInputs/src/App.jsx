import Input from './form/input.jsx';
import useForm from './hooks/useForm.js';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && nome.validate() && email.validate())
      console.log('enviar');
    else console.log('erro');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="email@domain.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
