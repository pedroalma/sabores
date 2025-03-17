// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.getElementsByClassName("caixatpd");
//     console.log(`Largura: ${div.width}px; Altura: ${div.height}px;`);
// });
// function atualizar() {
//     const argura = window.innerWidth("caixatpd");
//     const ltura = window.innerHeight("caixatpd");

//     document.documentElement.style.cssText = `
//         --argura: ${argura}px;
//         --ltura: ${ltura}px;
//     `;
// }

// // Chama a função ao carregar a página
// console.log(`--argura: ${argura}px;`);
const div = document.getElementById(("caixatpd"));

if (div) {
    const largura = div.offsetWidth;
    const altura = div.offsetHeight;

    console.log(`Largura: ${largura}px, Altura: ${altura}px`);
} else {
    console.error("Elemento não encontrado!");
}