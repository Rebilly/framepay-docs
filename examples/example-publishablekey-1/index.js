(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890'
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mounting-point');
  });
})();
//# sourceMappingURL=index.js.map