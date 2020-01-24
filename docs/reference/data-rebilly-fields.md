# `data-rebilly` Fields

Most billing address fields can be automatically gathered by FramePay if they are present within the form with a `data-rebilly` attribute:

- `fullName` <small>The form should contain 2 fields `firstName` + `lastName` or one `fullName`</small>
- `firstName`
- `lastName`
- `organization`
- `address`
- `address2`
- `city`
- `region`
- `country`
- `postalCode` <small>(no-required label in the `data-rebilly-label` node attribute)</small>
- `phoneNumbers` <small>(no-required label in the `data-rebilly-label` node attribute)</small>
- `emails`

---
Only for the [BBAN](./rebilly.md#rebilly-bban-mount) and [IBAN](./rebilly.md#rebilly-iban-mount) methods we support additional fields `bic` and `bankName` that can be automatically gathered by FramePay if they are present within the form with a `data-rebilly` attribute:

---

For example, to collect the `firstName` and `lastName` when the token is created you can setup your form as follows:
```html
<form>
    <fieldset>
        <div class="field">
            <input data-rebilly="firstName" placeholder="First Name">
        </div>
        <div class="field">
            <input data-rebilly="lastName" placeholder="Last Name">
        </div>
        <div class="field">
            <input data-rebilly="emails" placeholder="Email">
        </div>
        <div class="field">
            <input data-rebilly="phoneNumbers" placeholder="Phone 1">
        </div>
        <div class="field">
            <input data-rebilly="phoneNumbers" data-rebilly-label="Phone with custom label" placeholder="Phone 2">
        </div>
        <input type="hidden" data-rebilly="token" name="rebilly-token">
    </fieldset>
    <button>Pay using PayPal</button>
</form>
```
