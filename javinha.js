document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("caixatpd");
    const dimensoes = div.getBoundingClientRect();
    console.log(`Largura: ${dimensoes.width}px; Altura: ${dimensoes.height}px;`);
});