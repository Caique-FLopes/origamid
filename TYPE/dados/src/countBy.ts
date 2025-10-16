export interface CountLista {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountLista, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}
