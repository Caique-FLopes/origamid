// const produto1 = ['Notebook', 2500];
// const produto2: [string, number] = ['Notebook', 2500];
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    handleVenda(json);
}
function handleVenda(vendas) {
    // let total = 0;
    // for (let i = 0; i < vendas.length; i++) {
    //   total += vendas[i][1];
    // }
    // document.body.innerHTML += `<p>Total: ${total}</p>`;
    const total = vendas.reduce((anterior, atual) => {
        console.log(anterior, atual);
        return anterior + atual[1];
    }, 0);
    document.body.innerHTML += `<p>Total: ${total}</p>`;
}
fetchVendas();
