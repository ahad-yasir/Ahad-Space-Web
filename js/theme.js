// التبديل بين الوضع الليلي والنهاري
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeSwitch) themeSwitch.checked = true;
    } else {
        body.classList.remove('light-mode');
        if (themeSwitch) themeSwitch.checked = false;
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', function(e) {
            if (e.target.checked) {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
