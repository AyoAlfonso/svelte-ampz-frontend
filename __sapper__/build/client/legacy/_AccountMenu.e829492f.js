import{a,b as s,c as r,d as e,i as l,s as t,e as c,S as i,t as f,k as n,p as o,D as d,l as u,f as v,g as h,h as m,j as p,m as x,o as E,Q as w,N as g,q as I,n as D,al as b,am as A}from"./index.d15357b3.js";import{_ as N,C as V}from"./cookie-universal-common.a05803db.js";import{a as y,g as j}from"./app.95d088ff.js";import{f as k}from"./index.12e259dc.js";import"./Header.d04b2680.js";import"./pageFade.3b810f58.js";function P(a){var s,r=a[1].user.firstName+"";return{c:function(){s=f(r)},l:function(a){s=n(a,r)},m:function(a,r){o(a,s,r)},p:function(a,e){2&e&&r!==(r=a[1].user.firstName+"")&&d(s,r)},d:function(a){a&&u(s)}}}function L(a){var s,r=a[1].user.email+"";return{c:function(){s=f(r)},l:function(a){s=n(a,r)},m:function(a,r){o(a,s,r)},p:function(a,e){2&e&&r!==(r=a[1].user.email+"")&&d(s,r)},d:function(a){a&&u(s)}}}function S(a){var s,r,e,l,t,c,i,b,A,V,y,j,S,O,B,T,U,q,C,F,H,Q,R,$,_,z,G,J,K,M,W,X,Y,Z,aa,sa,ra,ea,la,ta,ca,ia,fa,na,oa,da,ua,va,ha,ma,pa,xa=k(a[1].user.firstName||"A")+"",Ea=a[1].user.firstName&&P(a),wa=a[1].user.email&&L(a);return{c:function(){s=v("div"),r=v("span"),e=f(xa),l=h(),t=v("br"),c=h(),i=v("span"),Ea&&Ea.c(),b=h(),A=v("span"),wa&&wa.c(),V=h(),y=v("ul"),j=v("li"),S=v("a"),O=v("div"),B=v("i"),T=h(),U=v("div"),q=f("Orders"),C=h(),F=v("li"),H=v("a"),Q=v("div"),R=v("i"),$=h(),_=v("div"),z=f("Address"),G=h(),J=v("li"),K=v("a"),M=v("div"),W=v("i"),X=h(),Y=v("div"),Z=f("Profile Details"),aa=h(),sa=v("li"),ra=v("a"),ea=v("div"),la=v("i"),ta=h(),ca=v("div"),ia=f("Password"),fa=h(),na=v("li"),oa=v("button"),da=v("div"),ua=v("i"),va=h(),ha=v("div"),ma=f("Sign Out"),this.h()},l:function(a){s=m(a,"DIV",{class:!0});var f=p(s);r=m(f,"SPAN",{class:!0});var o=p(r);e=n(o,xa),o.forEach(u),l=x(f),t=m(f,"BR",{}),c=x(f),i=m(f,"SPAN",{class:!0});var d=p(i);Ea&&Ea.l(d),d.forEach(u),b=x(f),A=m(f,"SPAN",{class:!0});var v=p(A);wa&&wa.l(v),v.forEach(u),f.forEach(u),V=x(a),y=m(a,"UL",{class:!0});var h=p(y);j=m(h,"LI",{class:!0});var E=p(j);S=m(E,"A",{href:!0,class:!0});var w=p(S);O=m(w,"DIV",{class:!0});var g=p(O);B=m(g,"I",{class:!0,"aria-hidden":!0}),p(B).forEach(u),g.forEach(u),T=x(w),U=m(w,"DIV",{class:!0});var I=p(U);q=n(I,"Orders"),I.forEach(u),w.forEach(u),E.forEach(u),C=x(h),F=m(h,"LI",{class:!0});var D=p(F);H=m(D,"A",{href:!0,class:!0});var N=p(H);Q=m(N,"DIV",{class:!0});var k=p(Q);R=m(k,"I",{class:!0,"aria-hidden":!0}),p(R).forEach(u),k.forEach(u),$=x(N),_=m(N,"DIV",{class:!0});var P=p(_);z=n(P,"Address"),P.forEach(u),N.forEach(u),D.forEach(u),G=x(h),J=m(h,"LI",{class:!0});var L=p(J);K=m(L,"A",{href:!0,class:!0});var pa=p(K);M=m(pa,"DIV",{class:!0});var ga=p(M);W=m(ga,"I",{class:!0,"aria-hidden":!0}),p(W).forEach(u),ga.forEach(u),X=x(pa),Y=m(pa,"DIV",{class:!0});var Ia=p(Y);Z=n(Ia,"Profile Details"),Ia.forEach(u),pa.forEach(u),L.forEach(u),aa=x(h),sa=m(h,"LI",{class:!0});var Da=p(sa);ra=m(Da,"A",{href:!0,class:!0});var ba=p(ra);ea=m(ba,"DIV",{class:!0});var Aa=p(ea);la=m(Aa,"I",{class:!0,"aria-hidden":!0}),p(la).forEach(u),Aa.forEach(u),ta=x(ba),ca=m(ba,"DIV",{class:!0});var Na=p(ca);ia=n(Na,"Password"),Na.forEach(u),ba.forEach(u),Da.forEach(u),fa=x(h),na=m(h,"LI",{class:!0});var Va=p(na);oa=m(Va,"BUTTON",{class:!0});var ya=p(oa);da=m(ya,"DIV",{class:!0});var ja=p(da);ua=m(ja,"I",{class:!0,"aria-hidden":!0}),p(ua).forEach(u),ja.forEach(u),va=x(ya),ha=m(ya,"DIV",{class:!0});var ka=p(ha);ma=n(ka,"Sign Out"),ka.forEach(u),ya.forEach(u),Va.forEach(u),h.forEach(u),this.h()},h:function(){E(r,"class","h-20 w-20 p-2 text-4xl text-gray-600 rounded-full bg-gray-200\n    inline-block"),E(i,"class","text-lg"),E(A,"class","text-sm text-gray-500"),E(s,"class","p-10 border-b border-gray-200 text-center"),E(B,"class","fa fa-archive p-5"),E(B,"aria-hidden","true"),E(O,"class","w-1/5"),E(U,"class","w-4/5 text-left p-3"),E(S,"href","/my/orders"),E(S,"class","w-full flex flex-wrap text-lg items-center"),w(S,"text-red-500","orders"==a[0]),E(j,"class","svelte-1t50vi7"),E(R,"class","fa fa-address-card p-5"),E(R,"aria-hidden","true"),E(Q,"class","w-1/5"),E(_,"class","w-4/5 text-left p-3"),E(H,"href","/my/address"),E(H,"class","w-full flex flex-wrap text-lg items-center"),w(H,"text-red-500","address"==a[0]),E(F,"class","svelte-1t50vi7"),E(W,"class","fa fa-user-circle p-5"),E(W,"aria-hidden","true"),E(M,"class","w-1/5"),E(Y,"class","w-4/5 text-left p-3"),E(K,"href","/my/profile"),E(K,"class","w-full flex flex-wrap text-lg items-center"),w(K,"text-red-500","profile"==a[0]),E(J,"class","svelte-1t50vi7"),E(la,"class","fa fa-key p-5"),E(la,"aria-hidden","true"),E(ea,"class","w-1/5"),E(ca,"class","w-4/5 text-left p-3"),E(ra,"href","/my/password"),E(ra,"class","w-full flex flex-wrap text-lg items-center"),w(ra,"text-red-500","password"==a[0]),E(sa,"class","svelte-1t50vi7"),E(ua,"class","fa fa-power-off p-5"),E(ua,"aria-hidden","true"),E(da,"class","w-1/5"),E(ha,"class","w-4/5 text-left p-3"),E(oa,"class","logout w-full flex flex-wrap text-lg svelte-1t50vi7"),E(na,"class","svelte-1t50vi7"),E(y,"class","svelte-1t50vi7"),pa=g(oa,"click",a[3])},m:function(a,f){o(a,s,f),I(s,r),I(r,e),I(s,l),I(s,t),I(s,c),I(s,i),Ea&&Ea.m(i,null),I(s,b),I(s,A),wa&&wa.m(A,null),o(a,V,f),o(a,y,f),I(y,j),I(j,S),I(S,O),I(O,B),I(S,T),I(S,U),I(U,q),I(y,C),I(y,F),I(F,H),I(H,Q),I(Q,R),I(H,$),I(H,_),I(_,z),I(y,G),I(y,J),I(J,K),I(K,M),I(M,W),I(K,X),I(K,Y),I(Y,Z),I(y,aa),I(y,sa),I(sa,ra),I(ra,ea),I(ea,la),I(ra,ta),I(ra,ca),I(ca,ia),I(y,fa),I(y,na),I(na,oa),I(oa,da),I(da,ua),I(oa,va),I(oa,ha),I(ha,ma)},p:function(a,s){var r=N(s,1)[0];2&r&&xa!==(xa=k(a[1].user.firstName||"A")+"")&&d(e,xa),a[1].user.firstName?Ea?Ea.p(a,r):((Ea=P(a)).c(),Ea.m(i,null)):Ea&&(Ea.d(1),Ea=null),a[1].user.email?wa?wa.p(a,r):((wa=L(a)).c(),wa.m(A,null)):wa&&(wa.d(1),wa=null),1&r&&w(S,"text-red-500","orders"==a[0]),1&r&&w(H,"text-red-500","address"==a[0]),1&r&&w(K,"text-red-500","profile"==a[0]),1&r&&w(ra,"text-red-500","password"==a[0])},i:D,o:D,d:function(a){a&&u(s),Ea&&Ea.d(),wa&&wa.d(),a&&u(V),a&&u(y),pa()}}}function O(a,s,r){var e,l=y(),t=l.session;l.page;b(a,t,function(a){return r(1,e=a)});var c=V(),i=s.segment;return a.$set=function(a){"segment"in a&&r(0,i=a.segment)},[i,e,t,function(){A(t,e.user={},e),A(t,e.token=null,e),c.set("token",null),j("/")}]}var B=function(f){function n(a){var i;return s(this,n),i=r(this,e(n).call(this)),l(c(i),a,O,S,t,{segment:0}),i}return a(n,i),n}();export{B as A};
