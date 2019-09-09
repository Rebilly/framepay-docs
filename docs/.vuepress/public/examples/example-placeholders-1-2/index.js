(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            card: {
                expirySeparator: '-',
                expiryMoth: 'M.',
                expiryYear: 'Y.',
            },
        },
    });
    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mount-point');
    });
})();
