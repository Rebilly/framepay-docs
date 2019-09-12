(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    card: {
      brands: {
        allowed: [Rebilly.card.Brands.Visa, Rebilly.card.Brands.Amex]
      }
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
    card.on('change', function (data) {
      document.getElementById('error').innerHTML = JSON.stringify(data, null, 2);
    });
  });
})();
//# sourceMappingURL=index.js.map