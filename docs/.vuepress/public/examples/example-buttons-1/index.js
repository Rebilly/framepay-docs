(function () {
    Rebilly.initialize({
        publishableKey: 'pk_sandbox_1234567890',
        style: {
            buttons: {
                base: {
                    background: 'lightblue',
                    ':hover': {
                        background: 'yellow',
                    },
                },
                active: {
                    background: 'green',
                    ':hover': {
                        background: 'orange',
                    },
                },
            },
        },
    });
    const [
        accountType,
    ] = [
        Rebilly.bankAccount.mount('#mount-point-1', 'bankAccountType'),
    ];
})();
