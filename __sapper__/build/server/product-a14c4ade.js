'use strict';

var index = require('./index-7460d1f3.js');

/* src/routes/product.svelte generated by Svelte v3.16.0 */

const css = {
	code: ".nav-items.svelte-ngh9x0 li a.svelte-ngh9x0{color:#fff;font-size:15px;padding:10px 5px;margin-top:30px;font-family:\"Open Sans\", sans-serif;text-transform:capitalize;line-height:15px;position:relative;z-index:1}",
	map: "{\"version\":3,\"file\":\"product.svelte\",\"sources\":[\"product.svelte\"],\"sourcesContent\":[\"<style>\\n.nav-items li a {\\n    color: #fff;\\n    font-size: 15px;\\n    padding: 10px 5px;\\n    margin-top: 30px;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    text-transform: capitalize;\\n    line-height: 15px;\\n    position: relative;\\n    z-index: 1;\\n}\\n.nav-items li a.btn {\\n  \\n}\\n</style>\\n\\n<main>\\n<div class=\\\"wrapper product\\\">\\n    <div class=\\\"nav\\\">\\n                    <a href=\\\"go\\\" class=\\\"brand-logo\\\">\\n                    <img src=\\\"img/logo.png\\\" alt=\\\"AMPZ\\\">\\n                    </a>\\n                    <ul class=\\\"nav-items\\\">\\n                        <li><a href=\\\"about-ampz\\\">About Us</a></li>\\n                        <li><a href=\\\"product\\\">Products</a></li>\\n                        <li><a href=\\\"opportunities\\\">Opportunities</a></li>\\n                        \\n                        <!-- <li><a href=\\\"go\\\">Contact</a></li> -->\\n                      \\n                        <li><a href=\\\"waitlist\\\" class=\\\"btn\\\">Get Started</a></li>\\n                    </ul>\\n                    <i class=\\\"material-icons menu-btn\\\">menu</i>\\n            </div>\\n    <div class=\\\"content\\\">\\n        <div class=\\\"title\\\">\\n            <p>sport technology</p>\\n            <h3>Innovating for Africa.</h3>\\n            <h5>\\n                &ldquo;There's a way to do it better, find it&ldquor;<br>\\n                - Thomas Edison\\n            </h5>\\n        </div>\\n        <div class=\\\"mockup\\\">\\n            <img src=\\\"img/mockup.png\\\" alt=\\\"\\\">\\n        </div>\\n        <div class=\\\"programs\\\">\\n            <div class=\\\"title\\\">\\n                <p>be part of our story</p>\\n                <h3>Our programmes.</h3>\\n            </div>\\n            <div class=\\\"program\\\">\\n                <div class=\\\"img\\\">\\n                    <img src=\\\"img/programme1.png\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"program-content\\\">\\n                    <h5 class=\\\"program-title\\\">MatchMania</h5>\\n                    <p class=\\\"program-description\\\">\\n                        Be part of our annual talent hunt event where we identify young future champions to join our incubation programme. Want some live grassroots sports action.\\n                    </p>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>150+ Applicants</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>10+ Incubated</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>200+ Attendees</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>5+ Partners</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>1 Finale</span>\\n                    </div>\\n                    <button class=\\\"btn\\\">Partner</button>\\n                </div>\\n            </div>\\n            <div class=\\\"program\\\">\\n                <div class=\\\"img\\\">\\n                    <img src=\\\"img/programme2.png\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"program-content\\\">\\n                    <h5 class=\\\"program-title\\\">Talent Incubation Programme</h5>\\n                    <p class=\\\"program-description\\\">\\n                        As part of our contribution to sports development, talents selected in our annual talent hunt (MatchMania) are placed with top tier development institutions on a minimum one-year scholarship to build their potential.\\n                    </p>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>One year sports development scholarship</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>Profile building</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>Free kits</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>Media exposure</span>\\n                    </div>\\n                    <div class=\\\"program-feature\\\">\\n                        <div class=\\\"tick-cover\\\">\\n                            <img src=\\\"img/tick.png\\\" alt=\\\"\\\">\\n                        </div>\\n                        <span>Trials and other opportunities</span>\\n                    </div>\\n                    <button class=\\\"btn\\\">Partner</button>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"services\\\">\\n            <div class=\\\"title\\\">\\n                <p>reach your goals</p>\\n                <h3>Our Services.</h3>\\n            </div>\\n            <div class=\\\"services-content\\\">\\n                <div class=\\\"service-container\\\">\\n                    <div class=\\\"service\\\">\\n                        <img src=\\\"img/service1.png\\\" alt=\\\"\\\">\\n                        <h4 class=\\\"service-header\\\">Opportunity Promotions</h4>\\n                        <p class=\\\"service-description\\\">\\n                            Reach more of your target audience at the most effective cost.\\n                        </p>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Digital marketing services</span>\\n                        </div>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Sports media strategy and media buying</span>\\n                        </div>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Content creation</span>\\n                        </div>\\n                        <button class=\\\"btn\\\">Request</button>\\n                    </div>\\n                </div>\\n                <div class=\\\"service-container\\\">\\n                    <div class=\\\"service\\\">\\n                        <img src=\\\"img/service2.png\\\" alt=\\\"\\\">\\n                        <h4 class=\\\"service-header\\\">Scouting Support</h4>\\n                        <p class=\\\"service-description\\\">\\n                            Bespoke support services to help you find your perfect fit.\\n                        </p>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Talent scouting and college recruiting</span>\\n                        </div>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Due diligence and verification services</span>\\n                        </div>\\n                        <div class=\\\"service-feature\\\">\\n                            <div class=\\\"tick-cover\\\">\\n                                <img src=\\\"img/tick2.png\\\" alt=\\\"\\\">\\n                            </div>\\n                            <span>Sports event management</span>\\n                        </div>\\n                        <button class=\\\"btn\\\">Request</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"fund\\\">\\n            <div class=\\\"img\\\">\\n                <img src=\\\"img/fund.png\\\" alt=\\\"\\\">\\n            </div>\\n            <div class=\\\"fund-content\\\">\\n                <h5 class=\\\"fund-title\\\">Fund A Dream Project</h5>\\n                <p class=\\\"fund-description\\\">\\n                    As part of this cause, we launched the #FundADream project to light up the path of 100 outstanding talents through our incubation programme in 5 years.\\n                </p>\\n                <h5 class=\\\"fund-title\\\">Fund A Dream Project</h5>\\n                <p class=\\\"fund-description\\\">\\n                    We believe “ability is nothing without opportunity” and with your help, we are not only improving abilities but also creating more opportunities for success.\\n                </p>\\n                <h5 class=\\\"fund-title\\\">Fund A Dream Project</h5>\\n                <p class=\\\"fund-description\\\">\\n                    Donations are used to cover beneficiaries development fees, kits, trials, tournaments and camps. With as low as N1,000 ($3) you can help a talent “start unknown and finish unforgettable”.\\n                </p>\\n                <button class=\\\"btn\\\">Request</button>\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n</main>\"],\"names\":[],\"mappings\":\"AACA,wBAAU,CAAC,EAAE,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,AACd,CAAC\"}"
};

