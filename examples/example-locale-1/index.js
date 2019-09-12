(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    locale: Rebilly.locales.es
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mounting-point');
  });
})();
//# sourceMappingURL=index.js.map