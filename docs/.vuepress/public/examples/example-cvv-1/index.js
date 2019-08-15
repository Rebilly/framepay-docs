(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        card: {
            cvv: {
                type: 'password',
            },
        },
    });

    const card = Rebilly.card.mount('#mount-point');

    document.getElementById('btn-update-1').addEventListener('click', (e) => {
        Rebilly.update({card: {expiry: {type: 'text'}}});
    });
})();
