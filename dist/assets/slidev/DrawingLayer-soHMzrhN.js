import{d as l,t as u,_ as i,D as m,E as c,o as p,b as f,i as _,A as t}from"../modules/vue-BjrCXWg9.js";import{u as d}from"./context-COu8H2V1.js";import{u as v}from"./DrawingPreview-DpZ-hYFc.js";import{b as g}from"../index-Dx5_U4Q7.js";import"./bottom-DU3cLh_6.js";import"../modules/shiki-D-EsxFNX.js";const w=l({__name:"DrawingLayer",setup(C){const{drauu:e,drawingEnabled:o,loadCanvas:s}=v(),r=d().$scale,n=u();return i(()=>{e.mount(n.value,n.value.parentElement),m(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),c(()=>{e.unmount()}),(a,D)=>(p(),f("svg",{ref_key:"svg",ref:n,class:_(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}}),B=g(w,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};