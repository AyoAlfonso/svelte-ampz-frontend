import{S as e,i as a,s as t,m as s,a as n,e as r,o as l,g as o,c,q as i,j as d,n as u,v as f,w as p,x as h,f as m,t as v,b as g,d as $,h as w,L as b,I as y,O as x,k as E,F as I,a9 as N,ad as V,P,Q as k,R as j,E as D,W as S,a8 as T,ae as O,y as R,J as A}from"./index.fc0bae90.js";import{C as M}from"./cookie-universal-common.cf540f80.js";import{a as U,g as B}from"./app.a41e62ce.js";import{g as H,p as L}from"./api.03257fdd.js";import"./cart.5e1c550f.js";import{T as C}from"./Textbox.4e85cd18.js";import"./index.6c5201bf.js";import{P as G}from"./Passwordbox.e14e9321.js";import{H as F}from"./Header.76a00cf7.js";import"./auth.0ac415e7.js";import{f as Y,a as q}from"./pageFade.b4ca7e32.js";function z(e){let a,t,s;return{c(){a=r("span"),t=v("SIGN UP"),s=v("\n                TO YOUR ACCOUNT"),this.h()},l(e){a=c(e,"SPAN",{class:!0});var n=g(a);t=$(n,"SIGN UP"),n.forEach(m),s=$(e,"\n                TO YOUR ACCOUNT"),this.h()},h(){w(a,"class","font-extrabold")},m(e,n){d(e,a,n),E(a,t),d(e,s,n)},d(e){e&&m(a),e&&m(s)}}}function J(e){let a,t;return{c(){a=r("span"),t=v("SIGN IN"),this.h()},l(e){a=c(e,"SPAN",{class:!0});var s=g(a);t=$(s,"SIGN IN"),s.forEach(m),this.h()},h(){w(a,"class","font-extrabold")},m(e,s){d(e,a,s),E(a,t)},d(e){e&&m(a)}}}function Q(e){let a,t;return{c(){a=r("div"),t=v(e[1]),this.h()},l(s){a=c(s,"DIV",{class:!0});var n=g(a);t=$(n,e[1]),n.forEach(m),this.h()},h(){w(a,"class","text-green-600 mb-5 text-center")},m(e,s){d(e,a,s),E(a,t)},p(e,a){2&a&&R(t,e[1])},d(e){e&&m(a)}}}function W(e){let a,t;return{c(){a=r("div"),t=v(e[8]),this.h()},l(s){a=c(s,"DIV",{class:!0});var n=g(a);t=$(n,e[8]),n.forEach(m),this.h()},h(){w(a,"class","text-red-600 mb-5 text-center")},m(e,s){d(e,a,s),E(a,t)},p(e,a){256&a&&R(t,e[8])},d(e){e&&m(a)}}}function _(e){let a,t,v,g,$,w;const b=new C({props:{value:e[11],label:"Fisrt Name",class:"w-full"}}),y=new C({props:{value:e[12],label:"Last Name",class:"w-full"}});return{c(){s(b.$$.fragment),a=n(),t=r("br"),v=n(),s(y.$$.fragment),g=n(),$=r("br")},l(e){l(b.$$.fragment,e),a=o(e),t=c(e,"BR",{}),v=o(e),l(y.$$.fragment,e),g=o(e),$=c(e,"BR",{})},m(e,s){i(b,e,s),d(e,a,s),d(e,t,s),d(e,v,s),i(y,e,s),d(e,g,s),d(e,$,s),w=!0},p:u,i(e){w||(f(b.$$.fragment,e),f(y.$$.fragment,e),w=!0)},o(e){p(b.$$.fragment,e),p(y.$$.fragment,e),w=!1},d(e){h(b,e),e&&m(a),e&&m(t),e&&m(v),h(y,e),e&&m(g),e&&m($)}}}function K(e){let a,t,s,l,i,f,p,h,v,$,x,I;return{c(){a=r("div"),t=r("div"),s=r("div"),l=n(),i=r("div"),f=n(),p=r("div"),h=n(),v=r("div"),$=n(),x=r("input"),this.h()},l(e){a=c(e,"DIV",{class:!0});var n=g(a);t=c(n,"DIV",{class:!0});var r=g(t);s=c(r,"DIV",{id:!0,class:!0}),g(s).forEach(m),l=o(r),i=c(r,"DIV",{id:!0,class:!0}),g(i).forEach(m),f=o(r),p=c(r,"DIV",{id:!0,class:!0}),g(p).forEach(m),h=o(r),v=c(r,"DIV",{id:!0,class:!0}),g(v).forEach(m),$=o(r),x=c(r,"INPUT",{name:!0,class:!0,maxlength:!0,autocomplete:!0}),r.forEach(m),n.forEach(m),this.h()},h(){w(s,"id","wraper1"),w(s,"class","otp-seperator w-1 h-1 rounded absolute svelte-14pnfkc"),b(s,"wraper-hide",e[5].length>0),w(i,"id","wraper2"),w(i,"class","otp-seperator w-1 h-1 rounded absolute svelte-14pnfkc"),b(i,"wraper-hide",e[5].length>1),w(p,"id","wraper3"),w(p,"class","otp-seperator w-1 h-1 rounded absolute svelte-14pnfkc"),b(p,"wraper-hide",e[5].length>2),w(v,"id","wraper4"),w(v,"class","otp-seperator w-1 h-1 rounded absolute svelte-14pnfkc"),b(v,"wraper-hide",e[5].length>3),w(x,"name","otp"),w(x,"class","otp-content outline-none pl-4 otp-content w-32\n                      bg-transparent border border-gray-400 svelte-14pnfkc"),w(x,"maxlength","4"),w(x,"autocomplete","off"),w(t,"class","otp-container svelte-14pnfkc"),w(a,"class"," flex justify-center text-center"),I=y(x,"input",e[25])},m(n,r){d(n,a,r),E(a,t),E(t,s),E(t,l),E(t,i),E(t,f),E(t,p),E(t,h),E(t,v),E(t,$),E(t,x),A(x,e[5])},p(e,a){32&a&&b(s,"wraper-hide",e[5].length>0),32&a&&b(i,"wraper-hide",e[5].length>1),32&a&&b(p,"wraper-hide",e[5].length>2),32&a&&b(v,"wraper-hide",e[5].length>3),32&a&&x.value!==e[5]&&A(x,e[5])},i:u,o:u,d(e){e&&m(a),I()}}}function X(e){let a,t;function n(a){e[24].call(null,a)}let r={label:"Password",cls:"w-full"};void 0!==e[4]&&(r.value=e[4]);const o=new G({props:r});return P.push(()=>k(o,"value",n)),{c(){s(o.$$.fragment)},l(e){l(o.$$.fragment,e)},m(e,a){i(o,e,a),t=!0},p(e,t){const s={};!a&&16&t&&(a=!0,s.value=e[4],j(()=>a=!1)),o.$set(s)},i(e){t||(f(o.$$.fragment,e),t=!0)},o(e){p(o.$$.fragment,e),t=!1},d(e){h(o,e)}}}function Z(e){let a;return{c(){a=v(e[7])},l(t){a=$(t,e[7])},m(e,t){d(e,a,t)},p(e,t){128&t&&R(a,e[7])},d(e){e&&m(a)}}}function ee(e){let a,t;return{c(){a=r("img"),this.h()},l(e){a=c(e,"IMG",{src:!0,alt:!0}),this.h()},h(){a.src!==(t="/loading.svg")&&w(a,"src","/loading.svg"),w(a,"alt",""),b(a,"loading",e[0])},m(e,t){d(e,a,t)},p(e,t){1&t&&b(a,"loading",e[0])},d(e){e&&m(a)}}}function ae(e){let a,t,u,V,O,R,A,M,U,B,H,L,G,ae,te,se,ne,re,le,oe,ce,ie,de,ue,fe,pe,he,me,ve,ge,$e,we,be,ye,xe,Ee,Ie;const Ne=new F({props:{home:!0}});function Ve(e,a){return e[2]?z:J}let Pe=Ve(e),ke=Pe(e);function je(e,a){return e[8]?W:e[1]?Q:void 0}let De=je(e),Se=De&&De(e);function Te(a){e[23].call(null,a)}let Oe={label:"Email/Phone"};void 0!==e[3]&&(Oe.value=e[3]);const Re=new C({props:Oe});P.push(()=>k(Re,"value",Te));let Ae=e[2]&&_(e);const Me=[X,K],Ue=[];function Be(e,a){return!e[9]&&e[6]?0:e[6]?1:-1}function He(e,a){return e[0]?ee:Z}~(fe=Be(e))&&(pe=Ue[fe]=Me[fe](e));let Le=He(e),Ce=Le(e);return{c(){a=r("meta"),t=r("meta"),u=n(),V=r("main"),s(Ne.$$.fragment),O=n(),R=r("div"),A=r("div"),M=r("div"),U=r("div"),B=r("div"),H=r("p"),L=v("SMS provider configured only for Indian Numbers. Please use email\n              instead"),G=n(),ae=r("div"),te=r("h1"),ke.c(),se=n(),ne=r("form"),re=r("div"),Se&&Se.c(),le=n(),s(Re.$$.fragment),ce=n(),ie=r("br"),de=n(),Ae&&Ae.c(),ue=n(),pe&&pe.c(),he=n(),me=r("br"),ve=n(),ge=r("br"),$e=n(),we=r("div"),be=r("button"),Ce.c(),this.h()},l(e){a=c(e,"META",{"data-hid":!0,name:!0,content:!0}),t=c(e,"META",{"data-hid":!0,name:!0,content:!0}),u=o(e),V=c(e,"MAIN",{});var s=g(V);l(Ne.$$.fragment,s),O=o(s),R=c(s,"DIV",{class:!0});var n=g(R);A=c(n,"DIV",{class:!0});var r=g(A);M=c(r,"DIV",{class:!0});var i=g(M);U=c(i,"DIV",{class:!0});var d=g(U);B=c(d,"DIV",{});var f=g(B);H=c(f,"P",{class:!0});var p=g(H);L=$(p,"SMS provider configured only for Indian Numbers. Please use email\n              instead"),p.forEach(m),f.forEach(m),G=o(d),ae=c(d,"DIV",{class:!0});var h=g(ae);te=c(h,"H1",{class:!0});var v=g(te);ke.l(v),v.forEach(m),h.forEach(m),se=o(d),ne=c(d,"FORM",{class:!0});var w=g(ne);re=c(w,"DIV",{class:!0});var b=g(re);Se&&Se.l(b),le=o(b),l(Re.$$.fragment,b),ce=o(b),ie=c(b,"BR",{}),de=o(b),Ae&&Ae.l(b),ue=o(b),pe&&pe.l(b),he=o(b),me=c(b,"BR",{}),ve=o(b),ge=c(b,"BR",{}),$e=o(b),we=c(b,"DIV",{class:!0});var y=g(we);be=c(y,"BUTTON",{type:!0,disabled:!0,class:!0});var x=g(be);Ce.l(x),x.forEach(m),y.forEach(m),b.forEach(m),w.forEach(m),d.forEach(m),i.forEach(m),r.forEach(m),n.forEach(m),s.forEach(m),this.h()},h(){document.title="Login to Hopyshopy",w(a,"data-hid","description"),w(a,"name","description"),w(a,"content","Login to Hopyshopy"),w(t,"data-hid","og:title"),w(t,"name","og_title"),w(t,"content","Login to Hopyshopy"),w(H,"class","mb-2 p-2 text-xs bg-yellow-400 rounded"),w(te,"class","text-xl mb-6 text-left p-3"),w(ae,"class","p-0 secondary text-white rounded rounded-b-none"),w(be,"type","submit"),be.disabled=e[0],w(be,"class","flex items-center justify-center h-14 text-2xl\n                  outline-none w-full font-bold py-2 rounded primary"),b(be,"primary",!e[0]),b(be,"border",e[0]),w(we,"class","flex items-center justify-between"),w(re,"class","p-6 lg:p-12"),w(ne,"class","center bg-white"),w(U,"class","w-full md:w-1/2 lg:w-1/3 mb-6 rounded shadow-2xl"),w(M,"class","container mx-auto flex items-center justify-center svelte-14pnfkc"),w(A,"class","h-full px-4"),w(R,"class","relative z-50"),Ie=y(ne,"submit",x(e[13]))},m(e,s){E(document.head,a),E(document.head,t),d(e,u,s),d(e,V,s),i(Ne,V,null),E(V,O),E(V,R),E(R,A),E(A,M),E(M,U),E(U,B),E(B,H),E(H,L),E(U,G),E(U,ae),E(ae,te),ke.m(te,null),E(U,se),E(U,ne),E(ne,re),Se&&Se.m(re,null),E(re,le),i(Re,re,null),E(re,ce),E(re,ie),E(re,de),Ae&&Ae.m(re,null),E(re,ue),~fe&&Ue[fe].m(re,null),E(re,he),E(re,me),E(re,ve),E(re,ge),E(re,$e),E(re,we),E(we,be),Ce.m(be,null),Ee=!0},p(e,[a]){Pe!==(Pe=Ve(e))&&(ke.d(1),(ke=Pe(e))&&(ke.c(),ke.m(te,null))),De===(De=je(e))&&Se?Se.p(e,a):(Se&&Se.d(1),(Se=De&&De(e))&&(Se.c(),Se.m(re,le)));const t={};!oe&&8&a&&(oe=!0,t.value=e[3],j(()=>oe=!1)),Re.$set(t),e[2]?Ae?(Ae.p(e,a),f(Ae,1)):((Ae=_(e)).c(),f(Ae,1),Ae.m(re,ue)):Ae&&(D(),p(Ae,1,1,()=>{Ae=null}),I());let s=fe;(fe=Be(e))===s?~fe&&Ue[fe].p(e,a):(pe&&(D(),p(Ue[s],1,1,()=>{Ue[s]=null}),I()),~fe?((pe=Ue[fe])||(pe=Ue[fe]=Me[fe](e)).c(),f(pe,1),pe.m(re,he)):pe=null),Le===(Le=He(e))&&Ce?Ce.p(e,a):(Ce.d(1),(Ce=Le(e))&&(Ce.c(),Ce.m(be,null))),(!Ee||1&a)&&(be.disabled=e[0]),1&a&&b(be,"primary",!e[0]),1&a&&b(be,"border",e[0])},i(e){Ee||(f(Ne.$$.fragment,e),f(Re.$$.fragment,e),f(Ae),f(pe),S(()=>{xe&&xe.end(1),ye||(ye=T(V,q,{})),ye.start()}),Ee=!0)},o(e){p(Ne.$$.fragment,e),p(Re.$$.fragment,e),p(Ae),p(pe),ye&&ye.invalidate(),xe=N(V,Y,{}),Ee=!1},d(e){m(a),m(t),e&&m(u),e&&m(V),h(Ne),ke.d(),Se&&Se.d(),h(Re),Ae&&Ae.d(),~fe&&Ue[fe].d(),Ce.d(),e&&xe&&xe.end(),Ie()}}}function te(e,a,t){let s;const{session:n,page:r}=U();V(e,n,e=>t(15,s=e));const l=M();let o,c,i=!1,d=null,u=!1,f="",p="",h="",m="",v="",g=!1,$=/^[+()\d-]+$/,w="Verify",b=null;async function y(){if(t(0,i=!0),g)try{t(0,i=!0);const e=await L("auth/local",{uid:f,password:v});O(n,s.user=e.user,s),O(n,s.token=e.token,s),l.set("token",e.token),B("/")}catch(e){t(8,b=e)}finally{t(0,i=!1)}else try{await H("users/phone/"+f);return t(6,g=!0),void t(1,d="Please enter OTP sent to your Mobile")}catch(e){t(8,b=e),console.log("err...",e)}finally{t(0,i=!1)}}async function x(){if(g)try{t(0,i=!0);let e={};e=u?await L("users",{email:f,firstName:h,lastName:m,password:p}):await L("auth/local",{uid:f,password:p}),O(n,s.user=e.user,s),O(n,s.token=e.token,s),l.set("token",e.token),B("/")}catch(e){t(6,g=!1),t(8,b=e)}finally{t(6,g=!0),t(0,i=!1)}else try{await H("users/email/"+f);return t(6,g=!0),void t(1,d="Please enter your password")}catch(e){e.response&&"400"==e.response.status?(t(2,u=!0),t(6,g=!0),console.log("400 err...",e.response.status)):(t(2,u=!0),t(6,g=!0),console.log("err...",e.toString())),t(8,b="")}finally{t(6,g=!0),t(0,i=!1)}}return e.$$.update=(()=>{8&e.$$.dirty&&t(14,o=f.includes("@")),8&e.$$.dirty&&t(9,c=!!(f.length>=10&&f.match($))),32&e.$$.dirty&&v&&4==v.length&&y(),8&e.$$.dirty&&f&&(t(6,g=!1),t(2,u=!1)),16964&e.$$.dirty&&t(7,w=u?"Signup New Account":c||o||g?c&&!g?"Verify Phone":o&&!g?"Verify Email":c&&g?"Verify OTP":"Login Now":"Verify")}),[i,d,u,f,p,v,g,w,b,c,n,h,m,async function(){t(1,d=t(8,b=null)),f&&""!=f?c||o?c?await y():await x():t(8,b="Entered email is not valid"):t(8,b="Please enter your email/phone no")},o,s,r,l,"disable",{},$,y,x,function(e){t(3,f=e)},function(e){t(4,p=e)},function(){v=this.value,t(5,v)}]}export default class extends e{constructor(e){super(),a(this,e,te,ae,t,{})}}
