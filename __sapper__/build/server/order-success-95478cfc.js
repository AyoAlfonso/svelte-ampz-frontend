'use strict';

var index = require('./index-7460d1f3.js');
require('./index-cb97644f.js');
require('cookie-universal');
var api = require('./api-8725a28b.js');
var app$1 = require('./app-df97e3a1.js');
var index$3 = require('./index-3421980f.js');
require('./index-eb724975.js');
var Header = require('./Header-cf63d22b.js');
require('./auth-a93cbed1.js');
require('./cart-2aab109d.js');
var _CartItem = require('./_CartItem-062705bf.js');

/* src/routes/cart/order-success.svelte generated by Svelte v3.16.0 */

const Order_success = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $page;
	const { page } = app$1.stores$1();
	$page = index.get_store_value(page);
	let order = {};

	async function getOrderDetail() {
		try {
			order = await api.get("orders/public/" + $page.query.id);
			return order;
		} catch(e) {
			
		}
	}

	getOrderDetail();
	$page = index.get_store_value(page);

	return `<main>
  ${index.validate_component(Header.Header, "Header").$$render($$result, { home: true }, {}, {})}
  <div class="${"flex flex-wrap justify-center"}">
    ${(function (__value) {
		if (index.is_promise(__value)) return `
      <div class="${"text-gray-700 font-bold text-xl mb-2"}">
        Please wait. Order being processed.
      </div>
    `;

		return (function (order) {
			return `
      
      <div class="${"xs:w-full lg:w-1/3 mt-10 px-2"}">
        <div class="${"px-28 py-16 rounded bg-green-600 text-white font-bold text-xl\n          mb-4 text-center"}">
          <i class="${"fa fa-check"}"></i>
          All done
        </div>
        <div class="${"font-hairline text-lg"}">
          Your Order number is
          <span class="${"font-semibold"}">${index.escape(order.orderNo)}</span>
        </div>
        <div class="${"flex justify-between pt-5 pb-5"}">
          ${index.each(order.items, (item, index$1) => `${index.validate_component(_CartItem.CartItem, "CartItem").$$render(
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
        </div>
        <div class="${"flex justify-center"}">
          <button class="${"mt-2 py-3 px-12 tracking-wide primary tet-2xl font-bold\n            rounded"}">
            SHOP MORE
          </button>
        </div>
      </div>
      <div class="${"lg:w-1/4 mt-2 lg:mt-10 w-full px-4"}">
        <div class="${"4/5 right-0 pb-3 bb"}">
          <div>
            <p class="${"text-black font-normal text-sm"}">Price Summary</p>
          </div>
        </div>
        <div class="${"4/5 right-0 pb-10 pt-2 border-b border-gray-300"}">
          <div class="${"flex justify-between mt-2 text-sm"}">
            <div class="${"w-1/2 font-bold text-left"}">Total</div>
            <div class="${"ml-2 w-1/2 font-bold text-black-400 text-right"}">
              ${index.escape(index$3.currency(order.amount.total))}
            </div>
          </div>
          <div class="${"flex justify-between mt-2 text-xs"}">
            <div class="${" text-left"}">Pay by ${index.escape(order.payment.method)}</div>
            <div class="${"text-black-400 text-right"}">
              ${index.escape(index$3.currency(order.amount.total))}
            </div>
          </div>
        </div>
        <div>
          <div class="${"py-3 font-semibold text-gray-700"}">Shipping address</div>
          <div class="${"text-sm"}">
            <div class="${"py-2 pb-6"}">${index.escape(order.address)}</div>
          </div>
        </div>
      </div>
    `;
		})(__value);
	})(getOrderDetail())}
  </div>
</main>`;
});

exports.default = Order_success;
