(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
    });
    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mounting-point');
    });
})();
