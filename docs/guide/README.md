# Getting Started

FramePay allows you to build your checkout flow by offloading strict PCI Compliance requirements directly to Rebilly while maintaining the same look and feel your customers are used to. Once the required payment card or bank account information is collected, FramePay generates a payment token you can use to complete the checkout process.

<iframe border="0" frameborder="0" scrolling="no" src="/examples/example1.html"></iframe>

To create a checkout flow using FramePay you will have to complete these steps:
1. [Set up FramePay](#set-up-framepay)
2. [Set up your form](#set-up-your-form)
3. [Collect customer information and create a token](#collect-customer-information-and-create-a-token)
4. [Finish the checkout flow](#finish-the-checkout-flow)

## Set up FramePay
FramePay is part of Rebilly.js. Simply include the line below into your checkout page to enable it.

```html
<script src="https://cdn.rebilly.com/framepay/v1/rebilly.js"></script>
```

The library is then exposed in the global scope as `Rebilly`.

::: tip Automatic Updates
Backward-compatible updates will be made available automatically without the need to change this URL.
:::

### Adding default element styles

By default FramePay does not inject CSS styles for the elements that are being generated into your form. However we provide a CSS file you can use to give elements a default look.

```html
<link href="https://cdn.rebilly.com/framepay/v1/rebilly.css" rel="stylesheet">
```

## Set up your form

FramePay injects UI elements into your form that are hosted by Rebilly which allows it to securely collect payment instrument data from your customers.

Start by creating your payment form as you would usually. Then create empty DOM elements within your form to determine where FramePay should mount UI elements.

Payment card example:

```html
<form method="post" action="/process">
    <div class="field">
        <label>Payment Card</label>
        <div id="payment-card">
            <!-- FramePay will inject the payment card field here -->
        </div>
        <!-- Provide an automatic way to inject the
            payment token as a hidden field -->
        <input type="hidden" data-rebilly="token" name="rebilly-token">
    </div>
    <button>Checkout</button>
</form>
```

After the page has loaded you need to initialize FramePay with your [Rebilly publishable API](https://app.rebilly.com/api-keys/add) key and mount the payment card element at the desired location.

```js
// initialize with your publishable key
Rebilly.initialize({publishableKey: 'pk_sandbox_1234567890'});
// mount a combined card element on the #payment-card `<div>` in the form above
Rebilly.card.mount('#payment-card');
```

::: warning Use your own publishable key
You must replace the key `pk_sandbox_1234567890` with your own. We recommend starting with a sandbox key. To create a publishable key, [visit Rebilly]((https://app.rebilly.com/api-keys/add)).
:::

By default a card element will generate a combined field that lets the customers enter their payment card number, expiry and CVV in a single input. However, you can chose to separate them by mounting into three separate locations. See the library reference for a list of supported field types.

Inline validation is automatic but no error messages are displayed unless you subscribe to the `change` event on the element and display them.

```js
card.on('change', function (event) {
    // error messages
});
```
Alternatively you can display error messages only when submitting the form.

::: tip Error Handling
Wrap your code with a `try/catch` block to detect any thrown errors that would prevent proper execution of FramePay. Errors that relate to validation and allow execution will be passed to the `createToken().catch()` method and other event handler you defined for elements.
:::

## Collect customer information and create a token

To collect the customer's information and the payment card data, define an event handler for the form `submit` event. Any `input` fields with a `data-rebilly` attribute will be parsed automatically and sent alongside the elements data.

See the [list of all `data-rebilly` properties](#) that can be automatically saved by FramePay for more details.

Trigger `Rebilly.createToken` to generate and inject the payment token into your form. The method returns a `Promise` with a single argument representing the result of the operation. Validation or network errors can be caught using a `catch()` handler and displayed to the customer.

```js
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    Rebilly.createToken(form)
        .then(function (token) {
            // we have a token field in the form
            // thus we can submit directly
            form.submit();
        })
        .catch(function (error) {
            // see error.code and error.message
        });
});
```

Alternatively you can exclude the `data-rebilly="token"` field and add the payment token information to the form dynamically before submitting it to your server.

## Finish the checkout flow

Once the payment token has been added to the form and submitted to your server you can use one of Rebilly's backend SDKs to finish the checkout flow.

Create a new customer, a payment instrument and finally a transaction.

#### Rebilly Backend SDKs

Rebilly offers SDKs for these programming languages:

- [Rebilly SDK for PHP](https://github.com/Rebilly/rebilly-php)
- [Rebilly SDK for Node.js](https://github.com/Rebilly/rebilly-js-sdk)


### Explore the FramePay Reference

For customization and configuration options available with FramePay visit the [detailed library reference](/reference/).
