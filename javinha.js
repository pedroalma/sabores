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
// window.onload = function () {
//     const main = document.querySelector('main')[1]; // Seleciona o elemento <main>

//     if (main) {
//         const largura = main.offsetWidth;  // Mede a largura visível
//         const altura = main.offsetHeight;  // Mede a altura visível

//         console.log(`Largura: ${largura}px, Altura: ${altura}px`);
//     } else {
//         console.error("Elemento <main> não encontrado!");
//     }
// };
// function pegaDaClasse() {
//     var elemento = document.querySelector('.geji');  // Corrigido para selecionar pela classe 'geji'
    
//     if (elemento) {  // Verifica se o elemento existe
//         var gura = elemento.offsetWidth;
//         var tura = elemento.offsetHeight;

//         console.log("gura: " + gura + "px");
//         console.log("tura: " + tura + "px");
//     } else {
//         console.log("Elemento não encontrado.");
//     }
// }
function medirTamanho() {
    var elemento = document.getElementById("meuTexto");
    var gura = elemento.offsetWidth;
    var tura = elemento.offsetHeight;
    
    console.log("Largura: " + gura + "px");
    console.log("Altura: " + tura + "px");

    document.documentElement.style.cssText = `
        --argura: ${gura}px;
        --ltura: ${tura}px;
    `;
}

