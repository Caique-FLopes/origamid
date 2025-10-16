async function puxarDados() {
    const responseDados = await fetch('./dados.json');
    const responseClientes = await fetch('./clientes.json');

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();
    const promises = [jsonDados, jsonClientes];

    console.log(promises);
}

puxarDados();
