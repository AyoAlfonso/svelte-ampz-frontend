!function(){"use strict";const e=["client/cookie-universal-common.af2c5ad2.js","client/api.cd52eb40.js","client/cart.9ca72067.js","client/client.8920ef1e.js","client/index.fc0bae90.js","client/app.fe2feadc.js","client/#23423432opportunity.8f8c3bcd.js","client/Textbox.e4036507.js","client/Button.5d389781.js","client/index.a989a65a.js","client/#34234234flipkart.b7a79bab.js","client/index.6c5201bf.js","client/index.f1e2a79f.js","client/#23423423products.502a6dee.js","client/_apiv1.f71b1aef.js","client/index.14a57e7d.js","client/index.a7a27565.js","client/[slug].4731687f.js","client/crossfade.b3a78823.js","client/#234234login.3b35b14b.js","client/Passwordbox.68507460.js","client/Select.bc3faae2.js","client/auth.4775eebf.js","client/pageFade.b4ca7e32.js","client/Header.41dab855.js","client/about-ampz.3972dcea.js","client/new.0efb753c.js","client/index.e7fc8e71.js","client/lazyload.a27d0454.js","client/product.c4ffac74.js","client/_CartBanners.fd505298.js","client/#43434[slug].73ee168b.js","client/index.89cb0950.js","client/_CartItem.10db6e52.js","client/order-success.39307a02.js","client/index.91ed9c20.js","client/checkout.9ba4bece.js","client/index.a8104926.js","client/_layout.3cf11d62.js","client/password.d71c703e.js","client/_AccountMenu.a1f61aef.js","client/address.2b686dbe.js","client/profile.7b0c4f79.js","client/orders.d7a0c5ce.js"].concat(["service-worker-index.html","1080p-full-hd.svg","3px.png","amazon.jfif","ampz/css/bootstrap.min.css","ampz/css/owl.carousel.min.css","ampz/css/style.css","analytics.svg","asus.svg","banner.jpg","cpu.svg","dell-xps.jpg","dell-xps.svg","deployed.jpg","emptycart.png","favicon.png","finger-print.svg","flipkart.jfif","global.css","img/.DS_Store","img/Group_Coach_Signup.png","img/Group_Scout_Signup.png","img/Group_Talent_Signup.png","img/ampz/.DS_Store","img/ampz/B_ball_Talents.jpeg","img/ampz/Coach & Academy.jpg","img/ampz/FC Bayern Youth Cup 2019.JPG","img/ampz/IMG_8228.jpg","img/ampz/IMG_9366.jpg","img/ampz/Mees Place Football Academy.jpg","img/ampz/ampz_logo.png","img/ampz/ampztv_no_just.jpg","img/ampz/banner_image_1.jpg","img/ampz/cards/card_image_1.png","img/ampz/cards/card_image_2.png","img/ampz/cards/card_image_3.png","img/ampz/components/.DS_Store","img/ampz/components/arrow_left.svg","img/ampz/components/arrow_right.svg","img/ampz/components/basketball-vector.png","img/ampz/components/boxing-gloves.png","img/ampz/components/checkmark-rectangle.png","img/ampz/components/checkmark-vector.png","img/ampz/components/football-vector.png","img/ampz/components/tennis-vector.png","img/ampz/partner_logo/.DS_Store","img/ampz/partner_logo/hygeia-inverted.jpg","img/ampz/partner_logo/hygeia-inverted.png","img/ampz/partner_logo/juventus-inverted.png","img/ampz/partner_logo/juventus.jpg","img/ampz/partner_logo/mpac-sports-inverted.png","img/ampz/partner_logo/mpac-sports.jpg","img/ampz/partner_logo/mpac-sports.png","img/ampz/partner_logo/qvt_media.jpg","img/ampz/partner_logo/the-future-academy-inverted.png","img/ampz/partner_logo/the-future-academy.jpeg","img/ampz/partner_logo/the-future-academy.png","img/ampz/scout_persona.jpg","img/ampz/straight_line.png","img/ampz/team/.DS_Store","img/ampz/team/Aadam_Bodunrin.jpg","img/ampz/team/Adeyinka_Aderombi.jpg","img/ampz/team/Alfonso.jpg","img/ampz/team/Brenda_Nwagwu.jpg","img/ampz/team/Buchi.jpg","img/ampz/team/Nichole Yembra.jpg","img/ampz/team/Victory_Mesona.jpg","img/ampz/team/abdul_jabbar.jpg","img/ampz/team/matthew_ngbede.png","img/ampz/video/Rectangle.png","img/arrow.png","img/arrow_down.png","img/arrow_left.png","img/arrow_right.png","img/bubble1-bg.png","img/circles-bg.png","img/facebook.png","img/fund.png","img/imageedit_2_7276200221.gif","img/instagram.png","img/linkedin.png","img/logo.png","img/mockup.png","img/noise.gif","img/opportunity.png","img/opportunity1.png","img/opportunity2.png","img/opportunity3.png","img/programme1.png","img/programme2.png","img/service1.png","img/service2.png","img/tick.png","img/tick2.png","img/track-bg.png","img/twitter.png","img/upload.png","img/warning.png","img/waves-bg.png","index.css","js/custom.js","keyboard.svg","laptop-touch.svg","light-house-detail.jpg","light-house-search.jpg","litekart-banner.png","loading-giph.gif","loading.svg","logo.png","mac.svg","manifest.json","page-speed-search.png","ram.svg","robots.txt","shield.png","ssd-drive.svg","store.svg","style.css","tailwind.css","thumbnail.jpg","zenbook-pro-duo.jpg"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1576868618601").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1576868618601"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&a.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1576868618601").then(async a=>{try{const n=await fetch(e.request);return a.put(e.request,n.clone()),n}catch(n){const t=await a.match(e.request);if(t)return t;throw n}}))))})}();
