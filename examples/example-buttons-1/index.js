(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    style: {
      buttons: {
        base: {
          background: 'lightblue',
          ':hover': {
            background: 'yellow'
          }
        },
        active: {
          background: 'green',
          ':hover': {
            background: 'orange'
          }
        }
      }
    }
  });
  Rebilly.on('ready', function () {
    var _ref = [Rebilly.bankAccount.mount('#mount-point-1', 'bankAccountType')],
        accountType = _ref[0];
  });
})();
//# sourceMappingURL=index.js.map