import{a as Se,b as Ie,c as lt,d as _e,e as be,f as H,g as K}from"./chunk-TY6P2GKX.js";import{a as ze,b as Be,c as ht,d as Ue,g as Ve,i as Ge}from"./chunk-WYKDHNMS.js";import{$ as F,$b as we,A as U,B as j,C as ot,D as Mt,E as re,G as it,H as se,J as ce,K as ae,Ka as _,N as Tt,Ob as Ee,Pa as ye,Q as ue,R as fe,S as pe,T as le,Tb as Oe,Ua as J,Ub as Me,V as At,Vb as Te,W as rt,Wa as wt,X as Pt,Xb as Ft,Y as de,Ya as z,Yb as dt,Zb as Ae,_b as Pe,a as I,ab as x,ac as Re,b as A,bb as E,bc as je,ca as M,cb as D,cc as kt,db as ft,dc as mt,ea as y,eb as W,ec as Fe,f as X,fa as v,fb as $,fc as k,ga as me,gb as P,gc as Q,hb as pt,hc as ke,i as Qt,ia as V,ib as Rt,ic as Ne,jc as De,k as te,kc as $e,l as ee,lb as G,lc as L,m as ne,ma as st,mb as jt,mc as gt,n as oe,nc as Le,ob as Y,p as _t,pb as q,ra as ct,sa as at,sb as Ce,t as ie,ta as ge,u as b,w as bt,wb as xe,xb as ve,ya as he,za as ut}from"./chunk-WAF473H6.js";var wn=t=>t.auth,yt=ke(wn,t=>t?.user);var He=(t,e)=>{let i=v(k),n=v(lt);return i.pipe(Q(yt),b(o=>o?!0:(n.navigate(["/auth/login"]),!1)))};var Ke=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-HV76XHCG.js").then(t=>t.Auth_routes)},{path:"home",canActivate:[He],loadComponent:()=>import("./chunk-PO7Y4YRE.js").then(t=>t.HomeComponent)}];var et="PERFORM_ACTION",kn="REFRESH",qe="RESET",Qe="ROLLBACK",tn="COMMIT",en="SWEEP",nn="TOGGLE_ACTION",Nn="SET_ACTIONS_ACTIVE",on="JUMP_TO_STATE",rn="JUMP_TO_ACTION",Xt="IMPORT_STATE",sn="LOCK_CHANGES",cn="PAUSE_RECORDING",Z=class{constructor(e,i){if(this.action=e,this.timestamp=i,this.type=et,typeof e.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Nt=class{constructor(){this.type=kn}},Dt=class{constructor(e){this.timestamp=e,this.type=qe}},$t=class{constructor(e){this.timestamp=e,this.type=Qe}},Lt=class{constructor(e){this.timestamp=e,this.type=tn}},zt=class{constructor(){this.type=en}},Bt=class{constructor(e){this.id=e,this.type=nn}};var Ut=class{constructor(e){this.index=e,this.type=on}},Vt=class{constructor(e){this.actionId=e,this.type=rn}},Gt=class{constructor(e){this.nextLiftedState=e,this.type=Xt}},Ht=class{constructor(e){this.status=e,this.type=sn}},Kt=class{constructor(e){this.status=e,this.type=cn}};var Et=new M("@ngrx/store-devtools Options"),Ze=new M("@ngrx/store-devtools Initial Config");function an(){return null}var Dn="NgRx Store DevTools";function $n(t){let e={maxAge:!1,monitor:an,actionSanitizer:void 0,stateSanitizer:void 0,name:Dn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},i=typeof t=="function"?t():t,n=i.logOnly?{pause:!0,export:!0,test:!0}:!1,o=i.features||n||e.features;o.import===!0&&(o.import="custom");let s=Object.assign({},e,{features:o},i);if(s.maxAge&&s.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${s.maxAge}`);return s}function Xe(t,e){return t.filter(i=>e.indexOf(i)<0)}function un(t){let{computedStates:e,currentStateIndex:i}=t;if(i>=e.length){let{state:o}=e[e.length-1];return o}let{state:n}=e[i];return n}function tt(t){return new Z(t,+Date.now())}function Ln(t,e){return Object.keys(e).reduce((i,n)=>{let o=Number(n);return i[o]=fn(t,e[o],o),i},{})}function fn(t,e,i){return A(I({},e),{action:t(e.action,i)})}function zn(t,e){return e.map((i,n)=>({state:pn(t,i.state,n),error:i.error}))}function pn(t,e,i){return t(e,i)}function ln(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function Bn(t,e,i,n){let o=[],s={},r=[];return t.stagedActionIds.forEach((a,h)=>{let p=t.actionsById[a];p&&(h&&Jt(t.computedStates[h],p,e,i,n)||(s[a]=p,o.push(a),r.push(t.computedStates[h])))}),A(I({},t),{stagedActionIds:o,actionsById:s,computedStates:r})}function Jt(t,e,i,n,o){let s=i&&!i(t,e.action),r=n&&!e.action.type.match(n.map(h=>Je(h)).join("|")),a=o&&e.action.type.match(o.map(h=>Je(h)).join("|"));return s||r||a}function Je(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function dn(t){return{ngZone:t?v(he):null,connectInZone:t}}var Ot=(()=>{let e=class e extends dt{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ge(e)))(s||e)}})(),e.\u0275prov=F({token:e,factory:e.\u0275fac});let t=e;return t})(),Ct={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Zt=new M("@ngrx/store-devtools Redux Devtools Extension"),mn=(()=>{let e=class e{constructor(n,o,s){this.config=o,this.dispatcher=s,this.zoneConfig=dn(this.config.connectInZone),this.devtoolsExtension=n,this.createActionStreams()}notify(n,o){if(this.devtoolsExtension)if(n.type===et){if(o.isLocked||o.isPaused)return;let s=un(o);if(ln(this.config)&&Jt(s,n,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let r=this.config.stateSanitizer?pn(this.config.stateSanitizer,s,o.currentStateIndex):s,a=this.config.actionSanitizer?fn(this.config.actionSanitizer,n,o.nextActionId):n;this.sendToReduxDevtools(()=>this.extensionConnection.send(a,r))}else{let s=A(I({},o),{stagedActionIds:o.stagedActionIds,actionsById:this.config.actionSanitizer?Ln(this.config.actionSanitizer,o.actionsById):o.actionsById,computedStates:this.config.stateSanitizer?zn(this.config.stateSanitizer,o.computedStates):o.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,s,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new X(n=>{let o=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=o,o.init(),o.subscribe(s=>n.next(s)),o.unsubscribe}):ne}createActionStreams(){let n=this.createChangesObservable().pipe(pe()),o=n.pipe(j(u=>u.type===Ct.START)),s=n.pipe(j(u=>u.type===Ct.STOP)),r=n.pipe(j(u=>u.type===Ct.DISPATCH),b(u=>this.unwrapAction(u.payload)),Mt(u=>u.type===Xt?this.dispatcher.pipe(j(c=>c.type===kt),ie(1e3),re(1e3),b(()=>u),ot(()=>_t(u)),it(1)):_t(u))),h=n.pipe(j(u=>u.type===Ct.ACTION),b(u=>this.unwrapAction(u.payload))).pipe(rt(s)),p=r.pipe(rt(s));this.start$=o.pipe(rt(s)),this.actions$=this.start$.pipe(At(()=>h)),this.liftedActions$=this.start$.pipe(At(()=>p))}unwrapAction(n){return typeof n=="string"?(0,eval)(`(${n})`):n}getExtensionConfig(n){let o={name:n.name,features:n.features,serialize:n.serialize,autoPause:n.autoPause??!1,trace:n.trace??!1,traceLimit:n.traceLimit??75};return n.maxAge!==!1&&(o.maxAge=n.maxAge),o}sendToReduxDevtools(n){try{n()}catch(o){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",o)}}};e.\u0275fac=function(o){return new(o||e)(y(Zt),y(Et),y(Ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac});let t=e;return t})(),vt={type:Ft},Un="@ngrx/store-devtools/recompute",Vn={type:Un};function gn(t,e,i,n,o){if(n)return{state:i,error:"Interrupted by an error up the chain"};let s=i,r;try{s=t(i,e)}catch(a){r=a.toString(),o.handleError(a)}return{state:s,error:r}}function xt(t,e,i,n,o,s,r,a,h){if(e>=t.length&&t.length===s.length)return t;let p=t.slice(0,e),u=s.length-(h?1:0);for(let c=e;c<u;c++){let d=s[c],O=o[d].action,l=p[c-1],f=l?l.state:n,w=l?l.error:void 0,R=r.indexOf(d)>-1?l:gn(i,O,f,w,a);p.push(R)}return h&&p.push(t[t.length-1]),p}function Gn(t,e){return{monitorState:e(void 0,{}),nextActionId:1,actionsById:{0:tt(vt)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Hn(t,e,i,n,o={}){return s=>(r,a)=>{let{monitorState:h,actionsById:p,nextActionId:u,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:f,isLocked:w,isPaused:S}=r||e;r||(p=Object.create(p));function R(C){let g=C,N=c.slice(1,g+1);for(let T=0;T<N.length;T++)if(f[T+1].error){g=T,N=c.slice(1,g+1);break}else delete p[N[T]];d=d.filter(T=>N.indexOf(T)===-1),c=[0,...c.slice(g+1)],O=f[g].state,f=f.slice(g),l=l>g?l-g:0}function B(){p={0:tt(vt)},u=1,c=[0],d=[],O=f[l].state,l=0,f=[]}let m=0;switch(a.type){case sn:{w=a.status,m=1/0;break}case cn:{S=a.status,S?(c=[...c,u],p[u]=new Z({type:"@ngrx/devtools/pause"},+Date.now()),u++,m=c.length-1,f=f.concat(f[f.length-1]),l===c.length-2&&l++,m=1/0):B();break}case qe:{p={0:tt(vt)},u=1,c=[0],d=[],O=t,l=0,f=[];break}case tn:{B();break}case Qe:{p={0:tt(vt)},u=1,c=[0],d=[],l=0,f=[];break}case nn:{let{id:C}=a;d.indexOf(C)===-1?d=[C,...d]:d=d.filter(N=>N!==C),m=c.indexOf(C);break}case Nn:{let{start:C,end:g,active:N}=a,T=[];for(let It=C;It<g;It++)T.push(It);N?d=Xe(d,T):d=[...d,...T],m=c.indexOf(C);break}case on:{l=a.index,m=1/0;break}case rn:{let C=c.indexOf(a.actionId);C!==-1&&(l=C),m=1/0;break}case en:{c=Xe(c,d),d=[],l=Math.min(l,c.length-1);break}case et:{if(w)return r||e;if(S||r&&Jt(r.computedStates[l],a,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let g=f[f.length-1];f=[...f.slice(0,-1),gn(s,a.action,g.state,g.error,i)],m=1/0;break}o.maxAge&&c.length===o.maxAge&&R(1),l===c.length-1&&l++;let C=u++;p[C]=a,c=[...c,C],m=c.length-1;break}case Xt:{({monitorState:h,actionsById:p,nextActionId:u,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:f,isLocked:w,isPaused:S}=a.nextLiftedState);break}case Ft:{m=0,o.maxAge&&c.length>o.maxAge&&(f=xt(f,m,s,O,p,c,d,i,S),R(c.length-o.maxAge),m=1/0);break}case kt:{if(f.filter(g=>g.error).length>0)m=0,o.maxAge&&c.length>o.maxAge&&(f=xt(f,m,s,O,p,c,d,i,S),R(c.length-o.maxAge),m=1/0);else{if(!S&&!w){l===c.length-1&&l++;let g=u++;p[g]=new Z(a,+Date.now()),c=[...c,g],m=c.length-1,f=xt(f,m,s,O,p,c,d,i,S)}f=f.map(g=>A(I({},g),{state:s(g.state,Vn)})),l=c.length-1,o.maxAge&&c.length>o.maxAge&&R(c.length-o.maxAge),m=1/0}break}default:{m=1/0;break}}return f=xt(f,m,s,O,p,c,d,i,S),h=n(h,a),{monitorState:h,actionsById:p,nextActionId:u,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:f,isLocked:w,isPaused:S}}}var We=(()=>{let e=class e{constructor(n,o,s,r,a,h,p,u){let c=Gn(p,u.monitor),d=Hn(p,c,h,u.monitor,u),O=U(U(o.asObservable().pipe(le(1)),r.actions$).pipe(b(tt)),n,r.liftedActions$).pipe(oe(ee)),l=s.pipe(b(d)),f=dn(u.connectInZone),w=new te(1);this.liftedStateSubscription=O.pipe(de(l),Ye(f),fe(({state:B},[m,C])=>{let g=C(B,m);return m.type!==et&&ln(u)&&(g=Bn(g,u.predicate,u.actionsSafelist,u.actionsBlocklist)),r.notify(m,g),{state:g,action:m}},{state:c,action:null})).subscribe(({state:B,action:m})=>{if(w.next(B),m.type===et){let C=m.action;a.next(C)}}),this.extensionStartSubscription=r.start$.pipe(Ye(f)).subscribe(()=>{this.refresh()});let S=w.asObservable(),R=S.pipe(b(un));Object.defineProperty(R,"state",{value:Me(R,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=S,this.state=R}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new Z(n,+Date.now()))}refresh(){this.dispatch(new Nt)}reset(){this.dispatch(new Dt(+Date.now()))}rollback(){this.dispatch(new $t(+Date.now()))}commit(){this.dispatch(new Lt(+Date.now()))}sweep(){this.dispatch(new zt)}toggleAction(n){this.dispatch(new Bt(n))}jumpToAction(n){this.dispatch(new Vt(n))}jumpToState(n){this.dispatch(new Ut(n))}importState(n){this.dispatch(new Gt(n))}lockChanges(n){this.dispatch(new Ht(n))}pauseRecording(n){this.dispatch(new Kt(n))}};e.\u0275fac=function(o){return new(o||e)(y(Ot),y(dt),y(Re),y(mn),y(mt),y(ut),y(Ae),y(Et))},e.\u0275prov=F({token:e,factory:e.\u0275fac});let t=e;return t})();function Ye({ngZone:t,connectInZone:e}){return i=>e?new X(n=>i.subscribe({next:o=>t.run(()=>n.next(o)),error:o=>t.run(()=>n.error(o)),complete:()=>t.run(()=>n.complete())})):i}var Kn=new M("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Zn(t,e){return!!t||e.monitor!==an}function Xn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function hn(t={}){return st([mn,Ot,We,{provide:Ze,useValue:t},{provide:Kn,deps:[Zt,Et],useFactory:Zn},{provide:Zt,useFactory:Xn},{provide:Et,deps:[Ze],useFactory:$n},{provide:Fe,deps:[We],useFactory:Jn},{provide:je,useExisting:Ot}])}function Jn(t){return t.state}var Wn={products:[],filterProducts:[],category:[],cartItem:[],searchText:"",filterKeyword:""},yn=gt(Wn,L(ze,(t,e)=>{let n=e.products.map(s=>s.category).reduce((s,r)=>(s[r]=(s[r]||0)+1,s),{}),o=Object.entries(n).map(([s,r])=>({category:s,count:r}));return A(I({},t),{products:e.products,filterProducts:e.products,category:[{category:"All",count:e.products.length},...o]})}),L(Be,(t,e)=>A(I({},t),{cartItem:[...t.cartItem,e.cart]})),L(ht,(t,e)=>{let i=t.products.filter(r=>r.title.toLocaleLowerCase().includes(e.searchText.toLocaleLowerCase())||r.description.toLocaleLowerCase().includes(e.searchText.toLocaleLowerCase())),o=i.map(r=>r.category).reduce((r,a)=>(r[a]=(r[a]||0)+1,r),{}),s=Object.entries(o).map(([r,a])=>({category:r,count:a}));return A(I({},t),{filterProducts:i,category:[{category:"All",count:i.length},...s],searchText:e.searchText})}),L(Ue,(t,e)=>{let i=t.products.filter(r=>r.category.includes(e.filterKeyword)),o=t.products.map(r=>r.category).reduce((r,a)=>(r[a]=(r[a]||0)+1,r),{}),s=Object.entries(o).map(([r,a])=>({category:r,count:a}));return A(I({},t),{filterProducts:i,category:[{category:"All",count:t.products.length},...s],filterKeyword:e.filterKeyword})}));var Yn={user:void 0},Cn=gt(Yn,L(H,(t,e)=>({user:e.user})),L(K,(t,e)=>({user:void 0})));var xn=Ne({name:"auth",reducer:Cn});var qn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},St="__@ngrx/effects_create__";function Wt(t,e={}){let i=e.functional?t:t(),n=I(I({},qn),e);return Object.defineProperty(i,St,{value:n}),i}function Qn(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(St)?t[n][St].hasOwnProperty("dispatch"):!1).map(n=>{let o=t[n][St];return I({propertyName:n},o)})}function to(t){return Qn(t)}function vn(t){return Object.getPrototypeOf(t)}function eo(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function En(t){return typeof t=="function"}function no(t){return t.filter(En)}function oo(t,e,i){let n=vn(t),s=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,r=to(t).map(({propertyName:a,dispatch:h,useEffectsErrorHandler:p})=>{let u=typeof t[a]=="function"?t[a]():t[a],c=p?i(u,e):u;return h===!1?c.pipe(se()):c.pipe(ue()).pipe(b(O=>({effect:t[a],notification:O,propertyName:a,sourceName:s,sourceInstance:t})))});return U(...r)}var io=10;function On(t,e,i=io){return t.pipe(ot(n=>(e&&e.handleError(n),i<=1?t:On(t,e,i-1))))}var Sn=(()=>{let e=class e extends X{constructor(n){super(),n&&(this.source=n)}lift(n){let o=new e;return o.source=this,o.operator=n,o}};e.\u0275fac=function(o){return new(o||e)(y(mt))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Yt(...t){return j(e=>t.some(i=>typeof i=="string"?i===e.type:i.type===e.type))}var vi=new M("@ngrx/effects Internal Root Guard"),Ei=new M("@ngrx/effects User Provided Effects"),Oi=new M("@ngrx/effects Internal Root Effects"),Si=new M("@ngrx/effects Internal Root Effects Instances"),Ii=new M("@ngrx/effects Internal Feature Effects"),_i=new M("@ngrx/effects Internal Feature Effects Instance Groups"),ro=new M("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>On}),so="@ngrx/effects/init",co=Te(so);function ao(t,e){if(t.notification.kind==="N"){let i=t.notification.value;!uo(i)&&e.handleError(new Error(`Effect ${fo(t)} dispatched an invalid action: ${po(i)}`))}}function uo(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function fo({propertyName:t,sourceInstance:e,sourceName:i}){let n=typeof e[t]=="function";return!!i?`"${i}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function po(t){try{return JSON.stringify(t)}catch{return t}}var lo="ngrxOnIdentifyEffects";function mo(t){return qt(t,lo)}var go="ngrxOnRunEffects";function ho(t){return qt(t,go)}var yo="ngrxOnInitEffects";function Co(t){return qt(t,yo)}function qt(t,e){return t&&e in t&&typeof t[e]=="function"}var In=(()=>{let e=class e extends Qt{constructor(n,o){super(),this.errorHandler=n,this.effectsErrorHandler=o}addEffects(n){this.next(n)}toActions(){return this.pipe(Tt(n=>eo(n)?vn(n):n),bt(n=>n.pipe(Tt(xo))),bt(n=>{let o=n.pipe(ae(r=>vo(this.errorHandler,this.effectsErrorHandler)(r)),b(r=>(ao(r,this.errorHandler),r.notification)),j(r=>r.kind==="N"&&r.value!=null),ce()),s=n.pipe(it(1),j(Co),b(r=>r.ngrxOnInitEffects()));return U(o,s)}))}};e.\u0275fac=function(o){return new(o||e)(y(ut),y(ro))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function xo(t){return mo(t)?t.ngrxOnIdentifyEffects():""}function vo(t,e){return i=>{let n=oo(i,t,e);return ho(i)?i.ngrxOnRunEffects(n):n}}var Eo=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(n,o){this.effectSources=n,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(o){return new(o||e)(y(In),y(k))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function _n(...t){let e=t.flat(),i=no(e);return st([i,{provide:me,multi:!0,useValue:()=>{v(Pe),v(we,{optional:!0});let n=v(Eo),o=v(In),s=!n.isStarted;s&&n.start();for(let r of e){let a=En(r)?v(r):r;o.addEffects(a)}s&&v(k).dispatch(co())}}])}var bn=(()=>{class t{actions$;router;login$;logout$;constructor(i,n){this.actions$=i,this.router=n,this.login$=Wt(()=>this.actions$.pipe(Yt(H),Pt(o=>{localStorage.setItem("userInfo",JSON.stringify(o.user))})),{dispatch:!1}),this.logout$=Wt(()=>this.actions$.pipe(Yt(K),Pt(o=>{localStorage.removeItem("userInfo"),this.router.navigate(["/auth/login"])})),{dispatch:!1})}static \u0275fac=function(n){return new(n||t)(y(Sn),y(lt))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();function So(){let t=v(k);return()=>{let e=localStorage.getItem("userInfo");e!=null&&t.dispatch(H({user:JSON.parse(e)}))}}var Mn={providers:[xe({eventCoalescing:!0}),be(Ke),$e({appState:yn}),De(xn),hn({maxAge:25,logOnly:!ve()}),Oe(),_n(bn),{provide:Ce,useFactory:So,multi:!0}]};var Io=()=>["/home"],_o=()=>({"background-color":"gray",border:"none",width:"100%",height:"30px","border-radius":"10px",color:"white"});function bo(t,e){t&1&&(x(0,"ul")(1,"li",7),P(2,"Home"),E()()),t&2&&(_(),wt("routerLink",jt(1,Io)))}function Mo(t,e){if(t&1){let i=ft();x(0,"div",3),D(1,"i",8),x(2,"input",9),W("keyup",function(o){ct(i);let s=$();return at(s.productSearch(o))}),E()()}}function To(t,e){if(t&1&&(x(0,"i",4)(1,"p",10),P(2),Y(3,"async"),Y(4,"length"),E()()),t&2){let i=$();_(2),pt(q(4,3,q(3,1,i.cartItem$)))}}function Ao(t,e){if(t&1&&(x(0,"p",5),P(1),E()),t&2){let i,n=$();_(),Rt(" ",((i=n.userInfo())==null?null:i.firstName)+" "+((i=n.userInfo())==null?null:i.lastName)," ")}}function Po(t,e){if(t&1){let i=ft();x(0,"div")(1,"section",11)(2,"app-button",12),W("click",function(){ct(i);let o=$();return at(o.userInfo()?o.logout():null)}),P(3),E()()()}if(t&2){let i=$();_(2),wt("styleObj",jt(2,_o)),_(),pt(i.userInfo()?"Log out":"Log in")}}function wo(t,e){if(t&1){let i=ft();x(0,"div",0)(1,"p",5),P(2),E(),x(3,"div",3),D(4,"i",8),x(5,"input",9),W("keyup",function(o){ct(i);let s=$();return at(s.productSearch(o))}),E()(),x(6,"i",4)(7,"p",10),P(8),Y(9,"async"),Y(10,"length"),E()()()}if(t&2){let i,n=$();_(2),Rt(" ",((i=n.userInfo())==null?null:i.firstName)+" "+((i=n.userInfo())==null?null:i.lastName)," "),_(6),pt(q(10,4,q(9,2,n.cartItem$)))}}var Tn=(()=>{class t{#t=v(k);userInfo=ye(void 0);cartItem$;debounce;openMenu=!1;ngOnInit(){this.#t.pipe(Q(yt)).subscribe(i=>{i?this.userInfo.set(i):this.userInfo.set(void 0)}),this.cartItem$=this.#t.pipe(Q(Ve))}productSearch(i){let o=i.target.value;clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.#t.dispatch(ht({searchText:o}))},200)}logout(){this.#t.dispatch(K())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-navbar"]],standalone:!0,features:[G],decls:15,vars:6,consts:[[1,"container"],[1,"logo"],["src","image/Content.svg","alt","content"],[1,"search-input"],[1,"fa-solid","fa-cart-shopping","shoppingCart"],[1,"userinfo"],[1,"fa-solid","fa-gear","menu",3,"click"],[3,"routerLink"],[1,"fa-solid","fa-magnifying-glass"],["type","text","placeholder","Search",3,"keyup"],[1,"cartitem-number"],[1,"center"],["routerLink","/auth/login",3,"click","styleObj"]],template:function(n,o){n&1&&(x(0,"nav")(1,"div",0)(2,"div")(3,"div",1),D(4,"img",2),x(5,"span"),P(6,"ClickTik"),E()(),J(7,bo,3,2,"ul"),E(),x(8,"div"),J(9,Mo,3,0,"div",3)(10,To,5,5,"i",4)(11,Ao,2,1,"p",5),x(12,"i",6),W("click",function(){return o.openMenu=!o.openMenu}),J(13,Po,4,3,"div"),E()()(),J(14,wo,11,6,"div",0),E()),n&2&&(_(7),z(o.userInfo()?7:-1),_(2),z(o.userInfo()?9:-1),_(),z(o.userInfo()?10:-1),_(),z(o.userInfo()?11:-1),_(2),z(o.openMenu?13:-1),_(),z(o.userInfo()?14:-1))},dependencies:[Le,_e,Ee,Ge],styles:["nav[_ngcontent-%COMP%]{border-bottom:1px solid black}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0 10px;color:gray}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-inline-end:.5em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:1em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin-inline-start:3em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:gray}.container[_ngcontent-%COMP%]:nth-of-type(2){display:none}.shoppingCart[_ngcontent-%COMP%]{position:relative}.shoppingCart[_ngcontent-%COMP%]   .cartitem-number[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:50%;position:absolute;background-color:#41cccc;color:gray;padding:5px;margin:0;display:flex;justify-content:center;align-items:center;font-size:10px;top:-7px;right:-5px}.search-input[_ngcontent-%COMP%]{border:1px solid gray;padding:5px;border-radius:8px;margin-inline-end:10px;width:200px;white-space:nowrap;display:flex;justify-content:space-between}.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;width:100%;display:block}.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}@media (max-width: 800px){.search-input[_ngcontent-%COMP%]{width:100px}}@media (max-width: 560px){.search-input[_ngcontent-%COMP%], .shoppingCart[_ngcontent-%COMP%], .userinfo[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]:nth-of-type(2){display:flex;border-top:1px solid gray}.container[_ngcontent-%COMP%]:nth-of-type(2)   .shoppingCart[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:nth-of-type(2)   .userinfo[_ngcontent-%COMP%]{display:block}}.menu[_ngcontent-%COMP%]{position:relative;cursor:pointer}.menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:200px;height:100px;border-radius:10px;background-color:#fff;right:0;top:40px;box-shadow:0 12px 28px -6px #000000bf;padding:10px 20px;z-index:999;display:flex;align-items:center}.menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{flex-grow:1}"]})}return t})();var An=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-footer"]],standalone:!0,features:[G],decls:10,vars:0,consts:[[1,"container"],[1,"logo"],["src","image/Content.svg","alt","content"]],template:function(n,o){n&1&&(x(0,"footer")(1,"div",0)(2,"div")(3,"div",1),D(4,"img",2),x(5,"span"),P(6,"ClickTik"),E()()(),x(7,"div")(8,"p"),P(9,"\xA9 2022 ClickTik"),E()()()())},styles:["footer[_ngcontent-%COMP%]{height:120px;background-color:#1d2939;color:#fff;display:flex;align-items:center}.container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-inline-end:.5em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:1em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin-inline-start:3em}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:gray}p[_ngcontent-%COMP%]{color:#b2afaf}"]})}return t})();var Pn=(()=>{class t{title="products-task";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],standalone:!0,features:[G],decls:3,vars:0,template:function(n,o){n&1&&D(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[Ie,Tn,An]})}return t})();Se(Pn,Mn).catch(t=>console.error(t));
