'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-7460d1f3.js');
require('./index-1dcc0b48.js');
require('cookie-universal');
require('./index-eb724975.js');
require('./index-c0882747.js');
var Toast = _interopDefault(require('svelte-toast'));
require('./Select-7a8a1056.js');
var _apiv1 = require('./_apiv1-67fe9ef2.js');

/* src/routes/opportunities/index.svelte generated by Svelte v3.16.0 */

const css = {
	code: ".white-bg-8.svelte-15yu2tq{background-color:#fff}.nav-items.svelte-15yu2tq li a.svelte-15yu2tq{color:#fff;font-size:15px;padding:10px 5px;margin-top:30px;font-family:\"Open Sans\", sans-serif;text-transform:capitalize;line-height:15px;position:relative;z-index:1}a.svelte-15yu2tq{width:auto}.no-opportunity.svelte-15yu2tq{text-align:center;margin:150px;color:#db9a03;font-size:18px;font-weight:800}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"\\n\\n<script>\\n    import { fade } from 'svelte/transition';\\n    import Toast from 'svelte-toast'\\n    import Select from 'svelte-select';\\n    import { get, post } from \\\"../../lib/_apiv1\\\";\\n    import { onMount, afterUpdate } from \\\"svelte\\\";\\n    \\n    let inProgress = false;\\n    let nigerianStates;\\n    let opportunities_status;\\n    let sports;\\n    const toast = new Toast()\\n    let opportunities = [];\\n\\n    let form = {\\n        search: '',\\n        location : '' ,\\n        sport: '',\\n        status: 'approved'\\n    }\\n\\n  \\tfunction enter(e) {\\n        if(!form.profile){\\n            if(e.target.id == 'grp_talent') { talent_bg =  \\\"#ef7f7f\\\"}\\n            if(e.target.id == 'grp_scout') { scout_bg ='#9fef9f'}\\n            if(e.target.id == 'grp_coach') { coach_bg ='#fbd87f'}\\n        }\\n\\t}\\n\\n\\tfunction leave(e) {\\n        hovering = false;\\n        if(!form.profile){\\n            if(e.target.id == 'grp_talent') { talent_bg =  \\\"#ffeaea\\\"}\\n            if(e.target.id == 'grp_scout') { scout_bg ='#e6fae6'}\\n            if(e.target.id == 'grp_coach') { coach_bg ='#fff5dc'}\\n        }\\n    }\\n\\n    function simpleDate(ISOdateTime){\\n       return ISOdateTime.split(\\\"T\\\")[0];\\n    }\\n\\n\\tonMount(async () => {\\n\\n        inProgress = true;\\n        opportunities_status = 'Loading ...'\\n        const opportunitiesRes =  await get(\\\"opportunity/list\\\", form , null)\\n        const NigerianStatesRes =  await get(\\\"utils/nigerian_states\\\", null, null)\\n        const SportsRes =  await post(\\\"defaultskills\\\", null, null)\\n        if(opportunitiesRes) {\\n\\n\\n            opportunities = opportunitiesRes.data;\\n          opportunities =  opportunities.length > 0 ? opportunities.map(opp=>{\\n               opp.program_date = simpleDate(opp.program_date) \\n            return opp\\n            }) : []\\n         opportunities_status = 'No opportunities found'\\n        }\\n      \\n        if(NigerianStatesRes) {\\n            console.log(NigerianStatesRes)\\n            nigerianStates = NigerianStatesRes\\n        }\\n        if(SportsRes) {\\n            sports = SportsRes;\\n            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})\\n        }\\n        inProgress = false;\\n    })\\n    \\n    afterUpdate(() => {\\n        // scrollToTopPage()\\n    });\\n\\n    function scrollToTopPage(){\\n          window.scrollTo({ top: 0, behavior: 'smooth' })\\n        setTimeout(function() { }, 1500);\\n    }\\n\\n   async function submitSearch() {\\n        inProgress = true\\n        let opts = {position: 'top-center', duration: 3000}\\n        const res =  await get(\\\"opportunity/list\\\", form, null)\\n        if(res.success) {\\n            inProgress = false\\n            opportunities = res.data \\n          \\n            opportunities.length > 0 ? opportunities.map(opp=>{\\n             opp.program_date = simpleDate(opp.program_date) \\n            }) : []\\n\\n        } else {\\n            inProgress = false\\n            toast.error('Error adding' ,opts)\\n         }\\n   }\\n\\n</script>\\n<style>\\n.white-bg-8 {\\n   background-color: #fff;\\n}\\n\\n.nav-items li a {\\n    color: #fff;\\n    font-size: 15px;\\n    padding: 10px 5px;\\n    margin-top: 30px;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    text-transform: capitalize;\\n    line-height: 15px;\\n    position: relative;\\n    z-index: 1;\\n}\\n.nav-items li a.btn {\\n  \\n}\\n\\na {\\n  width: auto;\\n}\\n\\n.no-opportunity {\\n    text-align: center;\\n    margin: 150px;\\n    color: #db9a03;\\n    font-size: 18px;\\n    font-weight: 800;\\n}\\n\\n</style>\\n<main class=\\\"white-bg-8\\\">\\n    <div class=\\\"wrapper opportunities\\\">\\n        <div class=\\\"header\\\">\\n            <div class=\\\"overlay\\\">\\n                <div class=\\\"nav\\\">\\n                    <a href=\\\"/\\\" class=\\\"brand-logo\\\">\\n                        <img alt=\\\"image6\\\" src=\\\"img/logo.png\\\">\\n                    </a>\\n                    <ul class=\\\"nav-items\\\">\\n                     <li><a href=\\\"about-ampz\\\">About Us</a></li>\\n                         <li><a href=\\\"product\\\">Products</a></li>\\n                        <li class=\\\"active\\\"><a href=\\\"opportunities\\\">Opportunities</a></li>\\n                    \\n                        <!-- <li><a href=\\\"go\\\">Contact</a></li> -->\\n                      \\n                        <li><a href=\\\"waitlist\\\" class=\\\"btn\\\">Get Started</a></li>\\n                    </ul>\\n                    <i class=\\\"material-icons menu-btn\\\">menu</i>\\n                </div>\\n                <div class=\\\"header-content\\\">\\n                    <p>verified opportunities</p>\\n                    <h3>Opportunity Portal</h3>\\n                    <h5 style=\\\"margin-bottom: 5%;\\\">\\n                        &ldquo;Ability is nothing without opportunity&ldquor;<br>\\n                        - Napoleon Bonaparte\\n                    </h5>\\n                </div>\\n                <div class=\\\"empty\\\"></div>\\n            </div>\\n        </div>\\n        <div class=\\\"search-form-container\\\">\\n            <div class=\\\"search-form\\\">\\n                <div class=\\\"cover\\\">\\n                    <input type=\\\"text\\\" bind:value={form.search} placeholder=\\\"Search for anything\\\">\\n                </div>\\n                <div class=\\\"cover\\\">\\n                \\n                 <select  bind:value={form.location}>\\n                 {#if nigerianStates}\\n                   <option value=\\\"\\\"> Select State </option>\\n                    {#each nigerianStates as nigerianState}\\n                       <option value={nigerianState.state}> {nigerianState.label} </option>\\n                    {/each}\\n                 {/if}\\n                \\t</select>\\n\\n                </div>\\n\\n                <div class=\\\"cover\\\">\\n                \\n                  <select  bind:value={form.sport} class=\\\"no-border\\\">\\n                    {#if sports}\\n                      <option value=\\\"\\\"> Select Sport </option>\\n                        {#each sports as sport}\\n                        <option value={sport.name}> {sport.name} </option>\\n                        {/each}\\n                    {/if}\\n                \\t</select>\\n                </div>\\n                <button on:click={submitSearch} class=\\\"btn\\\">Search</button>\\n            </div>\\n        </div>\\n      \\n     {#if opportunities.length > 0 }\\n         <div class=\\\"grid-container\\\">\\n        {#each opportunities as opportunity}\\n           \\n                <div class=\\\"item\\\">\\n                    <div class=\\\"item-content\\\">\\n                         <a href={\\\"/opportunities/\\\"+opportunity._id}>\\n                        <div class=\\\"img img1\\\"></div>\\n                        <div class=\\\"text\\\">\\n                            <h4 class=\\\"title open-sans\\\"> {opportunity.title}</h4>\\n                            <h5 class=\\\"subtitle\\\">{opportunity.sport} | {opportunity.location} </h5>\\n                            <p class=\\\"main-text\\\">\\n                                {opportunity.description} \\n                            </p>\\n                            <div class=\\\"main-text\\\">\\n                                <span class=\\\"left small\\\"> Programme Date: {opportunity.program_date}</span>\\n                                <a href={`/opportunities/`+ opportunity._id} class=\\\"right\\\">Read More</a>\\n                                <div class=\\\"clearfix\\\"></div>\\n                            </div>\\n                        </div>\\n                          </a>\\n                    </div>\\n                    </div>\\n                     \\n                {/each}\\n                </div>\\n       \\n        {:else}\\n\\t         <div class=\\\"no-opportunity\\\"> {opportunities_status} </div>\\n        {/if}\\n\\n   \\n        <div class=\\\"create\\\">\\n            <div class=\\\"overlay\\\">\\n                <h3>Create Opportunities.</h3>\\n                <h5>Are you scouting or running a development programme? Reach more talents by sharing your opportunities with us.</h5>\\n                <a href=\\\"/opportunities/new\\\" class=\\\"btn\\\">Create</a>\\n            </div>\\n        </div>\\n    </div>\\n</main>\"],\"names\":[],\"mappings\":\"AAsGA,WAAW,eAAC,CAAC,AACV,gBAAgB,CAAE,IAAI,AACzB,CAAC,AAED,yBAAU,CAAC,EAAE,CAAC,CAAC,eAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACd,CAAC,AAKD,CAAC,eAAC,CAAC,AACD,KAAK,CAAE,IAAI,AACb,CAAC,AAED,eAAe,eAAC,CAAC,AACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACpB,CAAC\"}"
};

