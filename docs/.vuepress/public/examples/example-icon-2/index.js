(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        icon: {
            color: 'rgba(0,0,0,0.1)',
        },
    });
    const card = Rebilly.card.mount('#mount-point');
})();
