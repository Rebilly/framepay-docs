# Multiple Payment Methods

Rebilly offers supports for more than [twenty different payment methods](https://rebilly.github.io/RebillyAPI/#operation/paymentTokenCreation) and FramePay allows you to implement them all within a single form.


## Using multiple methods

Implementing multiple methods within your form is as simple as adding more elements to mount when they require data input or providing the selected method name when creating the token if they do not require data. 

#### Methods requiring mounting
Currently FramePay will generate fields for payment cards and bank accounts. These must be mounted in the form before the token can be created.

```js
// mounting a single payment card field
Rebilly.card.mount('#payment-card', 'card');

// mounting the three separate bank account fields
Rebilly.bankAccount.mount('#bank-account-type', 'bankAccountType');
Rebilly.bankAccount.mount('#bank-account-number', 'bankAccountNumber');
Rebilly.bankAccount.mount('#bank-routing-number', 'bankRoutingNumber');
``` 

#### Other methods

To use methods that do not require elements within the form, simply provide their name as the `method` parameter within the `extraData` option when creating a payment token.

```js
var extraData = {
    method: 'paypal'
};
Rebilly.createToken(form, extraData);
```

## Payment cards and bank accounts

To accept payment cards and bank accounts at the same time you will have to add mounting points in your form for both types. 

Then when creating the token you will have to specify which method to use (`payment-card` or `ach`), otherwise FramePay will try to process the first one that was mounted.

::: tip Selecting the method
A common way to handle the selection of the payment method is to toggle the view between the different fields. See [this example](/examples/#multiple-payment-methods) which supports five payment methods in the same form.
:::

#### Form

Both types of fields are defined in the form simultaneously. In order to make the interface more user friendly it is recommended to display only one method at a time and let the user toggle between them.

```html
<form method="post" action="/process">
    <!-- payment card field -->
    <fieldset>
        <div class="field">
            <label>Payment Card</label>
            <div id="payment-card"></div>
        </div>
    </fieldset>
    <!-- bank account fields -->
    <fieldset>
        <div class="field">
            <label>Bank Account Type</label>
            <div id="bank-account-type"></div>
        </div>
        <div class="field">
            <label>Bank Account Number</label>
            <div id="bank-account-number"></div>
        </div>
        <div class="field">
            <label>Bank Routing Number</label>
            <div id="bank-routing-number"></div>
        </div>
    </fieldset>
    <input type="hidden" data-rebilly="token" name="rebilly-token">
    <button>Checkout</button>
</form>
```

#### Script

In this example the payment card field is mounted first and will be the default payment method if not specified.

```js
// mount all fields
Rebilly.card.mount('#payment-card', 'card');
Rebilly.bankAccount.mount('#bank-account-type', 'bankAccountType');
Rebilly.bankAccount.mount('#bank-account-number', 'bankAccountNumber');
Rebilly.bankAccount.mount('#bank-routing-number', 'bankRoutingNumber');


var form = document.querySelector('form');
var extraData = {
    // define which method to use
    // between `payment-card` and `ach`
    method: 'payment-card'
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    Rebilly.createToken(form, extraData)
        .then(function (token) {
            // we have a token field in the form
            // thus we can submit directly
            form.submit();
        })
        .catch(function (error) {
            console.error(error);
        });
});
```

## Other methods

To use any other [method supported by Rebilly](https://rebilly.github.io/RebillyAPI/#operation/paymentTokenCreation) just define its value when creating the payment token.

```js
var extraData = {
    method: 'echeck'
};

Rebilly.createToken(form, extraData);
```

See the examples below for [PayPal](/guide/multiple-methods.html#paypal) and [Bitcoin](/guide/multiple-methods.html#bitcoin).

### PayPal

To accept PayPal create a form as usual and provide `paypal` as the `method` when creating the token.

#### Form

No special form fields are required.

```html
<form>
    <fieldset>
        <div class="field">
            <input type="text" data-rebilly="firstName" placeholder="First Name">
        </div>
        <div class="field">
            <input type="text" data-rebilly="lastName" placeholder="Last Name">
        </div>
        <div class="field">
            <input type="text" name="email" placeholder="Email">
        </div>
        <input type="hidden" data-rebilly="token" name="rebilly-token">
    </fieldset>
    <button>Pay using PayPal</button>
</form>
```

#### Script

See the `method` value in `extraData`.

```js
var form = document.querySelector('form');
var extraData = {
    method: 'paypal'
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    Rebilly.createToken(form, extraData)
        .then(function (token) {
            // we have a token field in the form
            // thus we can submit directly
            form.submit();
        })
        .catch(function (error) {
            console.error(error);
        });
});
```

### Bitcoin

To accept Bitcoin create a form as usual and provide `bitcoin` as the `method` when creating the token.

#### Form

No special form fields are required.

```html
<form>
    <fieldset>
        <div class="field">
            <input type="text" data-rebilly="firstName" placeholder="First Name">
        </div>
        <div class="field">
            <input type="text" data-rebilly="lastName" placeholder="Last Name">
        </div>
        <div class="field">
            <input type="text" name="email" placeholder="Email">
        </div>
        <input type="hidden" data-rebilly="token" name="rebilly-token">
    </fieldset>
    <button>Pay with Bitcoin</button>
</form>
```

#### Script

See the `method` value in `extraData`.

```js
var form = document.querySelector('form');
var extraData = {
    method: 'bitcoin'
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    Rebilly.createToken(form, extraData)
        .then(function (token) {
            // we have a token field in the form
            // thus we can submit directly
            form.submit();
        })
        .catch(function (error) {
            console.error(error);
        });
});
```
