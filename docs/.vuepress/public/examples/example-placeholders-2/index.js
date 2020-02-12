(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            bban: {
                bicPlaceholder:'BIC ****',
                bankNamePlaceholder:'BIC ****',
                accountNumber: 'Account Number ****',
                routingNumber: 'Routing Number ****',
                type: {
                    savings: 'Type 1 Savings',
                    checking: 'Type 2 Checking',
                    other: 'Type 3 Other',
                },
            },
        },
    });
    Rebilly.on('ready', () => {
        var [
            bic,
            bankName,
            accountType,
            accountNumber,
            routingNumber,
        ] = [
            Rebilly.bban.mount('#mount-point-bic', 'bic'),
            Rebilly.bban.mount('#mount-point-bank-name', 'bankName'),
            Rebilly.bban.mount('#mount-point-0', 'accountType'),
            Rebilly.bban.mount('#mount-point-1', 'accountNumber'),
            Rebilly.bban.mount('#mount-point-2', 'routingNumber'),
        ];
    });
})();
