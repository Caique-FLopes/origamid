const body = $('body');

console.log(body.addClass('test-class'));

console.log(_.difference([1, 2, 3], [2]));

console.log();

declare const Vimeo: any;

const iframe = $('#vimeo');
const player = new Vimeo.Player(iframe);

console.log(player);
