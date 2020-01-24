---
sidebar: auto
---

# Changelog

## [Unreleased]



## 92 (2020-01-24)
### Added
- `organizationId` configuration property (String, no-required) see [configuration.organizationId](./configuration/properties.md#organizationid)

Your organization identifier in scope of which need to perform request (if not specified, the default organization will be used).

```js
Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    organizationId: 'your-organization-id', // no required property
}); 
```

## 91 (2020-01-20)
### Added
- `bic` and `bankName` element types for `Rebilly.bban` and `Rebilly.iban` namespace  
see [Rebilly.bban.mount](./reference/rebilly.md#rebilly-bban-mount) and [Rebilly.iban.mount](./reference/rebilly.md#rebilly-iban-mount)

```js
// bban
Rebilly.bban.mount('#mounting-node-bic', 'bic'); 
Rebilly.bban.mount('#mounting-node-bank-name', 'bankName');

// iban
Rebilly.iban.mount('#mounting-node-bic', 'bic'); 
Rebilly.iban.mount('#mounting-node-bank-name', 'bankName'); 
```

- `bic` and `bankName` in `data-rebilly` fields see [data-rebilly-fields](./reference/data-rebilly-fields.md)
- `bic` and `bankName` in `extraData` properties see [Rebilly.createToken extradata](./reference/rebilly.md#extra-data)


## 90 (2020-01-14)
### Deprecated
- `Rebilly.bankAccount` namespace.
The namespace `Rebilly.bankAccount` deprecated but still works, this namespace moved to `Rebilly.bban` namespace with changes of element type names. 

**Mounted elements update**
```js
// before
Rebilly.bankAccount.mount('#account-type', 'bankAccountType');
// new 
Rebilly.bban.mount('#account-type', 'accountType');

Rebilly.bankAccount.mount('#account-number', 'bankAccountNumber');
// new 
Rebilly.bban.mount('#account-number', 'accountNumber');

Rebilly.bankAccount.mount('#routing-number', 'bankRoutingNumber');
// new 
Rebilly.bban.mount('#routing-number', 'routingNumber');
```

**Source event names update**  
The `source` property of the `change` event changed based on new file types (only for the `bban` namespace) 

```js
// before
const field = Rebilly.bankAccount.mount('#routing-number', 'bankRoutingNumber')
field.on('change', ({source, ...params}) => {
    //source === 'bankRoutingNumber'
});

// after 
const field = Rebilly.bban.mount('#routing-number', 'routingNumber')
field.on('change', ({source, ...params}) => {
    //source === 'routingNumber'
    // same for all other fields in the bban namespace
    // accountType, accountNumber, routingNumber, ...
});
```

**Configuration placeholders update**
```js
// before
Rebilly.initialize({
    publishableKey: '',
    placeholders: {
        bankAccount: { /** placeholders for bankAccount **/ }
    }
});
// new
Rebilly.initialize({
    publishableKey: '',
    placeholders: {
        bban: {
            // placeholders for bban
            // the keys of the object the same to the old names of bankAccount
            routingNumber: null,
            accountNumber: null,
            type: {
                savings: null,
                checking: null,
                other: null,
            },
        }
    }
})
````

## 89 (2020-12-26)
### Fixed
- Exception on invalid locale value  
In previous releases FramePay had an exception on invalid locale value 
```js
Rebilly.initialize({locale:'some-invalid-locale-value'});
// js exception invalid locale
```

Since this update FramePay ignore any invalid locales and use `auto` as fallback see [configuration.locale](./configuration/properties.md#locale)

### Added
- Parser of locale value in browser format.  
FramePay will select the most suitable locale from allowed locales list see [configuration.locale](./configuration/properties.md#locale) 
```js
Rebilly.initialize({locale: navigator.language});
```
