// var video = document.querySelector('#videoPrincipal');

// if (video instanceof HTMLVideoElement) {
//   console.log(video.volume);
// }

// const links = document.querySelectorAll('.link');

// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   } else {
//     console.log(typeof link);
//   }
// });

// const dados = [1, 2, 3, 4, 5];

// const ArrayLinks = Array.from(links);

// const anchorLinks = ArrayLinks.filter(
//   (link) => link instanceof HTMLAnchorElement
// );

// console.log(anchorLinks);

const elements = document.querySelectorAll('.link');

function alterColor(element: HTMLElement): void {
  element.style.color = 'red';
  element.style.border = '1px solid red';
}

elements.forEach((element) => {
  if (element instanceof HTMLElement) {
    alterColor(element);
  }
});
