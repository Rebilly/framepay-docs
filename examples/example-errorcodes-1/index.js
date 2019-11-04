function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var _validations;

  Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    i18n: {
      en: {
        validations: (_validations = {}, _defineProperty(_validations, Rebilly.errorCodes.invalidPaymentCard, "Please check your Payment Card"), _defineProperty(_validations, Rebilly.errorCodes.incompleteCardNumber, "Please check Card Number field"), _defineProperty(_validations, Rebilly.errorCodes.incompleteExpiry, "Please check Expiry field"), _defineProperty(_validations, Rebilly.errorCodes.incompleteCvv, "Please check CVV field"), _validations)
      }
    }
  });
  Rebilly.on('ready', function () {
    var card = Rebilly.card.mount('#mount-point');
    card.on('change', function (data) {
      console.log('change event data', data);
      document.getElementById('error').innerText = data.valid ? '' : data.error.message;
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