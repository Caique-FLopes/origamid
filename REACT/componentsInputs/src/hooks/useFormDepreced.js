import { useState } from 'react';

export default function useForm() {
  const formInitial = {
    nome: '',
    email: '',
    senha: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    localidade: '',
    estado: '',
  };

  const [form, setForm] = useState(formInitial);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    inserirPessoa();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    if (id === 'cep' && value.length === 8) handleCep(value);
    else
      setForm({
        ...form,
        [id]: value,
      });
  }

  async function handleCep(cep) {
    const camposAtualizados = {};

    try {
      setLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();

      const keys = Object.entries(json);

      keys.forEach(([key, value]) => {
        if (key in form) {
          camposAtualizados[key] = value;
        }
      });

      setForm({
        ...form,
        ...camposAtualizados,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function inserirPessoa() {
    try {
      setLoading(true);
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'POST',
          heanders: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      const json = await response.json();
      setMessage(json);
      setError(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    loading,
    error,
    message,
    handleChange,
    inserirPessoa,
    handleSubmit,
  };
}
