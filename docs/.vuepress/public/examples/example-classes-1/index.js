(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        classes: {
            base: 'custom-base',
            focus: 'custom-focus',
            valid: 'custom-valid',
            invalid: 'custom-invalid',
        },
    });
    const card = Rebilly.card.mount('#mounting-point');
})();
