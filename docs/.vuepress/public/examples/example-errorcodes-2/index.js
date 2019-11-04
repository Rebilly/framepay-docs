(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        i18n: {
            en: {
                validations: {
                    [Rebilly.errorCodes.incompleteCardNumber]: `Please check Card Number field`,
                    [Rebilly.errorCodes.incompleteExpiry]: `Please check Expiry field`,
                    [Rebilly.errorCodes.incompleteCvv]: `Please check CVV field`,
                },
            },
        },
    });

    Rebilly.on('ready', () => {
        Rebilly.on('ready', () => {
            var [number, expiry, cvv] = [
                Rebilly.card.mount('#mount-point-1', 'cardNumber'),
                Rebilly.card.mount('#mount-point-2', 'cardExpiry'),
                Rebilly.card.mount('#mount-point-3', 'cardCvv'),
            ];

            number.on('change', (data) => {
                console.log('change event data', data);
                document.getElementById('error').innerText = data.valid ? '' : data.error.message;
            });
            expiry.on('change', (data) => {
                console.log('change event data', data);
                document.getElementById('error').innerText = data.valid ? '' : data.error.message;
            });
            cvv.on('change', (data) => {
                console.log('change event data', data);
                document.getElementById('error').innerText = data.valid ? '' : data.error.message;
            });
        });
    });

    document.getElementById('btn-update-1')
        .addEventListener('click', () => {
            alert('Soon');
            Rebilly.update({i18n: {en: undefined}});
        });
})();
