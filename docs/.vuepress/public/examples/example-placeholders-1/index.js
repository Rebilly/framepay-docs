(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            card: {
                number: 'Number',
                expiry: 'Exp',
                cvv: '***',
            },
        },
    });
    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mount-point');
    });
})();
