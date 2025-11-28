import type { IVenda } from "./IVenda";

export default interface IDataContext {
  loading: boolean;
  error: string | null;
  data: IVenda[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}
