!function(){"use strict";const e=["client/cookie-universal-common.cf540f80.js","client/api.03257fdd.js","client/cart.5e1c550f.js","client/client.4c2b15a5.js","client/index.fc0bae90.js","client/app.a41e62ce.js","client/#23423432opportunity.8f8c3bcd.js","client/Textbox.4e85cd18.js","client/Button.5d389781.js","client/index.80632960.js","client/#34234234flipkart.3a54b746.js","client/index.6c5201bf.js","client/index.f1e2a79f.js","client/#23423423products.502a6dee.js","client/_apiv1.f9fef663.js","client/index.6a1354e7.js","client/index.256c9670.js","client/[slug].e1905de6.js","client/crossfade.b3a78823.js","client/Select.3f5bb820.js","client/#234234login.0dcaeca2.js","client/Passwordbox.e14e9321.js","client/auth.0ac415e7.js","client/pageFade.b4ca7e32.js","client/Header.76a00cf7.js","client/about-ampz.3972dcea.js","client/new.f7211598.js","client/index.700b4248.js","client/lazyload.a27d0454.js","client/product.c4ffac74.js","client/#43434[slug].e613853d.js","client/_CartBanners.92838bda.js","client/index.34f24ac5.js","client/_CartItem.f6485853.js","client/order-success.efe7b998.js","client/checkout.f620bb8c.js","client/_layout.04894e49.js","client/index.59ce2bd9.js","client/_AccountMenu.4ff49a1f.js","client/password.3ec95818.js","client/address.51f84490.js","client/profile.18966ce3.js","client/orders.d4ed8299.js","client/index.2a5ffee4.js"].concat(["service-worker-index.html","1080p-full-hd.svg","3px.png","amazon.jfif","ampz/css/bootstrap.min.css","ampz/css/owl.carousel.min.css","ampz/css/style.css","ampz/fonts/segoeuibold.ttf","ampz/fonts/segoeuil.ttf","ampz/js/jquery.min.js","ampz/js/jssor.slider-27.5.0.min.js","analytics.svg","asus.svg","banner.jpg","cpu.svg","dell-xps.jpg","dell-xps.svg","deployed.jpg","emptycart.png","favicon.png","finger-print.svg","flipkart.jfif","global.css","img/.DS_Store","img/Group_Coach_Signup.png","img/Group_Scout_Signup.png","img/Group_Talent_Signup.png","img/ampz/.DS_Store","img/ampz/Coach & Academy.jpg","img/ampz/FC Bayern Youth Cup 2019.JPG","img/ampz/Group 48.png","img/ampz/Group 49.png","img/ampz/Group 50.png","img/ampz/Group 70.png","img/ampz/Group(1).png","img/ampz/Group(2).png","img/ampz/Group(3).png","img/ampz/Group(4).png","img/ampz/Group.png","img/ampz/Groupr.png","img/ampz/IMG_8228.jpg","img/ampz/Mees Place Football Academy.jpg","img/ampz/Rectangle 23(1).png","img/ampz/Rectangle 23.png","img/ampz/Vector(3).png","img/ampz/Vector(4).png","img/ampz/aca.png","img/ampz/ampz_logo.png","img/ampz/ampztv_no_just.jpg","img/ampz/banner_image_1.jpg","img/ampz/cards/card_image_1.png","img/ampz/cards/card_image_2.png","img/ampz/cards/card_image_3.png","img/ampz/components/.DS_Store","img/ampz/components/arrow_left.svg","img/ampz/components/arrow_right.svg","img/ampz/components/basketball-vector.png","img/ampz/components/boxing-gloves.png","img/ampz/components/checkmark-rectangle.png","img/ampz/components/checkmark-vector.png","img/ampz/components/football-vector.png","img/ampz/components/tennis-vector.png","img/ampz/partner_logo/.DS_Store","img/ampz/partner_logo/hygeia-inverted.jpg","img/ampz/partner_logo/hygeia-inverted.png","img/ampz/partner_logo/juventus-inverted.png","img/ampz/partner_logo/juventus.jpg","img/ampz/partner_logo/mpac-sports-inverted.png","img/ampz/partner_logo/mpac-sports.jpg","img/ampz/partner_logo/mpac-sports.png","img/ampz/partner_logo/qvt_media.jpg","img/ampz/partner_logo/the-future-academy-inverted.png","img/ampz/partner_logo/the-future-academy.jpeg","img/ampz/partner_logo/the-future-academy.png","img/ampz/straight_line.png","img/ampz/team/.DS_Store","img/ampz/team/Aadam_Bodunrin.jpg","img/ampz/team/Adeyinka_Aderombi.jpg","img/ampz/team/Alfonso.jpg","img/ampz/team/Brenda_Nwagwu.jpg","img/ampz/team/Buchi.jpg","img/ampz/team/Nichole Yembra.jpg","img/ampz/team/Victory_Mesona.jpg","img/ampz/team/abdul_jabbar.jpg","img/ampz/team/matthew_ngbede.png","img/ampz/video/Rectangle.png","img/arrow.png","img/arrow_down.png","img/arrow_left.png","img/arrow_right.png","img/bubble1-bg.png","img/circles-bg.png","img/facebook.png","img/fund.png","img/imageedit_2_7276200221.gif","img/instagram.png","img/linkedin.png","img/logo.png","img/mockup.png","img/noise.gif","img/opportunity.png","img/opportunity1.png","img/opportunity2.png","img/opportunity3.png","img/programme1.png","img/programme2.png","img/service1.png","img/service2.png","img/tick.png","img/tick2.png","img/track-bg.png","img/twitter.png","img/upload.png","img/warning.png","img/waves-bg.png","index.css","js/custom.js","keyboard.svg","laptop-touch.svg","light-house-detail.jpg","light-house-search.jpg","litekart-banner.png","loading-giph.gif","loading.svg","logo.png","mac.svg","manifest.json","page-speed-search.png","ram.svg","robots.txt","shield.png","ssd-drive.svg","store.svg","style.css","tailwind.css","thumbnail.jpg","zenbook-pro-duo.jpg"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1579874083275").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1579874083275"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&n.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1579874083275").then(async n=>{try{const a=await fetch(e.request);return n.put(e.request,a.clone()),a}catch(a){const g=await n.match(e.request);if(g)return g;throw a}}))))})}();
