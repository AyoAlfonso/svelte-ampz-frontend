import{_ as n}from"./cookie-universal-common.a05803db.js";import{q as r}from"./index.332b2507.js";import{c as o}from"./index.e99b51f9.js";var t=n(o({duration:function(n){return Math.sqrt(300*n)},fallback:function(n,o){var t=getComputedStyle(n),a="none"===t.transform?"":t.transform;return{duration:600,easing:r,css:function(n){return"\n                transform: ".concat(a," scale(").concat(n,");\n                opacity: ").concat(n,"\n            ")}}}}),2),a=t[0],s=t[1];export{s as r,a as s};
