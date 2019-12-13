'use strict';

var index = require('./index-7460d1f3.js');
require('./index-1390c2aa.js');
require('cookie-universal');
var app = require('./app-605a28d4.js');
require('./index-eb724975.js');
require('./index-c0882747.js');
var _apiv1 = require('./_apiv1-52c62208.js');
require('./crossfade-0ab1fbee.js');

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
      
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
      // console.log(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : ""))
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e);
    }
  }
  function humanizeDate(date_str) {
   let month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   let date_arr = date_str.split('-');
   let day = date_arr[2].split('T')[0];
    return month[Number(date_arr[1]) - 1] + " " + Number(day) + ", " + date_arr[0]
  }

/* src/routes/opportunities/[slug].svelte generated by Svelte v3.16.0 */

const css = {
	code: ".nav-items.svelte-br3b3h li a.svelte-br3b3h{color:#fff;font-size:15px;padding:10px 5px;margin-top:30px;font-family:\"Open Sans\", sans-serif;text-transform:capitalize;line-height:15px;position:relative;z-index:1}.no-opportunity.svelte-br3b3h{text-align:center;margin:150px;color:#db9a03;font-size:18px;font-weight:800}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script >\\n    import { onMount, afterUpdate } from \\\"svelte\\\";\\n    import { get } from \\\"../../lib/_apiv1\\\";\\n    import { formatMoney, humanizeDate } from \\\"../../lib/common\\\";\\n    import { stores } from \\\"@sapper/app\\\";\\n    import { send, receive } from \\\"../../actions/crossfade\\\";\\n\\n    const { page } = stores();\\n    const { slug } = $page.params;\\n\\n    let inProgress = false;\\n    let opportunity;\\n    let otherOpportunities = false;\\n    let opportunity_status;\\n\\tonMount(async () => {\\n\\n        inProgress = true;\\n        opportunity_status = 'Loading ...'\\n        const opportunityRes =  await get(\\\"opportunity/\\\"+slug, null , null)\\n        if(opportunityRes) {\\n            opportunity = opportunityRes.data;\\n            opportunity.program_date = humanizeDate(opportunity.program_date) \\n            opportunity.application_deadline = humanizeDate(opportunity.application_deadline) \\n            opportunity.price = formatMoney(50000)\\n            opportunity_status = 'No opportunity found'\\n        }\\n        inProgress = false;\\n    })\\n    \\n    function handleApplyLink(){\\n        window.location.href=`//${opportunity.application_link}`\\n    }\\n</script>\\n\\n<style>\\n.nav-items li a {\\n    color: #fff;\\n    font-size: 15px;\\n    padding: 10px 5px;\\n    margin-top: 30px;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    text-transform: capitalize;\\n    line-height: 15px;\\n    position: relative;\\n    z-index: 1;\\n}\\n.nav-items li a.btn {\\n  \\n}\\n\\n.no-opportunity {\\n    text-align: center;\\n    margin: 150px;\\n    color: #db9a03;\\n    font-size: 18px;\\n    font-weight: 800;\\n}\\n\\n</style>\\n\\n\\n<main>\\n\\n<div class=\\\"wrapper opportunity\\\">\\n   <div class=\\\"nav\\\">\\n                    <a href=\\\"go\\\" class=\\\"brand-logo\\\">\\n                    <img src=\\\"img/logo.png\\\" alt=\\\"AMPZ\\\">\\n                    </a>\\n                    <ul class=\\\"nav-items\\\">\\n                        <li><a href=\\\"about-ampz\\\">About Us</a></li>\\n                        <li><a href=\\\"products\\\">Products</a></li>\\n                        <li><a href=\\\"opportunities\\\">Opportunities</a></li>\\n                        <li><a href=\\\"waitlist\\\" class=\\\"btn\\\">Get Started</a></li>\\n                    </ul>\\n                    <i class=\\\"material-icons menu-btn\\\">menu</i>\\n            </div>\\n    \\n        <div class=\\\"content\\\">\\n        {#if opportunity}\\n            <div in:receive out:send class=\\\"main-content\\\">\\n                <a href=\\\"/opportunities\\\" class=\\\"back\\\">&lsaquo; Back to Opportunities</a>\\n                <div class=\\\"title\\\">\\n                    <h2 class=\\\"left open-sans\\\">{opportunity.title}</h2>\\n                    <img src=\\\"img/arrow.png\\\" alt=\\\"\\\" class=\\\"right\\\">\\n                    <div class=\\\"clearfix\\\"></div>\\n                </div>\\n                <h4 class=\\\"subtitle open-sans\\\">{opportunity.sport} | {opportunity.location}</h4>\\n                <img src=\\\"img/opportunity.png\\\" class=\\\"banner\\\" alt=\\\"\\\">\\n                <p class=\\\"description\\\">\\n                    {opportunity.description}\\n                </p>\\n                <div class=\\\"details\\\">\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Price</p>\\n                        <p class=\\\"body price\\\">\\n                            <span class=\\\"currency\\\">NGN</span>\\n                            <span>{opportunity.price}</span>\\n                        </p>\\n                    </div>\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Sport</p>\\n                        <p class=\\\"body\\\">{opportunity.sport}</p>\\n                    </div>\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Date</p>\\n                        <p class=\\\"body\\\">{opportunity.program_date}</p>\\n                    </div>\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Minimum Age</p>\\n                        <p class=\\\"body\\\">{opportunity.age}</p>\\n                    </div>\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Location</p>\\n                        <p class=\\\"body\\\">{opportunity.location}</p>\\n                    </div>\\n                    <div class=\\\"item\\\">\\n                        <p class=\\\"head\\\">Apply before</p>\\n                        <p class=\\\"body\\\">{opportunity.application_deadline}</p>\\n                    </div>\\n                </div>\\n                <button on:click={handleApplyLink} class=\\\"btn\\\">Apply</button>\\n            </div>\\n         {/if}\\n        <h3 class=\\\"related-title\\\">Related Opportunities</h3>\\n\\n        <div class=\\\"no-opportunity\\\" > No Related Opportunities yet </div>\\n        <div class=\\\"grid-container\\\">\\n           {#if otherOpportunities}\\n            <div class=\\\"item\\\">\\n                <div class=\\\"item-content\\\">\\n                    <div class=\\\"img img3\\\"></div>\\n                    <div class=\\\"text\\\">\\n                        <h4 class=\\\"title open-sans\\\">Juventus Academy Pre-Season (F)</h4>\\n                        <h5 class=\\\"subtitle\\\">Basketball | Ibadan</h5>\\n                        <p class=\\\"main-text\\\">\\n                            Every talented kid deserves an and engaging summer to develop following his recruitment by george town hoyas men's basket...\\n                        </p>\\n                        <div class=\\\"main-text\\\">\\n                            <span class=\\\"left small\\\">Posted on 27 Nov</span>\\n                            <a href=\\\"go\\\" class=\\\"right\\\">Read More</a>\\n                            <div class=\\\"clearfix\\\"></div>\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n         {/if}\\n        </div>\\n    </div>\\n</div>\\n\\n</main>\"],\"names\":[],\"mappings\":\"AAmCA,wBAAU,CAAC,EAAE,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACd,CAAC,AAKD,eAAe,cAAC,CAAC,AACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACpB,CAAC\"}"
};

