(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    card: {
      expiry: {
        type: 'dropdown'
      }
    }
  });
  Rebilly.on('ready', function () {
    var _ref = [Rebilly.card.mount('#mount-point-1', 'cardNumber'), Rebilly.card.mount('#mount-point-2', 'cardExpiry'), Rebilly.card.mount('#mount-point-3', 'cardCvv')],
        number = _ref[0],
        expiry = _ref[1],
        cvv = _ref[2];
  });
  document.getElementById('btn-update-1').addEventListener('click', function (e) {
    Rebilly.update({
      card: {
        expiry: {
          type: 'text'
        }
      }
    });
  });
})();
//# sourceMappingURL=index.js.map