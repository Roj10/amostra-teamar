document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    // Abrir a sidebar
    openBtn.addEventListener('click', () => {
        sidebar.style.width = '280px'; // Define a largura da sidebar
        openBtn.style.display = 'none'; // Esconde o botão "Abrir"
    });

    // Fechar a sidebar
    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0'; // Reduz a largura da sidebar para 0
        openBtn.style.display = 'block'; // Mostra novamente o botão "Abrir"
    });
});