(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            bankAccount: {
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
            accountType,
            accountNumber,
            routingNumber,
        ] = [
            Rebilly.bankAccount.mount('#mount-point-0', 'bankAccountType'),
            Rebilly.bankAccount.mount('#mount-point-1', 'bankAccountNumber'),
            Rebilly.bankAccount.mount('#mount-point-2', 'bankRoutingNumber'),
        ];
    });
})();
