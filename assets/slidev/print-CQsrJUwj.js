import{d,$ as u,y as h,b as a,e as t,x as s,A as r,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-BjrCXWg9.js";import{u as y,j as N,c as m,b as k}from"../index-CPW7V5nm.js";import{N as T}from"./NoteDisplay-Tzq77HR5.js";import"../modules/shiki-D-EsxFNX.js";const w={id:"page-root"},C={class:"m-4"},D={class:"mb-10"},H={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},V={class:"text-lg"},B={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},F=d({__name:"print",setup(M){const{slides:p,total:_}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>p.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",w,[t("div",C,[t("div",D,[t("h1",H,s(r(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",V,[t("div",B,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),j])]),x(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",A)):b("v-if",!0)]))),128))])]))}}),Z=k(F,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
