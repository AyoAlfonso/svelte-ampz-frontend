import{C as t,n as e}from"./cookie-universal-common.9ef1501a.js";const o=t();o.get("token");async function a({method:t,path:a,data:n,params:r,token:i,cookie:c,auxUrl:s}){let p=s||`${e}/api/${a}`;const h=window.fetch,d={method:t,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",cookie:c},mode:"cors"};n&&(d.body=JSON.stringify(n)),"GET"==t&&r&&(p+="?"+Object.keys(r).map(t=>t+"="+r[t]).join("&"));let m=o.get("token");i?d.headers.Authorization=`Bearer ${i}`:m&&(d.headers.Authorization=`Bearer ${m}`);try{let t=await h(p,d),e=await t.text();if(!t.ok)throw e;try{return JSON.parse(e)}catch(t){return e}}catch(t){throw t}}function n(t,e,o,n){return a({method:"GET",path:t,params:e,token:o,cookie:n})}function r(t,e,o,n){return a({method:"POST",path:t,data:e,token:o,auxUrl:n})}export{n as g,r as p};
