import{l as V,_ as e,e as m,v as E,q as I,C as S,D as L,E as A,F as O,i as p,G as b,p as c,d as r,t as x,H as k,f as j,I as N}from"./entry.39387b22.js";import{u as $}from"./asyncData.bbcd80fe.js";import{h as g,e as B,j as C}from"./ContentQuery.1f6bbf25.js";import{w as T,s as w,u as M,a as z}from"./utils.4037a9ac.js";/* empty css                        *//* empty css                         */import"./Sidebar.vue.a1368bd6.js";/* empty css                     */import"./LogoElement.vue.2ad0ba99.js";/* empty css                      */import"./ContentDoc.2272faa4.js";import"./ContentList.1f541913.js";import"./ContentRenderer.0c0d1b39.js";import"./ContentRendererMarkdown.71d6e6b5.js";import"./ContentSlot.3395ad8d.js";import"./DocumentDrivenEmpty.471cc54b.js";import"./DocumentDrivenNotFound.2ed17bd4.js";import"./Markdown.b8d867bc.js";import"./ProseCode.7779416c.js";import{u as H}from"./composables.de51ae27.js";import"./_commonjsHelpers.fed2a411.js";const F=async t=>{var o,l;const{content:_}=V().public,i=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};_.locales.length&&((l=(o=i.where)==null?void 0:o.find(u=>u._locale))!=null&&l._locale||(i.where=i.where||[],i.where.push({_locale:_.defaultLocale})));const a=_.experimental.stripQueryParameters?T(`/navigation/${`${g(i)}.${_.integrity}`}/${B(i)}.json`):T(`/navigation/${g(i)}.${_.integrity}.json`);if(w())return(await e(()=>import("./client-db.eca8b28e.js"),["./client-db.eca8b28e.js","./entry.39387b22.js","./entry.a5025126.css","./utils.4037a9ac.js","./ContentQuery.1f6bbf25.js","./asyncData.bbcd80fe.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(u=>u.generateNavigation))(i);const n=await $fetch(a,{method:"GET",responseType:"json",params:_.experimental.stripQueryParameters?void 0:{_params:C(i),previewToken:M("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};const q=m({emits:{error(t){return!0}},setup(t,{slots:_,emit:i}){const a=E(null),n=I();return S(o=>{if(!n.isHydrating)return i("error",o),a.value=o,!1}),()=>{var o,l;return a.value?(o=_.error)==null?void 0:o.call(_,{error:a}):(l=_.default)==null?void 0:l.call(_)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:_,attrs:i}){const a=E(!1);return L(()=>{a.value=!0}),n=>{var u;if(a.value)return(u=_.default)==null?void 0:u.call(_);const o=_.fallback||_.placeholder;if(o)return o();const l=n.fallback||n.placeholder||"",d=n.fallbackTag||n.placeholderTag||"span";return A(d,i,l)}}}),h=new WeakMap;function G(t){if(h.has(t))return h.get(t);const _={...t};return _.render?_.render=(i,...a)=>{var n;if(i.mounted$){const o=t.render(i,...a);return o.children===null||typeof o.children=="string"?O(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(n=i.$attrs)!=null?n:i._.attrs)}:_.template&&(_.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),_.setup=(i,a)=>{var o;const n=E(!1);return L(()=>{n.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,i,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:n}:(...d)=>{if(n.value){const u=l(...d);return u.children===null||typeof u.children=="string"?O(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",a.attrs)})},h.set(t,_),_}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),K=m({name:"DevOnly",setup(t,_){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),J=m({name:"ServerPlaceholder",render(){return A("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),Z=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:_}){const i=tt({duration:t.duration,throttle:t.throttle}),a=I();return a.hook("page:start",i.start),a.hook("page:finish",i.finish),b(()=>i.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},_)}});function tt(t){const _=E(0),i=E(!1),a=c(()=>1e4/t.duration);let n=null,o=null;function l(){u(),_.value=0,i.value=!0,t.throttle?o=setTimeout(P,t.throttle):P()}function d(){_.value=100,y()}function u(){clearInterval(n),clearTimeout(o),n=null,o=null}function D(R){_.value=Math.min(100,_.value+R)}function y(){u(),setTimeout(()=>{i.value=!1,setTimeout(()=>{_.value=0},400)},500)}function P(){n=setInterval(()=>{D(a.value)},100)}return{progress:_,isLoading:i,start:l,finish:d,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,_])=>_!==void 0)),f=(t,_)=>(i,a)=>(H(()=>t({...rt(i),...a.attrs},a)),()=>{var n,o;return _?(o=(n=a.slots).default)==null?void 0:o.call(n):null}),v={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},_t=m({name:"NoScript",inheritAttrs:!1,props:{...v,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:_})=>{var n;const i={...t},a=(((n=_.default)==null?void 0:n.call(_))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(i.children=a),{noscript:[i]}})}),it=m({name:"Link",inheritAttrs:!1,props:{...v,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ot=m({name:"Base",inheritAttrs:!1,props:{...v,href:String,target:String},setup:f(t=>({base:t}))}),nt=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:_})=>{var a,n,o;return{title:((o=(n=(a=_.default)==null?void 0:a.call(_))==null?void 0:n[0])==null?void 0:o.children)||null}})}),at=m({name:"Meta",inheritAttrs:!1,props:{...v,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const _={...t};return _.httpEquiv&&(_["http-equiv"]=_.httpEquiv,delete _.httpEquiv),{meta:[_]}})}),ut=m({name:"Style",inheritAttrs:!1,props:{...v,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:_})=>{var n,o,l;const i={...t},a=(l=(o=(n=_.default)==null?void 0:n.call(_))==null?void 0:o[0])==null?void 0:l.children;return a&&(i.children=a),{style:[i]}})}),lt=m({name:"Head",inheritAttrs:!1,setup:(t,_)=>()=>{var i,a;return(a=(i=_.slots).default)==null?void 0:a.call(i)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...v,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...v,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:_t,Link:it,Base:ot,Title:nt,Meta:at,Style:ut,Head:lt,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./AnnouncementBar.cacfe6cc.js"),["./AnnouncementBar.cacfe6cc.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Feature.c6987776.js"),["./Feature.c6987776.js","./entry.39387b22.js","./entry.a5025126.css","./CaseStudies.9ae5e80b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FeatureDetailed.8d47c07d.js"),["./FeatureDetailed.8d47c07d.js","./entry.39387b22.js","./entry.a5025126.css","./ProtocolAMMs.b7c8a9e6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FeaturedBenefit.94b79e11.js"),["./FeaturedBenefit.94b79e11.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Footer.8721c625.js"),["./Footer.8721c625.js","./entry.39387b22.js","./entry.a5025126.css","./IconTwitter.67f19bdb.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./IconDiscord.6fae287e.js","./IconMedium.40823a90.js","./IconYoutube.546ef7e1.js","./IconGithub.0fc9cd7f.js","./IconLinkedin.24a807ac.js","./IconMail.8ad407fd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Header.b582401f.js"),["./Header.b582401f.js","./LogotypeBalancer.5b9484c8.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css","./IconExternalLink.6bcf9c4f.js","./IconBase.3a163ea4.css","./IconBase.231dd2fa.js","./Burger.5b7626fd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./HeaderDark.370f35bc.js"),["./HeaderDark.370f35bc.js","./entry.39387b22.js","./entry.a5025126.css","./Burger.5b7626fd.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Logo.4fa5fd55.js"),["./Logo.4fa5fd55.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Partner.54190b04.js"),["./Partner.54190b04.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProtocolAMMs.f7c6684c.js"),["./ProtocolAMMs.f7c6684c.js","./entry.39387b22.js","./entry.a5025126.css","./ProtocolAMMs.b7c8a9e6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Stat.a4145f25.js"),["./Stat.a4145f25.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./partnerModal.d4a6082a.js"),["./partnerModal.d4a6082a.js","./entry.39387b22.js","./entry.a5025126.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LinkCard.804e1256.js"),["./LinkCard.804e1256.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Aave.cd066df0.js"),["./Aave.cd066df0.js","./stani.bc871c9d.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./CaseStudies.632ac791.js"),["./CaseStudies.632ac791.js","./CaseStudy.7433798c.js","./IconClose.7c39e3ba.js","./entry.39387b22.js","./entry.a5025126.css","./CaseStudy.f7ed2241.css","./IconExternalLink.6bcf9c4f.js","./IconBase.3a163ea4.css","./IconBase.231dd2fa.js","./CaseStudies.9ae5e80b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./CaseStudy.7433798c.js"),["./CaseStudy.7433798c.js","./IconClose.7c39e3ba.js","./entry.39387b22.js","./entry.a5025126.css","./CaseStudy.f7ed2241.css","./IconExternalLink.6bcf9c4f.js","./IconBase.3a163ea4.css","./IconBase.231dd2fa.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Element.85ccc3c0.js"),["./Element.85ccc3c0.js","./IconClose.7c39e3ba.js","./entry.39387b22.js","./entry.a5025126.css","./CaseStudy.f7ed2241.css","./IconExternalLink.6bcf9c4f.js","./IconBase.3a163ea4.css","./IconBase.231dd2fa.js","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconArbitrage.43279aa7.js"),["./IconArbitrage.43279aa7.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconBase.231dd2fa.js"),["./IconBase.231dd2fa.js","./entry.39387b22.js","./entry.a5025126.css","./IconBase.3a163ea4.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconClose.7c39e3ba.js"),["./IconClose.7c39e3ba.js","./entry.39387b22.js","./entry.a5025126.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconDiscord.6fae287e.js"),["./IconDiscord.6fae287e.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconEfficiency.9ae3d584.js"),["./IconEfficiency.9ae3d584.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconExternalLink.6bcf9c4f.js"),["./IconExternalLink.6bcf9c4f.js","./entry.39387b22.js","./entry.a5025126.css","./IconBase.3a163ea4.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconFees.c2be388f.js"),["./IconFees.c2be388f.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconFilter.bebc3afb.js"),["./IconFilter.bebc3afb.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconGithub.0fc9cd7f.js"),["./IconGithub.0fc9cd7f.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconKey.d9e0f6eb.js"),["./IconKey.d9e0f6eb.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconLego.a25167ed.js"),["./IconLego.a25167ed.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconLinkedin.24a807ac.js"),["./IconLinkedin.24a807ac.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconLiquidity.bd28b14c.js"),["./IconLiquidity.bd28b14c.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconMail.8ad407fd.js"),["./IconMail.8ad407fd.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconMedium.40823a90.js"),["./IconMedium.40823a90.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconProtection.f52d2f4b.js"),["./IconProtection.f52d2f4b.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconQuotemark.618d0a22.js"),["./IconQuotemark.618d0a22.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconShield.81eb7b2e.js"),["./IconShield.81eb7b2e.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconSparkles.bacb6d86.js"),["./IconSparkles.bacb6d86.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconTwitter.67f19bdb.js"),["./IconTwitter.67f19bdb.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconWrite.d973d1ae.js"),["./IconWrite.d973d1ae.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./IconYoutube.546ef7e1.js"),["./IconYoutube.546ef7e1.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Logo1inch.110cfeb5.js"),["./Logo1inch.110cfeb5.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoAave.c4436f74.js"),["./LogoAave.c4436f74.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoAura.48a8ef50.js"),["./LogoAura.48a8ef50.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoBalancer.2f78a4b9.js"),["./LogoBalancer.2f78a4b9.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoBeets.d4e35cf9.js"),["./LogoBeets.d4e35cf9.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoCow.a435346f.js"),["./LogoCow.a435346f.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoCron.e879956b.js"),["./LogoCron.e879956b.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoElement.c9d3ed45.js"),["./LogoElement.c9d3ed45.js","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoFjord.4ae50077.js"),["./LogoFjord.4ae50077.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoGyro.dd240e07.js"),["./LogoGyro.dd240e07.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoIndexcoop.8144ba2c.js"),["./LogoIndexcoop.8144ba2c.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoMycelium.182f4e9d.js"),["./LogoMycelium.182f4e9d.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoPowerpool.359b0d63.js"),["./LogoPowerpool.359b0d63.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoPrime.4e8c1ec1.js"),["./LogoPrime.4e8c1ec1.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoQi.3286c676.js"),["./LogoQi.3286c676.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoSense.47c0d02f.js"),["./LogoSense.47c0d02f.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoStakedao.4da7708a.js"),["./LogoStakedao.4da7708a.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoTempus.b277e074.js"),["./LogoTempus.b277e074.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoTetu.ddb557ca.js"),["./LogoTetu.ddb557ca.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogoXave.7347bc70.js"),["./LogoXave.7347bc70.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./LogotypeBalancer.5b9484c8.js"),["./LogotypeBalancer.5b9484c8.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Burger.5b7626fd.js"),["./Burger.5b7626fd.js","./Sidebar.vue.a1368bd6.js","./entry.39387b22.js","./entry.a5025126.css","./Sidebar.0766c527.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./MenuLinks.c437342e.js"),["./MenuLinks.c437342e.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Sidebar.05cd9945.js"),["./Sidebar.05cd9945.js","./entry.39387b22.js","./entry.a5025126.css","./IconTwitter.67f19bdb.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./IconDiscord.6fae287e.js","./IconMedium.40823a90.js","./IconYoutube.546ef7e1.js","./IconGithub.0fc9cd7f.js","./IconLinkedin.24a807ac.js","./IconMail.8ad407fd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.2272faa4.js"),["./ContentDoc.2272faa4.js","./entry.39387b22.js","./entry.a5025126.css","./composables.de51ae27.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.1f6bbf25.js","./asyncData.bbcd80fe.js","./utils.4037a9ac.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.1f541913.js"),["./ContentList.1f541913.js","./ContentQuery.1f6bbf25.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./utils.4037a9ac.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.1f6bbf25.js").then(t=>t.C),["./ContentQuery.1f6bbf25.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./utils.4037a9ac.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.0c0d1b39.js"),["./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./entry.39387b22.js","./entry.a5025126.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.71d6e6b5.js"),["./ContentRendererMarkdown.71d6e6b5.js","./entry.39387b22.js","./entry.a5025126.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.3395ad8d.js"),["./ContentSlot.3395ad8d.js","./utils.4037a9ac.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.471cc54b.js"),["./DocumentDrivenEmpty.471cc54b.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.2ed17bd4.js"),["./DocumentDrivenNotFound.2ed17bd4.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.b8d867bc.js"),["./Markdown.b8d867bc.js","./ContentSlot.3395ad8d.js","./utils.4037a9ac.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.8ee59592.js"),["./ProseA.8ee59592.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.82cb8287.js"),["./ProseBlockquote.82cb8287.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.7779416c.js"),["./ProseCode.7779416c.js","./entry.39387b22.js","./entry.a5025126.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.596a1e9a.js"),["./ProseCodeInline.596a1e9a.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.a6587b2f.js"),["./ProseEm.a6587b2f.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.a63d3a2c.js"),["./ProseH1.a63d3a2c.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.966bdbcd.js"),["./ProseH2.966bdbcd.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.0c5e5b87.js"),["./ProseH3.0c5e5b87.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.b0b4f4ee.js"),["./ProseH4.b0b4f4ee.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.27e57776.js"),["./ProseH5.27e57776.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.e2df10e2.js"),["./ProseH6.e2df10e2.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.5ab43812.js"),["./ProseHr.5ab43812.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.c60428ce.js"),["./ProseImg.c60428ce.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.5954734a.js"),["./ProseLi.5954734a.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.e839e7a7.js"),["./ProseOl.e839e7a7.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.ae980c5b.js"),["./ProseP.ae980c5b.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.87568e7f.js"),["./ProseStrong.87568e7f.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.1e84f8c9.js"),["./ProseTable.1e84f8c9.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.4895ef57.js"),["./ProseTbody.4895ef57.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.0b7d1887.js"),["./ProseTd.0b7d1887.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.2055ccaa.js"),["./ProseTh.2055ccaa.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.80e1e239.js"),["./ProseThead.80e1e239.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.0ecba810.js"),["./ProseTr.0ecba810.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.a412d50b.js"),["./ProseUl.a412d50b.js","./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.ce9ca1ed.js"),["./welcome.ce9ca1ed.js","./composables.de51ae27.js","./entry.39387b22.js","./entry.a5025126.css","./asyncData.bbcd80fe.js","./ContentQuery.1f6bbf25.js","./utils.4037a9ac.js","./Sidebar.vue.a1368bd6.js","./Sidebar.0766c527.css","./LogoElement.vue.2ad0ba99.js","./LogoElement.8168bec0.css","./ContentDoc.2272faa4.js","./ContentRenderer.0c0d1b39.js","./ContentRendererMarkdown.71d6e6b5.js","./_commonjsHelpers.fed2a411.js","./ContentList.1f541913.js","./ContentSlot.3395ad8d.js","./DocumentDrivenEmpty.471cc54b.js","./DocumentDrivenNotFound.2ed17bd4.js","./Markdown.b8d867bc.js","./ProseCode.7779416c.js","./ProseCode.e63e49c6.css","./CaseStudies.9ae5e80b.css","./ProtocolAMMs.b7c8a9e6.css","./IconBase.3a163ea4.css","./CaseStudy.f7ed2241.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.39387b22.js").then(t=>t.a1),["./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.39387b22.js").then(t=>t.$),["./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.39387b22.js").then(t=>t.a0),["./entry.39387b22.js","./entry.a5025126.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:_}=x(t),i=c(()=>{var n;return typeof((n=_.value)==null?void 0:n.params)=="function"?_.value.params():_.value});if(!i.value&&k("dd-navigation").value){const{navigation:n}=z();return{navigation:n}}const{data:a}=await $(`content-navigation-${g(i.value)}`,()=>F(i.value));return{navigation:a}},render(t){const _=j(),{navigation:i}=t,a=l=>p(N,{to:l._path},()=>l.title),n=(l,d)=>p("ul",d?{"data-level":d}:null,l.map(u=>u.children?p("li",null,[a(u),n(u.children,d+1)]):p("li",null,a(u)))),o=l=>n(l,0);return _!=null&&_.default?_.default({navigation:i,...this.$attrs}):o(i)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};
