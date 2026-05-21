// ========== УПРАВЛЕНИЕ ВЫПАДАЮЩИМИ МЕНЮ ==========
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

    // Навешиваем обработчики на все иконки с выпадающими меню
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

    // Закрыть меню при клике вне его
    document.addEventListener('click', function(event) {
        var isClickInside = event.target.closest('.icon-wrapper') || event.target.closest('.dropdown-menu');
        if (!isClickInside) {
            closeAllDropdowns();
        }
    });

    // Предотвратить закрытие при клике внутри меню
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
})();

// ========== ГЛОБУС ==========
var globeIcon = document.getElementById('globeIcon');
if (globeIcon) {
    globeIcon.addEventListener('click', function() {
        alert('🌍 Выбор языка: Русский / English');
    });
}

// ========== ПРОВЕРКА АВТОРИЗАЦИИ ==========
function checkAuthStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    var currentUser = localStorage.getItem('currentUser');
    var unauthMenu = document.getElementById('unauthMenu');
    var authMenu = document.getElementById('authMenu');
    var welcomeUser = document.getElementById('welcomeUser');
    
    if (isLoggedIn && currentUser && unauthMenu && authMenu) {
        try {
            var user = JSON.parse(currentUser);
            unauthMenu.style.display = 'none';
            authMenu.style.display = 'block';
            if (welcomeUser) {
                welcomeUser.innerHTML = '<i class="fas fa-user-circle"></i> ' + user.firstName + ' ' + user.lastName;
            }
        } catch(e) {
            if (unauthMenu) unauthMenu.style.display = 'block';
            if (authMenu) authMenu.style.display = 'none';
        }
    } else if (unauthMenu && authMenu) {
        unauthMenu.style.display = 'block';
        authMenu.style.display = 'none';
    }
}

// Выход из аккаунта
var logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        checkAuthStatus();
        alert('Вы вышли из аккаунта');
        window.location.href = 'main.html';
    });
}

// Мои бронирования
var myBookingsLink = document.getElementById('myBookingsLink');
if (myBookingsLink) {
    myBookingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'cabinet-bookings.html';
    });
}

// Запуск проверки
checkAuthStatus();

// ========== FAQ АККОРДЕОН ==========
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function(e) {
        e.stopPropagation();
        var faqItem = this.parentElement;
        var isActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(function(item) {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        if (!isActive) {
            faqItem.classList.add('active');
        } else {
            faqItem.classList.remove('active');
        }
    });
});

// ========== КНОПКИ ДЕЙСТВИЯ ==========
var openChatBtn = document.getElementById('openChatBtn');
if (openChatBtn) {
    openChatBtn.addEventListener('click', function() {
        alert('💬 Чат поддержки откроется в новом окне. Оператор ответит в ближайшее время!');
    });
}

var callbackBtn = document.getElementById('callbackBtn');
if (callbackBtn) {
    callbackBtn.addEventListener('click', function() {
        alert('📞 Запрос на обратный звонок отправлен. Мы свяжемся с вами в течение 15 минут.');
    });
}

console.log('Страница технической поддержки загружена');