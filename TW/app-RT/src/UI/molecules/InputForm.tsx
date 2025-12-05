import type { ComponentProps } from "react";
import type React from "react";
import Label from "../atomns/Label";
import Input from "../atomns/Input";

const InputForm: React.FC<ComponentProps<any>> = ({
  label,
  htmlForm,
  ...props
}) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <Label htmlFor={htmlForm}>{label}</Label>
      <Input {...props} />
    </fieldset>
  );
};

export default InputForm;
