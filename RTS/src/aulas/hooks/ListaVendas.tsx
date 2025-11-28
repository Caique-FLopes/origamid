import React from "react";
import { Input } from "../basico/Input";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: null | number;
  data: Date;
};

const ListaVendas = () => {
  const [data, setData] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState<
    string | number | readonly string[] | undefined
  >(undefined);
  const [final, setFinal] = React.useState<
    string | number | readonly string[] | undefined
  >(undefined);
  const [helper, setHelper] = React.useState<string>(
    "Selecione um periodo válido para a consulta"
  );

  React.useEffect(() => {
    async function fetchVendas() {
      try {
        let url = "https://data.origamid.dev/vendas/";
        console.log(inicio, final);
        if (inicio && final) {
          url += `?inicio=${inicio}&final=${final}`;
        }
        setHelper("Carregando...");
        const dados = await fetch(url);
        const json: Venda[] = await dados.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setHelper("");
      }
    }

    fetchVendas();
  }, [inicio, final]);

  return (
    <div>
      <h2>Busca de Vendas:</h2>
      <Input
        label="Data Inicial"
        id="data-inicial"
        type="date"
        onChange={({ currentTarget }) => setInicio(currentTarget.value)}
        value={inicio}
      />
      <Input
        label="Data Final"
        id="data-final"
        type="date"
        onChange={({ currentTarget }) => setFinal(currentTarget.value)}
        value={final}
      />

      <p>{helper}</p>
      {data && (
        <div>
          <ul>
            {data.map((venda) => (
              <li key={venda.id}>
                <a href={`/venda/${venda.id}`}>
                  <span>{venda.id}</span>
                  <p>Nome: {venda.nome}</p>
                  <p>Preço: {venda.preco}</p>
                  <p>Pagamento: {venda.nome}</p>
                  {venda.parcelas && <p>Qtd. Parcelas: {venda.parcelas}</p>}
                  <p>
                    Status:{" "}
                    <span
                      style={{
                        color: venda.status === "pago" ? "green" : "yellow",
                      }}
                    >
                      {venda.status}
                    </span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListaVendas;
