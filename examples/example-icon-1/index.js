(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    icon: {
      display: false
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mounting-point');
  });
})();
//# sourceMappingURL=index.js.map