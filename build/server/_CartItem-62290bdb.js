'use strict';

var index = require('./index-7460d1f3.js');
var app = require('./app-7dc41c5a.js');
var index$3 = require('./index-721bdf69.js');
var cart = require('./cart-b706556b.js');

/* src/routes/cart/_CartButtons.svelte generated by Svelte v3.16.0 */

const CartButtons = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $cart = index.get_store_value(cart.cart);
	let { pid } = $$props, { vid } = $$props, { qty } = $$props;
	let loading = false;

	function checkCart({ pid, vid }) {
		let found = $cart.items.some(function (el) {
			return el.product._id === pid && el.variant._id === vid;
		});

		return found;
	}

	if ($$props.pid === void 0 && $$bindings.pid && pid !== void 0) $$bindings.pid(pid);
	if ($$props.vid === void 0 && $$bindings.vid && vid !== void 0) $$bindings.vid(vid);
	if ($$props.qty === void 0 && $$bindings.qty && qty !== void 0) $$bindings.qty(qty);

	return `<div class="${"flex"}">
  ${!checkCart({ pid, vid })
	? `<div ${!vid ? "disabled" : ""}>
      <button class="${"primary rounded px-2 rounded"}">
        <i class="${"fa fa-plus"}"></i>
        Add to Cart
      </button>
    </div>`
	: `<span class="${"mt-1"}">Quantity:  </span>
    <div>
      <div class="${"flex flex-wrap"}">
        <button class="${"muted rounded-full w-8 h-8"}">
          <i class="${"fa fa-minus m-auto"}" aria-hidden="${"true"}"></i>
        </button>
        <div class="${"px-2 flex items-center text-center"}">
          ${!loading
		? `<div>${index.escape(qty)}</div>`
		: `<img alt="${"loading svg"}" class="${"w-3 h-4"}" src="${"/loading.svg"}">`}
        </div>
        <button class="${"primary rounded-full w-8 h-8"}" :disabled="${"!variant || variant.price<1 || variant.stock<1 || loading"}">
          <i class="${"fa fa-plus m-auto"}" aria-hidden="${"true"}"></i>
        </button>
      </div>
    </div>`}
</div>`;
});

/* src/routes/cart/_CartItem.svelte generated by Svelte v3.16.0 */

function calculateOffPercent(mrp, price) {
	let percent = (mrp - price) * 100 / mrp;
	return Math.round(percent);
}

const CartItem = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $session;
	const { preloading, page, session } = app.stores$1();
	$session = index.get_store_value(session);

	let { product = {} } = $$props,
		{ variant = {} } = $$props,
		{ qty } = $$props,
		{ cartButton = true } = $$props;

	let loading = false;

	if ($$props.product === void 0 && $$bindings.product && product !== void 0) $$bindings.product(product);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
	if ($$props.qty === void 0 && $$bindings.qty && qty !== void 0) $$bindings.qty(qty);
	if ($$props.cartButton === void 0 && $$bindings.cartButton && cartButton !== void 0) $$bindings.cartButton(cartButton);
	$session = index.get_store_value(session);

	return `<div class="${"flex justify-between pt-5 pb-5"}">
  <div class="${"w-1/2 lg:w-1/3"}">
    <div>
      <img class="${"lg:rounded xs:rounded-b-none w-64"}" src="${"/3px.png"}"${index.add_attribute("data-src", $session.settings.CDN_URL + product.img, 0)} alt="${"product image"}">
      
    </div>
  </div>
  <div class="${"lg:w-4/5 right-0 xs:9/12"}">
    <div class="${"pl-4 font-hairline"}">
      <p class="${"text-black text-xs mb-2"}">
        <a${index.add_attribute("href", `/${product.slug}?id=${product._id}`, 0)}>${index.escape(product.name)}</a>
      </p>
      <div class="${"flex"}">
        <p class="${"text-gray-500 mb-2"}">
          <span>Size:</span>
          ${index.escape(variant.size)}
        </p>
        <span class="${"inline-block rounded-full bg-gray-300 h-2 w-2 m-2"}"></span>
        ${variant.stock < 5
	? `<span style="${"color: rgb(237, 113, 0);"}">${index.escape(variant.stock)} left</span>`
	: ``}
      </div>
      <p class="${"relative mb-2"}">
        <span class="${"text-black font-bold mb-2"}">${index.escape(index$3.currency(variant.price))}</span>
        ${calculateOffPercent(variant.mrp, variant.price) > 0
	? `<span class="${"text-gray-400 line-through ml-2 text-xs lg:text-sm"}">
            ${index.escape(index$3.currency(variant.mrp))}
          </span>
          <span class="${"ml-2 text-green-400 text-xs lg:text-sm"}">
            ${index.escape(calculateOffPercent(variant.mrp, variant.price))}% off
          </span>`
	: ``}
      </p>
      ${cartButton
	? `<div class="${"justify-between text-sm"}">
          <div class="${"flex flex-wrap justify-between"}">
            <div class="${"w-full lg:w-3/5 my-2"}">
              ${index.validate_component(CartButtons, "CartButtons").$$render($$result, { pid: product._id, vid: variant._id, qty }, {}, {})}
            </div>
            <div class="${"w-full lg:w-2/5 text-right my-2"}">
              <div class="${""}">
                <button class="${"ml-3 muted rounded py-2 px-3"}" ${loading ? "disabled" : ""}>
                  ${loading
		? `<img src="${"/loading.svg"}" class="${"w-3 h-3 rotateOutDownLeft"}" alt="${"loading icon"}">`
		: `<i class="${"fa fa-trash"}"></i>`}
                </button>
              </div>
            </div>
          </div>
        </div>`
	: ``}
    </div>
  </div>
</div>`;
});

exports.CartItem = CartItem;
