function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var _validations;

  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    i18n: {
      en: {
        validations: (_validations = {}, _defineProperty(_validations, Rebilly.errorCodes.incompleteCardNumber, "Please check Card Number field"), _defineProperty(_validations, Rebilly.errorCodes.incompleteExpiry, "Please check Expiry field"), _defineProperty(_validations, Rebilly.errorCodes.incompleteCvv, "Please check CVV field"), _validations)
      }
    }
  });
  Rebilly.on('ready', function () {
    Rebilly.on('ready', function () {
      var _ref = [Rebilly.card.mount('#mount-point-1', 'cardNumber'), Rebilly.card.mount('#mount-point-2', 'cardExpiry'), Rebilly.card.mount('#mount-point-3', 'cardCvv')],
          number = _ref[0],
          expiry = _ref[1],
          cvv = _ref[2];
      number.on('change', function (data) {
        console.log('change event data', data);
        document.getElementById('error').innerText = data.valid ? '' : data.error.message;
      });
      expiry.on('change', function (data) {
        console.log('change event data', data);
        document.getElementById('error').innerText = data.valid ? '' : data.error.message;
      });
      cvv.on('change', function (data) {
        console.log('change event data', data);
        document.getElementById('error').innerText = data.valid ? '' : data.error.message;
      });
    });
  });
  document.getElementById('btn-update-1').addEventListener('click', function () {
    alert('Soon');
    Rebilly.update({
      i18n: {
        en: undefined
      }
    });
  });
})();
//# sourceMappingURL=index.js.map