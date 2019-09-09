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
})();
