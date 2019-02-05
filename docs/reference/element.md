# Element Instance

When an element is mounted you can cache its instance into a variable and use it to listen for additional events as the customer interacts the element. This applies only to payment card and bank account fields.

```js
// mount a combined card element on a container `div`
var card = Rebilly.card.mount('#card');
```


## element.on()

Use the `on()` method to attach specific handlers to events. These handlers will be triggered when the customer interacts with the card element.

The method accepts two arguments:
- `eventName`: a string that defines the event name to which the handler will be attached to
- `handler`: a function to run when the event is triggered by the customer interaction


```js
element.on('ready', function() {
    console.log('Card element is ready to use!');
});
``` 

### Available events   

<table>
    <thead>
        <tr>
            <th>Event Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>ready</code></td>
            <td>Triggered after the element is mounted and the field has fully loaded into view.</td>
        </tr>
        <tr>
            <td><code>change</code></td>
            <td>
                <p>Triggered when the element has changed after the customer's input. Use this event to detect validation errors in the element.</p>
                <p>The <code>change</code> event handler is the only one to receive an argument from the element.</p>
                <p>The argument passed to the handler function will expose these properties:</p>
                <table>
                    <tbody>
                        <tr>
                            <td><code>valid</code></td>
                            <td>A boolean that is present if the element contains valid data.</td>
                        </tr>
                        <tr>
                            <td><code>source</code></td>
                            <td>A string indicating the source of the event. Returns the type of the element used.</td>
                        </tr>
                        <tr>
                            <td><code>error</code></td>
                            <td>An object that is present if the element has invalid data. Exposes the <code>error.code</code>, <code>error.message</code> and <code>error.type</code> properties.</td>
                        </tr>
                    </tbody>
                </table>                
            </td>
        </tr>
        <tr>
            <td><code>focus</code></td>
            <td>Triggered when the element gains focus.</td>
        </tr>
        <tr>
            <td><code>blur</code></td>
            <td>Triggered when the element loses focus.</td>
        </tr>
    </tbody>
</table>

### Example

In this example we enable the submit button only when the combined card field is ready and display the error messages whenever the input becomes invalid.

```js
// the form submit button is disabled by default
var submitButton = document.querySelector('#submit-button');
var card = Rebilly.card.mount('#card');

card.on('ready', function() {
    // re-enable the submit button
    submitButton.removeAttribute('disabled');
});

card.on('change', function(data) {
    if (data.error) {
        document.querySelector('#errors').innerText = error.message;
    }
});
```