const Product = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<main>
<div class="${"wrapper product"}">
    <div class="${"nav"}">
                    <a href="${"go"}" class="${"brand-logo"}">
                    <img src="${"img/logo.png"}" alt="${"AMPZ"}">
                    </a>
                    <ul class="${"nav-items svelte-ngh9x0"}">
                        <li><a href="${"about-ampz"}" class="${"svelte-ngh9x0"}">About Us</a></li>
                        <li><a href="${"product"}" class="${"svelte-ngh9x0"}">Products</a></li>
                        <li><a href="${"opportunities"}" class="${"svelte-ngh9x0"}">Opportunities</a></li>
                        
                        
                      
                        <li><a href="${"waitlist"}" class="${"btn svelte-ngh9x0"}">Get Started</a></li>
                    </ul>
                    <i class="${"material-icons menu-btn"}">menu</i>
            </div>
    <div class="${"content"}">
        <div class="${"title"}">
            <p>sport technology</p>
            <h3>Innovating for Africa.</h3>
            <h5>
                “There&#39;s a way to do it better, find it„<br>
                - Thomas Edison
            </h5>
        </div>
        <div class="${"mockup"}">
            <img src="${"img/mockup.png"}" alt="${""}">
        </div>
        <div class="${"programs"}">
            <div class="${"title"}">
                <p>be part of our story</p>
                <h3>Our programmes.</h3>
            </div>
            <div class="${"program"}">
                <div class="${"img"}">
                    <img src="${"img/programme1.png"}" alt="${""}">
                </div>
                <div class="${"program-content"}">
                    <h5 class="${"program-title"}">MatchMania</h5>
                    <p class="${"program-description"}">
                        Be part of our annual talent hunt event where we identify young future champions to join our incubation programme. Want some live grassroots sports action.
                    </p>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>150+ Applicants</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>10+ Incubated</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>200+ Attendees</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>5+ Partners</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>1 Finale</span>
                    </div>
                    <button class="${"btn"}">Partner</button>
                </div>
            </div>
            <div class="${"program"}">
                <div class="${"img"}">
                    <img src="${"img/programme2.png"}" alt="${""}">
                </div>
                <div class="${"program-content"}">
                    <h5 class="${"program-title"}">Talent Incubation Programme</h5>
                    <p class="${"program-description"}">
                        As part of our contribution to sports development, talents selected in our annual talent hunt (MatchMania) are placed with top tier development institutions on a minimum one-year scholarship to build their potential.
                    </p>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>One year sports development scholarship</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>Profile building</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>Free kits</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>Media exposure</span>
                    </div>
                    <div class="${"program-feature"}">
                        <div class="${"tick-cover"}">
                            <img src="${"img/tick.png"}" alt="${""}">
                        </div>
                        <span>Trials and other opportunities</span>
                    </div>
                    <button class="${"btn"}">Partner</button>
                </div>
            </div>
        </div>
        <div class="${"services"}">
            <div class="${"title"}">
                <p>reach your goals</p>
                <h3>Our Services.</h3>
            </div>
            <div class="${"services-content"}">
                <div class="${"service-container"}">
                    <div class="${"service"}">
                        <img src="${"img/service1.png"}" alt="${""}">
                        <h4 class="${"service-header"}">Opportunity Promotions</h4>
                        <p class="${"service-description"}">
                            Reach more of your target audience at the most effective cost.
                        </p>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Digital marketing services</span>
                        </div>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Sports media strategy and media buying</span>
                        </div>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Content creation</span>
                        </div>
                        <button class="${"btn"}">Request</button>
                    </div>
                </div>
                <div class="${"service-container"}">
                    <div class="${"service"}">
                        <img src="${"img/service2.png"}" alt="${""}">
                        <h4 class="${"service-header"}">Scouting Support</h4>
                        <p class="${"service-description"}">
                            Bespoke support services to help you find your perfect fit.
                        </p>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Talent scouting and college recruiting</span>
                        </div>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Due diligence and verification services</span>
                        </div>
                        <div class="${"service-feature"}">
                            <div class="${"tick-cover"}">
                                <img src="${"img/tick2.png"}" alt="${""}">
                            </div>
                            <span>Sports event management</span>
                        </div>
                        <button class="${"btn"}">Request</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="${"fund"}">
            <div class="${"img"}">
                <img src="${"img/fund.png"}" alt="${""}">
            </div>
            <div class="${"fund-content"}">
                <h5 class="${"fund-title"}">Fund A Dream Project</h5>
                <p class="${"fund-description"}">
                    As part of this cause, we launched the #FundADream project to light up the path of 100 outstanding talents through our incubation programme in 5 years.
                </p>
                <h5 class="${"fund-title"}">Fund A Dream Project</h5>
                <p class="${"fund-description"}">
                    We believe “ability is nothing without opportunity” and with your help, we are not only improving abilities but also creating more opportunities for success.
                </p>
                <h5 class="${"fund-title"}">Fund A Dream Project</h5>
                <p class="${"fund-description"}">
                    Donations are used to cover beneficiaries development fees, kits, trials, tournaments and camps. With as low as N1,000 ($3) you can help a talent “start unknown and finish unforgettable”.
                </p>
                <button class="${"btn"}">Request</button>
            </div>
        </div>
    </div>
</div>
</main>`;
});

exports.default = Product;
