'use strict';

var index = require('./index-7460d1f3.js');
require('./index-1dcc0b48.js');
require('cookie-universal');
var api = require('./api-3a84b6e0.js');
var app = require('./app-dbb18491.js');
var Textbox = require('./Textbox-51d4385a.js');
var Button = require('./Button-eb848e8a.js');
require('./index-eb724975.js');
require('./auth-a9611a60.js');

/* src/routes/my/address.svelte generated by Svelte v3.16.0 */

const Address = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let user = {}, show = false;

	async function getMe() {
		try {
			user = await api.get("users/me");
		} catch(e) {
			app.goto("/login");
		}
	}

	getMe();

	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<main class="${"m-auto w-full lg:w-1/2"}">
  <div class="${"flex justify-between items-center my-4"}">
    <a href="${"/my"}">
      <i class="${"fa fa-arrow-left"}"></i>
    </a>
    <div class="${"text-2xl font-bold px-6 text-center"}">Address</div>
  </div>
  ${ `${show
			? `<p class="${"mb-2 p-2 text-xs bg-yellow-400 rounded"}">Address Updated</p>`
			: ``}`}
  <form class="${"text-center bg-white"}">
    ${index.validate_component(Textbox.Textbox, "Textarea").$$render(
			$$result,
			{
				label: "Address",
				full: true,
				value: user.address
			},
			{
				value: $$value => {
					user.address = $$value;
					$$settled = false;
				}
			},
			{}
		)}
    <br>
    ${index.validate_component(Button.Button, "Button").$$render(
			$$result,
			{
				type: "submit",
				full: true,
				rounded: true,
				size: "xl",
				color: "primary"
			},
			{},
			{
				default: () => `
      Save
    `
			}
		)}
  </form>
</main>`;
	} while (!$$settled);

	return $$rendered;
});

exports.default = Address;
