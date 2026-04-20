(function() {
    const STORAGE_KEY = 'theme-preference';
    const TOGGLE_BTN = 'theme-toggle';

    function getPreference() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        const btn = document.getElementById(TOGGLE_BTN);
        if (btn) {
            btn.textContent = theme === 'dark' ? '☀' : '☾';
            btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
        }
    }

    function init() {
        if (!document.getElementById(TOGGLE_BTN)) {
            const btn = document.createElement('button');
            btn.id = TOGGLE_BTN;
            btn.className = 'theme-toggle';
            btn.type = 'button';
            btn.setAttribute('aria-label', 'Toggle theme');
            const terminalSession = document.querySelector('.terminal-session');
            if (terminalSession) {
                terminalSession.appendChild(btn);
            } else {
                document.body.appendChild(btn);
            }
        }

        const theme = getPreference();
        setTheme(theme);

        document.getElementById(TOGGLE_BTN).addEventListener('click', function() {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem(STORAGE_KEY)) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();