import React from "react";
import { Input } from "../basico/Input";

type State = {
  nome: string;
  email: string;
};

// type Action = {
//   type: "setNome" | "setEmail";
//   payload: string;
// };

type Action =
  | {
      type: "setNome";
      payload: string;
    }
  | {
      type: "setEmail";
      payload: string;
    };

function reducer(state: State, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        nome: action.payload,
      };

    case "setNome":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}

export const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    nome: "",
    email: "",
  });

  return (
    <div>
      <h2>Formulário:</h2>
      <form>
        <Input
          label={`Nome: ${state.nome}`}
          id="nome"
          value={state.nome}
          onChange={({ target }) =>
            dispatch({ type: "setNome", payload: target.value })
          }
        />
        <Input
          label={`Email: ${state.email}`}
          id="email"
          value={state.email}
          onChange={({ target }) =>
            dispatch({ type: "setEmail", payload: target.value })
          }
        />
      </form>
    </div>
  );
};
