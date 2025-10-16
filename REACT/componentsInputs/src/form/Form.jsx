import React from 'react';
import useForm from '../hooks/useFormDepreced';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'cep',
    type: 'text',
  },
  {
    id: 'logradouro',
    label: 'logradouro',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text',
  },
  {
    id: 'localidade',
    label: 'localidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'estado',
    type: 'text',
  },
];

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

export default function Form() {
  const [cores, setCores] = React.useState([]);
  const { form, loading, error, message, handleChange, handleSubmit } =
    useForm();

  function handleCores({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              name={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        );
      })}
      {coresArray?.map((cor) => {
        return (
          <div key={cor}>
            <label>
              <input
                type="checkbox"
                value={cor}
                onChange={handleCores}
                checked={handleChecked(cor)}
              />
              {cor}
            </label>
          </div>
        );
      })}

      <h2>Cores selecionadas</h2>
      <ul>
        {cores?.map((cor) => {
          return <li key={cor}>{cor}</li>;
        })}
      </ul>
      {loading && <p>Carregando...</p>}
      {error && <p>{error.message}</p>}
      {message && <p>{message.ok}</p>}
      <button>Enviar</button>
    </form>
  );
}
