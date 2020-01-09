import{S as s,i as a,s as t,e,a as r,t as o,m as n,c as l,b as c,f,g as d,d as i,o as u,h as m,I as h,O as p,j as $,k as w,q as g,v,w as P,a9 as x,x as b,P as j,Q as y,R as E,W as C,a8 as I,n as B,y as R}from"./index.fc0bae90.js";import"./cookie-universal-common.cf540f80.js";import"./app.1ea9d4d9.js";import"./api.a43936a9.js";import{B as S}from"./Button.5d389781.js";import"./index.6c5201bf.js";import{P as k}from"./Passwordbox.e14e9321.js";import{a as A}from"./auth.da824449.js";import{f as F,a as M}from"./pageFade.b4ca7e32.js";function N(s){let a,t;return{c(){a=e("p"),t=o("Password Changed"),this.h()},l(s){a=l(s,"P",{class:!0});var e=c(a);t=i(e,"Password Changed"),e.forEach(f),this.h()},h(){m(a,"class","mb-2 p-2 text-xs bg-yellow-400 rounded")},m(s,e){$(s,a,e),w(a,t)},p:B,d(s){s&&f(a)}}}function O(s){let a,t;return{c(){a=e("p"),t=o(s[2]),this.h()},l(e){a=l(e,"P",{class:!0});var r=c(a);t=i(r,s[2]),r.forEach(f),this.h()},h(){m(a,"class","mb-2 p-2 text-xs primary rounded")},m(s,e){$(s,a,e),w(a,t)},p(s,a){4&a&&R(t,s[2])},d(s){s&&f(a)}}}function q(s){let a;return{c(){a=o("Save")},l(s){a=i(s,"Save")},m(s,t){$(s,a,t)},d(s){s&&f(a)}}}function z(s){let a,t,B,R,A,z,D,H,Q,V,W,G,J,K,L,T,U,X,Y,Z;function _(s,a){return s[2]?O:s[1]?N:void 0}let ss=_(s),as=ss&&ss(s);function ts(a){s[4].call(null,a)}let es={label:"Current Password"};void 0!==s[0].oldPassword&&(es.value=s[0].oldPassword);const rs=new k({props:es});function os(a){s[5].call(null,a)}j.push(()=>y(rs,"value",ts));let ns={label:"New Password"};void 0!==s[0].newPassword&&(ns.value=s[0].newPassword);const ls=new k({props:ns});j.push(()=>y(ls,"value",os));const cs=new S({props:{type:"submit",full:!0,rounded:!0,size:"xl",color:"primary",$$slots:{default:[q]},$$scope:{ctx:s}}});return{c(){a=e("main"),t=e("div"),B=e("a"),R=e("i"),A=r(),z=e("h1"),D=o("Change Password"),H=r(),as&&as.c(),Q=r(),V=e("form"),n(rs.$$.fragment),G=r(),n(ls.$$.fragment),K=r(),L=e("br"),T=r(),n(cs.$$.fragment),this.h()},l(s){a=l(s,"MAIN",{class:!0});var e=c(a);t=l(e,"DIV",{class:!0});var r=c(t);B=l(r,"A",{href:!0});var o=c(B);R=l(o,"I",{class:!0}),c(R).forEach(f),o.forEach(f),A=d(r),z=l(r,"H1",{class:!0});var n=c(z);D=i(n,"Change Password"),n.forEach(f),r.forEach(f),H=d(e),as&&as.l(e),Q=d(e),V=l(e,"FORM",{class:!0});var m=c(V);u(rs.$$.fragment,m),G=d(m),u(ls.$$.fragment,m),K=d(m),L=l(m,"BR",{}),T=d(m),u(cs.$$.fragment,m),m.forEach(f),e.forEach(f),this.h()},h(){m(R,"class","fa fa-arrow-left"),m(B,"href","/my"),m(z,"class","text-2xl font-bold p-6 text-center"),m(t,"class","flex justify-between items-center my-4"),m(V,"class","text-center bg-white"),m(a,"class","m-auto w-full lg:w-1/2"),Z=h(V,"submit",p(s[3]))},m(s,e){$(s,a,e),w(a,t),w(t,B),w(B,R),w(t,A),w(t,z),w(z,D),w(a,H),as&&as.m(a,null),w(a,Q),w(a,V),g(rs,V,null),w(V,G),g(ls,V,null),w(V,K),w(V,L),w(V,T),g(cs,V,null),Y=!0},p(s,[t]){ss===(ss=_(s))&&as?as.p(s,t):(as&&as.d(1),(as=ss&&ss(s))&&(as.c(),as.m(a,Q)));const e={};!W&&1&t&&(W=!0,e.value=s[0].oldPassword,E(()=>W=!1)),rs.$set(e);const r={};!J&&1&t&&(J=!0,r.value=s[0].newPassword,E(()=>J=!1)),ls.$set(r);const o={};64&t&&(o.$$scope={dirty:t,ctx:s}),cs.$set(o)},i(s){Y||(v(rs.$$.fragment,s),v(ls.$$.fragment,s),v(cs.$$.fragment,s),C(()=>{X&&X.end(1),U||(U=I(a,M,{})),U.start()}),Y=!0)},o(s){P(rs.$$.fragment,s),P(ls.$$.fragment,s),P(cs.$$.fragment,s),U&&U.invalidate(),X=x(a,F,{}),Y=!1},d(s){s&&f(a),as&&as.d(),b(rs),b(ls),b(cs),s&&X&&X.end(),Z()}}}function D(s,a,t){let e={},r=!1,o=null;return[e,r,o,async function(){try{t(0,e=await A.changePassword(e)),t(1,r=!0)}catch(s){t(2,o=s)}},function(s){e.oldPassword=s,t(0,e)},function(s){e.newPassword=s,t(0,e)}]}export default class extends s{constructor(s){super(),a(this,s,D,z,t,{})}}
