(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Lead source attribution is the process of giving credit to different marketing campaigns that contributed to the accomplishment of a specific goal (such as customer makes a purchase).")]),t._v(" "),e("p",[t._v("To dive into that deeper, let’s first take a look at what a Lead Source is, and what Attribution is, and then put it together.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("A lead source is Rebilly’s term for the marketing campaign responsible for a customer interaction (typically a customer purchasing something).")]),t._v(" "),e("p",[t._v("A lead source is just some additional metadata that attaches to the customer’s record, and contains attributes common from both Google analytics and affiliate tracking applications:")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("Any and all of these parameters are optional.")]),t._v(" "),e("p",[t._v("Passing the lead source parameters to FramePay happens automatically when the payment token is created from a web address with Google UTM parameters. You can also manually define all lead source parameters if you do not want to use UTM parameters.")]),t._v(" "),e("p",[t._v("However, there may be times when you should consider collecting and creating this in at other touch points, such as if you have a short-form submit prior to the payment form, it can be beneficial to start to collect and record that data.")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("Attribution is the process of giving credit to various campaigns that happen at specific touch points on the way to the goal. The purpose of attribution is to know which marketing campaigns are working so that you can invest more and refine those that aren’t.")]),t._v(" "),e("p",[t._v("In the case of FramePay the attribution is done when the payment token is created from the collected customer data.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("There are five different UTM parameters, which may be used in any order:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("In addition to the UTM parameters, FramePay will look for additional values to collect for the lead source data in the web address:")]),t._v(" "),t._m(8),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Disabling Automatic Attribution")]),t._v(" "),e("p",[t._v("If the web address hosting FramePay contains UTM parameters but you do not wish to collect that data you can provide an empty "),e("code",[t._v("object")]),t._v(" to the "),e("code",[t._v("extraData")]),t._v(" option when "),e("router-link",{attrs:{to:"/reference/rebilly.html#extra-data"}},[t._v("creating a token")]),t._v(".")],1)]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("Considering a checkout page hosting FramePay located at this web address:")]),t._v(" "),t._m(10),e("p",[t._v("The following lead source data would be gathered from the UTM and FramePay parameters:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("If you wish to provide additional information you must define the lead source object manually when "),e("router-link",{attrs:{to:"/reference/rebilly.html#extra-data"}},[t._v("creating the payment token")]),t._v(".")],1),t._v(" "),t._m(13),e("p",[t._v("This method can also be used to prevent UTM parameter collection:")]),t._v(" "),t._m(14),e("p",[t._v("You can find a list of all accepted lead source parameters in the "),e("router-link",{attrs:{to:"/reference/rebilly.html#extra-data"}},[e("code",[t._v("createToken")]),t._v(" documentation")]),t._v(".")],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"lead-source-attribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lead-source-attribution","aria-hidden":"true"}},[this._v("#")]),this._v(" Lead Source Attribution")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"what-s-a-lead-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-a-lead-source","aria-hidden":"true"}},[this._v("#")]),this._v(" What's a Lead Source?")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[t._v("Source (a UTM parameter)")]),t._v(" "),e("li",[t._v("Medium (a UTM parameter)")]),t._v(" "),e("li",[t._v("Campaign (a UTM parameter)")]),t._v(" "),e("li",[t._v("Content (a UTM parameter)")]),t._v(" "),e("li",[t._v("Term (a UTM parameter)")]),t._v(" "),e("li",[t._v("Affiliate (an affiliate tracking parameter)")]),t._v(" "),e("li",[t._v("SubAffiliate (an affiliate tracking parameter)")]),t._v(" "),e("li",[t._v("ClickId (an affiliate tracking parameter)")]),t._v(" "),e("li",[t._v("SalesAgent (a sales tracking parameter)")]),t._v(" "),e("li",[t._v("Currency and Amount:  the cost of the lead")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"what-is-attribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-attribution","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Attribution?")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"automatic-attribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-attribution","aria-hidden":"true"}},[this._v("#")]),this._v(" Automatic Attribution")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If the web address hosting FramePay contains "),a("strong",[this._v("Google Analytics UTM")]),this._v(" parameters then their value will be automatically collected.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("UTM Parameter")]),t._v(" "),e("th",[t._v("Example")]),t._v(" "),e("th",[t._v("Lead Source Parameter")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("utm_source")])]),t._v(" "),e("td",[e("code",[t._v("utm_source=Google")])]),t._v(" "),e("td",[e("code",[t._v("source")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("utm_medium")])]),t._v(" "),e("td",[e("code",[t._v("utm_medium=cpc")])]),t._v(" "),e("td",[e("code",[t._v("medium")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("utm_campaign")])]),t._v(" "),e("td",[e("code",[t._v("utm_campaign=facebook")])]),t._v(" "),e("td",[e("code",[t._v("campaign")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("utm_term")])]),t._v(" "),e("td",[e("code",[t._v("utm_term=red+shirt")])]),t._v(" "),e("td",[e("code",[t._v("term")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("utm_content")])]),t._v(" "),e("td",[e("code",[t._v("utm_content=bannerlink")])]),t._v(" "),e("td",[e("code",[t._v("content")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"framepay-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#framepay-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" FramePay Parameters")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Lead Source Parameter")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("affiliate")])]),t._v(" "),e("td",[e("code",[t._v("affiliate=Acme")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("subAffiliate")])]),t._v(" "),e("td",[e("code",[t._v("subAffiliate=junior")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("clickId")])]),t._v(" "),e("td",[e("code",[t._v("clickId=btnSale")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("salesAgent")])]),t._v(" "),e("td",[e("code",[t._v("salesAgent=jdoe")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("https://www.example.com/checkout?utm_content=buynowlink&utm_medium=social&utm_source=facebook.com&utm_campaign=instantbuy&affiliate=gearbuy\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    leadSource"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'buynowlink'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        medium"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'social'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        source"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'facebook.com'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        campaign"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'instantbuy'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        affiliate"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'gearbuy'")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"manual-attribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-attribution","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual Attribution")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" extraData "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    leadSource"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'buylink'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        medium"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'affiliate'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        source"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'affiliate-website.com'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        campaign"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'affiliate-campaign'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        affiliate"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'af12345'")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRebilly"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("createToken")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extraData"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" extraData "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    leadSource"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRebilly"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("createToken")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extraData"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);