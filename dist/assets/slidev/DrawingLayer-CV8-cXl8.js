import{d as l,t as i,_ as u,D as c,E as m,o as p,b as f,i as d,A as s}from"../modules/vue-BjrCXWg9.js";import{u as _}from"./context-BTnAMjlO.js";import{u as v}from"./DrawingPreview-B1P_Ghwc.js";import{b as g}from"../index-WnutkugT.js";import"./bottom-Cxe4bHdy.js";import"../modules/shiki-D-EsxFNX.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:o,loadCanvas:t}=v(),r=_().$scale,n=i();return u(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),m(()=>{e.unmount()}),(a,x)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!s(o),"touch-none":s(o)}])},null,2))}}),B=g(w,[["__file","/Users/axelolivecrona/Documents/slidev/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};