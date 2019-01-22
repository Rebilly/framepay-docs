# Bank Account Namespace

The bank account namespace allows you to mount bank account specific fields. This will generate a FramePay element at the location you desire within your form.


## Rebilly.bankAccount.mount

After Rebilly is initialized you can mount bank account elements into your form. This method requires two arguments, the first being a `selector` and the second being an `element type`.

The first argument must be either a valid string DOM selector or an instance of a `jQuery` or `Zepto` object that wraps an element within the page. FramePay will attempt to resolve the element and generate a bank field within.

```js
// mount an account type element
Rebilly.bankAccount.mount('#account-type', 'bankAccountType');
```

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