const U5Bslugu5D = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $page;
	const { page } = app.stores$1();
	$page = index.get_store_value(page);
	const { slug } = $page.params;
	let opportunity;

	index.onMount(async () => {
		const opportunityRes = await _apiv1.get("opportunity/" + slug, null, null);

		if (opportunityRes) {
			opportunity = opportunityRes.data;
			opportunity.program_date = humanizeDate(opportunity.program_date);
			opportunity.application_deadline = humanizeDate(opportunity.application_deadline);
			opportunity.price = formatMoney(50000);
		}
	});

	$$result.css.add(css);
	$page = index.get_store_value(page);

	return `<main>

<div class="${"wrapper opportunity"}">
   <div class="${"nav"}">
                    <a href="${"go"}" class="${"brand-logo"}">
                    <img src="${"img/logo.png"}" alt="${"AMPZ"}">
                    </a>
                    <ul class="${"nav-items svelte-br3b3h"}">
                        <li><a href="${"about-ampz"}" class="${"svelte-br3b3h"}">About Us</a></li>
                        <li><a href="${"products"}" class="${"svelte-br3b3h"}">Products</a></li>
                        <li><a href="${"opportunities"}" class="${"svelte-br3b3h"}">Opportunities</a></li>
                        <li><a href="${"waitlist"}" class="${"btn svelte-br3b3h"}">Get Started</a></li>
                    </ul>
                    <i class="${"material-icons menu-btn"}">menu</i>
            </div>
    
        <div class="${"content"}">
        ${opportunity
	? `<div class="${"main-content"}">
                <a href="${"/opportunities"}" class="${"back"}">‹ Back to Opportunities</a>
                <div class="${"title"}">
                    <h2 class="${"left open-sans"}">${index.escape(opportunity.title)}</h2>
                    <img src="${"img/arrow.png"}" alt="${""}" class="${"right"}">
                    <div class="${"clearfix"}"></div>
                </div>
                <h4 class="${"subtitle open-sans"}">${index.escape(opportunity.sport)} | ${index.escape(opportunity.location)}</h4>
                <img src="${"img/opportunity.png"}" class="${"banner"}" alt="${""}">
                <p class="${"description"}">
                    ${index.escape(opportunity.description)}
                </p>
                <div class="${"details"}">
                    <div class="${"item"}">
                        <p class="${"head"}">Price</p>
                        <p class="${"body price"}">
                            <span class="${"currency"}">NGN</span>
                            <span>${index.escape(opportunity.price)}</span>
                        </p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Sport</p>
                        <p class="${"body"}">${index.escape(opportunity.sport)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Date</p>
                        <p class="${"body"}">${index.escape(opportunity.program_date)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Minimum Age</p>
                        <p class="${"body"}">${index.escape(opportunity.age)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Location</p>
                        <p class="${"body"}">${index.escape(opportunity.location)}</p>
                    </div>
                    <div class="${"item"}">
                        <p class="${"head"}">Apply before</p>
                        <p class="${"body"}">${index.escape(opportunity.application_deadline)}</p>
                    </div>
                </div>
                <button class="${"btn"}">Apply</button>
            </div>`
	: ``}
        <h3 class="${"related-title"}">Related Opportunities</h3>

        <div class="${"no-opportunity svelte-br3b3h"}"> No Related Opportunities yet </div>
        <div class="${"grid-container"}">
           ${ ``}
        </div>
    </div>
</div>

</main>`;
});

exports.default = U5Bslugu5D;
