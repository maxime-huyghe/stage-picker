function P(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function S(){return Object.create(null)}function p(t){t.forEach(q)}function H(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ot(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function ut(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|r[o];return a}return n.dirty|r}return n.dirty}function st(t,n,e,i,r,a){if(r){const l=B(n,e,i,a);t.p(l,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function G(){E=!0}function J(){E=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[f]+1;const s=f+1;e[s]=c,r=Math.max(s,r)}const a=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(a.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(l[c],f)}}function W(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){E&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function ht(){return N(" ")}function mt(){return N("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){X(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Y(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function xt(t){return Z(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n,e){t.classList[e?"add":"remove"](n)}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function vt(t){v().$$.on_mount.push(t)}function kt(t){v().$$.after_update.push(t)}function wt(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const a=tt(n,e,{cancelable:i});return r.slice().forEach(l=>{l.call(t,a)}),!a.defaultPrevented}return!0}}function jt(t,n){return v().$$.context.set(t,n),n}function Nt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const _=[],M=[],b=[],L=[],T=Promise.resolve();let w=!1;function D(){w||(w=!0,T.then(z))}function At(){return D(),T}function j(t){b.push(t)}const k=new Set;let x=0;function z(){const t=m;do{for(;x<_.length;){const n=_[x];x++,h(n),nt(n.$$)}for(h(null),_.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];k.has(e)||(k.add(e),e())}b.length=0}while(_.length);for(;L.length;)L.pop()();w=!1,k.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function St(){d.r||p(d.c),d=d.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},r={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=n[a];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[a]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function qt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,on_mount:a,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const c=a.map(q).filter(H);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(j)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(_.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,a,l,o=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:P,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(s,y,...A)=>{const C=A.length?A[0]:y;return u.ctx&&r(u.ctx[s],u.ctx[s]=C)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](C),f&&ct(t,s)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const s=V(n.target);u.fragment&&u.fragment.l(s),s.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),z()}h(c)}class Tt{$destroy(){rt(this,1),this.$destroy=P}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Lt as A,Pt as B,rt as C,F as D,At as E,ut as F,W as G,st as H,ft as I,at as J,Et as K,pt as L,Nt as M,wt as N,ot as O,H as P,_t as Q,Tt as S,V as a,yt as b,gt as c,R as d,U as e,$t as f,dt as g,Z as h,Ot as i,bt as j,ht as k,mt as l,xt as m,P as n,Ct as o,Mt as p,St as q,et as r,lt as s,N as t,jt as u,kt as v,vt as w,qt as x,Bt as y,it as z};
