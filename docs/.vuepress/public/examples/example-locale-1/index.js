(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        locale: Rebilly.locales.es,
    });
    const card = Rebilly.card.mount('#mounting-point');
})();
