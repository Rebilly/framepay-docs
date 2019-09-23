(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    card: {
      cvv: {
        type: 'password'
      }
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
  });
  document.getElementById('btn-update-1').addEventListener('click', function (e) {
    Rebilly.update({
      card: {
        cvv: {
          type: 'text'
        }
      }
    });
  });
})();
//# sourceMappingURL=index.js.map