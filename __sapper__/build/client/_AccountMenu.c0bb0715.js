import{S as s,i as a,s as e,t as r,d as l,j as t,y as c,f,e as i,a as d,c as o,b as n,g as h,h as v,L as u,I as p,k as m,n as x,ad as E,ae as w}from"./index.fc0bae90.js";import{C as g}from"./cookie-universal-common.cf540f80.js";import{a as I,g as D}from"./app.9def1ced.js";import{f as A}from"./index.80632960.js";import"./Header.ff24622a.js";import"./pageFade.b4ca7e32.js";function V(s){let a,e=s[1].user.firstName+"";return{c(){a=r(e)},l(s){a=l(s,e)},m(s,e){t(s,a,e)},p(s,r){2&r&&e!==(e=s[1].user.firstName+"")&&c(a,e)},d(s){s&&f(a)}}}function b(s){let a,e=s[1].user.email+"";return{c(){a=r(e)},l(s){a=l(s,e)},m(s,e){t(s,a,e)},p(s,r){2&r&&e!==(e=s[1].user.email+"")&&c(a,e)},d(s){s&&f(a)}}}function y(s){let a,e,E,w,g,I,D,y,N,j,k,L,P,S,O,B,T,U,C,F,H,R,$,q,z,G,J,K,M,Q,W,X,Y,Z,_,ss,as,es,rs,ls,ts,cs,fs,is,ds,os,ns,hs,vs,us,ps,ms=A(s[1].user.firstName||"A")+"",xs=s[1].user.firstName&&V(s),Es=s[1].user.email&&b(s);return{c(){a=i("div"),e=i("span"),E=r(ms),w=d(),g=i("br"),I=d(),D=i("span"),xs&&xs.c(),y=d(),N=i("span"),Es&&Es.c(),j=d(),k=i("ul"),L=i("li"),P=i("a"),S=i("div"),O=i("i"),B=d(),T=i("div"),U=r("Orders"),C=d(),F=i("li"),H=i("a"),R=i("div"),$=i("i"),q=d(),z=i("div"),G=r("Address"),J=d(),K=i("li"),M=i("a"),Q=i("div"),W=i("i"),X=d(),Y=i("div"),Z=r("Profile Details"),_=d(),ss=i("li"),as=i("a"),es=i("div"),rs=i("i"),ls=d(),ts=i("div"),cs=r("Password"),fs=d(),is=i("li"),ds=i("button"),os=i("div"),ns=i("i"),hs=d(),vs=i("div"),us=r("Sign Out"),this.h()},l(s){a=o(s,"DIV",{class:!0});var r=n(a);e=o(r,"SPAN",{class:!0});var t=n(e);E=l(t,ms),t.forEach(f),w=h(r),g=o(r,"BR",{}),I=h(r),D=o(r,"SPAN",{class:!0});var c=n(D);xs&&xs.l(c),c.forEach(f),y=h(r),N=o(r,"SPAN",{class:!0});var i=n(N);Es&&Es.l(i),i.forEach(f),r.forEach(f),j=h(s),k=o(s,"UL",{class:!0});var d=n(k);L=o(d,"LI",{class:!0});var v=n(L);P=o(v,"A",{href:!0,class:!0});var u=n(P);S=o(u,"DIV",{class:!0});var p=n(S);O=o(p,"I",{class:!0,"aria-hidden":!0}),n(O).forEach(f),p.forEach(f),B=h(u),T=o(u,"DIV",{class:!0});var m=n(T);U=l(m,"Orders"),m.forEach(f),u.forEach(f),v.forEach(f),C=h(d),F=o(d,"LI",{class:!0});var x=n(F);H=o(x,"A",{href:!0,class:!0});var A=n(H);R=o(A,"DIV",{class:!0});var V=n(R);$=o(V,"I",{class:!0,"aria-hidden":!0}),n($).forEach(f),V.forEach(f),q=h(A),z=o(A,"DIV",{class:!0});var b=n(z);G=l(b,"Address"),b.forEach(f),A.forEach(f),x.forEach(f),J=h(d),K=o(d,"LI",{class:!0});var ps=n(K);M=o(ps,"A",{href:!0,class:!0});var ws=n(M);Q=o(ws,"DIV",{class:!0});var gs=n(Q);W=o(gs,"I",{class:!0,"aria-hidden":!0}),n(W).forEach(f),gs.forEach(f),X=h(ws),Y=o(ws,"DIV",{class:!0});var Is=n(Y);Z=l(Is,"Profile Details"),Is.forEach(f),ws.forEach(f),ps.forEach(f),_=h(d),ss=o(d,"LI",{class:!0});var Ds=n(ss);as=o(Ds,"A",{href:!0,class:!0});var As=n(as);es=o(As,"DIV",{class:!0});var Vs=n(es);rs=o(Vs,"I",{class:!0,"aria-hidden":!0}),n(rs).forEach(f),Vs.forEach(f),ls=h(As),ts=o(As,"DIV",{class:!0});var bs=n(ts);cs=l(bs,"Password"),bs.forEach(f),As.forEach(f),Ds.forEach(f),fs=h(d),is=o(d,"LI",{class:!0});var ys=n(is);ds=o(ys,"BUTTON",{class:!0});var Ns=n(ds);os=o(Ns,"DIV",{class:!0});var js=n(os);ns=o(js,"I",{class:!0,"aria-hidden":!0}),n(ns).forEach(f),js.forEach(f),hs=h(Ns),vs=o(Ns,"DIV",{class:!0});var ks=n(vs);us=l(ks,"Sign Out"),ks.forEach(f),Ns.forEach(f),ys.forEach(f),d.forEach(f),this.h()},h(){v(e,"class","h-20 w-20 p-2 text-4xl text-gray-600 rounded-full bg-gray-200\n    inline-block"),v(D,"class","text-lg"),v(N,"class","text-sm text-gray-500"),v(a,"class","p-10 border-b border-gray-200 text-center"),v(O,"class","fa fa-archive p-5"),v(O,"aria-hidden","true"),v(S,"class","w-1/5"),v(T,"class","w-4/5 text-left p-3"),v(P,"href","/my/orders"),v(P,"class","w-full flex flex-wrap text-lg items-center"),u(P,"text-red-500","orders"==s[0]),v(L,"class","svelte-1t50vi7"),v($,"class","fa fa-address-card p-5"),v($,"aria-hidden","true"),v(R,"class","w-1/5"),v(z,"class","w-4/5 text-left p-3"),v(H,"href","/my/address"),v(H,"class","w-full flex flex-wrap text-lg items-center"),u(H,"text-red-500","address"==s[0]),v(F,"class","svelte-1t50vi7"),v(W,"class","fa fa-user-circle p-5"),v(W,"aria-hidden","true"),v(Q,"class","w-1/5"),v(Y,"class","w-4/5 text-left p-3"),v(M,"href","/my/profile"),v(M,"class","w-full flex flex-wrap text-lg items-center"),u(M,"text-red-500","profile"==s[0]),v(K,"class","svelte-1t50vi7"),v(rs,"class","fa fa-key p-5"),v(rs,"aria-hidden","true"),v(es,"class","w-1/5"),v(ts,"class","w-4/5 text-left p-3"),v(as,"href","/my/password"),v(as,"class","w-full flex flex-wrap text-lg items-center"),u(as,"text-red-500","password"==s[0]),v(ss,"class","svelte-1t50vi7"),v(ns,"class","fa fa-power-off p-5"),v(ns,"aria-hidden","true"),v(os,"class","w-1/5"),v(vs,"class","w-4/5 text-left p-3"),v(ds,"class","logout w-full flex flex-wrap text-lg svelte-1t50vi7"),v(is,"class","svelte-1t50vi7"),v(k,"class","svelte-1t50vi7"),ps=p(ds,"click",s[3])},m(s,r){t(s,a,r),m(a,e),m(e,E),m(a,w),m(a,g),m(a,I),m(a,D),xs&&xs.m(D,null),m(a,y),m(a,N),Es&&Es.m(N,null),t(s,j,r),t(s,k,r),m(k,L),m(L,P),m(P,S),m(S,O),m(P,B),m(P,T),m(T,U),m(k,C),m(k,F),m(F,H),m(H,R),m(R,$),m(H,q),m(H,z),m(z,G),m(k,J),m(k,K),m(K,M),m(M,Q),m(Q,W),m(M,X),m(M,Y),m(Y,Z),m(k,_),m(k,ss),m(ss,as),m(as,es),m(es,rs),m(as,ls),m(as,ts),m(ts,cs),m(k,fs),m(k,is),m(is,ds),m(ds,os),m(os,ns),m(ds,hs),m(ds,vs),m(vs,us)},p(s,[a]){2&a&&ms!==(ms=A(s[1].user.firstName||"A")+"")&&c(E,ms),s[1].user.firstName?xs?xs.p(s,a):((xs=V(s)).c(),xs.m(D,null)):xs&&(xs.d(1),xs=null),s[1].user.email?Es?Es.p(s,a):((Es=b(s)).c(),Es.m(N,null)):Es&&(Es.d(1),Es=null),1&a&&u(P,"text-red-500","orders"==s[0]),1&a&&u(H,"text-red-500","address"==s[0]),1&a&&u(M,"text-red-500","profile"==s[0]),1&a&&u(as,"text-red-500","password"==s[0])},i:x,o:x,d(s){s&&f(a),xs&&xs.d(),Es&&Es.d(),s&&f(j),s&&f(k),ps()}}}function N(s,a,e){let r;const{session:l,page:t}=I();E(s,l,s=>e(1,r=s));const c=g();let{segment:f}=a;return s.$set=(s=>{"segment"in s&&e(0,f=s.segment)}),[f,r,l,function(){w(l,r.user={},r),w(l,r.token=null,r),c.set("token",null),D("/")}]}class j extends s{constructor(s){super(),a(this,s,N,y,e,{segment:0})}}export{j as A};