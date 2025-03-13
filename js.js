function atualizarVariaveisCSS() {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    // Atualiza as variáveis dentro do :root no CSS
    document.documentElement.style.cssText = `
        --largura: ${largura}px;
        --altura: ${altura}px;
    `;
}

// Chama a função ao carregar a página
atualizarVariaveisCSS();

// Atualiza automaticamente sempre que a janela for redimensionada
window.addEventListener('resize', atualizarVariaveisCSS);