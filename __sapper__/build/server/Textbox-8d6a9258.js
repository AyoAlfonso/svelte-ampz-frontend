'use strict';

var index = require('./index-7460d1f3.js');
require('./index-16d8a4c6.js');

/* src/components/ui/Textbox.svelte generated by Svelte v3.16.0 */

const css = {
	code: ".floating-label.svelte-toquva{position:relative}.floating-input.svelte-toquva{font-size:14px;padding:4px 4px;display:block;width:100%;height:48px;padding:14px 12px 0;border:none}.floating-input.svelte-toquva:focus{outline:none;border-bottom:2px solid red}label.svelte-toquva{color:#999;font-size:16px;font-weight:normal;position:absolute;pointer-events:none;left:8px;top:13px;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all}.floating-input:focus~label.svelte-toquva,.floating-input:not(:placeholder-shown)~label.svelte-toquva{top:-1px;font-size:14px;color:#555}.floating-select:focus~label.svelte-toquva,.floating-select:not([value=\"\"]):valid~label.svelte-toquva{top:-18px;font-size:14px;color:#555}",
	map: "{\"version\":3,\"file\":\"Textbox.svelte\",\"sources\":[\"Textbox.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher } from \\\"svelte\\\";\\n  const dispatch = createEventDispatcher();\\n  export let label = \\\"\\\",\\n    value = \\\"\\\",\\n    cls = \\\"\\\",\\n    placeholder = \\\" \\\";\\n</script>\\n\\n<style>\\n  .floating-label {\\n    position: relative;\\n  }\\n  .floating-input {\\n    font-size: 14px;\\n    padding: 4px 4px;\\n    display: block;\\n    width: 100%;\\n    height: 48px;\\n    padding: 14px 12px 0;\\n    border: none;\\n  }\\n\\n  .floating-input:focus {\\n    outline: none;\\n    border-bottom: 2px solid red;\\n  }\\n\\n  label {\\n    color: #999;\\n    font-size: 16px;\\n    font-weight: normal;\\n    position: absolute;\\n    pointer-events: none;\\n    left: 8px;\\n    top: 13px;\\n    transition: 0.2s ease all;\\n    -moz-transition: 0.2s ease all;\\n    -webkit-transition: 0.2s ease all;\\n  }\\n\\n  .floating-input:focus ~ label,\\n  .floating-input:not(:placeholder-shown) ~ label {\\n    top: -1px;\\n    font-size: 14px;\\n    color: #555;\\n  }\\n\\n  .floating-select:focus ~ label,\\n  .floating-select:not([value=\\\"\\\"]):valid ~ label {\\n    top: -18px;\\n    font-size: 14px;\\n    color: #555;\\n  }\\n</style>\\n\\n<div class={cls}>\\n  <div class=\\\"floating-label mb-10\\\">\\n    <input\\n      bind:value\\n      class=\\\"floating-input bg-gray-100 border-b w-full rounded\\n      hover:bg-gray-300 focus:outline-none focus:border-pink-500\\\"\\n      {placeholder}\\n      aria-label={label} />\\n    <span class=\\\"highlight\\\" />\\n    <label>{label}</label>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAUE,eAAe,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,eAAe,cAAC,CAAC,AACf,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CACpB,MAAM,CAAE,IAAI,AACd,CAAC,AAED,6BAAe,MAAM,AAAC,CAAC,AACrB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,GAAG,AAC9B,CAAC,AAED,KAAK,cAAC,CAAC,AACL,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,IAAI,CACpB,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,CACzB,eAAe,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,CAC9B,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,AACnC,CAAC,AAED,eAAe,MAAM,CAAG,mBAAK,CAC7B,eAAe,KAAK,kBAAkB,CAAC,CAAG,KAAK,cAAC,CAAC,AAC/C,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,AACb,CAAC,AAED,gBAAgB,MAAM,CAAG,mBAAK,CAC9B,gBAAgB,KAAK,CAAC,KAAK,CAAC,EAAE,CAAC,CAAC,MAAM,CAAG,KAAK,cAAC,CAAC,AAC9C,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,AACb,CAAC\"}"
};

const Textbox = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const dispatch = index.createEventDispatcher();

	let { label = "" } = $$props,
		{ value = "" } = $$props,
		{ cls = "" } = $$props,
		{ placeholder = " " } = $$props;

	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.cls === void 0 && $$bindings.cls && cls !== void 0) $$bindings.cls(cls);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
	$$result.css.add(css);

	return `<div class="${index.escape(index.null_to_empty(cls)) + " svelte-toquva"}">
  <div class="${"floating-label mb-10 svelte-toquva"}">
    <input class="${"floating-input bg-gray-100 border-b w-full rounded\n      hover:bg-gray-300 focus:outline-none focus:border-pink-500 svelte-toquva"}"${index.add_attribute("placeholder", placeholder, 0)}${index.add_attribute("aria-label", label, 0)}${index.add_attribute("value", value, 1)}>
    <span class="${"highlight"}"></span>
    <label class="${"svelte-toquva"}">${index.escape(label)}</label>
  </div>
</div>`;
});

exports.Textbox = Textbox;
