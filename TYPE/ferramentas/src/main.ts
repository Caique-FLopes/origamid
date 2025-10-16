export {};
import _ from 'lodash';
import ClipboardJS from 'clipboard';

const btn = new ClipboardJS('button');

function handleCopy(event: ClipboardJS.Event): void {
  event.clearSelection();
}

btn.on('success', handleCopy);

console.log(_.difference([1, 2, 3], [2]));

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: 'O senhor dos anéis',
};
