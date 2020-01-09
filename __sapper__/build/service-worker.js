!function(){"use strict";const e=["client/cookie-universal-common.9ef1501a.js","client/api.1fee0f80.js","client/cart.df70ecda.js","client/client.a50334ec.js","client/index.fc0bae90.js","client/app.7982821b.js","client/#23423432opportunity.8f8c3bcd.js","client/Textbox.2269b41c.js","client/Button.5d389781.js","client/index.3c41467c.js","client/#34234234flipkart.87c5327a.js","client/index.6c5201bf.js","client/index.f1e2a79f.js","client/#23423423products.502a6dee.js","client/_apiv1.4b7c669c.js","client/index.14a57e7d.js","client/index.4568ee72.js","client/[slug].f2281ce8.js","client/crossfade.b3a78823.js","client/#234234login.9e2e1176.js","client/Select.c49f5800.js","client/Passwordbox.955d659d.js","client/auth.e99bf69f.js","client/pageFade.b4ca7e32.js","client/Header.5fe7b453.js","client/new.d4c81cf3.js","client/about-ampz.3972dcea.js","client/index.1116f433.js","client/lazyload.a27d0454.js","client/product.c4ffac74.js","client/#43434[slug].b708b9e4.js","client/_CartBanners.c9ffe6a6.js","client/index.e9b5dc66.js","client/_CartItem.59d95c78.js","client/checkout.86081cbc.js","client/order-success.bcaeb62f.js","client/_layout.4f545a2f.js","client/index.8882501d.js","client/_AccountMenu.65d7f996.js","client/password.44e35a67.js","client/address.e352c8c4.js","client/profile.e07dde0e.js","client/orders.275abeb3.js","client/index.b78a805d.js"].concat(["service-worker-index.html","1080p-full-hd.svg","3px.png","amazon.jfif","ampz/css/bootstrap.min.css","ampz/css/owl.carousel.min.css","ampz/css/style.css","analytics.svg","asus.svg","banner.jpg","cpu.svg","dell-xps.jpg","dell-xps.svg","deployed.jpg","emptycart.png","favicon.png","finger-print.svg","flipkart.jfif","global.css","img/.DS_Store","img/Group_Coach_Signup.png","img/Group_Scout_Signup.png","img/Group_Talent_Signup.png","img/ampz/.DS_Store","img/ampz/B_ball_Talents.jpeg","img/ampz/Coach & Academy.jpg","img/ampz/FC Bayern Youth Cup 2019.JPG","img/ampz/IMG_8228.jpg","img/ampz/IMG_9366.jpg","img/ampz/Mees Place Football Academy.jpg","img/ampz/ampz_logo.png","img/ampz/ampztv_no_just.jpg","img/ampz/banner_image_1.jpg","img/ampz/cards/card_image_1.png","img/ampz/cards/card_image_2.png","img/ampz/cards/card_image_3.png","img/ampz/components/.DS_Store","img/ampz/components/arrow_left.svg","img/ampz/components/arrow_right.svg","img/ampz/components/basketball-vector.png","img/ampz/components/boxing-gloves.png","img/ampz/components/checkmark-rectangle.png","img/ampz/components/checkmark-vector.png","img/ampz/components/football-vector.png","img/ampz/components/tennis-vector.png","img/ampz/partner_logo/.DS_Store","img/ampz/partner_logo/hygeia-inverted.jpg","img/ampz/partner_logo/hygeia-inverted.png","img/ampz/partner_logo/juventus-inverted.png","img/ampz/partner_logo/juventus.jpg","img/ampz/partner_logo/mpac-sports-inverted.png","img/ampz/partner_logo/mpac-sports.jpg","img/ampz/partner_logo/mpac-sports.png","img/ampz/partner_logo/qvt_media.jpg","img/ampz/partner_logo/the-future-academy-inverted.png","img/ampz/partner_logo/the-future-academy.jpeg","img/ampz/partner_logo/the-future-academy.png","img/ampz/scout_persona.jpg","img/ampz/straight_line.png","img/ampz/team/.DS_Store","img/ampz/team/Aadam_Bodunrin.jpg","img/ampz/team/Adeyinka_Aderombi.jpg","img/ampz/team/Alfonso.jpg","img/ampz/team/Brenda_Nwagwu.jpg","img/ampz/team/Buchi.jpg","img/ampz/team/Nichole Yembra.jpg","img/ampz/team/Victory_Mesona.jpg","img/ampz/team/abdul_jabbar.jpg","img/ampz/team/matthew_ngbede.png","img/ampz/video/Rectangle.png","img/arrow.png","img/arrow_down.png","img/arrow_left.png","img/arrow_right.png","img/bubble1-bg.png","img/circles-bg.png","img/facebook.png","img/fund.png","img/imageedit_2_7276200221.gif","img/instagram.png","img/linkedin.png","img/logo.png","img/mockup.png","img/noise.gif","img/opportunity.png","img/opportunity1.png","img/opportunity2.png","img/opportunity3.png","img/programme1.png","img/programme2.png","img/service1.png","img/service2.png","img/tick.png","img/tick2.png","img/track-bg.png","img/twitter.png","img/upload.png","img/warning.png","img/waves-bg.png","index.css","js/custom.js","keyboard.svg","laptop-touch.svg","light-house-detail.jpg","light-house-search.jpg","litekart-banner.png","loading-giph.gif","loading.svg","logo.png","mac.svg","manifest.json","page-speed-search.png","ram.svg","robots.txt","shield.png","ssd-drive.svg","store.svg","style.css","tailwind.css","thumbnail.jpg","zenbook-pro-duo.jpg"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1578568936086").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1578568936086"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&n.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1578568936086").then(async n=>{try{const a=await fetch(e.request);return n.put(e.request,a.clone()),a}catch(a){const t=await n.match(e.request);if(t)return t;throw a}}))))})}();
