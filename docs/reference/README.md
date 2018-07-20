# Including FramePay

FramePay is part of Rebilly.js. Simply include the line below into your checkout page to enable it.

```html
<script src="https://cdn.rebilly.com/framepay/v1/rebilly.js"></script>
```

The library is then exposed in the global scope as `Rebilly`.

::: tip Automatic updates
Backward-compatible updates will be made available automatically without the need to change this URL.
:::

### Adding default element styles

By default FramePay does not inject CSS styles for the elements that are being generated into your form. However we provide a CSS file you can use to give elements a default look.

```html
<link href="https://cdn.rebilly.com/framepay/v1/rebilly.css" rel="stylesheet">
```

Here is an example of a payment card element being styled by `rebilly.css`.
<iframe border="0" frameborder="0" scrolling="no" src="/framepay-docs/examples/example1.html"></iframe>
