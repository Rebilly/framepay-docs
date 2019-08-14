
## publishableKey
A Rebilly publishable <a href="https://app.rebilly.com/api-keys/add">API key</a><OutboundLink/>. This property is required to authenticate your website.

<table>
    <tr><td>Required</td><td><Badge text="True" type="error"/></td></tr>
    <tr><td>Updatable</td><td>False</td></tr>
    <tr><td>Type</td><td>String</td></tr>
</table>

<<< @/docs/.vuepress/public/examples/example-publishablekey-1/index.js


## locale
A string to force defining FramePay locale for the fields that were injected into your checkout form.

By default the FramePay trying to detect and use the client's locale.  
The `en` locale used as a fallback.

All supported locales are available in the `Rebilly.locales.*` namespace.

<table>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Type</td><td>ENUM</td></tr>
    <tr><td>Default value </td><td><code>auto</code> (<code>en</code> as fallback)</td></tr>
    <tr><td>Supported values</td><td>See <code>Rebilly.locales</code><br/><br/><code>auto</code>, <code>en</code>, <code>es</code></td></tr>
</table>

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-locale-1/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-locale-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-locale-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-locale-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-locale-1/index.css
:::
::::

## icon
This object will let you control the color or the visibility of the icon in the card and iban fields.

<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

```javascript
Rebilly.initialize({
    icon: {
        display: true,
        color: '#000000'
    }
})
```


### display
This property will let you control the visibility of the icon in the card and iban fields.
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Default value </td><td><code>true</code> (render icon)</td></tr>
    <tr><td>Type</td><td>Boolean</td></tr>
</table> 

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-icon-1/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-icon-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-icon-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-icon-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-icon-1/index.css
:::
::::


### color
This property will let you control the color of the icon in the card and iban fields.
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Default value </td><td><code>'#A1B2C1'</code></td></tr>
    <tr><td>Type</td><td>String</td></tr>
    <tr><td>Supported values</td><td>
        String colors in <br/> 
            <code>'red'</code>, 
            <code>'#XXXXXX'</code>, 
            <code>'rgb(0,0,0)'</code>,
            <code>'rgba(0,0,0,0.5)'</code> formats
        </td>
    </tr>
</table>

#### Card element
:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-icon-2/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-icon-2/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-icon-2/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-icon-2/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-icon-2/index.css
:::
::::

#### IBAN element
:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-icon-3/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-icon-3/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-icon-3/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-icon-3/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-icon-3/index.css
:::
::::

## placeholders
An object defining custom input placeholder values  
for the fields that were injected into your checkout form.  

The placeholders value will override the current locale settings.      

<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

