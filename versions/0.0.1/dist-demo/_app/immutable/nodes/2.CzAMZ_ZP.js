import{y as A,s as G,z as I,n as T,r as Z,b as x,o as $,e as C,f as ee}from"../chunks/scheduler.L35_OEEf.js";import{y as q,z as te,S as J,i as K,e as k,s as P,c as H,d as S,g as h,h as V,o as b,p as y,j as w,k as E,A as F,B as ne,m as O,t as U,q as se,a as Q,n as ie,H as oe,C as ae,D as le,E as re,u as fe,v as ce,w as de,x as me}from"../chunks/index.Bz2Dd4vm.js";import{w as ue}from"../chunks/index.BwrQVMmt.js";const he=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function z(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function B(t){return Object.prototype.toString.call(t)==="[object Date]"}function M(t,n,e,s){if(typeof e=="number"||B(e)){const l=s-e,r=(e-n)/(t.dt||1/60),m=t.opts.stiffness*l,i=t.opts.damping*r,o=(m-i)*t.inv_mass,a=(r+o)*t.dt;return Math.abs(a)<t.opts.precision&&Math.abs(l)<t.opts.precision?s:(t.settled=!1,B(e)?new Date(e.getTime()+a):e+a)}else{if(Array.isArray(e))return e.map((l,r)=>M(t,n[r],e[r],s[r]));if(typeof e=="object"){const l={};for(const r in e)l[r]=M(t,n[r],e[r],s[r]);return l}else throw new Error(`Cannot spring ${typeof e} values`)}}function pe(t,n={}){const e=ue(t),{stiffness:s=.15,damping:l=.8,precision:r=.01}=n;let m,i,o,a=t,f=t,u=1,d=0,c=!1;function _(g,v={}){f=g;const W=o={};return t==null||v.hard||p.stiffness>=1&&p.damping>=1?(c=!0,m=q(),a=g,e.set(t=f),Promise.resolve()):(v.soft&&(d=1/((v.soft===!0?.5:+v.soft)*60),u=0),i||(m=q(),c=!1,i=te(D=>{if(c)return c=!1,i=null,!1;u=Math.min(u+d,1);const j={inv_mass:u,opts:p,settled:!0,dt:(D-m)*60/1e3},X=M(j,a,t,f);return m=D,a=t,e.set(t=X),j.settled&&(i=null),!j.settled})),new Promise(D=>{i.promise.then(()=>{W===o&&D()})}))}const p={set:_,update:(g,v)=>_(g(f,t),v),subscribe:e.subscribe,stiffness:s,damping:l,precision:r};return p}function _e(t){const n=t-1;return n*n*n+1}function Y(t,{delay:n=0,duration:e=400,easing:s=_e,x:l=0,y:r=0,opacity:m=0}={}){const i=getComputedStyle(t),o=+i.opacity,a=i.transform==="none"?"":i.transform,f=o*(1-m),[u,d]=A(l),[c,_]=A(r);return{delay:n,duration:e,easing:s,css:(p,g)=>`
			transform: ${a} translate(${(1-p)*u}${d}, ${(1-p)*c}${_});
			opacity: ${o-f*g}`}}const{window:ge}=he;function L(t,n,e){const s=t.slice();return s[10]=n[e],s}function N(t){let n,e,s=t[10].html+"",l,r,m,i;return{c(){n=k("div"),e=new oe(!1),l=P(),this.h()},l(o){n=H(o,"DIV",{class:!0,style:!0});var a=S(n);e=ae(a,!1),l=V(a),a.forEach(h),this.h()},h(){e.a=l,b(n,"class","unstable3d__animation-item svelte-1e66j3g"),y(n,"left",t[10].position.x),y(n,"top",t[10].position.y)},m(o,a){w(o,n,a),e.m(s,n),E(n,l),i=!0},p(o,a){t=o,(!i||a&4)&&s!==(s=t[10].html+"")&&e.p(s),(!i||a&4)&&y(n,"left",t[10].position.x),(!i||a&4)&&y(n,"top",t[10].position.y)},i(o){i||(o&&ee(()=>{i&&(m&&m.end(1),r=le(n,Y,t[10].enter.transition.data),r.start())}),i=!0)},o(o){r&&r.invalidate(),o&&(m=re(n,Y,t[10].leave.transition.data)),i=!1},d(o){o&&h(n),o&&m&&m.end()}}}function R(t){let n,e=t[5]>=t[10].enter.time&&t[5]<=t[10].leave.time&&N(t);return{c(){e&&e.c(),n=O()},l(s){e&&e.l(s),n=O()},m(s,l){e&&e.m(s,l),w(s,n,l)},p(s,l){s[5]>=s[10].enter.time&&s[5]<=s[10].leave.time?e?(e.p(s,l),l&36&&U(e,1)):(e=N(s),e.c(),U(e,1),e.m(n.parentNode,n)):e&&(se(),Q(e,1,1,()=>{e=null}),ie())},d(s){s&&h(n),e&&e.d(s)}}}function ye(t){let n,e,s,l,r,m,i,o=z(t[2]),a=[];for(let f=0;f<o.length;f+=1)a[f]=R(L(t,o,f));return{c(){n=k("div"),e=k("div"),s=k("video"),r=P();for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){n=H(f,"DIV",{class:!0,style:!0});var u=S(n);e=H(u,"DIV",{class:!0});var d=S(e);s=H(d,"VIDEO",{class:!0,preload:!0,src:!0}),S(s).forEach(h),r=V(d);for(let c=0;c<a.length;c+=1)a[c].l(d);d.forEach(h),u.forEach(h),this.h()},h(){b(s,"class","unstable3d__video svelte-1e66j3g"),s.muted=!0,b(s,"preload","metadata"),I(s.src,l=t[0])||b(s,"src",l),b(e,"class","unstable3d__animation-layer svelte-1e66j3g"),b(n,"class","unstable3d__track svelte-1e66j3g"),y(n,"height",t[1]+"px")},m(f,u){w(f,n,u),E(n,e),E(e,s),t[8](s),E(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);t[9](n),m||(i=[F(ge,"scroll",t[7]),F(s,"loadedmetadata",t[7])],m=!0)},p(f,[u]){if(u&1&&!I(s.src,l=f[0])&&b(s,"src",l),u&36){o=z(f[2]);let d;for(d=0;d<o.length;d+=1){const c=L(f,o,d);a[d]?a[d].p(c,u):(a[d]=R(c),a[d].c(),a[d].m(e,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=o.length}u&2&&y(n,"height",f[1]+"px")},i:T,o:T,d(f){f&&h(n),t[8](null),ne(a,f),t[9](null),m=!1,Z(i)}}}function be(t,n,e){let s,{videoUrl:l}=n,{trackHeightPx:r}=n,{animations:m}=n,i,o,a=pe(0);x(t,a,c=>e(5,s=c));const f=()=>{requestAnimationFrame(async()=>{if(!o||!i||!(o!=null&&o.duration))return!1;const _=window.scrollY+i.getBoundingClientRect().top,p=(window.scrollY-_)/(i.scrollHeight-window.innerHeight),g=Math.min(Math.max(p,0),1);a.set(o.duration*g)})};$(()=>(o.readyState>2&&f(),a.subscribe(async _=>{await o.play(),e(4,o.currentTime=_,o),o.pause()})));function u(c){C[c?"unshift":"push"](()=>{o=c,e(4,o)})}function d(c){C[c?"unshift":"push"](()=>{i=c,e(3,i)})}return t.$$set=c=>{"videoUrl"in c&&e(0,l=c.videoUrl),"trackHeightPx"in c&&e(1,r=c.trackHeightPx),"animations"in c&&e(2,m=c.animations)},[l,r,m,i,o,s,a,f,u,d]}class we extends J{constructor(n){super(),K(this,n,be,ye,G,{videoUrl:0,trackHeightPx:1,animations:2})}}function ve(t){let n,e,s,l,r,m;return s=new we({props:{animations:[{enter:{time:8.2,transition:{data:{duration:500,y:-20},type:"fly"}},html:'<h1 class="my-headline">My Headline</h1>',leave:{time:14.8,transition:{data:{duration:500,y:0},type:"fly"}},position:{x:"80%",y:"50%"}},{enter:{time:3.2,transition:{data:{duration:500,y:-20},type:"fly"}},html:'<h1 class="my-headline">Another Headline</h1>',leave:{time:5,transition:{data:{duration:500,y:0},type:"fly"}},position:{x:"15%",y:"15%"}}],trackHeightPx:9600,videoUrl:"/scrollvideo.mp4"}}),{c(){n=k("div"),e=P(),fe(s.$$.fragment),l=P(),r=k("div"),this.h()},l(i){n=H(i,"DIV",{style:!0}),S(n).forEach(h),e=V(i),ce(s.$$.fragment,i),l=V(i),r=H(i,"DIV",{style:!0}),S(r).forEach(h),this.h()},h(){y(n,"height","800px"),y(r,"height","800px")},m(i,o){w(i,n,o),w(i,e,o),de(s,i,o),w(i,l,o),w(i,r,o),m=!0},p:T,i(i){m||(U(s.$$.fragment,i),m=!0)},o(i){Q(s.$$.fragment,i),m=!1},d(i){i&&(h(n),h(e),h(l),h(r)),me(s,i)}}}class De extends J{constructor(n){super(),K(this,n,null,ve,G,{})}}export{De as component};
