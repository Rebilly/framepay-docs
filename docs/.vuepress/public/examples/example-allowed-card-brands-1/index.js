(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        card: {
            brands: {
                allowed: [
                    Rebilly.card.Brands.Visa,
                    Rebilly.card.Brands.Amex,
                ],
            },
        },
    });
    const card = Rebilly.card.mount('#mount-point');
    card.on('change', data => {
        document.getElementById('error').innerHTML = JSON.stringify(data, null, 2);
    });
})();
