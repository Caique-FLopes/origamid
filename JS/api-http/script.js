/*etch('https://pokeapi.co/api/v2/pokemon/1')
.then((r) => r.json())
.then((pokemon) => {
    console.log(pokemon);
}); */

const url = 'https://www.google.com';

fetch(url).then((response) => {
    console.log(response.headers.forEach(console.log));
});
//.then((body) => console.log(body));
