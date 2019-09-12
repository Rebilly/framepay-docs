(function () {
  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890'
  });
  var form = document.querySelector('form');
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mounting-point');
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    Rebilly.createToken(form).then(function (result) {
      console.log(result);
    }).catch(function (error) {
      return alert(JSON.stringify(error));
    });
  });
})();
//# sourceMappingURL=index.js.map