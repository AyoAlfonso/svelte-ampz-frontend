!function(){"use strict";const e=["client/cookie-universal-common.6f91e95b.js","client/api.7f2db2a0.js","client/cart.0ad7e87a.js","client/client.71d6cc55.js","client/index.fc0bae90.js","client/app.ac84a6bc.js","client/#23423432opportunity.8f8c3bcd.js","client/Textbox.a6eed357.js","client/Button.5d389781.js","client/index.37bccccb.js","client/#34234234flipkart.8edc3ead.js","client/index.6c5201bf.js","client/index.f1e2a79f.js","client/#23423423products.502a6dee.js","client/_apiv1.811b757e.js","client/index.14a57e7d.js","client/index.9518bbdf.js","client/[slug].2dc14d0b.js","client/crossfade.b3a78823.js","client/Select.af87af6e.js","client/#234234login.38a6e53d.js","client/Passwordbox.ecf3fcb7.js","client/auth.2128a30a.js","client/pageFade.b4ca7e32.js","client/Header.0bd1a8bb.js","client/new.2c890611.js","client/about-ampz.3972dcea.js","client/index.66db929c.js","client/lazyload.a27d0454.js","client/product.c4ffac74.js","client/#43434[slug].b80311a3.js","client/_CartBanners.afa17a3d.js","client/_CartItem.5e5fb7f8.js","client/index.aa876e12.js","client/order-success.d3522de2.js","client/checkout.48869c48.js","client/_layout.fba6985d.js","client/_AccountMenu.c841f584.js","client/index.f69b0340.js","client/password.17f2bc70.js","client/address.dc61776b.js","client/index.f3ca42b7.js","client/profile.3a57dfd4.js","client/orders.7948f41d.js"].concat(["service-worker-index.html","1080p-full-hd.svg","3px.png","amazon.jfif","ampz/css/bootstrap.min.css","ampz/css/owl.carousel.min.css","ampz/css/style.css","analytics.svg","asus.svg","banner.jpg","cpu.svg","dell-xps.jpg","dell-xps.svg","deployed.jpg","emptycart.png","favicon.png","finger-print.svg","flipkart.jfif","global.css","img/.DS_Store","img/Group_Coach_Signup.png","img/Group_Scout_Signup.png","img/Group_Talent_Signup.png","img/ampz/.DS_Store","img/ampz/B_ball_Talents.jpeg","img/ampz/Coach & Academy.jpg","img/ampz/FC Bayern Youth Cup 2019.JPG","img/ampz/IMG_8228.jpg","img/ampz/IMG_9366.jpg","img/ampz/Mees Place Football Academy.jpg","img/ampz/ampz_logo.png","img/ampz/ampztv_no_just.jpg","img/ampz/banner_image_1.jpg","img/ampz/cards/card_image_1.png","img/ampz/cards/card_image_2.png","img/ampz/cards/card_image_3.png","img/ampz/components/.DS_Store","img/ampz/components/arrow_left.svg","img/ampz/components/arrow_right.svg","img/ampz/components/basketball-vector.png","img/ampz/components/boxing-gloves.png","img/ampz/components/checkmark-rectangle.png","img/ampz/components/checkmark-vector.png","img/ampz/components/football-vector.png","img/ampz/components/tennis-vector.png","img/ampz/partner_logo/.DS_Store","img/ampz/partner_logo/hygeia-inverted.jpg","img/ampz/partner_logo/hygeia-inverted.png","img/ampz/partner_logo/juventus-inverted.png","img/ampz/partner_logo/juventus.jpg","img/ampz/partner_logo/mpac-sports-inverted.png","img/ampz/partner_logo/mpac-sports.jpg","img/ampz/partner_logo/mpac-sports.png","img/ampz/partner_logo/qvt_media.jpg","img/ampz/partner_logo/the-future-academy-inverted.png","img/ampz/partner_logo/the-future-academy.jpeg","img/ampz/partner_logo/the-future-academy.png","img/ampz/scout_persona.jpg","img/ampz/straight_line.png","img/ampz/team/.DS_Store","img/ampz/team/Aadam_Bodunrin.jpg","img/ampz/team/Adeyinka_Aderombi.jpg","img/ampz/team/Alfonso.jpg","img/ampz/team/Brenda_Nwagwu.jpg","img/ampz/team/Buchi.jpg","img/ampz/team/Nichole Yembra.jpg","img/ampz/team/Victory_Mesona.jpg","img/ampz/team/abdul_jabbar.jpg","img/ampz/team/matthew_ngbede.png","img/ampz/video/Rectangle.png","img/arrow.png","img/arrow_down.png","img/arrow_left.png","img/arrow_right.png","img/bubble1-bg.png","img/circles-bg.png","img/facebook.png","img/fund.png","img/imageedit_2_7276200221.gif","img/instagram.png","img/linkedin.png","img/logo.png","img/mockup.png","img/noise.gif","img/opportunity.png","img/opportunity1.png","img/opportunity2.png","img/opportunity3.png","img/programme1.png","img/programme2.png","img/service1.png","img/service2.png","img/tick.png","img/tick2.png","img/track-bg.png","img/twitter.png","img/upload.png","img/warning.png","img/waves-bg.png","index.css","js/custom.js","keyboard.svg","laptop-touch.svg","light-house-detail.jpg","light-house-search.jpg","litekart-banner.png","loading-giph.gif","loading.svg","logo.png","mac.svg","manifest.json","page-speed-search.png","ram.svg","robots.txt","shield.png","ssd-drive.svg","store.svg","style.css","tailwind.css","thumbnail.jpg","zenbook-pro-duo.jpg"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1576243778414").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1576243778414"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&a.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1576243778414").then(async a=>{try{const n=await fetch(e.request);return a.put(e.request,n.clone()),n}catch(n){const t=await a.match(e.request);if(t)return t;throw n}}))))})}();
