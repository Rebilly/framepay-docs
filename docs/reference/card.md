# Card Namespace

The card namespace allows you to mount payment card specific fields. This will generate a FramePay element at the location you desire within your form.

 You can choose to use either:
- a combined element, that includes the number, expiry and CVV in a single element for easier use
- three separate elements for the card number, expiry or CVV

We recommend using the combined field because it is easier to integrate and provides a better user experience to your customers.

## Rebilly.card.mount

After Rebilly is initialized you can mount payment card elements into your form.

The first argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate a card field within.

By default a **combined card element** will be generated. However if you wish to mount three separate fields for the card number, expiry and CVV you can provide a second argument to define the type of element to generate.

```js
// mount a combined card element on a container `div`
Rebilly.card.mount('#card');

// mount an expiry card element
Rebilly.card.mount('#card-expiry', 'cardExpiry');
```

The supported element types for the second argument are:

- `cardNumber`, a payment card element with automatic formatting
- `cardExpiry`, an expiry month and expiry year element with automatic formatting
- `cardCvv`, a CVV element

Please note that when specifying the element types you must include one of each type in your form.


#### Mounting Points
The mounting points within your form should be empty, their content will be replaced with the FramePay element.
```html
<form method="post" action="/process">
    <div class="field">
        <label>Payment Card</label>
        <div id="card">
            <!-- FramePay will inject the combined payment card field here -->
        </div>
    </div>
    <button>Checkout</button>
</form>
```
