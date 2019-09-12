(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
      bankAccount: {
        accountNumber: 'Account Number ****',
        routingNumber: 'Routing Number ****'
      }
    }
  });
  Rebilly.on('ready', function () {
    var _ref = [Rebilly.bankAccount.mount('#mount-point-1', 'bankAccountNumber'), Rebilly.bankAccount.mount('#mount-point-2', 'bankRoutingNumber')],
        accountNumber = _ref[0],
        routingNumber = _ref[1];
  });
})();
//# sourceMappingURL=index.js.map