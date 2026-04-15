(() => {
    const header = document.querySelector('header');
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('#primary-menu');

    if (!header || !toggle || !menu) {
        return;
    }

    const closeMenu = () => {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
        header.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
        if (header.classList.contains('nav-open')) {
            closeMenu();
            return;
        }
        openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (!(event.target instanceof Node)) {
            return;
        }

        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    const desktopMedia = window.matchMedia('(min-width: 769px)');
    desktopMedia.addEventListener('change', (event) => {
        if (event.matches) {
            closeMenu();
        }
    });
})();
