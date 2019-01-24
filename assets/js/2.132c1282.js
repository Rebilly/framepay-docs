(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{168:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"element-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element-instance","aria-hidden":"true"}},[t._v("#")]),t._v(" Element Instance")]),t._v(" "),n("p",[t._v("When an element is mounted you can cache its instance into a variable and use it to listen for additional events as the customer interacts the element. This applies only to payment card and bank account fields.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// mount a combined card element on a container `div`")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" card "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rebilly"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("mount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#card'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"element-on"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element-on","aria-hidden":"true"}},[t._v("#")]),t._v(" element.on()")]),t._v(" "),n("p",[t._v("Use the "),n("code",[t._v("on()")]),t._v(" method to attach specific handlers to events. These handlers will be triggered when the customer interacts with the card element.")]),t._v(" "),n("p",[t._v("The method accepts two arguments:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("eventName")]),t._v(": a string that defines the event name to which the handler will be attached to")]),t._v(" "),n("li",[n("code",[t._v("handler")]),t._v(": a function to run when the event is triggered by the customer interaction")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("element"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ready'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Card element is ready to use!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"available-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#available-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Available events")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("ready")])]),t._v(" "),n("td",[t._v("Triggered after the element is mounted and the field has fully loaded into view.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("change")])]),t._v(" "),n("td",[n("p",[t._v("Triggered when the element has changed after the customer's input. Use this event to detect validation errors in the element.")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("change")]),t._v(" event handler is the only one to receive an argument from the element.")]),t._v(" "),n("p",[t._v("The argument passed to the handler function will expose these properties:")]),t._v(" "),n("table",[n("tbody",[n("tr",[n("td",[n("code",[t._v("valid")])]),t._v(" "),n("td",[t._v("A boolean that is present if the element contains valid data.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("error")])]),t._v(" "),n("td",[t._v("An object that is present if the element has invalid data. Exposes the "),n("code",[t._v("error.code")]),t._v(", "),n("code",[t._v("error.message")]),t._v(" and "),n("code",[t._v("error.type")]),t._v(" properties.")])])])])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("focus")])]),t._v(" "),n("td",[t._v("Triggered when the element gains focus.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("blur")])]),t._v(" "),n("td",[t._v("Triggered when the element loses focus.")])])])]),t._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("p",[t._v("In this example we enable the submit button only when the combined card field is ready and display the error messages whenever the input becomes invalid.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// the form submit button is disabled by default")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" submitButton "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#submit-button'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" card "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rebilly"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("mount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#card'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncard"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ready'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// re-enable the submit button")]),t._v("\n    submitButton"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'disabled'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncard"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'change'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#errors'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);