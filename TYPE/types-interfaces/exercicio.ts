async function fetchProdutos() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data);
  //showProduct(data);
}

fetchProdutos();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Empresa Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Empresa Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
