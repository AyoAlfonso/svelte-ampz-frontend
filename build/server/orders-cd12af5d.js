'use strict';

var index = require('./index-7460d1f3.js');
require('./index-9484d2e7.js');
require('cookie-universal');
var app = require('./app-7dc41c5a.js');
var index$3 = require('./index-721bdf69.js');
require('./index-eb724975.js');
require('./cart-b706556b.js');
var _CartItem = require('./_CartItem-62290bdb.js');

/* src/routes/my/orders.svelte generated by Svelte v3.16.0 */

const Orders = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let orders;

	async function getOrders() {
		try {
			let o = await app.get("orders/my");
			return orders = o.data;
		} catch(e) {
			app.goto("/login");
		}
	}

	getOrders();

	return `<main>
  <div class="${"lg:px-10 px-2"}">
    <div class="${"flex justify-between items-center my-4"}">
      <a href="${"/my"}">
        <i class="${"fa fa-arrow-left"}"></i>
      </a>
      <div class="${"text-2xl font-bold lg:p-6 text-center lg:text-left"}">
        Orders
      </div>
    </div>
    
    ${(function (__value) {
		if (index.is_promise(__value)) return `
      <div class="${"text-gray-700 font-bold text-xl mb-2"}">
        Please wait. Order being processed.
      </div>
    `;

		return (function (orders) {
			return `
      ${orders.length == 0
			? `<div class="${"text-gray-700 font-bold text-xl mb-2"}">
          No order placed yet.
        </div>`
			: `${index.each(orders, o => `${index.escape(o.orderNo)} -
          <span class="${"text-xs mute"}">${index.escape(index$3.date(o.createdAt))}</span>
          <div class="${"bg-white shadow rounded flex flex-wrap py-3 px-8\n            justify-between hover:shadow-xl"}">
            ${index.each(o.items, item => `${index.validate_component(_CartItem.CartItem, "CartItem").$$render(
					$$result,
					{
						product: {
							name: item.name,
							slug: item.slug,
							_id: item.pid,
							img: item.img
						},
						variant: {
							sku: item.sku,
							size: item.size,
							img: item.img,
							mrp: item.mrp,
							price: item.price,
							_id: item.vid
						},
						qty: item.qty,
						cartButton: false
					},
					{},
					{}
				)}`)}
          </div>`)}`}
    `;
		})(__value);
	})(getOrders())}
  </div>
</main>`;
});

exports.default = Orders;