function simpleDate(ISOdateTime) {
	return ISOdateTime.split("T")[0];
}

const Opportunities = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let nigerianStates;
	let opportunities_status;
	let sports;
	const toast = new Toast();
	let opportunities = [];

	let form = {
		search: "",
		location: "",
		sport: "",
		status: "approved"
	};

	index.onMount(async () => {
		opportunities_status = "Loading ...";
		const opportunitiesRes = await _apiv1.get("opportunity/list", form, null);
		const NigerianStatesRes = await _apiv1.get("utils/nigerian_states", null, null);
		const SportsRes = await _apiv1.post("defaultskills", null, null);

		if (opportunitiesRes) {
			opportunities = opportunitiesRes.data;

			opportunities = opportunities.length > 0
			? opportunities.map(opp => {
					opp.program_date = simpleDate(opp.program_date);
					return opp;
				})
			: [];

			opportunities_status = "No opportunities found";
		}

		if (NigerianStatesRes) {
			console.log(NigerianStatesRes);
			nigerianStates = NigerianStatesRes;
		}

		if (SportsRes) {
			sports = SportsRes;

			sports.map(sportsObj => {
				sportsObj.label = sportsObj.name;
			});
		}
	});

	index.afterUpdate(() => {
		
	});

	$$result.css.add(css);

	return `<main class="${"white-bg-8 svelte-15yu2tq"}">
    <div class="${"wrapper opportunities"}">
        <div class="${"header"}">
            <div class="${"overlay"}">
                <div class="${"nav"}">
                    <a href="${"/"}" class="${"brand-logo svelte-15yu2tq"}">
                        <img alt="${"image6"}" src="${"img/logo.png"}">
                    </a>
                    <ul class="${"nav-items svelte-15yu2tq"}">
                     <li><a href="${"about-ampz"}" class="${"svelte-15yu2tq"}">About Us</a></li>
                         <li><a href="${"product"}" class="${"svelte-15yu2tq"}">Products</a></li>
                        <li class="${"active"}"><a href="${"opportunities"}" class="${"svelte-15yu2tq"}">Opportunities</a></li>
                    
                        
                      
                        <li><a href="${"waitlist"}" class="${"btn svelte-15yu2tq"}">Get Started</a></li>
                    </ul>
                    <i class="${"material-icons menu-btn"}">menu</i>
                </div>
                <div class="${"header-content"}">
                    <p>verified opportunities</p>
                    <h3>Opportunity Portal</h3>
                    <h5 style="${"margin-bottom: 5%;"}">
                        “Ability is nothing without opportunity„<br>
                        - Napoleon Bonaparte
                    </h5>
                </div>
                <div class="${"empty"}"></div>
            </div>
        </div>
        <div class="${"search-form-container"}">
            <div class="${"search-form"}">
                <div class="${"cover"}">
                    <input type="${"text"}" placeholder="${"Search for anything"}"${index.add_attribute("value", form.search, 1)}>
                </div>
                <div class="${"cover"}">
                
                 <select${index.add_attribute("value", form.location, 1)}>
                 ${nigerianStates
	? `<option value="${""}"> Select State </option>
                    ${index.each(nigerianStates, nigerianState => `<option${index.add_attribute("value", nigerianState.state, 0)}> ${index.escape(nigerianState.label)} </option>`)}`
	: ``}
                	</select>

                </div>

                <div class="${"cover"}">
                
                  <select class="${"no-border"}"${index.add_attribute("value", form.sport, 1)}>
                    ${sports
	? `<option value="${""}"> Select Sport </option>
                        ${index.each(sports, sport => `<option${index.add_attribute("value", sport.name, 0)}> ${index.escape(sport.name)} </option>`)}`
	: ``}
                	</select>
                </div>
                <button class="${"btn"}">Search</button>
            </div>
        </div>
      
     ${opportunities.length > 0
	? `<div class="${"grid-container"}">
        ${index.each(opportunities, opportunity => `<div class="${"item"}">
                    <div class="${"item-content"}">
                         <a${index.add_attribute("href", "/opportunities/" + opportunity._id, 0)} class="${"svelte-15yu2tq"}">
                        <div class="${"img img1"}"></div>
                        <div class="${"text"}">
                            <h4 class="${"title open-sans"}"> ${index.escape(opportunity.title)}</h4>
                            <h5 class="${"subtitle"}">${index.escape(opportunity.sport)} | ${index.escape(opportunity.location)} </h5>
                            <p class="${"main-text"}">
                                ${index.escape(opportunity.description)} 
                            </p>
                            <div class="${"main-text"}">
                                <span class="${"left small"}"> Programme Date: ${index.escape(opportunity.program_date)}</span>
                                <a${index.add_attribute("href", `/opportunities/` + opportunity._id, 0)} class="${"right svelte-15yu2tq"}">Read More</a>
                                <div class="${"clearfix"}"></div>
                            </div>
                        </div>
                          </a>
                    </div>
                    </div>`)}
                </div>`
	: `<div class="${"no-opportunity svelte-15yu2tq"}"> ${index.escape(opportunities_status)} </div>`}

   
        <div class="${"create"}">
            <div class="${"overlay"}">
                <h3>Create Opportunities.</h3>
                <h5>Are you scouting or running a development programme? Reach more talents by sharing your opportunities with us.</h5>
                <a href="${"/opportunities/new"}" class="${"btn svelte-15yu2tq"}">Create</a>
            </div>
        </div>
    </div>
</main>`;
});

exports.default = Opportunities;
