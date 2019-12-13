import{C as r,a as e,b as t}from"./cookie-universal-common.79c5b57d.js";import{w as n}from"./app.8d0cfa46.js";import{a,g as s,p as u}from"./api.3db380e0.js";var c=r();var o,p,i,f,l,v,h,w,d,m,b,k,g=(o=n({}),p=o.subscribe,i=o.set,{subscribe:p,me:(k=e(t.mark(function r(){var e;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s("users/me",null,c.get("token"));case 3:return(e=r.sent).token=c.get("token"),i(e),r.abrupt("return",e);case 9:throw r.prev=9,r.t0=r.catch(0),i({}),r.t0;case 13:case"end":return r.stop()}},r,null,[[0,9]])})),function(){return k.apply(this,arguments)}),login:(b=e(t.mark(function r(e){var n,a,s;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.phone,a=e.password,r.prev=1,r.next=4,u("auth/local",{phone:n,password:a});case 4:return s=r.sent,i(s),c.set("token",s.token),r.abrupt("return",s);case 10:throw r.prev=10,r.t0=r.catch(1),c.remove("token"),i({}),r.t0;case 15:case"end":return r.stop()}},r,null,[[1,10]])})),function(r){return b.apply(this,arguments)}),verification:(m=e(t.mark(function r(e){var n;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u("/api/signup/verification",e);case 3:return n=r.sent,i(n),c.set("token",n.token),r.abrupt("return",n);case 9:throw r.prev=9,r.t0=r.catch(0),i({}),r.t0;case 13:case"end":return r.stop()}},r,null,[[0,9]])})),function(r){return m.apply(this,arguments)}),signup:(d=e(t.mark(function r(e){var n;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(e),r.abrupt("return");case 5:return n=r.sent,i(n),r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(2),i({}),r.t0;case 14:case"end":return r.stop()}},r,null,[[2,10]])})),function(r){return d.apply(this,arguments)}),logout:(w=e(t.mark(function r(){return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c.remove("token"),i({}),r.abrupt("return",response);case 6:throw r.prev=6,r.t0=r.catch(0),i({}),r.t0;case 10:case"end":return r.stop()}},r,null,[[0,6]])})),function(){return w.apply(this,arguments)}),forgotPassword:(h=e(t.mark(function r(e){return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u("/users/forgot",e);case 3:return r.abrupt("return",r.sent);case 6:throw r.prev=6,r.t0=r.catch(0),r.t0;case 9:case"end":return r.stop()}},r,null,[[0,6]])})),function(r){return h.apply(this,arguments)}),changePassword:(v=e(t.mark(function r(e){var n;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a("/users/password",e);case 3:return n=r.sent,r.abrupt("return",n);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}},r,null,[[0,7]])})),function(r){return v.apply(this,arguments)}),resetPassword:(l=e(t.mark(function r(e){var n;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u("/users/reset/"+e.id,e);case 3:return(n=r.sent)&&console.log("info",n,{root:!0}),r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),r.t0;case 11:case"end":return r.stop()}},r,null,[[0,8]])})),function(r){return l.apply(this,arguments)}),updateProfile:(f=e(t.mark(function r(e){var n,s,u,c,o,p,f,l,v,h,w;return t.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.firstName,s=e.lastName,u=e.state,c=e.city,o=e.zip,p=e.avatar,f=e.gender,l=e.dob,v=e.language,h=e.address,r.prev=1,r.next=4,a("/users/profile",{firstName:n,lastName:s,state:u,city:c,zip:o,avatar:p,gender:f,dob:l,language:v,address:h});case 4:return w=r.sent,i(w),r.abrupt("return",w);case 9:throw r.prev=9,r.t0=r.catch(1),r.t0;case 12:case"end":return r.stop()}},r,null,[[1,9]])})),function(r){return f.apply(this,arguments)})});export{g as a};