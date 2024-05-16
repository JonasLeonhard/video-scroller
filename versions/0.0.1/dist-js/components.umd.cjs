(function(b,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(b=typeof globalThis<"u"?globalThis:b||self,m(b.Components={}))})(this,function(b){"use strict";var ae=Object.defineProperty;var de=(b,m,$)=>m in b?ae(b,m,{enumerable:!0,configurable:!0,writable:!0,value:$}):b[m]=$;var k=(b,m,$)=>(de(b,typeof m!="symbol"?m+"":m,$),$);function m(){}const $=t=>t;function it(t){return t()}function st(){return Object.create(null)}function v(t){t.forEach(it)}function x(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function rt(t,e){return t===e?!0:(z||(z=document.createElement("a")),z.href=e,t===z.href)}function St(t){return Object.keys(t).length===0}function Tt(t,...e){if(t==null){for(const i of e)i(void 0);return m}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(Tt(e,n))}function ft(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let D=lt?()=>window.performance.now():()=>Date.now(),Q=lt?t=>requestAnimationFrame(t):m;const T=new Set;function ct(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&Q(ct)}function W(t){let e;return T.size===0&&Q(ct),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}const Nt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function U(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){const e=N("style");return e.textContent="/* empty */",At(ut(t),e),e.sheet}function At(t,e){return U(t.head||t,e),e.sheet}function B(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function at(t){return document.createTextNode(t)}function dt(){return at(" ")}function Ot(){return at("")}function ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t){return Array.from(t.childNodes)}function j(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Ft{constructor(e=!1){k(this,"is_svg",!1);k(this,"e");k(this,"n");k(this,"t");k(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Ct(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)B(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(P)}}const I=new Map;let Y=0;function Ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:jt(e),rules:{}};return I.set(t,n),n}function mt(t,e,n,i,o,f,d,l=0){const r=16.666/i;let s=`{
`;for(let g=0;g<=1;g+=r){const y=e+(n-e)*f(g);s+=g*100+`%{${d(y,1-y)}}
`}const c=s+`100% {${d(n,1-n)}}
}`,a=`__svelte_${Ut(c)}_${l}`,h=ut(t),{stylesheet:u,rules:p}=I.get(h)||qt(h,t);p[a]||(p[a]=!0,u.insertRule(`@keyframes ${a} ${c}`,u.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${a} ${i}ms linear ${o}ms 1 both`,Y+=1,a}function X(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),Y-=o,Y||Rt())}function Rt(){Q(()=>{Y||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&P(e)}),I.clear())})}let q;function R(t){q=t}function Vt(){if(!q)throw new Error("Function called outside component initialization");return q}function xt(t){Vt().$$.on_mount.push(t)}const A=[],G=[];let M=[];const pt=[],zt=Promise.resolve();let Z=!1;function Dt(){Z||(Z=!0,zt.then(_t))}function C(t){M.push(t)}const tt=new Set;let O=0;function _t(){if(O!==0)return;const t=q;do{try{for(;O<A.length;){const e=A[O];O++,R(e),Bt(e.$$)}}catch(e){throw A.length=0,O=0,e}for(R(null),A.length=0,O=0;G.length;)G.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];tt.has(n)||(tt.add(n),n())}M.length=0}while(A.length);for(;pt.length;)pt.pop()();Z=!1,tt.clear(),R(t)}function Bt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function It(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let V;function gt(){return V||(V=Promise.resolve(),V.then(()=>{V=null})),V}function J(t,e,n){t.dispatchEvent(Lt(`${e?"intro":"outro"}${n}`))}const K=new Set;let E;function Yt(){E={r:0,c:[],p:E}}function Gt(){E.r||v(E.c),E=E.p}function et(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(K.has(t))return;K.add(t),E.c.push(()=>{K.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const yt={duration:0};function Kt(t,e,n){const i={direction:"in"};let o=e(t,n,i),f=!1,d,l,r=0;function s(){d&&X(t,d)}function c(){const{delay:h=0,duration:u=300,easing:p=$,tick:_=m,css:g}=o||yt;g&&(d=mt(t,0,1,u,h,p,g,r++)),_(0,1);const y=D()+h,L=y+u;l&&l.abort(),f=!0,C(()=>J(t,!0,"start")),l=W(w=>{if(f){if(w>=L)return _(1,0),J(t,!0,"end"),s(),f=!1;if(w>=y){const F=p((w-y)/u);_(F,1-F)}}return f})}let a=!1;return{start(){a||(a=!0,X(t),x(o)?(o=o(i),gt().then(c)):c())},invalidate(){a=!1},end(){f&&(s(),f=!1)}}}function Qt(t,e,n){const i={direction:"out"};let o=e(t,n,i),f=!0,d;const l=E;l.r+=1;let r;function s(){const{delay:c=0,duration:a=300,easing:h=$,tick:u=m,css:p}=o||yt;p&&(d=mt(t,1,0,a,c,h,p));const _=D()+c,g=_+a;C(()=>J(t,!1,"start")),"inert"in t&&(r=t.inert,t.inert=!0),W(y=>{if(f){if(y>=g)return u(0,1),J(t,!1,"end"),--l.r||v(l.c),!1;if(y>=_){const L=h((y-_)/a);u(1-L,L)}}return f})}return x(o)?gt().then(()=>{o=o(i),s()}):s(),{end(c){c&&"inert"in t&&(t.inert=r),c&&o.tick&&o.tick(1,0),f&&(d&&X(t,d),f=!1)}}}function bt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Wt(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),C(()=>{const f=t.$$.on_mount.map(it).filter(x);t.$$.on_destroy?t.$$.on_destroy.push(...f):v(f),t.$$.on_mount=[]}),o.forEach(C)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(It(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Zt(t,e){t.$$.dirty[0]===-1&&(A.push(t),Dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,o,f,d=null,l=[-1]){const r=q;R(t);const s=t.$$={fragment:null,ctx:[],props:f,update:m,not_equal:o,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:st(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};d&&d(s.root);let c=!1;if(s.ctx=n?n(t,e.props||{},(a,h,...u)=>{const p=u.length?u[0]:h;return s.ctx&&o(s.ctx[a],s.ctx[a]=p)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](p),c&&Zt(t,a)),h}):[],s.update(),c=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const a=Ht(e.target);s.fragment&&s.fragment.l(a),a.forEach(P)}else s.fragment&&s.fragment.c();e.intro&&et(t.$$.fragment),Wt(t,e.target,e.anchor),_t()}R(r)}class ee{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){Xt(this,1),this.$destroy=m}$on(e,n){if(!x(n))return m;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!St(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);const H=[];function ie(t,e=m){let n;const i=new Set;function o(l){if(ot(t,l)&&(t=l,n)){const r=!H.length;for(const s of i)s[1](),H.push(s,t);if(r){for(let s=0;s<H.length;s+=2)H[s][0](H[s+1]);H.length=0}}}function f(l){o(l(t))}function d(l,r=m){const s=[l,r];return i.add(s),i.size===1&&(n=e(o,f)||m),l(t),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:o,update:f,subscribe:d}}function wt(t){return Object.prototype.toString.call(t)==="[object Date]"}function nt(t,e,n,i){if(typeof n=="number"||wt(n)){const o=i-n,f=(n-e)/(t.dt||1/60),d=t.opts.stiffness*o,l=t.opts.damping*f,r=(d-l)*t.inv_mass,s=(f+r)*t.dt;return Math.abs(s)<t.opts.precision&&Math.abs(o)<t.opts.precision?i:(t.settled=!1,wt(n)?new Date(n.getTime()+s):n+s)}else{if(Array.isArray(n))return n.map((o,f)=>nt(t,e[f],n[f],i[f]));if(typeof n=="object"){const o={};for(const f in n)o[f]=nt(t,e[f],n[f],i[f]);return o}else throw new Error(`Cannot spring ${typeof n} values`)}}function se(t,e={}){const n=ie(t),{stiffness:i=.15,damping:o=.8,precision:f=.01}=e;let d,l,r,s=t,c=t,a=1,h=0,u=!1;function p(g,y={}){c=g;const L=r={};return t==null||y.hard||_.stiffness>=1&&_.damping>=1?(u=!0,d=D(),s=g,n.set(t=c),Promise.resolve()):(y.soft&&(h=1/((y.soft===!0?.5:+y.soft)*60),a=0),l||(d=D(),u=!1,l=W(w=>{if(u)return u=!1,l=null,!1;a=Math.min(a+h,1);const F={inv_mass:a,opts:_,settled:!0,dt:(w-d)*60/1e3},ue=nt(F,s,t,c);return d=w,s=t,n.set(t=ue),F.settled&&(l=null),!F.settled})),new Promise(w=>{l.promise.then(()=>{L===r&&w()})}))}const _={set:p,update:(g,y)=>p(g(c,t),y),subscribe:n.subscribe,stiffness:i,damping:o,precision:f};return _}function oe(t){const e=t-1;return e*e*e+1}function $t(t,{delay:e=0,duration:n=400,easing:i=oe,x:o=0,y:f=0,opacity:d=0}={}){const l=getComputedStyle(t),r=+l.opacity,s=l.transform==="none"?"":l.transform,c=r*(1-d),[a,h]=ft(o),[u,p]=ft(f);return{delay:e,duration:n,easing:i,css:(_,g)=>`
			transform: ${s} translate(${(1-_)*a}${h}, ${(1-_)*u}${p});
			opacity: ${r-c*g}`}}const{window:re}=Nt;function Et(t,e,n){const i=t.slice();return i[10]=e[n],i}function kt(t){let e,n,i=t[10].html+"",o,f,d,l;return{c(){e=N("div"),n=new Ft(!1),o=dt(),n.a=o,S(e,"class","unstable3d__animation-item svelte-1e66j3g"),j(e,"left",t[10].position.x),j(e,"top",t[10].position.y)},m(r,s){B(r,e,s),n.m(i,e),U(e,o),l=!0},p(r,s){t=r,(!l||s&4)&&i!==(i=t[10].html+"")&&n.p(i),(!l||s&4)&&j(e,"left",t[10].position.x),(!l||s&4)&&j(e,"top",t[10].position.y)},i(r){l||(r&&C(()=>{l&&(d&&d.end(1),f=Kt(e,$t,t[10].enter.transition.data),f.start())}),l=!0)},o(r){f&&f.invalidate(),r&&(d=Qt(e,$t,t[10].leave.transition.data)),l=!1},d(r){r&&P(e),r&&d&&d.end()}}}function vt(t){let e,n=t[5]>=t[10].enter.time&&t[5]<=t[10].leave.time&&kt(t);return{c(){n&&n.c(),e=Ot()},m(i,o){n&&n.m(i,o),B(i,e,o)},p(i,o){i[5]>=i[10].enter.time&&i[5]<=i[10].leave.time?n?(n.p(i,o),o&36&&et(n,1)):(n=kt(i),n.c(),et(n,1),n.m(e.parentNode,e)):n&&(Yt(),Jt(n,1,1,()=>{n=null}),Gt())},d(i){i&&P(e),n&&n.d(i)}}}function fe(t){let e,n,i,o,f,d,l,r=bt(t[2]),s=[];for(let c=0;c<r.length;c+=1)s[c]=vt(Et(t,r,c));return{c(){e=N("div"),n=N("div"),i=N("video"),f=dt();for(let c=0;c<s.length;c+=1)s[c].c();S(i,"class","unstable3d__video svelte-1e66j3g"),i.muted=!0,S(i,"preload","metadata"),rt(i.src,o=t[0])||S(i,"src",o),S(n,"class","unstable3d__animation-layer svelte-1e66j3g"),S(e,"class","unstable3d__track svelte-1e66j3g"),j(e,"height",t[1]+"px")},m(c,a){B(c,e,a),U(e,n),U(n,i),t[8](i),U(n,f);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(n,null);t[9](e),d||(l=[ht(re,"scroll",t[7]),ht(i,"loadedmetadata",t[7])],d=!0)},p(c,[a]){if(a&1&&!rt(i.src,o=c[0])&&S(i,"src",o),a&36){r=bt(c[2]);let h;for(h=0;h<r.length;h+=1){const u=Et(c,r,h);s[h]?s[h].p(u,a):(s[h]=vt(u),s[h].c(),s[h].m(n,null))}for(;h<s.length;h+=1)s[h].d(1);s.length=r.length}a&2&&j(e,"height",c[1]+"px")},i:m,o:m,d(c){c&&P(e),t[8](null),Mt(s,c),t[9](null),d=!1,v(l)}}}function le(t,e,n){let i,{videoUrl:o}=e,{trackHeightPx:f}=e,{animations:d}=e,l,r,s=se(0);Pt(t,s,u=>n(5,i=u));const c=()=>{requestAnimationFrame(async()=>{if(!r||!l||!(r!=null&&r.duration))return!1;const p=window.scrollY+l.getBoundingClientRect().top,_=(window.scrollY-p)/(l.scrollHeight-window.innerHeight),g=Math.min(Math.max(_,0),1);s.set(r.duration*g)})};xt(()=>(r.readyState>2&&c(),s.subscribe(async p=>{await r.play(),n(4,r.currentTime=p,r),r.pause()})));function a(u){G[u?"unshift":"push"](()=>{r=u,n(4,r)})}function h(u){G[u?"unshift":"push"](()=>{l=u,n(3,l)})}return t.$$set=u=>{"videoUrl"in u&&n(0,o=u.videoUrl),"trackHeightPx"in u&&n(1,f=u.trackHeightPx),"animations"in u&&n(2,d=u.animations)},[o,f,d,l,r,i,s,c,a,h]}class ce extends ee{constructor(e){super(),te(this,e,le,fe,ot,{videoUrl:0,trackHeightPx:1,animations:2})}}b.VideoScroller=ce,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
