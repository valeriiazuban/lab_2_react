document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. ЗБЕРІГАННЯ СИСТЕМНИХ ДАНИХ У LOCALSTORAGE
    // ==========================================
    const sysInfoText = `${navigator.userAgent} (${navigator.platform})`;
    localStorage.setItem('os_browser_info', sysInfoText);
    
    const sysInfoElement = document.getElementById('sys-info');
    if (sysInfoElement) {
        sysInfoElement.innerText = `Системні дані (localStorage): ${localStorage.getItem('os_browser_info')}`;
    }

    // ==========================================
    // 2. ОТРИМАННЯ ВІДГУКІВ З API (Fetch API - Варіант 14)
    // ==========================================
    const reviewsContainer = document.getElementById('reviews-container');
    
    fetch('https://jsonplaceholder.typicode.com/posts/14/comments')
        .then(response => response.json())
        .then(comments => {
            reviewsContainer.innerHTML = '';
            comments.forEach(comment => {
                const commentCard = document.createElement('div');
                commentCard.className = 'review-card';
                commentCard.innerHTML = `
                    <p class="review-body">"${comment.body}"</p>
                    <p class="review-author"><strong>${comment.name}</strong> (${comment.email})</p>
                `;
                reviewsContainer.appendChild(commentCard);
            });
        })
        .catch(error => {
            console.error('Помилка завантаження відгуків:', error);
            reviewsContainer.innerText = 'Не вдалося завантажити відгуки.';
        });

    // ==========================================
    // 3. МОДАЛЬНЕ ВІКНО ЧЕРЕЗ 1 ХВИЛИНУ
    // ==========================================
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal');

    setTimeout(() => {
        if (modal) modal.classList.remove('hidden');
    }, 60000); // 60000 мс = 1 хвилина

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // ==========================================
    // 4. ПЕРЕМИКАЧ ТЕМИ (ДЕНЬ / НІЧ)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentHour = new Date().getHours();

    // Автоматичне перемикання за часом (Денна: 07:00 - 21:00)
    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.remove('dark-mode');
        if (themeToggleBtn) themeToggleBtn.innerText = '🌙 Нічна тема';
    } else {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.innerText = '☀️ Денна тема';
    }

    // Ручне перемикання
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.innerText = '☀️ Денна тема';
            } else {
                themeToggleBtn.innerText = '🌙 Нічна тема';
            }
        });
    }
});