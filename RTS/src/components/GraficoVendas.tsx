import React from "react";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { IVenda } from "../Interfaces/IVenda";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 2000,
    processando: 300,
    falha: 200,
  },
  {
    data: "2023-05-04",
    pago: 1100,
    processando: 250,
    falha: 100,
  },
  {
    data: "2023-05-05",
    pago: 3400,
    processando: 500,
    falha: 350,
  },
];
type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, itemAtual) => {
    const dia = itemAtual.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[dia][itemAtual.status] += itemAtual.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);
  return (
    <div>
      <ResponsiveContainer height={400} width={"90%"}>
        <LineChart data={transformedData}>
          <XAxis dataKey="data" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke=" #35c016ff"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#b09012ff"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#dc360dff"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
