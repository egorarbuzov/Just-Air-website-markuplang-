(function() {
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

var searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        return true;
    });
}
var statusCard = document.querySelector('[data-card="status"]');
if (statusCard) {
    statusCard.addEventListener('click', function() {
        console.log('Статус рейсов');
    });
}

var supportCard = document.querySelector('[data-card="support"]');
if (supportCard) {
    supportCard.addEventListener('click', function() {
        console.log('Техподдержка');
    });
}

var partnerItems = document.querySelectorAll('[data-partner]');
partnerItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var partnerType = this.getAttribute('data-partner');
        console.log('Партнер:', partnerType);
    });
});

var holidayBtn = document.querySelector('[data-holiday="more"]');
if (holidayBtn) {
    holidayBtn.addEventListener('click', function() {
        console.log('Подробнее об отелях');
    });
}

var globeIcon = document.getElementById('globeIcon');
if (globeIcon) {
    globeIcon.addEventListener('click', function() {
        console.log('Выбор языка');
    });
}