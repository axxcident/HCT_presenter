import{d as m,A as n,f as c,o as _,b as h,e as t,i as r,at as f,c as g,k as i,a1 as l,l as k,a0 as y,q as x,s as w,p as C,a as b}from"../modules/vue-BjrCXWg9.js";import{w as D,b as d,F as u}from"../index-WnutkugT.js";import{p as S,u as z,f as B}from"./context-BTnAMjlO.js";import"../modules/shiki-D-EsxFNX.js";const H=m({__name:"LightOrDark",setup(s){return(e,o)=>n(D)?c(e.$slots,"dark",{key:0}):c(e.$slots,"light",{key:1})}}),I=d(H,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/builtin/LightOrDark.vue"]]),$="/HCT_presenter/heart.png",T="/HCT_presenter/Heartground_black.svg",L="/HCT_presenter/heartground_white.svg",P=m({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(s){const e=s;return(o,p)=>(_(),h("div",{class:r(["slidev-layout two-columns w-full h-full grid grid-cols-2",e.layoutClass])},[t("div",{class:r(["col-left",e.class])},[c(o.$slots,"default")],2),t("div",{class:r(["col-right",e.class])},[c(o.$slots,"right")],2)],2))}}),N=d(P,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/layouts/two-cols.vue"]]),v=s=>(C("data-v-4ce2b87d"),s=s(),b(),s),O=v(()=>t("h1",null,"Health Check-in App",-1)),V=v(()=>t("p",null,"Your teams primary tool to track work health",-1)),A={class:"w-full h-full relative"},F={class:"relative"},U={initial:{y:-700,x:0,scale:.9},"click-1":{y:-100,x:0,scale:.7,transition:{duration:1e3}},class:"absolute inset-0 z-20",src:$,alt:""},j={initial:{x:-57,opacity:0,scale:.7},"click-1":{x:-57,y:70,opacity:1,scale:.4,transition:{duration:1200}},class:"absolute inset-0 z-0",src:T,alt:""},q={initial:{x:-57,opacity:0,scale:.9},"click-1":{x:-57,y:70,opacity:1,scale:.5,transition:{duration:1200}},class:"absolute inset-0 z-1",src:L,alt:""},E={class:"text-5xl absolute top-14 left-40 text-[#2B90B6] z-10",initial:{x:-80,opacity:0},"click-2":{x:25,opacity:1,transition:{delay:500,duration:1e3}}},R={__name:"1",setup(s){return S(u),z(),(e,o)=>{const p=I,a=f("motion");return _(),g(N,x(w(n(B)(n(u),0))),{right:i(Y=>[t("div",A,[t("div",F,[l(t("img",U,null,512),[[a]]),k(p,null,{dark:i(()=>[l(t("img",j,null,512),[[a]])]),light:i(()=>[l(t("img",q,null,512),[[a]])]),_:1})]),l((_(),h("div",E,[y(" Health Check-In ")])),[[a]])])]),default:i(()=>[O,V]),_:1},16)}}},Q=d(R,[["__scopeId","data-v-4ce2b87d"],["__file","/@slidev/slides/1.md"]]);export{Q as default};