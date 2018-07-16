# Rebilly Namespace

Under the `Rebilly` namespace you will find methods for initializing FramePay and creating payment tokens from a form.

## Rebilly.initialize

Use this method to initialize FramePay with your publishable API key and customize the look and feel of elements.

It accepts a single `configuration` object.
```js
// expects a configuration object
Rebilly.initialize(configuration);

// the basic configuration must contain your publishable API key
Rebilly.initialize({publishableKey: 'pk_sandbox_1234567890'});
```

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
                            <td><code>invalid</code></td>
                            <td>
                                The class applied when an element becomes invalid through validation.
                                <br><br>
                                Default value: <code>rebilly-framepay-invalid</code>
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
                        <code>invalid</code>, validation state applied when the data within is incorrect or incomplete, and after user interaction
                    </li>
                </ul>
                <p>Additionally, for the bank <code>account type</code> element, another node can be defined:</p>
                <ul>
                    <li>
                        <code>buttons</code>, another set of <code>base</code>, <code>focus</code> and <code>active</code> states to define the look of the buttons
                    </li>
                </ul>
                <h4>Common States</h4>
                The <code>base</code>, <code>focus</code> and <code>invalid</code> states can define these CSS properties:
                <ul>
                    <li><code>color</code></li>
                    <li><code>fontFamily</code></li>
                    <li><code>fontSize</code></li>
                    <li><code>fontSmoothing</code></li>
                    <li><code>fontStyle</code></li>
                    <li><code>fontVariant</code></li>
                    <li><code>fontStretch</code></li>
                    <li><code>fontWeight</code></li>
                    <li><code>fontFeatureSettings</code></li>
                    <li><code>fontKerning</code></li>
                    <li><code>letterSpacing</code></li>
                    <li><code>lineHeight</code></li>
                    <li><code>textDecoration</code></li>
                    <li><code>textShadow</code></li>
                    <li><code>textTransform</code></li>
                    <li><code>textAlign</code></li>
                    <li><code>textRendering</code></li>
                    <li><code>borderColor</code></li>
                    <li><code>borderWidth</code></li>
                    <li><code>borderStyle</code></li>
                    <li><code>borderRadius</code></li>
                    <li><code>displayIcon</code></li>
                    <li><code>iconColor</code></li>
                    <li><code>boxShadow</code></li>
                    <li><code>height</code></li>
                    <li><code>padding</code></li>
                </ul>
                <hr>
                <h4>Buttons</h4>
                The <code>base</code>, <code>focus</code> and <code>active</code> button states can define these CSS properties:
                <ul>
                    <li><code>color</code></li>
                    <li><code>fontFamily</code></li>
                    <li><code>fontSize</code></li>
                    <li><code>fontSmoothing</code></li>
                    <li><code>fontStyle</code></li>
                    <li><code>fontVariant</code></li>
                    <li><code>fontStretch</code></li>
                    <li><code>fontWeight</code></li>
                    <li><code>fontFeatureSettings</code></li>
                    <li><code>fontKerning</code></li>
                    <li><code>background</code></li>
                    <li><code>borderColor</code></li>
                    <li><code>borderWidth</code></li>
                    <li><code>borderStyle</code></li>
                    <li><code>borderRadius</code></li>
                    <li><code>lineHeight</code></li>
                    <li><code>textTransform</code></li>
                    <li><code>height</code></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>




## Rebilly.createToken


