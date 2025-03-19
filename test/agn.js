// function mudarTexto() {
//     document.getElementById("meuTexto").innerHTML = `
//         <ul>
//             <li>400 g de cogumelos frescos (preferencialmente tipo: paris/champignon, pode usar shimeji e shitake mas eu ainda não tentei)</li>
//             <li class="segundo-item">1 cebola picadinha</li>
//             <li>1 xícara e meia de arroz arbóreo (arroz para risoto)</li>
//             <li>½ xícara de vinho branco seco (eu uso às vezes um pouco menos de 1 xícara)</li>
//             <li>6 xícaras de caldo de legumes (dissolver 1 tablete e 1/2 de caldo de legumes em 6 xícaras de água fervente)</li>
//             <li>6 colheres (sopa) parmesão ralado (mais ou menos 60 g)</li>
//             <li>Azeite de oliva</li>
//             <li>4 dentes de alho</li>
//             <li>Um maço de salsinha picadinha</li>
//             <li>Sal e pimenta</li>
//         </ul>`;
// }

// function restaurarTexto() {
//     document.getElementById("meuTexto").innerHTML = "Este é o texto original.";
// }
function pegaDaClasse() {
    var elemento = document.querySelector('.geji');  // Corrigido para selecionar pela classe 'geji'
    
    if (elemento) {  // Verifica se o elemento existe
        var largura = elemento.offsetWidth;
        var altura = elemento.offsetHeight;

        console.log("Largura: " + largura + "px");
        console.log("Altura: " + altura + "px");
    } else {
        console.log("Elemento não encontrado.");
    }
}