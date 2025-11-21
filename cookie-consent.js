(function () {
    var analyticsLoaded = false;

    function loadAnalytics() {
        if (analyticsLoaded) {
            return;
        }

        analyticsLoaded = true;

        var scriptTag = document.createElement('script');
        scriptTag.async = true;
        scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-TF2CSPQKR7';
        document.head.appendChild(scriptTag);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }

        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-TF2CSPQKR7');
    }

    function bindSettingsLinks() {
        var ids = ['cookie-settings-link', 'privacy-cookie-link'];
        ids.forEach(function (id) {
            var link = document.getElementById(id);
            if (!link) {
                return;
            }

            link.addEventListener('click', function (event) {
                event.preventDefault();
                if (typeof window.showCookieSettings === 'function') {
                    window.showCookieSettings();
                }
            });
        });
    }

    window.addEventListener('load', function () {
        bindSettingsLinks();

        if (!window.cookieconsent) {
            return;
        }

        var instance = window.cookieconsent.initialise({
            palette: {
                popup: {
                    background: '#332d2d',
                    text: '#f5f5f5'
                },
                button: {
                    background: '#ff6b6b',
                    text: '#ffffff'
                }
            },
            type: 'opt-in',
            content: {
                message: 'Nous utilisons des cookies nécessaires à la mesure d\'audience (Google Analytics).',
                dismiss: 'Continuer sans accepter',
                allow: 'Accepter',
                link: 'En savoir plus',
                href: 'privacy.html'
            },
            onInitialise: function () {
                if (this.hasConsented()) {
                    loadAnalytics();
                }
            },
            onStatusChange: function () {
                if (this.hasConsented()) {
                    loadAnalytics();
                }
            }
        });

        window.showCookieSettings = function () {
            instance.open();
        };

        if (instance.hasConsented()) {
            loadAnalytics();
        }
    });
})();
