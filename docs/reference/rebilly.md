# Rebilly Namespace

Under the `Rebilly` namespace you will find methods for initializing FramePay and creating payment tokens from a form.

## Rebilly.initialize

Use this method to initialize FramePay with your publishable API key and customize the look and feel of elements.

It accepts a single `configuration` object.
```js
Rebilly.initialize(configuration);
```

The `configuration` must contain at a `publishableKey` otherwise an error will be thrown. It can optionally define CSS styles and class names to overwrite the style of FramePay.


| Option | Description |
| ------------- | ------------- |
| publishableKey<br>`string` | A Rebilly publishable [API key](https://app.rebilly.com/api-keys/add). This property is required to authenticate your website. |
| style<br>`object` | An object defining a set of CSS properties to customize the appearance of FramePay. |
| classes<br>`object` | An object defining custom class names for the fields that were injected into your checkout form. |


## Rebilly.createToken
