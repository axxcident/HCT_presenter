const __vite__fileDeps=["assets/slidev/DrawingControls-DuxHXkmO.js","assets/modules/unplugin-icons-CpyLF0RQ.js","assets/modules/vue-BjrCXWg9.js","assets/modules/shiki-D-EsxFNX.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BeHzO6Et.js","assets/index-DeNBdjMS.js","assets/index-j0WEZH95.css","assets/slidev/bottom-D0LNVPNT.js","assets/bottom-DbIWt59F.css","assets/slidev/SlidesShow-D_1_kZCc.js","assets/slidev/context-yvqWrIKE.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as k,c as y,u as I,_ as $}from"../index-DeNBdjMS.js";import{d as V,a6 as U,o as s,c as r,A as e,b as p,e as t,f as z,i as D,g as a,a7 as B,y as P,k as M,a5 as g,a0 as O,M as w,l as f,F as E,t as R,h as T}from"../modules/vue-BjrCXWg9.js";import{b as x,e as C,f as S,g as A,h as N,w as H,j as L,k as j}from"./bottom-D0LNVPNT.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-D_1_kZCc.js";import{P as q}from"./PrintStyle-BsOwPjts.js";import{u as J}from"./DrawingPreview-BeHzO6Et.js";import"../modules/shiki-D-EsxFNX.js";import"../modules/unplugin-icons-CpyLF0RQ.js";import"./context-yvqWrIKE.js";const Z="/HCT_presenter/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=V({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(u,{emit:i}){const n=u,o=U(n,"modelValue",i);function l(){o.value=!1}return(c,d)=>(s(),r(B,null,[e(o)?(s(),p("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:d[0]||(d[0]=m=>l())}),t("div",{class:D(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[z(c.$slots,"default")],2)])):a("v-if",!0)],1024))}}),se=k(oe,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),O("dev ")])])],-1),ie=V({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(u,{emit:i}){const o=U(u,"modelValue",i),l=P(()=>typeof y.info=="string");return(c,d)=>(s(),r(se,{modelValue:e(o),"onUpdate:modelValue":d[0]||(d[0]=m=>g(o)?o.value=m:null),class:"px-6 py-4"},{default:M(()=>[t("div",le,[l.value?(s(),p("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,te)):a("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=k(ie,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=V({__name:"Controls",setup(u){const i=w(),n=w();return(_,o)=>(s(),p(E,null,[f(F,{modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=l=>g(x)?x.value=l:null)},null,8,["modelValue"]),f(G),i.value?(s(),r(e(i),{key:0})):a("v-if",!0),n.value?(s(),r(e(n),{key:1,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=l=>g(C)?C.value=l:null)},null,8,["modelValue"])):a("v-if",!0),e(y).info?(s(),r(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":o[2]||(o[2]=l=>g(S)?S.value=l:null)},null,8,["modelValue"])):a("v-if",!0)],64))}}),de=k(re,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),ue=V({__name:"play",setup(u){Q();const{next:i,prev:n,isEmbedded:_,isPrintMode:o}=I(),{isDrawing:l}=J(),c=R();function d(v){var b;N.value||((b=v.target)==null?void 0:b.id)==="slide-container"&&(v.screenX/window.innerWidth>.6?i():n())}W(c);const m=P(()=>A.value||N.value);w();const h=w();return $(()=>import("./DrawingControls-DuxHXkmO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(v=>h.value=v.default),(v,b)=>(s(),p(E,null,[e(o)?(s(),r(q,{key:0})):a("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:c,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[f(K,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(H).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:d},{default:M(()=>[f(X,{"render-context":"slide"})]),controls:M(()=>[e(o)?a("v-if",!0):(s(),p("div",{key:0,class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[f(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2)),!e(y).drawings.presenterOnly&&!e(_)&&h.value?(s(),r(e(h),{key:1,class:"ml-0"})):a("v-if",!0)]),_:1},8,["style","width","scale"]),a("v-if",!0)],2),e(o)?a("v-if",!0):(s(),r(de,{key:1}))],64))}}),ke=k(ue,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/pages/play.vue"]]);export{ke as default};