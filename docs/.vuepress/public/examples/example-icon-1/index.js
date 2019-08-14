(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        icon: {
            display: false,
        },
    });
    const card = Rebilly.card.mount('#mounting-point');
})();
