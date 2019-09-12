(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    icon: {
      color: 'rgba(0,0,0,0.1)'
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
  });
})();
//# sourceMappingURL=index.js.map