import DateInput from "./DateInput";
import { useDataContext } from "../context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useDataContext();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        id="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DateInput
        label="Final"
        id="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DateRange;
