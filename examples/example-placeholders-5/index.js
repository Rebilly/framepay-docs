(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
      card: {
        expiry: 'EXPIRY'
      }
    },
    locale: Rebilly.locales.es
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
  });
  document.getElementById('btn-update-1').addEventListener('click', function (e) {
    Rebilly.update({
      locale: Rebilly.locales.en
    });
  });
})();
//# sourceMappingURL=index.js.map