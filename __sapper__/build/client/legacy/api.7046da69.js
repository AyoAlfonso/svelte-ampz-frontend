import{C as t,a as e,b as a,c as n}from"./cookie-universal-common.28a6df25.js";var r=t();r.get("token");function o(t){return c.apply(this,arguments)}function c(){return(c=e(a.mark(function t(e){var o,c,s,i,p,u,h,d,k,f;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.method,c=e.path,s=e.data,i=e.token,p=e.cookie,u=window.fetch,h={method:o,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",cookie:p},mode:"cors"},s&&(h.body=JSON.stringify(s)),d=r.get("token"),i?h.headers.Authorization="Bearer ".concat(i):d&&(h.headers.Authorization="Bearer ".concat(d)),t.prev=6,t.next=9,u("".concat(n,"/api/").concat(c),h);case 9:return k=t.sent,t.next=12,k.text();case 12:if(f=t.sent,k.ok){t.next=15;break}throw f;case 15:return t.prev=15,t.abrupt("return",JSON.parse(f));case 19:return t.prev=19,t.t0=t.catch(15),t.abrupt("return",f);case 22:t.next=27;break;case 24:throw t.prev=24,t.t1=t.catch(6),t.t1;case 27:case"end":return t.stop()}},t,null,[[6,24],[15,19]])}))).apply(this,arguments)}function s(t,e,a,n){return o({method:"GET",path:t,params:e,token:a,cookie:n})}function i(t,e,a){return o({method:"POST",path:t,data:e,token:a})}function p(t,e,a){return o({method:"PUT",path:t,data:e,token:a})}export{p as a,s as g,i as p};
