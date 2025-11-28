import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ButtonExercicio } from "./ButtonExercicio";
import { Checkbox } from "./Checkbox";

function App() {
  const [data, setData] = React.useState<string>("");

  const [total, setTotal] = React.useState<number>(0);

  return (
    <div>
      <p>Viagem para o dia: {data}</p>
      <Input label="Email" id="email" type="email" />
      <Input label="Nome" id="nome" type="text" />
      <Input
        label="Inicio"
        id="inicio"
        type="date"
        value={data}
        onChange={({ currentTarget }) => setData(currentTarget.value)}
      />
      <Input label="Fim" id="fim" type="date" />
      <Button>Teste</Button>

      <div>
        <p>Total: {total}</p>
        <ButtonExercicio total={total} setTotal={setTotal} />
      </div>

      <Checkbox label="Termos e condições" />
    </div>
  );
}

export default App;
