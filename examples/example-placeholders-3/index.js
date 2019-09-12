(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
      iban: {
        accountNumber: 'IBAN NUMBER ***'
      }
    }
  });
  Rebilly.on('ready', function () {
    var iban = Rebilly.iban.mount('#mount-point');
  });
})();
//# sourceMappingURL=index.js.map