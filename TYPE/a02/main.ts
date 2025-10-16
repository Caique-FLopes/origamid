function toNumber(value) {
  if (typeof value === 'string') {
    return Number(value);
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw 'value deve ser um número ou uma string';
  }
}

console.log(toNumber(1));
