(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        card: {
            expiry: {
                type: 'dropdown',
            },
        },
    });

    Rebilly.on('ready', () => {
        var [number, expiry, cvv] = [
            Rebilly.card.mount('#mount-point-1', 'cardNumber'),
            Rebilly.card.mount('#mount-point-2', 'cardExpiry'),
            Rebilly.card.mount('#mount-point-3', 'cardCvv'),
        ];
    });

    document.getElementById('btn-update-1').addEventListener('click', (e) => {
        Rebilly.update({card: {expiry: {type: 'text'}}});
    });
})();
