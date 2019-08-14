(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            iban: {
                accountNumber: 'IBAN NUMBER ***',
            },
        },
    });
    const iban = Rebilly.iban.mount('#mount-point');
})();
