(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    style: {
      base: {
        color: 'blue',
        ':focus': {
          color: 'lightblue'
        }
      },
      valid: {
        color: 'green'
      },
      invalid: {
        color: 'yellow'
      }
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mounting-point');
  });
})();
//# sourceMappingURL=index.js.map