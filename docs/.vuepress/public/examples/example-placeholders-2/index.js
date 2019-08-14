(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        placeholders: {
            bankAccount: {
                accountNumber: 'Account Number ****',
                routingNumber: 'Routing Number ****',
            },
        },
    });
    const [
        accountNumber,
        routingNumber,
    ] = [
        Rebilly.bankAccount.mount('#mount-point-1', 'bankAccountNumber'),
        Rebilly.bankAccount.mount('#mount-point-2', 'bankRoutingNumber'),
    ];
})();
