(function () {
    var analyticsLoaded = false;

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
                message: 'Nous utilisons uniquement des cookies nécessaires au bon fonctionnement du site.',
                dismiss: 'Continuer',
                allow: 'Accepter',
                link: 'En savoir plus',
                href: 'privacy.html'
            }
        });

        window.showCookieSettings = function () {
            instance.open();
        };
    });
})();
