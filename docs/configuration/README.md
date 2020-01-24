# Structure
The basic structure of the configuration object.  
You could use this structure in the [initialize](../reference/rebilly.md#rebilly-initialize) and [update](../reference/rebilly.md#rebilly-update) methods

```javascript
{
    publishableKey: 'String, required',
    organizationId: 'String, no-required',
    locale: 'auto',
    icon: {
        display: true,
        color: null,
    },
    placeholders: {
        card: {
            number: null,
            expiry: null,
            cvv: null,
            expirySeparator: null,
            expiryMoth: null,
            expiryYear: null,
        },
        bban: {
            bicTitle: '',
            bicPlaceholder: '',
            bankNameTitle: '',
            bankNamePlaceholder:'',
            routingNumber: null,
            accountNumber: null,
            type: {
                savings: null,
                checking: null,
                other: null,
            },
        },
        iban: {
            bicTitle:'',
            bicPlaceholder: '',
            bankNameTitle:'',
            bankNamePlaceholder:'',
            accountNumber: null
        },
    },
    i18n: {
        en: {
            validations: {
                ... // see i18n configuration details
                [Rebilly.errorCodes[codeName]]: `String value`
                ...
            }
        },
        es: {
            validations: {
                ... // see i18n configuration details
                [Rebilly.errorCodes[codeName]]: `String value`
                ...
            }
        }
    },
    card: {
        expiry: {
            type: 'text',
        },
        cvv: {
            type: 'text'
        },
        brands: {allowed: null},
    },
    style: {
        base:{
            color: null,
            fontFamily: null,
            fontFeatureSettings: null,
            fontKerning: null,
            fontSize: null,
            webkitFontSmoothing: null,
            mozOsxFontSmoothing: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            letterSpacing: null,
            lineHeight: null,
            textAlign: null,
            textDecoration: null,
            textRendering: null,
            textShadow: null,
            textTransform: null,
            ':focus': {/** all base styles **/ },
            ':hover': {/** all base styles **/ },
            ':disabled': {/** all base styles **/ },
            ':webkitAutofill': {/** all base styles **/ },
            '::placeholder': {/** all base styles **/ },
            '::selection': {/** all base styles **/ },
        },
        focus:{ /** all basic styles + placeholders **/},
        valid:{ /** all basic styles + placeholders **/},
        invalid:{ /** all basic styles + placeholders **/},
        buttons:{ 
            base: {
                background: null,
                borderColor: null,
                borderRadius: null,
                borderStyle: null,
                borderWidth: null,
                color: null,
                fontFamily: null,
                fontFeatureSettings: null,
                fontKerning: null,
                fontSize: null,
                webkitFontSmoothing: null,
                mozOsxFontSmoothing: null,
                fontStretch: null,
                fontStyle: null,
                fontVariant: null,
                fontWeight: null,
                letterSpacing: null,
                lineHeight: null,
                textAlign: null,
                textDecoration: null,
                textRendering: null,
                textShadow: null,
                textTransform: null,
                ':hover': {/** all button base styles **/ }
            }
            focus: { /** all button base styles + :hover **/ }
            active: { /** all button base styles + :hover **/ }
        },
    },
    classes: {
        base: 'rebilly-framepay',
        focus: 'rebilly-framepay-focus',
        valid: 'rebilly-framepay-valid',
        invalid: 'rebilly-framepay-invalid',
        secondary: 'rebilly-framepay-secondary',
        dropdown: 'rebilly-framepay-dropdown',
        group: 'rebilly-framepay-group',
        buttons: 'rebilly-framepay-buttons',
        webkitAutofill: 'rebilly-framepay-webkit-autofill',
    },
} 
```

::: tip See more
See more about the configuration properties [properties](./properties.md)
:::
