(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        icon: {
            // Supported names like 'red', rgb, hex
            color: 'rgb(200,197,31)',
        },
    });
    const iban = Rebilly.iban.mount('#mount-point');
})();
