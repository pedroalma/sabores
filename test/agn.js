function atualizarTamanho() {
    // Pega a largura e altura da janela
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    // Define as variáveis CSS no :root
    document.documentElement.style.setProperty('--largura', `${largura}px`);
    document.documentElement.style.setProperty('--altura', `${altura}px`);

    // Atualiza o conteúdo da página para mostrar as dimensões
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Largura da janela: ${largura}px <br> Altura da janela: ${altura}px`;
}

// Chama a função para definir as variáveis logo que a página é carregada
atualizarTamanho();

// Escuta o redimensionamento da janela
window.addEventListener('resize', atualizarTamanho);