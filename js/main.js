// Минимальный JavaScript только для управления DOM-элементами
// Без хардкода сообщений - только открытие/закрытие меню

// ========== УПРАВЛЕНИЕ ДРОПДАУНАМИ ==========
(function() {
    // Закрыть все дропдауны
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('active');
        });
    }

    // Открыть конкретный дропдаун
    function openDropdown(dropdownId) {
        closeAllDropdowns();
        var dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.classList.add('active');
        }
    }

    // Обработчики для иконок с data-dropdown атрибутом
    var iconWrappers = document.querySelectorAll('.icon-wrapper');
    iconWrappers.forEach(function(wrapper) {
        var dropdownId = wrapper.getAttribute('data-dropdown');
        if (dropdownId) {
            wrapper.addEventListener('click', function(event) {
                event.stopPropagation();
                var dropdown = document.getElementById(dropdownId);
                if (dropdown && dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                } else {
                    openDropdown(dropdownId);
                }
            });
        }
    });

    // Закрытие при клике вне дропдаунов
    document.addEventListener('click', function(event) {
        var isClickInside = event.target.closest('.icon-wrapper') || event.target.closest('.dropdown-menu');
        if (!isClickInside) {
            closeAllDropdowns();
        }
    });

    // Предотвращаем закрытие при клике внутри меню
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
})();

// ========== ОБРАБОТКА ФОРМЫ ПОИСКА ==========
var searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        // Форма отправится на search.html как обычно
        // Никаких alert-ов, просто стандартное поведение
        return true;
    });
}

// ========== ДОПОЛНИТЕЛЬНЫЙ ИНТЕРАКТИВ ДЛЯ КАРТОЧЕК И ПАРТНЕРОВ ==========
// Эти обработчики можно убрать, если не нужны, но они не нарушают минимальность JS
// Они просто перенаправляют или показывают контекстные меню (по желанию)

// Карточка статуса рейсов
var statusCard = document.querySelector('[data-card="status"]');
if (statusCard) {
    statusCard.addEventListener('click', function() {
        // Можно добавить переход на страницу статуса рейсов
        console.log('Статус рейсов');
    });
}

// Карточка техподдержки
var supportCard = document.querySelector('[data-card="support"]');
if (supportCard) {
    supportCard.addEventListener('click', function() {
        console.log('Техподдержка');
    });
}

// Партнеры
var partnerItems = document.querySelectorAll('[data-partner]');
partnerItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var partnerType = this.getAttribute('data-partner');
        console.log('Партнер:', partnerType);
    });
});

// Кнопка "Подробнее" в секции отелей
var holidayBtn = document.querySelector('[data-holiday="more"]');
if (holidayBtn) {
    holidayBtn.addEventListener('click', function() {
        console.log('Подробнее об отелях');
    });
}

// Глобус
var globeIcon = document.getElementById('globeIcon');
if (globeIcon) {
    globeIcon.addEventListener('click', function() {
        console.log('Выбор языка');
    });
}