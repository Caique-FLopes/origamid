const regexp = /\w+/gi;

const frase = "Javascript Linguagem 101";

const regexObj = new RegExp('\\w+', 'gi')



console.log(frase.replace(regexObj, 'X'))
