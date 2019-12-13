'use strict';

var index = require('./index-7460d1f3.js');

/* src/components/ui/Button.svelte generated by Svelte v3.16.0 */

const Button = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { icon = "" } = $$props,
		{ size = "default" } = $$props,
		{ text = "" } = $$props,
		{ color = "none" } = $$props,
		{ full = false } = $$props,
		{ rounded = false } = $$props;

	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.full === void 0 && $$bindings.full && full !== void 0) $$bindings.full(full);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);

	return `<button${index.add_attribute("rounded", rounded, 0)} class="${[
		"py-4 px-4 text-" + index.escape(size) + "\n  " + index.escape(color) + " hover:bg-purple-600 text-white",
		(rounded ? "rounded" : "") + " " + (size == "xl" ? "font-bold" : "") + " " + (full ? "w-full" : "")
	].join(" ").trim()}">
  ${$$slots.default ? $$slots.default({}) : ``}
</button>`;
});

exports.Button = Button;
