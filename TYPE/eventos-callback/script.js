// const button = document.querySelector('button');
// button?.addEventListener('pointerdown', (event: PointerEvent) => {
//   console.log(event.pageX, event.pageY);
// });
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener('scroll', handleScroll);
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchstart', ativarMenu);
// window.addEventListener('keydown', ativarMenu);
// const button = document.querySelector('button');
// function handleClick(this: HTMLButtonElement, event: Event) {
//   console.log(this);
// }
// button?.addEventListener('click', handleClick);
// const button = document.querySelector('button');
// function handleClick(this: HTMLButtonElement, event: Event) {
//   const elemento = event.target;
//   if (elemento instanceof HTMLElement) {
//     console.log(elemento);
//   }
// }
// button?.addEventListener('click', handleClick);
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnOpenMenu = document.getElementById('btn-mobile');
function openMenu(event) {
    const menu = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && menu) {
        menu.classList.toggle('active');
        const active = menu.classList.contains('active');
        if (active) {
            menu.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-label', 'Fechar Menu');
        }
        else {
        }
    }
    else {
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Abrir Menu');
    }
}
console.log(btnOpenMenu);
btnOpenMenu?.addEventListener('pointerdown', openMenu);
