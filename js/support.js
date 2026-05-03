// ========== FAQ АККОРДЕОН (исправленный) ==========
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function(e) {
        e.stopPropagation(); // Останавливаем всплытие события
        
        var faqItem = this.parentElement; // Получаем родительский .faq-item
        var isActive = faqItem.classList.contains('active');
        
        // Закрываем все другие открытые FAQ
        document.querySelectorAll('.faq-item').forEach(function(item) {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        // Переключаем текущий FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        } else {
            faqItem.classList.remove('active');
        }
    });
});

// ========== КНОПКИ ДЕЙСТВИЯ ==========
document.getElementById('openChatBtn')?.addEventListener('click', function() {
    alert('💬 Чат поддержки откроется в новом окне. Оператор ответит в ближайшее время!');
});

document.getElementById('callbackBtn')?.addEventListener('click', function() {
    alert('📞 Запрос на обратный звонок отправлен. Мы свяжемся с вами в течение 15 минут.');
});

// ========== ИКОНКИ ШАПКИ ==========
document.querySelectorAll('.icon-wrapper').forEach(function(wrapper) {
    wrapper.addEventListener('click', function() {
        alert('Навигационное меню будет доступно в следующей версии');
    });
});

document.getElementById('globeIcon')?.addEventListener('click', function() {
    alert('🌍 Выбор языка: Русский / English');
});

// ========== ПРИВЕТСТВИЕ ==========
console.log('Страница технической поддержки загружена');