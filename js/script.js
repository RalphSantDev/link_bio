// Script para animações e interações

document.addEventListener('DOMContentLoaded', function() {
    // Animação de fade-in ao carregar a página
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.classList.add('loaded');
    }, 100);

    // Adicionar interações extras se necessário
    console.log('Página carregada com sucesso!');
});