import{S as s,i as a,s as t,e,a as r,t as o,m as c,c as n,b as l,f as d,g as f,d as i,o as m,h as u,I as p,O as h,j as $,k as x,q as v,v as b,w as g,a9 as y,x as j,P as w,Q as E,R as A,W as I,a8 as P,n as B}from"./index.fc0bae90.js";import"./cookie-universal-common.6f91e95b.js";import{g as R}from"./app.ac84a6bc.js";import{g as S}from"./api.7f2db2a0.js";import{T as k}from"./Textbox.a6eed357.js";import{B as D}from"./Button.5d389781.js";import"./index.6c5201bf.js";import{a as F}from"./auth.2128a30a.js";import{f as M,a as O}from"./pageFade.b4ca7e32.js";function T(s){let a,t;return{c(){a=e("p"),t=o("Address Updated"),this.h()},l(s){a=n(s,"P",{class:!0});var e=l(a);t=i(e,"Address Updated"),e.forEach(d),this.h()},h(){u(a,"class","mb-2 p-2 text-xs bg-yellow-400 rounded")},m(s,e){$(s,a,e),x(a,t)},p:B,d(s){s&&d(a)}}}function U(s){let a,t;return{c(){a=e("p"),t=o(s[2]),this.h()},l(e){a=n(e,"P",{class:!0});var r=l(a);t=i(r,s[2]),r.forEach(d),this.h()},h(){u(a,"class","mb-2 p-2 text-xs primary rounded")},m(s,e){$(s,a,e),x(a,t)},p:B,d(s){s&&d(a)}}}function V(s){let a;return{c(){a=o("Save")},l(s){a=i(s,"Save")},m(s,t){$(s,a,t)},d(s){s&&d(a)}}}function q(s){let a,t,B,R,S,F,q,z,N,Q,W,C,G,H,J,K,L,X;function Y(s,a){return s[2]?U:s[1]?T:void 0}let Z=Y(s),_=Z&&Z(s);function ss(a){s[5].call(null,a)}let as={label:"Address",full:!0};void 0!==s[0].address&&(as.value=s[0].address);const ts=new k({props:as});w.push(()=>E(ts,"value",ss));const es=new D({props:{type:"submit",full:!0,rounded:!0,size:"xl",color:"primary",$$slots:{default:[V]},$$scope:{ctx:s}}});return{c(){a=e("main"),t=e("div"),B=e("a"),R=e("i"),S=r(),F=e("div"),q=o("Address"),z=r(),_&&_.c(),N=r(),Q=e("form"),c(ts.$$.fragment),C=r(),G=e("br"),H=r(),c(es.$$.fragment),this.h()},l(s){a=n(s,"MAIN",{class:!0});var e=l(a);t=n(e,"DIV",{class:!0});var r=l(t);B=n(r,"A",{href:!0});var o=l(B);R=n(o,"I",{class:!0}),l(R).forEach(d),o.forEach(d),S=f(r),F=n(r,"DIV",{class:!0});var c=l(F);q=i(c,"Address"),c.forEach(d),r.forEach(d),z=f(e),_&&_.l(e),N=f(e),Q=n(e,"FORM",{class:!0});var u=l(Q);m(ts.$$.fragment,u),C=f(u),G=n(u,"BR",{}),H=f(u),m(es.$$.fragment,u),u.forEach(d),e.forEach(d),this.h()},h(){u(R,"class","fa fa-arrow-left"),u(B,"href","/my"),u(F,"class","text-2xl font-bold px-6 text-center"),u(t,"class","flex justify-between items-center my-4"),u(Q,"class","text-center bg-white"),u(a,"class","m-auto w-full lg:w-1/2"),X=p(Q,"submit",h(s[3]))},m(s,e){$(s,a,e),x(a,t),x(t,B),x(B,R),x(t,S),x(t,F),x(F,q),x(a,z),_&&_.m(a,null),x(a,N),x(a,Q),v(ts,Q,null),x(Q,C),x(Q,G),x(Q,H),v(es,Q,null),L=!0},p(s,[t]){Z===(Z=Y(s))&&_?_.p(s,t):(_&&_.d(1),(_=Z&&Z(s))&&(_.c(),_.m(a,N)));const e={};!W&&1&t&&(W=!0,e.value=s[0].address,A(()=>W=!1)),ts.$set(e);const r={};64&t&&(r.$$scope={dirty:t,ctx:s}),es.$set(r)},i(s){L||(b(ts.$$.fragment,s),b(es.$$.fragment,s),I(()=>{K&&K.end(1),J||(J=P(a,O,{})),J.start()}),L=!0)},o(s){g(ts.$$.fragment,s),g(es.$$.fragment,s),J&&J.invalidate(),K=y(a,M,{}),L=!1},d(s){s&&d(a),_&&_.d(),j(ts),j(es),s&&K&&K.end(),X()}}}function z(s,a,t){let e={},r=!1;async function o(){try{t(0,e=await S("users/me"))}catch(s){R("/login")}}return o(),[e,r,null,async function(){try{t(0,e=await F.updateProfile(e)),t(1,r=!0)}catch(s){}},o,function(s){e.address=s,t(0,e)}]}export default class extends s{constructor(s){super(),a(this,s,z,q,t,{})}}
