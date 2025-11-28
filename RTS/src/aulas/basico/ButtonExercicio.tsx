import React, { type SetStateAction } from "react";

type ButtonExercicioProps = React.ComponentProps<"button"> & {
  total: number;
  setTotal: React.Dispatch<SetStateAction<number>>;
};

export const ButtonExercicio = ({ total, setTotal }: ButtonExercicioProps) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};
