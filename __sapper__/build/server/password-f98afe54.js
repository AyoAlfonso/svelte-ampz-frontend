'use strict';

var index = require('./index-7460d1f3.js');
require('./index-1dcc0b48.js');
require('cookie-universal');
require('./api-3a84b6e0.js');
require('./app-dbb18491.js');
var Button = require('./Button-eb848e8a.js');
require('./index-eb724975.js');
var Passwordbox = require('./Passwordbox-5cc6423f.js');
require('./auth-a9611a60.js');

/* src/routes/my/password.svelte generated by Svelte v3.16.0 */

const Password = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let password = {}, show = false, err = null;

	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<main class="${"m-auto w-full lg:w-1/2"}">
  <div class="${"flex justify-between items-center my-4"}">
    <a href="${"/my"}">
      <i class="${"fa fa-arrow-left"}"></i>
    </a>
    <h1 class="${"text-2xl font-bold p-6 text-center"}">Change Password</h1>
  </div>
  ${err
		? `<p class="${"mb-2 p-2 text-xs primary rounded"}">${index.escape(err)}</p>`
		: `${show
			? `<p class="${"mb-2 p-2 text-xs bg-yellow-400 rounded"}">Password Changed</p>`
			: ``}`}
  <form class="${"text-center bg-white"}">
    ${index.validate_component(Passwordbox.Passwordbox, "Passwordbox").$$render(
			$$result,
			{
				label: "Current Password",
				value: password.oldPassword
			},
			{
				value: $$value => {
					password.oldPassword = $$value;
					$$settled = false;
				}
			},
			{}
		)}
    ${index.validate_component(Passwordbox.Passwordbox, "Passwordbox").$$render(
			$$result,
			{
				label: "New Password",
				value: password.newPassword
			},
			{
				value: $$value => {
					password.newPassword = $$value;
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

exports.default = Password;
