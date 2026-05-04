(function() {
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('active');
        });
    }

    function openDropdown(dropdownId) {
        closeAllDropdowns();
        var dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.classList.add('active');
        }
    }

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

    document.addEventListener('click', function(event) {
        var isClickInside = event.target.closest('.icon-wrapper') || event.target.closest('.dropdown-menu');
        if (!isClickInside) {
            closeAllDropdowns();
        }
    });

    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
})();

document.getElementById('globeIcon')?.addEventListener('click', function() {
    alert('🌍 Выбор языка: Русский / English');
});

document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    alert('Вы вышли из аккаунта');
    window.location.href = 'main.html';
});