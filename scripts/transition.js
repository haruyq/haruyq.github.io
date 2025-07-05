function transitionTo(url) {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        window.location.href = url;
    }, 300);
}

window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function () {
    var selectors = ['.about-button', '.works-button', '.header_title a'];
    selectors.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (a) {
            a.addEventListener('click', function (e) {
                var href = a.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('#')) {
                    e.preventDefault();
                    transitionTo(href);
                }
            });
        });
    });
});