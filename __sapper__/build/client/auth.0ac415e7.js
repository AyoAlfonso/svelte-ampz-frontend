import{C as t}from"./cookie-universal-common.cf540f80.js";import{w as a}from"./app.a41e62ce.js";import{g as r,p as e,a as s}from"./api.03257fdd.js";const o=t();const n=function(){const{subscribe:t,set:n}=a({});return{subscribe:t,me:async()=>{try{let t=await r("users/me",null,o.get("token"));return t.token=o.get("token"),n(t),t}catch(t){throw n({}),t}},login:async({phone:t,password:a})=>{try{let r=await e("auth/local",{phone:t,password:a});return n(r),o.set("token",r.token),r}catch(t){throw o.remove("token"),n({}),t}},verification:async t=>{try{const a=await e("/api/signup/verification",t);return n(a),o.set("token",a.token),a}catch(t){throw n({}),t}},signup:async t=>{console.log(t)},logout:async()=>{try{return o.remove("token"),n({}),response}catch(t){throw n({}),t}},forgotPassword:async t=>{try{return await e("/users/forgot",t)}catch(t){throw t}},async changePassword(t){try{return await s("/users/password",t)}catch(t){throw t}},async resetPassword(t){try{const a=await e("/users/reset/"+t.id,t);return a&&console.log("info",a,{root:!0}),a}catch(t){throw t}},async updateProfile({firstName:t,lastName:a,state:r,city:e,zip:o,avatar:c,gender:i,dob:u,language:w,address:p}){try{const h=await s("/users/profile",{firstName:t,lastName:a,state:r,city:e,zip:o,avatar:c,gender:i,dob:u,language:w,address:p});return n(h),h}catch(t){throw t}}}}();export{n as a};