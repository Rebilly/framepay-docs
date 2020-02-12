# Rebilly Namespace

Under the `Rebilly` namespace you will find methods for initializing FramePay and creating payment tokens from a form.

## Rebilly.version 
Actual FramePay release version <span style="vertical-align:middle;" id="framepay-version"><Badge text="..." type="success"/></span>

<script type="text/javascript">
var versionTimer = null;

function getVersion(){
    if(versionTimer){
        clearTimeout(versionTimer);
    }
    setTimeout(function(){
        try {
            document.getElementById('framepay-version').querySelector('span').innerHTML = parseInt(Rebilly.version, 10);
        } catch(e) {
            getVersion();
        }
    }, 500);
};
getVersion();
</script>

## Rebilly.locales
The allowed locales namespace see [configuration locale](../configuration/properties.md#locale).
```js
Rebilly.initialize({
    publishableKey: '',
    locale: 'auto'
});
```

```js
Rebilly.update({
    locale: 'en-US'
});
```

## Rebilly.errorCodes
The errorCodes namespace, uses for overriding default error messages see [configuration i18n](../configuration/properties.md#i18n)

## Rebilly.on()
The `Rebilly` namespace supports 2 events
- `ready`
- `error`

The `ready` event called when the `Rebilly` ready to mounting the elements.  
The `error` event called when the `Rebilly` has some api or cdn errors.  

```javascript
Rebilly.initialize({ /* configuration */ });
Rebilly.on('error', () => {
    // notitication/re-initialize/re-mount functionality
}); 
```

::: warning Rebilly ready/error events 
```javascript
Rebilly.initialize({ /* configuration */ });

Rebilly.on('ready', () => {
    // will not be executed when the CDN have some errors in the initialization
    const card = Rebilly.card.mount('#mount-point');  
})

Rebilly.on('error', (err) => {
    // err
    // {"code":"network-error","type":"error","message":"Initialization Error","details":[]}
})
```
:::

::: tip Element mount error event
The elements also support the error event, see [element-on](./element.md#element-on)
:::

## Rebilly.initialize()

Use this method to initialize FramePay with your publishable API key and customize the look and feel of elements.

It accepts a single [`configuration`](../configuration) object.
```js
// the basic configuration must contain your publishable API key
Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    organizationId: 'your-organization-id', // no required property
});
```

::: warning Use your own publishable key
You must replace the key `pk_sandbox_1234567890` with your own. We recommend starting with a sandbox key. To create a publishable key, [visit Rebilly](https://app.rebilly.com/api-keys/add).
:::

<br>

The `configuration` must contain at a [`publishableKey`](../configuration/properties.md#publishableKey) otherwise an error will be thrown. It can optionally define CSS styles and class names to overwrite the style of FramePay.

For the `configuration` details please take a look at [configuration](../configuration/)
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

## Rebilly.update()
Use this method has the same functionality as the `initialize` method, but this method will update actual configuration.
```javascript
Rebilly.update({/* new configuration object */}) 
```
  
The update priority.   
Any properties which were established and not passed in the new configuration - will stay.  
```javascript
Rebilly.initialize({
    locale: Rebilly.locale.es,
    icon: {
        display: true
    },
    style: {
        base: {
            color: '#fff'
        }
    }
});

Rebilly.update({icon:{color:'red', style: null}});
```

The actual Rebilly configuration will be:
```javascript
{
    locale: 'es',
    icon: {
        display: true,
        color: 'red'
    },
    style: {} // default value
}
```

## Rebilly.createToken()

Use this method to create a token from the contents of a form.  
FramePay will automatically look for all elements that were mounted and any `input` fields with a `data-rebilly` attribute will be parsed automatically and sent alongside the elements' data.  
See about `data-rebilly` on [data-rebilly-form-fields](./data-rebilly-fields.md) page. 

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
                <p>Accepts any of the <a href="https://rebilly.github.io/RebillyAPI/#operation/PostToken">methods supported by Rebilly</a>.</p>
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
        <tr>
            <td style="vertical-align:top">
                <strong>bic</strong><br>
                <code>string</code>
            </td>
            <td>
                <p>the SWIFT/BIC Code</p>
                <p>Only for the BBAN and IBAN methods, <br/>allowed in the <code>data-rebilly</code> fields</p>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:top">
                <strong>bankName</strong><br>
                <code>string</code>
            </td>
            <td>
                <p>Bank Name</p>
                <p>Only for the BBAN and IBAN methods, <br/>allowed in the <code>data-rebilly</code> fields</p>
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

# BBAN Namespace

The bban namespace allows you to mount bank account (BBAN) specific fields. This will generate a FramePay element at the location you desire within your form.


## Rebilly.bban.mount()

After Rebilly is initialized you can mount bban elements into your form. This method requires two arguments, the first being a `selector` and the second being an `element type`.

The first argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate a bank field within.

```js
// mount an account type element and return the instance
var accountType = Rebilly.bban.mount('#account-type', 'accountType');
```

:::tip Field Events
The bank element instances can be used to [subscribe to events](/reference/element.html#element-on) and complete additional actions afterwards.
:::

The supported element types for the second argument are:

- `accountType`: a set of inline buttons allowing the selection of the account type
- `accountNumber`: a simple element to enter the account number
- `routingNumber`: a simple element to enter the routing number
- `bic`: a simple element to enter the SWIFT/BIC Code
- `bankName`: a simple element to enter the Bank Name

You must include mount one of `accountNumber`, `routingNumber` into your form in order to create a token for a bank account.


#### Mounting Points
The mounting points within your form should be empty, their content will be replaced with the FramePay element.
```html
<form method="post" action="/process">
    <div class="field">
        <label>Account Type</label>
        <div id="account-type">
            <!-- FramePay will inject the combined account type field here -->
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
    <!-- FramePay will inject the combined account type field here -->
</div>
```

2. Wrap the FramePay element within a `<label>`.
```html
<label>Account Type
    <div id="account-type">
        <!-- FramePay will inject the account type field here -->
    </div>
</label>
```

# IBAN Namespace

The IBAN (International Bank Account Number) namespace allows you to mount a field for accepting IBANs. This will generate a FramePay element at the location you desire within your form.


## Rebilly.iban.mount()

After Rebilly is initialized you can mount IBAN elements into your form. This method requires one or two arguments, the first being a `selector` and the second being an `element type`.  
    
If the second argument didn't passed then will be mounted the default element for iban account number.  
    
The `selector` argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate an IBAN field within.

```js
// mount an account type element and return the instance
var iban = Rebilly.iban.mount('#iban'); // mount iban field

var bic = Rebilly.iban.mount('#iban-bic', 'bic'); // mount iban bic field

var bankName = Rebilly.iban.mount('#iban-bank-name', 'bankName'); // mount iban Bank Name field
```

:::tip Field Events
The iban element instances can be used to [subscribe to events](/reference/element.html#element-on) and complete additional actions afterwards.
:::

The supported element types for the second argument are:

- empty - mount main iban field element `Rebilly.iban.mount('#iban');`
- `bic`: a simple element to enter the SWIFT/BIC Code
- `bankName`: a simple element to enter the Bank Name

#### Mounting Points
The mounting points within your form should be empty, their content will be replaced with the FramePay element.
```html
<form method="post" action="/process">
    <div class="field">
        <label>IBAN number</label>
        <div id="iban">
            <!-- FramePay will inject the iban field here -->
        </div>
    </div>
    <button>Continue</button>
</form>
```

#### Labels
When a `<label>` is present in your form and you wish to automatically focus on the FramePay element once the label is clicked. There are 2 different ways to achieve this:

1. Add the `for` attribute to the `<label>`, referencing the ID of your container.
```html
<label for="iban">IBAN number</label>
<div id="iban">
    <!-- FramePay will inject the iban field here -->
</div>
```

2. Wrap the FramePay element within a `<label>`.
```html
<label>IBAN
    <div id="iban">
        <!-- FramePay will inject the iban field here -->
    </div>
</label>
```
