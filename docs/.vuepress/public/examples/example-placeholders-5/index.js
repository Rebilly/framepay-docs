(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            card: {
                expiry: 'EXPIRY',
            },
        },
        locale: Rebilly.locales.es,
    });

    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mount-point');
    });

    document.getElementById('btn-update-1')
        .addEventListener('click', (e) => {
            Rebilly.update({locale: Rebilly.locales.en});
        });

    document.getElementById('btn-restore-1')
        .addEventListener('click', (e) => {
            Rebilly.update({locale: Rebilly.locales.es});
        });
})();