### card 
The [card](../reference/rebilly.md#rebilly-card-mount) element placeholders.  

<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

```javascript
Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
        card: {
            number: 'Number',
            expiry: 'Exp',
            cvv: '***',
        },
    },
}); 
```

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-placeholders-1/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-placeholders-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-placeholders-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-placeholders-1/index.css
:::
::::

::: tip The expiry field placeholder
The expiry field support some additional placeholders.
This placeholders also will used in the dropdopwn expiry fields see [expiry](#expiry).  
```javascript
Rebilly.initialize({
    publishableKey: 'pk_sandbox_1234567890',
    placeholders: {
        card: {
            expirySeparator: '-',
            expiryMoth: 'M.',
            expiryYear: 'Y.',
        },
    },
});  
```
:::

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-placeholders-1-2/index.html"></iframe>
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-1-2/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-placeholders-1-2/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-placeholders-1-2/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-placeholders-1-2/index.css
:::
::::


### bankAccount
The [bankAccount](../reference/rebilly.md#rebilly-bankaccount-mount) element placeholder

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-placeholders-2/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-2/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-placeholders-2/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-placeholders-2/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-placeholders-2/index.css
:::
::::

### iban
The [iban](../reference/rebilly.md#rebilly-iban-mount) element placeholder
:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-placeholders-3/index.html"></iframe>
<a 
    class="view-source"
    target="_blank"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-3/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-placeholders-3/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-placeholders-3/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-placeholders-3/index.css
:::
::::

### Placeholders and locale
The placeholders configuration will override the active locale settings.

:::: tabs
::: tab locale-custom
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-placeholders-4/index.html"></iframe>

<<< @/docs/.vuepress/public/examples/example-placeholders-4/index.js
    
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-4/index.html">
        View source on GitHub
    </a>
:::
::: tab locale-update
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--middle"
    src="/framepay-docs/examples/example-placeholders-5/index.html"></iframe>

<<< @/docs/.vuepress/public/examples/example-placeholders-5/index.js
    
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-placeholders-5/index.html">
        View source on GitHub
    </a>
:::
::::


## card
This object allows you to customize the payment card element properties.
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

### brands
This object allows you to customize the payment card Brands properties.  
See [Allowed Card Brands List](#allowed-card-brands-list)
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>


### Allowed Card Brands List
This array allows you to customize the available card types in the card field
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Array|null</td></tr>
    <tr><td>Default value</td><td><code>null</code>(allow all)</td></tr>
    <tr><td>Supported values</td><td>
        See `Rebilly.card.Brands`<br/><br/>
        <code>"Visa"</code>, 
        <code>"ChinaUnionPay"</code>, 
        <code>"MasterCard"</code>, 
        <code>"American Express"</code>, 
        <code>"Discover"</code>, 
        <code>"Maestro"</code>, 
        <code>"JCB"</code>, 
        <code>"Diners Club"</code>, 
        <code>"AstroPay Card"</code>
    </td></tr>
</table>

:::: tabs
::: tab result
- Visa (allowed) `4111111111111111`
- MasterCard (declined) `5555555555554444`
- AMEX (allowed) `378282246310005`
- Discover (declined) `6011111111111117`

<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--middle"
    src="/framepay-docs/examples/example-allowed-card-brands-1/index.html"></iframe>
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-allowed-card-brands-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-allowed-card-brands-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-allowed-card-brands-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-allowed-card-brands-1/index.css
:::
::::

### expiry
This option allows you to customize the card expiry render type.  
The card expiry field supports 2 render types.  

- `text` (simple input type text)
- `dropdown` (styled dropdowns and native select on mobile)

<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>String</td></tr>
    <tr><td>Default value</td><td><code>'text'</code></td></tr>
    <tr><td>Supported values</td><td><code>'text'</code>, <code>'dropdown'</code></td></tr>
</table>

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--middle"
    src="/framepay-docs/examples/example-expiry-dropdown-1/index.html"></iframe>
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-expiry-dropdown-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-expiry-dropdown-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-expiry-dropdown-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-expiry-dropdown-1/index.css
:::
::::

### cvv
This option allows you to customize the card cvv render type.  
The card cvv field supports 2 render types.  

- `text` (simple input type text)
- `password` (input type password)

<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>String</td></tr>
    <tr><td>Default value</td><td><code>'text'</code></td></tr>
    <tr><td>Supported values</td><td><code>'text'</code>, <code>'password'</code></td></tr>
</table>

## style 
The option to override the default FramePay styles
<table>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

### base
### focus
### valid
### invalid
### buttons

This object can customize the look of elements using these keys:
- `base`, base state applied to the elements regardless of validation state
- `focus`, focus state applied when the user has focused on an element by clicking or tabbing through fields
- `valid`, validation state applied when the data within is correct or complete, and after user interaction
- `invalid`, validation state applied when the data within is incorrect or incomplete, and after user interaction

:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-style-1/index.html"></iframe>
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-style-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-style-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-style-1/index.js
:::
::::

Additionally, for the bank `account type` element, another node can be defined:
- `buttons`, another set of `base`, `focus` and `active` states to define the look of the buttons

### Common States
The `base`, `focus`, `valid` and `invalid` states can define these CSS properties:  
`color`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontStretch`, `fontWeight`, `fontFeatureSettings`, `fontKerning`, `webkitFontSmoothing`, `mozOsxFontSmoothing`, `letterSpacing`, `lineHeight`, `textDecoration`, `textShadow`, `textTransform`, `textAlign`, `textRendering`, 


The following pseudo-classes and pseudo-elements can also be styled with the above properties, as a nested object.
- `:hover`
- `:focus`
- `:disabled`
- `:webkitAuofill`  Only <code>webkitTextFillColor</code> and <code>fontSize</code> properties are available</li>
- `::placeholder`  Includes <code>wordSpacing</code> and <code>opacity</code> properties</li>
- `::selection`  Only <code>color</code>, <code>background</code> and <code>textShadow</code> properties are available</li>

<hr>
<br>
<h4>Buttons</h4>
The <code>base</code>, <code>focus</code> and <code>active</code> button states can define these CSS properties:

<code>color</code>, <code>fontFamily</code>, <code>fontSize</code>, <code>fontStyle</code>, <code>fontVariant</code>, <code>fontStretch</code>, <code>fontWeight</code>, <code>fontFeatureSettings</code>, <code>fontKerning</code>, <code>webkitFontSmoothing</code>, <code>mozOsxFontSmoothing</code>, <code>background</code>, <code>borderColor</code>, <code>borderWidth</code>, <code>borderStyle</code>, <code>borderRadius</code>, <code>lineHeight</code>, <code>textTransform</code>

<p>The hover selector can be added for <code>base</code> and <code>active</code> states as a nested object containing the above properties,.</p>
<ul>
    <li><code>:hover</code></li>
</ul>


## classes
An object defining custom class names for the fields that were injected into your checkout form.
<table>
    <tr><td>Updatable</td><td>True</td></tr>
    <tr><td>Required</td><td>False</td></tr>
    <tr><td>Type</td><td>Object</td></tr>
</table>

### base
### focus
### valid
### invalid
### secondary
### dropdown
### group
### buttons
### webkitAutofill

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


:::: tabs
::: tab result
<iframe 
    style="margin-bottom: 8px;" border="0" 
    frameborder="0"
    scrolling="no" 
    class="configuration-example-frame configuration-example-frame--small"
    src="/framepay-docs/examples/example-classes-1/index.html"></iframe>
<a 
    class="view-source"
    href="https://github.com/Rebilly/framepay-docs/blob/master/docs/.vuepress/public/examples/example-classes-1/index.html">
        View source on GitHub
    </a>
:::
::: tab html
<<< @/docs/.vuepress/public/examples/example-classes-1/index.html
:::
::: tab javascript
<<< @/docs/.vuepress/public/examples/example-classes-1/index.js
:::
::: tab css
<<< @/docs/.vuepress/public/examples/example-classes-1/index.css
:::
::::
