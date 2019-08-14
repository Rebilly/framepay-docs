(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
    });
    const card = Rebilly.card.mount('#mounting-point');
})();
