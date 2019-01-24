# Lead Source Attribution

Lead source attribution is the process of giving credit to different marketing campaigns that contributed to the accomplishment of a specific goal (such as customer makes a purchase).

To dive into that deeper, let’s first take a look at what a Lead Source is, and what Attribution is, and then put it together.

### What's a Lead Source? 

A lead source is Rebilly’s term for the marketing campaign responsible for a customer interaction (typically a customer purchasing something).  

A lead source is just some additional metadata that attaches to the customer’s record, and contains attributes common from both Google analytics and affiliate tracking applications:

- Source (a UTM parameter)
- Medium (a UTM parameter)
- Campaign (a UTM parameter)
- Content (a UTM parameter)
- Term (a UTM parameter)
- Affiliate (an affiliate tracking parameter)
- SubAffiliate (an affiliate tracking parameter)
- ClickId (an affiliate tracking parameter)
- SalesAgent (a sales tracking parameter)
- Path (the path of the URL where the lead was recorded)
- Currency and Amount:  the cost of the lead

Any and all of these parameters are optional.

Passing the lead source parameters to FramePay happens automatically when the payment token is created from a web address with Google UTM parameters. You can also manually define all lead source parameters if you do not want to use UTM parameters.
 
However, there may be times when you should consider collecting and creating this in at other touch points, such as if you have a short-form submit prior to the payment form, it can be beneficial to start to collect and record that data.

### What is Attribution?
Attribution is the process of giving credit to various campaigns that happen at specific touch points on the way to the goal. The purpose of attribution is to know which marketing campaigns are working so that you can invest more and refine those that aren’t. 

In the case of FramePay the attribution is done when the payment token is created from the collected customer data. 

## Automatic Attribution

If the web address hosting FramePay contains **Google Analytics UTM** parameters then their value will be automatically collected.

There are five different UTM parameters, which may be used in any order:

<table>
    <thead>
        <tr>
            <th>UTM Parameter</th>
            <th>Example</th>
            <th>Lead Source Parameter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>utm_source</code></td>
            <td><code>utm_source=Google</code></td>
            <td><code>source</code></td>
        </tr>
        <tr>
            <td><code>utm_medium</code></td>
            <td><code>utm_medium=cpc</code></td>
            <td><code>medium</code></td>
        </tr>
        <tr>
            <td><code>utm_campaign</code></td>
            <td><code>utm_campaign=facebook</code></td>
            <td><code>campaign</code></td>
        </tr>
        <tr>
            <td><code>utm_term</code></td>
            <td><code>utm_term=red+shirt</code></td>
            <td><code>term</code></td>
        </tr>
        <tr>
            <td><code>utm_content</code></td>
            <td><code>utm_content=bannerlink</code></td>
            <td><code>content</code></td>
        </tr>
    </tbody>
</table>


::: warning Disabling Automatic Attribution
If the web address hosting FramePay contains UTM parameters but you do not wish to collect that data you can provide an empty `object` to the `extraData` option when [creating a token](/reference/rebilly.html#extra-data).
:::
### Example

Considering a checkout page hosting FramePay located at this web address:
```
https://www.example.com/checkout?utm_content=buynowlink&utm_medium=social&utm_source=facebook.com&utm_campaign=instantbuy
```

The following lead source data would be gathered from the UTM parameters:

```js
{
    leadSource: {
        content: 'buynowlink',
        medium: 'social',
        source: 'facebook.com',
        campaign: 'instantbuy'
    }
}
```

## Manual Attribution

If you wish to provide additional information you must define the lead source object manually when [creating the payment token](/reference/rebilly.html#extra-data).

```js
var extraData = {
    leadSource: {
        content: 'buylink',
        medium: 'affiliate',
        source: 'affiliate-website.com',
        campaign: 'affiliate-campaign',
        affiliate: 'af12345',
        path: 'http://www.example.com/some/landing/path'
    }
};
Rebilly.createToken(form, extraData);
``` 

This method can also be used to prevent UTM parameter collection:

```js
var extraData = {
    leadSource: {}
};
Rebilly.createToken(form, extraData);
``` 

You can find a list of all accepted lead source parameters in the [`createToken` documentation](/reference/rebilly.html#extra-data).
