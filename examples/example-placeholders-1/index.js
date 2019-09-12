(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
      card: {
        number: 'Number',
        expiry: 'Exp',
        cvv: '***'
      }
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
  });
})();
//# sourceMappingURL=index.js.map