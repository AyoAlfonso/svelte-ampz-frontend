import{C as t,a as r,b as e}from"./cookie-universal-common.d53ac87b.js";import{w as n,g as a,p as o}from"./api.7c828d84.js";t();var s,u,c,i,p,f,l=(s=n({items:[],qty:0,subtotal:0,discount:0,total:0,offer_total:0,showCart:!1,promo:null}),u=s.subscribe,c=s.set,{subscribe:u,fetch:(f=r(e.mark(function t(){var r;return e.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("cart",null);case 3:return r=t.sent,c(r),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,null,[[0,8]])})),function(){return f.apply(this,arguments)}),add:(p=r(e.mark(function t(r){var n;return e.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("cart/addE",r);case 3:return n=t.sent,c(n),t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}},t,null,[[0,8]])})),function(t){return p.apply(this,arguments)}),setPromo:function(t){c({promo:t.details,total:t.amount})},showCart:function(t){function r(){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r}(function(){return showCart}),setCart:function(t){c({items:t.items||[],qty:t.qty,discount:t.discount||0,subtotal:t.subtotal,total:t.total,offer_total:t.offer_total})},toggleCart:function(t){showCart=t},checkout:(i=r(e.mark(function t(r){var n,a,s,u;return e.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.paymentMethod,a=r.address,t.prev=1,t.next=4,o("orders",{address:a,paymentMethod:n||"COD"});case 4:return s=t.sent,t.next=7,l.fetch();case 7:return u=t.sent,c(u),t.abrupt("return",s);case 12:throw t.prev=12,t.t0=t.catch(1),t.t0;case 15:case"end":return t.stop()}},t,null,[[1,12]])})),function(t){return i.apply(this,arguments)})});export{l as c};
