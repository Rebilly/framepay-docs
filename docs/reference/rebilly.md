# Rebilly Namespace

Under the `Rebilly` namespace you will find methods for initializing FramePay and creating payment tokens from a form.

## Rebilly.initialize()

Use this method to initialize FramePay with your publishable API key and customize the look and feel of elements.

It accepts a single `configuration` object.
```js
// expects a configuration object
Rebilly.initialize(configuration);

// the basic configuration must contain your publishable API key
Rebilly.initialize({publishableKey: 'pk_sandbox_1234567890'});
```

::: warning Use your own publishable key
You must replace the key `pk_sandbox_1234567890` with your own. We recommend starting with a sandbox key. To create a publishable key, [visit Rebilly](https://app.rebilly.com/api-keys/add).
:::

<br>

The `configuration` must contain at a `publishableKey` otherwise an error will be thrown. It can optionally define CSS styles and class names to overwrite the style of FramePay.

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <strong>publishableKey</strong><br>
                <code>string</code>
            </td>
            <td>
                <p>A Rebilly publishable <a href="https://app.rebilly.com/api-keys/add">API key</a><OutboundLink/>. This property is required to authenticate your website.</p>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>classes</strong><br>
                <code>object</code><sub>optional</sub>
            </td>
            <td>
                <p>An object defining custom class names for the fields that were injected into your checkout form.</p>
                <p>If you modify the default classes <a href="/reference/#adding-default-element-styles"><code>rebilly.css</code></a> will no longer apply any styles to the fields.</p>
                <p>The following properties can be defined:</p>
                <table>
                    <tbody>
                        <tr>
                            <td><code>base</code></td>
                            <td>
                                The class shared by all element containers injected into your form. This is considered the default state.
                                <br><br>
                                Default value: <code>rebilly-framepay</code>
                            </td>
                        </tr>
                        <tr>
                            <td><code>focus</code></td>
                            <td>
                                The class applied when an element gains focus from user interaction.
                                <br><br>
                                Default value: <code>rebilly-framepay-focus</code>
                            </td>
                        </tr>
                        <tr>
                            <td><code>valid</code></td>
                            <td>
                                The class applied when an element becomes valid through validation.
                                <br><br>
                                Default value: <code>rebilly-framepay-valid</code>
                            </td>
                        </tr>
                        <tr>
                            <td><code>invalid</code></td>
                            <td>
                                The class applied when an element becomes invalid through validation.
                                <br><br>
                                Default value: <code>rebilly-framepay-invalid</code>
                            </td>
                        </tr>
                        <tr>
                            <td><code>webkitAutofill</code></td>
                            <td>
                                The class applied when an element value is autofill by the browser (Only on Chrome and Safari).
                                <br><br>
                                Default value: <code>rebilly-framepay-webikit-autofill</code>
                            </td>
                        </tr>
                        <tr>
                            <td><code>buttons</code></td>
                            <td>
                                The class applied to the element container for buttons. Only applicable to the bank <code>account type</code> field.
                                <br><br>
                                Default value: <code>rebilly-framepay-buttons</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>style</strong><br>
                <code>object</code><sub>optional</sub>
            </td>
            <td>
                <p>This object can customize the look of elements using these keys:</p>
                <ul>
                    <li>
                        <code>base</code>, base state applied to the elements regardless of validation state
                    </li>
                    <li>
                        <code>focus</code>, focus state applied when the user has focused on an element by clicking or tabbing through fields
                    </li>
                    <li>
                        <code>valid</code>, validation state applied when the data within is correct or complete, and after user interaction
                    </li>
                    <li>
                        <code>invalid</code>, validation state applied when the data within is incorrect or incomplete, and after user interaction
                    </li>
                </ul>
                <p>Additionally, for the bank <code>account type</code> element, another node can be defined:</p>
                <ul>
                    <li>
                        <code>buttons</code>, another set of <code>base</code>, <code>focus</code> and <code>active</code> states to define the look of the buttons
                    </li>
                </ul>
                <br>
                <h4>Common States</h4>
                The <code>base</code>, <code>focus</code>, <code>valid</code> and <code>invalid</code> states can define these CSS properties:
                <ul>
                    <li><code>color</code></li>
                    <li><code>fontFamily</code></li>
                    <li><code>fontSize</code></li>
                    <li><code>fontStyle</code></li>
                    <li><code>fontVariant</code></li>
                    <li><code>fontStretch</code></li>
                    <li><code>fontWeight</code></li>
                    <li><code>fontFeatureSettings</code></li>
                    <li><code>fontKerning</code></li>
                    <li><code>webkitFontSmoothing</code></li>
                    <li><code>mozOsxFontSmoothing</code></li
                    <li><code>letterSpacing</code></li>
                    <li><code>lineHeight</code></li>
                    <li><code>textDecoration</code></li>
                    <li><code>textShadow</code></li>
                    <li><code>textTransform</code></li>
                    <li><code>textAlign</code></li>
                    <li><code>textRendering</code></li>
                </ul>
                <p>The following pseudo-classes and pseudo-elements can also be styled with the above properties, as a nested object.</p>
                <ul>
                    <li><code>:hover</code></li>
                    <li><code>:focus</code></li>
                    <li><code>:disabled</code></li>
                    <li><code>:webkitAuofill</code> Only <code>webkitTextFillColor</code> and <code>fontSize</code> properties are available</li>
                    <li><code>::placeholder</code> Includes <code>wordSpacing</code> and <code>opacity</code> properties</li>
                    <li><code>::selection</code> Only <code>color</code>, <code>background</code> and <code>textShadow</code> properties are available</li>
                </ul>
                <hr>
                <br>
                <h4>Buttons</h4>
                The <code>base</code>, <code>focus</code> and <code>active</code> button states can define these CSS properties:
                <ul>
                    <li><code>color</code></li>
                    <li><code>fontFamily</code></li>
                    <li><code>fontSize</code></li>
                    <li><code>fontStyle</code></li>
                    <li><code>fontVariant</code></li>
                    <li><code>fontStretch</code></li>
                    <li><code>fontWeight</code></li>
                    <li><code>fontFeatureSettings</code></li>
                    <li><code>fontKerning</code></li>
                    <li><code>webkitFontSmoothing</code></li>
                    <li><code>mozOsxFontSmoothing</code></li>
                    <li><code>background</code></li>
                    <li><code>borderColor</code></li>
                    <li><code>borderWidth</code></li>
                    <li><code>borderStyle</code></li>
                    <li><code>borderRadius</code></li>
                    <li><code>lineHeight</code></li>
                    <li><code>textTransform</code></li>
                </ul>
                <p>The hover selector can be added for <code>base</code> and <code>active</code> states as a nested object containing the above properties,.</p>
                <ul>
                    <li><code>:hover</code></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>icon</strong><br>
                <code>object</code><sub>optional</sub>
            </td>
            <td>
                This object will let you control the color or the visibility of the icon in the card field.
                <ul>
                    <li><code>display</code>, hides the icon. Default to false</li>
                    <li><code>color</code>, Changes the color of the icon</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

Here is an example that customizes the <code>base</code> and <code>invalid</code> states:

```js
// first call
Rebilly.initialize(config);

// where config is
const config = {
    icon: { // icon for combined field
        display: true // false to hide
    },
    classes: {}, // when needed,
    style: {
        base: { // shared `base` state
            color: '#fff', // generic JS property for DOM style
            '::placeholder': { // access to pseudo-element
                color: 'gray', // overwrite placeholder color only
            },
        },
        invalid: {
            color: 'red',
            '::placeholder': {
                color: 'firebrick',
            },
        },
    }
};
```


## Rebilly.createToken()

Use this method to create a token from the contents of a form. FramePay will automatically look for all elements that were mounted and any `input` fields with a `data-rebilly` attribute will be parsed automatically and sent alongside the elements' data.

Alternatively you can provide an `extraData` object containing properties supported by the Rebilly API instead of including additional field in your form.
```js
// create a token from the fields within a form
Rebilly.createToken(form);

// optionally include extra data that is not found in the form
Rebilly.createToken(form, extraData);
```

This method returns a `Promise` with a single argument representing the API result of the operation. Validation or network errors can be caught using a `catch()` handler and displayed to the customer.

```js
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    Rebilly.createToken(form)
        .then(function (token) {
            // if we have a token field in the form
            // we can submit directly
            form.submit();
        })
        .catch(function (error) {
            // see error.code and error.message
        });
});
```

If a `data-rebilly="token"` hidden input field is detected in your form the payment token will be automatically injected. However, the payment token ID is available as `token.id` if you prefer manual handling.

::: tip Mount FramePay fields
In order for the token creation to work you must mount fields before triggering `createToken`.
:::

### Extra Data

The `extraData` argument is optional and allows you to define specific values to include in your payment token request. The billing address values match the properties supported by `data-rebilly` input fields and can be provided as either form fields or as this object literal.

These options can be defined within:

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="vertical-align:top">
                <strong>method</strong><br>
                <code>string</code>
            </td>
            <td>
                <p>When provided FramePay will attempt to process the form data to generate a payment token for this <code>method</code>. We recommended always defining this property.</p>
                <h4>Multiple Methods</h4>
                <p>This property is required when using multiple payment methods at the same time in a form or when using methods other than <code>payment-card</code> or <code>ach</code>.</p>
                <p>Accepts any of the <a href="https://rebilly.github.io/RebillyAPI/#operation/paymentTokenCreation">methods supported by Rebilly</a>.</p>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>billingAddress</strong><br>
                <code>object</code><sub>optional</sub>
            </td>
            <td>
                <p>This object defines the billing address of the customer.</p>
                These keys can be provided:
                <ul>
                    <li><code>firstName</code></li>
                    <li><code>lastName</code></li>
                    <li><code>organization</code></li>
                    <li><code>address</code></li>
                    <li><code>address2</code></li>
                    <li><code>city</code></li>
                    <li><code>region</code></li>
                    <li><code>country</code></li>
                    <li><code>postalCode</code></li>
                    <li><code>phoneNumbers</code>, an array of objects representing phone numbers. Each item must include a <code>label</code> and <code>value</code></li>
                    <li><code>emails</code>, an array of objects representing email addresses. Each item must include a <code>label</code> and <code>value</code></li>
                </ul>
                <h4>Required Values</h4>
                <p>Please note that the <code>firstName</code> and <code>lastName</code> values are required to create a payment token. If they are not
                present within your form's fields you must define them as <code>extraData</code>.</p>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>leadSource</strong><br>
                <code>object</code><sub>optional</sub>
            </td>
            <td>
                <p>A lead source is Rebilly's term for the marketing campaign responsible for a customer interaction (typically a customer purchasing something).<p>
                <p>There are two ways to collect lead source information: either you provide it explicity within the <code>extraData</code> option or let <a href="/guide/lead-source.html#automatic-attribution">FramePay collect Google UTM parameters</a> from the web address hosting it.</p>
                <p>If the lead source parameter is defined all UTM parameters from the web address will be ignored.</p>
                <h4>Lead Source Parameters</h4>
                <p>A lead source is just some additional metadata that attaches to the customer’s record, and contains attributes common from both <strong>Google analytics</strong> (UTM) and affiliate tracking applications:</p>  
                <ul>
                    <li><code>source</code> a UTM parameter</li>
                    <li><code>medium</code> a UTM parameter</li>
                    <li><code>campaign</code> a UTM parameter</li>
                    <li><code>content</code> a UTM parameter</li>
                    <li><code>term</code> a UTM parameter</li>
                    <li><code>affiliate</code> an affiliate tracking parameter</li>
                    <li><code>subAffiliate</code> an affiliate tracking parameter</li>
                    <li><code>clickId</code> an affiliate tracking parameter</li>
                    <li><code>salesAgent</code> a sales tracking parameter</li>
                    <li><code>currency</code> and <code>amount</code>:  the cost of the lead</li>
                </ul>
                <p>Any and all of these parameters are optional.</p>
                <h4>Prevent Automatic Attribution</h4>
                <p>If you wish to prevent automatic lead source attribution from Google analytics UTM fields you can define this property as an emtpy object.</p>
                <pre><code>var extraData = {
   leadSource: {}
};</code></pre>
            </td>
        </tr>
    </tbody>
</table>

For example, if your form gathered the customer's name at a previous step and doesn't include the fields in the form used to create the token, then you would define it as extra data:
```js
// within the event listener for the form submit
var extraData = {
    billingAddress: {
        firstName: 'John',
        lastName: 'Doe'
    },
    leadSource: {
        campaign: 'facebook',
    }
};
// define extra data as the second argument
Rebilly.createToken(form, extraData)
        .then(function (token) {
            // if we have a token field in the form
            // we can submit directly
            form.submit();
        })
        .catch(function (error) {
            // see error.code and error.message
        });
});
```

### `data-rebilly` Fields

Most billing address fields can be automatically gathered by FramePay if they are present within the form with a `data-rebilly` attribute:

- `firstName`
- `lastName`
- `organization`
- `address`
- `address2`
- `city`
- `region`
- `country`
- `postalCode`

For example, to collect the `firstName` and `lastName` when the token is created you can setup your form as follows:
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

# Card Namespace

The card namespace allows you to mount payment card specific fields. This will generate a FramePay element at the location you desire within your form.

 You can choose to use either:
- a combined element, that includes the number, expiry and CVV in a single element for easier use
- three separate elements for the card number, expiry or CVV

We recommend using the combined field because it is easier to integrate and provides a better user experience to your customers.

## Rebilly.card.mount()

After Rebilly is initialized you can mount payment card elements into your form.

The first argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate a card field within.

By default a **combined card element** will be generated. However if you wish to mount three separate fields for the card number, expiry and CVV you can provide a second argument to define the type of element to generate.

```js
// mount a combined card element on a container `div`
var card = Rebilly.card.mount('#card');

// mount an expiry card element and return the instance
var cardExpiry = Rebilly.card.mount('#card-expiry', 'cardExpiry');
```

:::tip Field Events
The card element instances can be used to [subscribe to events](/reference/element.html#element-on) and complete additional actions afterwards.
:::

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

#### Labels
When a `<label>` is present in your form and you wish to automatically focus on the FramePay element once the label is clicked. There are 2 different ways to achieve this:

1. Add the `for` attribute to the `<label>`, referencing the ID of your container.
```html
<label for="card">Payment Card</label>
<div id="card">
    <!-- FramePay will inject the combined payment card field here -->
</div>
```

2. Wrap the FramePay element within a `<label>`.
```html
<label>Payment Card
    <div id="card">
        <!-- FramePay will inject the combined payment card field here -->
    </div>
</label>
```

# Bank Account Namespace

The bank account namespace allows you to mount bank account specific fields. This will generate a FramePay element at the location you desire within your form.


## Rebilly.bankAccount.mount()

After Rebilly is initialized you can mount bank account elements into your form. This method requires two arguments, the first being a `selector` and the second being an `element type`.

The first argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate a bank field within.

```js
// mount an account type element and return the instance
var accountType = Rebilly.bankAccount.mount('#account-type', 'bankAccountType');
```

:::tip Field Events
The bank element instances can be used to [subscribe to events](/reference/element.html#element-on) and complete additional actions afterwards.
:::

The supported element types for the second argument are:

- `bankAccountType`: a set of inline buttons allowing the selection of the account type
- `bankAccountNumber`: a simple element to enter the account number
- `bankRoutingNumber`: a simple element to enter the routing number

You must include mount one of each type into your form in order to create a token for a bank account.


#### Mounting Points
The mounting points within your form should be empty, their content will be replaced with the FramePay element.
```html
<form method="post" action="/process">
    <div class="field">
        <label>Account Type</label>
        <div id="account-type">
            <!-- FramePay will inject the combined payment card field here -->
        </div>
    </div>
    <button>Continue</button>
</form>
```

#### Labels
When a `<label>` is present in your form and you wish to automatically focus on the FramePay element once the label is clicked. There are 2 different ways to achieve this:

1. Add the `for` attribute to the `<label>`, referencing the ID of your container.
```html
<label for="account-type">Account Type</label>
<div id="account-type">
    <!-- FramePay will inject the combined payment card field here -->
</div>
```

2. Wrap the FramePay element within a `<label>`.
```html
<label>Account Type
    <div id="account-type">
        <!-- FramePay will inject the combined payment card field here -->
    </div>
</label>
```
