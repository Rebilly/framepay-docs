(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        locale: 'es-ES',
    });
    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mounting-point');
    });
})();
