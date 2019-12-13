'use strict';

var index = require('./index-7460d1f3.js');
require('./index-1390c2aa.js');
require('cookie-universal');
require('./api-d6db2657.js');
var app = require('./app-605a28d4.js');
var Button = require('./Button-eb848e8a.js');
var index$3 = require('./index-2503b349.js');
require('./index-eb724975.js');
var Header = require('./Header-29a19c30.js');
require('./auth-74e0780c.js');
var cart = require('./cart-fcc7c51c.js');
var _CartBanners = require('./_CartBanners-0ce4e55b.js');
var _CartItem = require('./_CartItem-c7f039e1.js');

/* src/routes/cart/index.svelte generated by Svelte v3.16.0 */

const Cart = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $session;
	let $cart = index.get_store_value(cart.cart);
	const { session } = app.stores$1();
	$session = index.get_store_value(session);

	$session = index.get_store_value(session);

	return `<main>
  ${index.validate_component(Header.Header, "Header").$$render($$result, { home: true }, {}, {})}
  <div>
    ${!$cart || !$cart.qty || $cart.qty == 0
	? `${index.validate_component(_CartBanners.EmptyCart, "EmptyCart").$$render($$result, {}, {}, {})}`
	: `<div class="${"flex flex-wrap justify-between"}">
        <div class="${"lg:w-16 xs:w-0"}"></div>
        <div class="${"w-full lg:w-2/4 px-2"}">
          <div class="${"w-full hr-line justify-between pb-2"}">
            
            <div class="${"w-full p-3 bg-white mt-3 flex flex-wrap"}">
              <div class="${"text-left headings text-3xl w-20 border-r border-gray-200\n                font-bold"}">
                Cart
              </div>
              <span class="${"text-sm mx-4 text-gray-500"}">
                ${index.escape($cart.qty)} items
                <br>
                Total ${index.escape(index$3.currency($cart.total))}
              </span>
            </div>
          </div>
          ${index.each($cart.items, (item, index$1) => `${index.validate_component(_CartItem.CartItem, "CartItem").$$render(
			$$result,
			{
				product: item.product,
				variant: item.variant,
				qty: item.qty
			},
			{},
			{}
		)}`)}
          ${index.validate_component(_CartBanners.CartBanners, "CartBanners").$$render($$result, {}, {}, {})}
        </div>
        ${index.validate_component(_CartBanners.CartSummary, "CartSummary").$$render($$result, { cart: $cart }, {}, {
			default: () => `
          ${index.validate_component(Button.Button, "Button").$$render(
				$$result,
				{
					full: true,
					rounded: true,
					size: "xl",
					color: "primary"
				},
				{},
				{
					default: () => `
            PLACE ORDER
          `
				}
			)}
        `
		})}
        <div class="${"w-8"}"></div>
      </div>`}
  </div>
</main>`;
});

exports.default = Cart;
