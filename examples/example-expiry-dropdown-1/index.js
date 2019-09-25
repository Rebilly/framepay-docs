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
    var card = Rebilly.card.mount('#mount-point');
  }); // the expiry type is non-updatable property
  // document.getElementById('btn-update-1')
  //     .addEventListener('click', (e) => {
  //         Rebilly.update({card: {expiry: {type: 'text'}}});
  //     });
})();
//# sourceMappingURL=index.js.map