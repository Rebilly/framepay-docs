(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("FramePay allows you to build your checkout flow by offloading strict PCI Compliance requirements directly to Rebilly while maintaining the same look and feel your customers are used to. Once the required payment card or bank account information is collected, FramePay generates a payment token you can use to complete the checkout process.")]),t._v(" "),s("iframe",{attrs:{border:"0",frameborder:"0",scrolling:"no",src:"/framepay-docs/examples/example1.html"}}),t._v(" "),s("p",[t._v("To create a checkout flow using FramePay you will have to complete these steps:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("FramePay is part of Rebilly.js. Simply include the line below into your checkout page to enable it.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("By default FramePay does not inject CSS styles for the elements that are being generated into your form. However we provide a CSS file you can use to give elements a default look.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("FramePay injects UI elements into your form that are hosted by Rebilly which allows it to securely collect payment instrument data from your customers.")]),t._v(" "),s("p",[t._v("Start by creating your payment form as you would usually. Then create empty DOM elements within your form to determine where FramePay should mount UI elements.")]),t._v(" "),s("p",[t._v("Payment card example:")]),t._v(" "),t._m(8),s("p",[t._v("After the page has loaded you need to initialize FramePay with your "),s("a",{attrs:{href:"https://app.rebilly.com/api-keys/add",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rebilly publishable API"),s("OutboundLink")],1),t._v(" key and mount the payment card element at the desired location.")]),t._v(" "),t._m(9),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Use your own publishable key")]),t._v(" "),s("p",[t._v("You must replace the key "),s("code",[t._v("pk_sandbox_1234567890")]),t._v(" with your own. We recommend starting with a sandbox key. To create a publishable key, "),s("a",{attrs:{href:"https://app.rebilly.com/api-keys/add",target:"_blank",rel:"noopener noreferrer"}},[t._v("visit Rebilly"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("By default a card element will generate a combined field that lets the customers enter their payment card number, expiry and CVV in a single input. However, you can chose to separate them by mounting into three separate locations. See the library reference for a list of supported field types.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("Alternatively you can display error messages only when submitting the form.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Once the payment token has been added to the form and submitted to your server you can use one of Rebilly's backend SDKs to finish the checkout flow.")]),t._v(" "),s("p",[t._v("Create a new customer, a payment instrument and finally a transaction.")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Rebilly offers SDKs for these programming languages:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/Rebilly/rebilly-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rebilly SDK for PHP"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Rebilly/rebilly-js-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rebilly SDK for Node.js"),s("OutboundLink")],1)])]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("For customization and configuration options available with FramePay visit the "),s("router-link",{attrs:{to:"/reference/"}},[t._v("detailed library reference")]),t._v(".")],1),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("Take a look at "),s("router-link",{attrs:{to:"/examples/"}},[t._v("example implementations")]),t._v(" of FramePay for payment cards, bank accounts and other payment methods supported by Rebilly.")],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[a("a",{attrs:{href:"#set-up-framepay"}},[this._v("Set up FramePay")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#set-up-your-form"}},[this._v("Set up your form")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#collect-customer-information-and-create-a-token"}},[this._v("Collect customer information and create a token")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#finish-the-checkout-flow"}},[this._v("Finish the checkout flow")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"set-up-framepay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-framepay","aria-hidden":"true"}},[this._v("#")]),this._v(" Set up FramePay")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.rebilly.com/framepay/v1/rebilly.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The library is then exposed in the global scope as "),a("code",[this._v("Rebilly")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"adding-default-element-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-default-element-styles","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding default element styles")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.rebilly.com/framepay/v1/rebilly.css"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"set-up-your-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-form","aria-hidden":"true"}},[this._v("#")]),this._v(" Set up your form")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/process"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("field"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Payment Card"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("payment-card"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- FramePay will inject the payment card field here --\x3e")]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Provide an automatic way to inject the\n            payment token as a hidden field --\x3e")]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-rebilly")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rebilly-token"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Checkout"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// initialize with your publishable key")]),t._v("\nRebilly"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("initialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("publishableKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'pk_sandbox_1234567890'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// mount a combined card element on the #payment-card `<div>` in the form above")]),t._v("\nRebilly"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("mount")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'#payment-card'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Inline validation is automatic but no error messages are displayed unless you subscribe to the "),a("code",[this._v("change")]),this._v(" event on the element and display them.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("card"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'change'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// event.error exposes {code, message, type}")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// field input became valid")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("Error Handling")]),this._v(" "),a("p",[this._v("Wrap your code with a "),a("code",[this._v("try/catch")]),this._v(" block to detect any thrown errors that would prevent proper execution of FramePay. Errors that relate to validation and allow execution will be passed to the "),a("code",[this._v("createToken().catch()")]),this._v(" method and other event handler you defined for elements.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"collect-customer-information-and-create-a-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect-customer-information-and-create-a-token","aria-hidden":"true"}},[this._v("#")]),this._v(" Collect customer information and create a token")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To collect the customer's information and the payment card data, define an event handler for the form "),a("code",[this._v("submit")]),this._v(" event. Any "),a("code",[this._v("input")]),this._v(" fields with a "),a("code",[this._v("data-rebilly")]),this._v(" attribute will be parsed automatically and sent alongside the elements' data.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("See the "),a("a",{attrs:{href:"#"}},[this._v("list of all "),a("code",[this._v("data-rebilly")]),this._v(" properties")]),this._v(" that can be automatically saved by FramePay for more details.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Trigger "),a("code",[this._v("Rebilly.createToken")]),this._v(" to generate and inject the payment token into your form. The method returns a "),a("code",[this._v("Promise")]),this._v(" with a single argument representing the API result of the operation. Validation or network errors can be caught using a "),a("code",[this._v("catch()")]),this._v(" handler and displayed to the customer.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" form "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'form'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nform"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'submit'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Rebilly"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// we have a token field in the form")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// thus we can submit directly")]),t._v("\n            form"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// see error.code and error.message")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Alternatively you can exclude the "),a("code",[this._v('data-rebilly="token"')]),this._v(" field and add the payment token information to the form dynamically before submitting it to your server.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"finish-the-checkout-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finish-the-checkout-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Finish the checkout flow")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"rebilly-backend-sdks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebilly-backend-sdks","aria-hidden":"true"}},[this._v("#")]),this._v(" Rebilly Backend SDKs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"explore-the-framepay-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explore-the-framepay-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Explore the FramePay Reference")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"view-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" View Examples")])}],!1,null,null,null);a.default=e.exports}}]);