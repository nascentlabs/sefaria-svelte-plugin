var plugin=function(){"use strict";var Er=Object.defineProperty;var me=h=>{throw TypeError(h)};var br=(h,v,g)=>v in h?Er(h,v,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[v]=g;var S=(h,v,g)=>br(h,typeof v!="symbol"?v+"":v,g),we=(h,v,g)=>v.has(h)||me("Cannot "+g);var y=(h,v,g)=>(we(h,v,"read from private field"),g?g.call(h):v.get(h)),Ft=(h,v,g)=>v.has(h)?me("Cannot add the same private member more than once"):v instanceof WeakSet?v.add(h):v.set(h,g),Lt=(h,v,g,ut)=>(we(h,v,"write to private field"),ut?ut.call(h,g):v.set(h,g),g);var L,x;const h="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(h);const v=2,g="[",ut="]",tt={},ye=["touchstart","touchmove"];function Ee(t){return ye.includes(t)}const Pt=!1;var be=Array.isArray,Te=Array.from,it=Object.keys,ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor;const A=2,qt=4,ft=8,Tt=16,D=32,V=64,xt=128,U=256,ct=512,E=1024,P=2048,et=4096,_t=8192,K=16384,xe=32768,Ce=65536,ke=1<<19,It=1<<20,Ne=Symbol("legacy props");function Mt(t){return t===this.v}function Re(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Se(t){return!Re(t,this.v)}function Ae(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Oe(){throw new Error("https://svelte.dev/e/hydration_failed")}function De(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Fe(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Le=!1;function Pe(t,e){var r={f:0,v:t,reactions:null,equals:Mt,version:0};return r}function Ht(t,e=!1){const r=Pe(t);return e||(r.equals=Se),r}function jt(t,e){return $!==null&&er()&&$.f&(A|Tt)&&(Y===null||!Y.includes(t))&&Fe(),qe(t,e)}function qe(t,e){return t.equals(e)||(t.v=e,t.version=ue(),Yt(t,P),c!==null&&c.f&E&&!(c.f&D)&&(m!==null&&m.includes(t)?(F(c,P),wt(c)):M===null?tr([t]):M.push(t))),e}function Yt(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,l=0;l<n;l++){var s=r[l],u=s.f;u&P||(F(s,e),u&(E|U)&&(u&A?Yt(s,et):wt(s)))}}function Ct(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function ht(t){O=t}let w;function H(t){if(t===null)throw Ct(),tt;return w=t}function Bt(){return H(rt(w))}function Vt(t){if(O){if(rt(w)!==null)throw Ct(),tt;w=t}}var Ut,Kt,Wt;function kt(){if(Ut===void 0){Ut=window;var t=Element.prototype,e=Node.prototype;Kt=at(e,"firstChild").get,Wt=at(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function vt(t=""){return document.createTextNode(t)}function dt(t){return Kt.call(t)}function rt(t){return Wt.call(t)}function Jt(t,e){if(!O)return dt(t);var r=dt(w);if(r===null)r=w.appendChild(vt());else if(e&&r.nodeType!==3){var n=vt();return r==null||r.before(n),H(n),n}return H(r),r}function Ie(t,e=1,r=!1){let n=O?w:t;for(var l;e--;)l=n,n=rt(n);if(!O)return n;var s=n==null?void 0:n.nodeType;if(r&&s!==3){var u=vt();return n===null?l==null||l.after(u):n.before(u),H(u),u}return H(n),n}function Me(t){t.textContent=""}function He(t){var e=A|P;c===null?e|=U:c.f|=It;var r=$!==null&&$.f&A?$:null;const n={children:null,ctx:k,deps:null,equals:Mt,f:e,fn:t,reactions:null,v:null,version:0,parent:r??c};return r!==null&&(r.children??(r.children=[])).push(n),n}function Gt(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&A?Nt(n):q(n)}}}function je(t){for(var e=t.parent;e!==null;){if(!(e.f&A))return e;e=e.parent}return null}function zt(t){var e,r=c;I(je(t));try{Gt(t),e=ie(t)}finally{I(r)}return e}function Qt(t){var e=zt(t),r=(B||t.f&U)&&t.deps!==null?et:E;F(t,r),t.equals(e)||(t.v=e,t.version=ue())}function Nt(t){Gt(t),st(t,0),F(t,K),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ye(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function W(t,e,r,n=!0){var l=(t&V)!==0,s=c,u={ctx:k,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:e,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=J;try{le(!0),Rt(u),u.f|=xe}catch(_){throw q(u),_}finally{le(i)}}else e!==null&&wt(u);var o=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&It)===0;if(!o&&!l&&n&&(s!==null&&Ye(u,s),$!==null&&$.f&A)){var f=$;(f.children??(f.children=[])).push(u)}return u}function Be(t){const e=W(V,t,!0);return()=>{q(e)}}function Ve(t){const e=W(V,t,!0);return(r={})=>new Promise(n=>{r.outro?Qe(e,()=>{q(e),n(void 0)}):(q(e),n(void 0))})}function Ue(t){return W(qt,t,!1)}function Ke(t){return W(ft,t,!0)}function We(t){return Je(t)}function Je(t,e=0){return W(ft|Tt|e,t,!0)}function Ge(t,e=!0){return W(ft|D,t,!0,e)}function Xt(t){var e=t.teardown;if(e!==null){const r=$;z(null);try{e.call(null)}finally{z(r)}}}function Zt(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)Nt(e[r])}}function te(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;q(r,e),r=n}}function ze(t){for(var e=t.first;e!==null;){var r=e.next;e.f&D||q(e),e=r}}function q(t,e=!0){var r=!1;if((e||t.f&ke)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var s=n===l?null:rt(n);n.remove(),n=s}r=!0}te(t,e&&!r),Zt(t),st(t,0),F(t,K);var u=t.transitions;if(u!==null)for(const o of u)o.stop();Xt(t);var i=t.parent;i!==null&&i.first!==null&&ee(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function ee(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Qe(t,e){var r=[];re(t,r,!0),Xe(r,()=>{q(t),e()})}function Xe(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function re(t,e,r){if(!(t.f&_t)){if(t.f^=_t,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&e.push(u);for(var n=t.first;n!==null;){var l=n.next,s=(n.f&Ce)!==0||(n.f&D)!==0;re(n,e,s?r:!1),n=l}}}function Tr(){}const ne=0,Ze=1;let $t=!1,pt=ne,nt=!1,lt=null,J=!1;function le(t){J=t}let j=[],G=0,xr=[],$=null;function z(t){$=t}let c=null;function I(t){c=t}let Y=null,m=null,b=0,M=null;function tr(t){M=t}let se=1,B=!1,k=null;function ue(){return++se}function er(){return!Le}function gt(t){var u,i;var e=t.f;if(e&P)return!0;if(e&et){var r=t.deps,n=(e&U)!==0;if(r!==null){var l;if(e&ct){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(t);t.f^=ct}for(l=0;l<r.length;l++){var s=r[l];if(gt(s)&&Qt(s),n&&c!==null&&!B&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!n||c!==null&&!B)&&F(t,E)}return!1}function rr(t,e){for(var r=e;r!==null;){if(r.f&xt)try{r.fn(t);return}catch{r.f^=xt}r=r.parent}throw $t=!1,t}function nr(t){return(t.f&K)===0&&(t.parent===null||(t.parent.f&xt)===0)}function mt(t,e,r,n){if($t){if(r===null&&($t=!1),nr(e))throw t;return}r!==null&&($t=!0);{rr(t,e);return}}function ie(t){var d;var e=m,r=b,n=M,l=$,s=B,u=Y,i=k,o=t.f;m=null,b=0,M=null,$=o&(D|V)?null:t,B=!J&&(o&U)!==0,Y=null,k=t.ctx;try{var f=(0,t.fn)(),_=t.deps;if(m!==null){var a;if(st(t,b),_!==null&&b>0)for(_.length=b+m.length,a=0;a<m.length;a++)_[b+a]=m[a];else t.deps=_=m;if(!B)for(a=b;a<_.length;a++)((d=_[a]).reactions??(d.reactions=[])).push(t)}else _!==null&&b<_.length&&(st(t,b),_.length=b);return f}finally{m=e,b=r,M=n,$=l,B=s,Y=u,k=i}}function lr(t,e){let r=e.reactions;if(r!==null){var n=r.indexOf(t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&e.f&A&&(m===null||!m.includes(e))&&(F(e,et),e.f&(U|ct)||(e.f^=ct),st(e,0))}function st(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)lr(t,r[n])}function Rt(t){var e=t.f;if(!(e&K)){F(t,E);var r=c,n=k;c=t;try{e&Tt?ze(t):te(t),Zt(t),Xt(t);var l=ie(t);t.teardown=typeof l=="function"?l:null,t.version=se}catch(s){mt(s,t,r,n||t.ctx)}finally{c=r}}}function oe(){if(G>1e3){G=0;try{Ae()}catch(t){if(lt!==null)mt(t,lt,null);else throw t}}G++}function ae(t){var e=t.length;if(e!==0){oe();var r=J;J=!0;try{for(var n=0;n<e;n++){var l=t[n];l.f&E||(l.f^=E);var s=[];fe(l,s),sr(s)}}finally{J=r}}}function sr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(K|_t)))try{gt(n)&&(Rt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ee(n):n.fn=null))}catch(l){mt(l,n,null,n.ctx)}}}function ur(){if(nt=!1,G>1001)return;const t=j;j=[],ae(t),nt||(G=0,lt=null)}function wt(t){pt===ne&&(nt||(nt=!0,queueMicrotask(ur))),lt=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(V|D)){if(!(r&E))return;e.f^=E}}j.push(e)}function fe(t,e){var r=t.first,n=[];t:for(;r!==null;){var l=r.f,s=(l&D)!==0,u=s&&(l&E)!==0,i=r.next;if(!u&&!(l&_t))if(l&ft){if(s)r.f^=E;else try{gt(r)&&Rt(r)}catch(a){mt(a,r,null,r.ctx)}var o=r.first;if(o!==null){r=o;continue}}else l&qt&&n.push(r);if(i===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var f=a.next;if(f!==null){r=f;continue t}a=a.parent}}r=i}for(var _=0;_<n.length;_++)o=n[_],e.push(o),fe(o,e)}function St(t){var e=pt,r=j;try{oe();const l=[];pt=Ze,j=l,nt=!1,ae(r);var n=t==null?void 0:t();return(j.length>0||l.length>0)&&St(),G=0,lt=null,n}finally{pt=e,j=r}}function Q(t){var _;var e=t.f,r=(e&A)!==0;if(r&&e&K){var n=zt(t);return Nt(t),n}if($!==null){Y!==null&&Y.includes(t)&&De();var l=$.deps;m===null&&l!==null&&l[b]===t?b++:m===null?m=[t]:m.push(t),M!==null&&c!==null&&c.f&E&&!(c.f&D)&&M.includes(t)&&(F(c,P),wt(c))}else if(r&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&A){var o=u;i=o,u=o.parent}else{var f=u;(_=f.deriveds)!=null&&_.includes(i)||(f.deriveds??(f.deriveds=[])).push(i);break}return r&&(s=t,gt(s)&&Qt(s)),t.v}function ir(t){const e=$;try{return $=null,t()}finally{$=e}}const or=~(P|et|E);function F(t,e){t.f=t.f&or|e}function ce(t,e=!1,r){k={p:k,c:null,e:null,m:!1,s:t,x:null,l:null}}function _e(t){const e=k;if(e!==null){t!==void 0&&(e.x=t);const u=e.e;if(u!==null){var r=c,n=$;e.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];I(s.effect),z(s.reaction),Ue(s.fn)}}finally{I(r),z(n)}}k=e.p,e.m=!0}return t||{}}const ar=new Set,he=new Set;function yt(t){var T;var e=this,r=e.ownerDocument,n=t.type,l=((T=t.composedPath)==null?void 0:T.call(t))||[],s=l[0]||t.target,u=0,i=t.__root;if(i){var o=l.indexOf(i);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var f=l.indexOf(e);if(f===-1)return;o<=f&&(u=o)}if(s=l[u]||t.target,s!==e){ot(t,"currentTarget",{configurable:!0,get(){return s||r}});var _=$,a=c;z(null),I(null);try{for(var d,p=[];s!==null;){var C=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+n];if(N!==void 0&&!s.disabled)if(be(N)){var[Z,...bt]=N;Z.apply(s,[t,...bt])}else N.call(s,t)}catch(R){d?p.push(R):d=R}if(t.cancelBubble||C===e||C===null)break;s=C}if(d){for(let R of p)queueMicrotask(()=>{throw R});throw d}}finally{t.__root=e,delete t.currentTarget,z(_),I(a)}}}function fr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function At(t,e){var r=c;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function cr(t,e){var r=(e&v)!==0,n,l=!t.startsWith("<!>");return()=>{if(O)return At(w,null),w;n===void 0&&(n=fr(l?t:"<!>"+t),n=dt(n));var s=r?document.importNode(n,!0):n.cloneNode(!0);return At(s,s),s}}function ve(t,e){if(O){c.nodes_end=w,Bt();return}t!==null&&t.before(e)}function _r(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function de(t,e){return $e(t,e)}function hr(t,e){kt(),e.intro=e.intro??!1;const r=e.target,n=O,l=w;try{for(var s=dt(r);s&&(s.nodeType!==8||s.data!==g);)s=rt(s);if(!s)throw tt;ht(!0),H(s),Bt();const u=$e(t,{...e,anchor:s});if(w===null||w.nodeType!==8||w.data!==ut)throw Ct(),tt;return ht(!1),u}catch(u){if(u===tt)return e.recover===!1&&Oe(),kt(),Me(r),ht(!1),de(t,e);throw u}finally{ht(n),H(l)}}const X=new Map;function $e(t,{target:e,anchor:r,props:n={},events:l,context:s,intro:u=!0}){kt();var i=new Set,o=a=>{for(var d=0;d<a.length;d++){var p=a[d];if(!i.has(p)){i.add(p);var C=Ee(p);e.addEventListener(p,yt,{passive:C});var N=X.get(p);N===void 0?(document.addEventListener(p,yt,{passive:C}),X.set(p,1)):X.set(p,N+1)}}};o(Te(ar)),he.add(o);var f=void 0,_=Ve(()=>{var a=r??e.appendChild(vt());return Ge(()=>{if(s){ce({});var d=k;d.c=s}l&&(n.$$events=l),O&&At(a,null),f=t(a,n)||{},O&&(c.nodes_end=w),s&&_e()}),()=>{var C;for(var d of i){e.removeEventListener(d,yt);var p=X.get(d);--p===0?(document.removeEventListener(d,yt),X.delete(d)):X.set(d,p)}he.delete(o),a!==r&&((C=a.parentNode)==null||C.removeChild(a))}});return Ot.set(f,_),f}let Ot=new WeakMap;function vr(t,e){const r=Ot.get(t);return r?(Ot.delete(t),r(e)):Promise.resolve()}function dr(t){for(var e=c,r=c;e!==null&&!(e.f&(D|V));)e=e.parent;try{return I(e),t()}finally{I(r)}}function $r(t,e,r,n){var bt;var l=!1,s;s=t[e];var u=((bt=at(t,e))==null?void 0:bt.set)??void 0,i=n,o=!0,f=!1,_=()=>(f=!0,o&&(o=!1,i=n),i),a;if(a=()=>{var T=t[e];return T===void 0?_():(o=!0,f=!1,T)},u){var d=t.$$legacy;return function(T,R){return arguments.length>0?((!R||d||l)&&u(R?a():T),T):a()}}var p=!1,C=!1,N=Ht(s),Z=dr(()=>He(()=>{var T=a(),R=Q(N);return p?(p=!1,C=!0,R):(C=!1,N.v=T)}));return function(T,R){if(arguments.length>0){const Dt=R?Q(Z):T;return Z.equals(Dt)||(p=!0,jt(N,Dt),f&&i!==void 0&&(i=Dt),ir(()=>Q(Z))),T}return Q(Z)}}function pr(t){return new gr(t)}class gr{constructor(e){Ft(this,L);Ft(this,x);var s;var r=new Map,n=(u,i)=>{var o=Ht(i);return r.set(u,o),o};const l=new Proxy({...e.props||{},$$events:{}},{get(u,i){return Q(r.get(i)??n(i,Reflect.get(u,i)))},has(u,i){return i===Ne?!0:(Q(r.get(i)??n(i,Reflect.get(u,i))),Reflect.has(u,i))},set(u,i,o){return jt(r.get(i)??n(i,o),o),Reflect.set(u,i,o)}});Lt(this,x,(e.hydrate?hr:de)(e.component,{target:e.target,anchor:e.anchor,props:l,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((s=e==null?void 0:e.props)!=null&&s.$$host)||e.sync===!1)&&St(),Lt(this,L,l.$$events);for(const u of Object.keys(y(this,x)))u==="$set"||u==="$destroy"||u==="$on"||ot(this,u,{get(){return y(this,x)[u]},set(i){y(this,x)[u]=i},enumerable:!0});y(this,x).$set=u=>{Object.assign(l,u)},y(this,x).$destroy=()=>{vr(y(this,x))}}$set(e){y(this,x).$set(e)}$on(e,r){y(this,L)[e]=y(this,L)[e]||[];const n=(...l)=>r.call(this,...l);return y(this,L)[e].push(n),()=>{y(this,L)[e]=y(this,L)[e].filter(l=>l!==n)}}$destroy(){y(this,x).$destroy()}}L=new WeakMap,x=new WeakMap;let pe;typeof HTMLElement=="function"&&(pe=class extends HTMLElement{constructor(e,r,n){super();S(this,"$$ctor");S(this,"$$s");S(this,"$$c");S(this,"$$cn",!1);S(this,"$$d",{});S(this,"$$r",!1);S(this,"$$p_d",{});S(this,"$$l",{});S(this,"$$l_u",new Map);S(this,"$$me");this.$$ctor=e,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(e,r,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(r),this.$$c){const l=this.$$c.$on(e,r);this.$$l_u.set(r,l)}super.addEventListener(e,r,n)}removeEventListener(e,r,n){if(super.removeEventListener(e,r,n),this.$$c){const l=this.$$l_u.get(r);l&&(l(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return s=>{const u=document.createElement("slot");l!=="default"&&(u.name=l),ve(s,u)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},n=mr(this);for(const l of this.$$s)l in n&&(l==="default"&&!this.$$d.children?(this.$$d.children=e(l),r.default=!0):r[l]=e(l));for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=Et(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=pr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=Be(()=>{Ke(()=>{var l;this.$$r=!0;for(const s of it(this.$$c)){if(!((l=this.$$p_d[s])!=null&&l.reflect))continue;this.$$d[s]=this.$$c[s];const u=Et(s,this.$$d[s],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,u)}this.$$r=!1})});for(const l in this.$$l)for(const s of this.$$l[l]){const u=this.$$c.$on(l,s);this.$$l_u.set(s,u)}this.$$l={}}}attributeChangedCallback(e,r,n){var l;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Et(e,n,this.$$p_d,"toProp"),(l=this.$$c)==null||l.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return it(this.$$p_d).find(r=>this.$$p_d[r].attribute===e||!this.$$p_d[r].attribute&&r.toLowerCase()===e)||e}});function Et(t,e,r,n){var s;const l=(s=r[t])==null?void 0:s.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!r[t])return e;if(n==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function mr(t){const e={};return t.childNodes.forEach(r=>{e[r.slot||"default"]=!0}),e}function wr(t,e,r,n,l,s){let u=class extends pe{constructor(){super(t,r,l),this.$$p_d=e}static get observedAttributes(){return it(e).map(i=>(e[i].attribute||i).toLowerCase())}};return it(e).forEach(i=>{ot(u.prototype,i,{get(){return this.$$c&&i in this.$$c?this.$$c[i]:this.$$d[i]},set(o){var a;o=Et(i,o,e),this.$$d[i]=o;var f=this.$$c;if(f){var _=(a=at(f,i))==null?void 0:a.get;_?f[i]=o:f.$set({[i]:o})}}})}),n.forEach(i=>{ot(u.prototype,i,{get(){var o;return(o=this.$$c)==null?void 0:o[i]}})}),t.element=u,u}var yr=cr("<p>Hi! I am a plugin rendering the current <code>sref</code> value: <strong> </strong></p>");function ge(t,e){ce(e,!0);let r=$r(e,"sref");var n=yr(),l=Ie(Jt(n),3),s=Jt(l,!0);return Vt(l),Vt(n),We(()=>_r(s,r())),ve(t,n),_e({get sref(){return r()},set sref(u){r(u),St()}})}return customElements.define("sefaria-plugin",wr(ge,{sref:{}},[],[],!0)),ge}();
