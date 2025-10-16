fetch('./dados.json')
    .then((response) => response.text())
    .then((jsonText) => {
        const jsonFinal = JSON.parse(jsonText);
        console.log(jsonFinal);
    });

const config = {
    player: 'Google',
    tempo: 25.5,
    aula: 'JS iniciante',
};

localStorage.config = JSON.stringify(config);

console.log(JSON.parse(localStorage.config));
