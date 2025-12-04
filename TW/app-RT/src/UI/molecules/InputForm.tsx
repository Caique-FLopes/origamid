import type { ComponentProps } from "react";
import type React from "react";
import Label from "../atomns/Label";
import Input from "../atomns/Input";

const InputForm: React.FC<ComponentProps<any>> = ({ htmlForm, ...props }) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <Label htmlFor="username">Usuário:</Label>
      <Input
        type="text"
        id="username"
        placeholder="Usuário"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
    </fieldset>
  );
};

export default InputForm;
