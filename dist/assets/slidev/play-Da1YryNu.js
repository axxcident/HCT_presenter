const __vite__fileDeps=["assets/slidev/DrawingControls-COTvcQdY.js","assets/modules/unplugin-icons-CpyLF0RQ.js","assets/modules/vue-BjrCXWg9.js","assets/modules/shiki-D-EsxFNX.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-DhuviWdO.js","assets/index-C40ysifT.js","assets/index-j0WEZH95.css","assets/slidev/bottom-zHaI45fE.js","assets/bottom-DbIWt59F.css","assets/slidev/SlidesShow-BC4U4BoF.js","assets/slidev/context-BnPph4fb.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as w,c as y,u as E,_ as I}from"../index-C40ysifT.js";import{d as V,a6 as M,o as t,c as r,A as e,b as v,e as l,f as $,i as D,g as a,a7 as z,y as N,k as T,a5 as g,a0 as B,M as k,l as f,F as P,t as O,h as R}from"../modules/vue-BjrCXWg9.js";import{b as C,e as x,f as S,g as A,h as H,w as U,j as L,k as j}from"./bottom-zHaI45fE.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-BC4U4BoF.js";import{P as q}from"./PrintStyle-LpeDGHdv.js";import{u as J}from"./DrawingPreview-DhuviWdO.js";import"../modules/shiki-D-EsxFNX.js";import"../modules/unplugin-icons-CpyLF0RQ.js";import"./context-BnPph4fb.js";const Z="/HCT_presenter/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=V({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(u,{emit:n}){const i=u,o=M(i,"modelValue",n);function s(){o.value=!1}return(c,d)=>(t(),r(z,null,[e(o)?(t(),v("div",ee,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:d[0]||(d[0]=m=>s())}),l("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[$(c.$slots,"default")],2)])):a("v-if",!0)],1024))}}),te=w(oe,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/Modal.vue"]]),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},le=["innerHTML"],ae=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),B("dev ")])])],-1),ne=V({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(u,{emit:n}){const o=M(u,"modelValue",n),s=N(()=>typeof y.info=="string");return(c,d)=>(t(),r(te,{modelValue:e(o),"onUpdate:modelValue":d[0]||(d[0]=m=>g(o)?o.value=m:null),class:"px-6 py-4"},{default:T(()=>[l("div",se,[s.value?(t(),v("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,le)):a("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ie=w(ne,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=V({__name:"Controls",setup(u){const n=k(),i=k();return(_,o)=>(t(),v(P,null,[f(F,{modelValue:e(C),"onUpdate:modelValue":o[0]||(o[0]=s=>g(C)?C.value=s:null)},null,8,["modelValue"]),f(G),n.value?(t(),r(e(n),{key:0})):a("v-if",!0),i.value?(t(),r(e(i),{key:1,modelValue:e(x),"onUpdate:modelValue":o[1]||(o[1]=s=>g(x)?x.value=s:null)},null,8,["modelValue"])):a("v-if",!0),e(y).info?(t(),r(ie,{key:2,modelValue:e(S),"onUpdate:modelValue":o[2]||(o[2]=s=>g(S)?S.value=s:null)},null,8,["modelValue"])):a("v-if",!0)],64))}}),de=w(re,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/Controls.vue"]]),ue=V({__name:"play",setup(u){Q();const{next:n,prev:i,isEmbedded:_,isPrintMode:o}=E(),{isDrawing:s}=J(),c=O();function d(p){var b;H.value||((b=p.target)==null?void 0:b.id)==="slide-container"&&(p.screenX/window.innerWidth>.6?n():i())}W(c);const m=N(()=>A.value||H.value);k();const h=k();return I(()=>import("./DrawingControls-COTvcQdY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(p=>h.value=p.default),(p,b)=>(t(),v(P,null,[e(o)?(t(),r(q,{key:0})):a("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:c,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[f(K,{class:"w-full h-full",style:R({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(U).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:d},{default:T(()=>[f(X,{"render-context":"slide"})]),controls:T(()=>[e(o)?a("v-if",!0):(t(),v("div",{key:0,class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[f(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2)),!e(y).drawings.presenterOnly&&!e(_)&&h.value?(t(),r(e(h),{key:1,class:"ml-0"})):a("v-if",!0)]),_:1},8,["style","width","scale"]),a("v-if",!0)],2),e(o)?a("v-if",!0):(t(),r(de,{key:1}))],64))}}),we=w(ue,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/pages/play.vue"]]);export{we as default};