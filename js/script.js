// Script para animações e interações

document.addEventListener('DOMContentLoaded', function() {
    // Animação de fade-in ao carregar a página
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.classList.add('loaded');
    }, 100);

    // tema escuro/claro
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) console.warn('Botão de tema não encontrado');
    const updateIcon = () => {
        if (!themeToggle) return;
        if (document.body.classList.contains('dark')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };

    // carregar preferência do localStorage ou do sistema
    const stored = localStorage.getItem('theme');
    if (stored) {
        document.body.classList.add(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }
    // se um tema foi aplicado, removemos o outro
    if (document.body.classList.contains('dark')) document.body.classList.remove('light');
    if (document.body.classList.contains('light')) document.body.classList.remove('dark');
    updateIcon();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.replace('dark','light');
            } else {
                document.body.classList.replace('light','dark');
            }
            const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', mode);
            updateIcon();
        });
    }

    // Adicionar interações extras se necessário
    console.log('Página carregada com sucesso!');
});