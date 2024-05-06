import{n as O,w as Q,x as Y,y as Z,z as J,A as W,B as X,C as ee,D as ne,E as te,F as se,G as oe}from"../modules/unplugin-icons-CpyLF0RQ.js";import{d as B,t as $,Q as le,aH as ae,b as L,f as re,h as z,A as e,o as g,c as x,k as o,i as l,l as n,e as i,x as ie,a1 as m,a2 as ue,Z as ce,F as de,ai as b,g as _e}from"../modules/vue-BjrCXWg9.js";import{L as pe}from"../modules/shiki-D-EsxFNX.js";import{u as me}from"./DrawingPreview-BDkHplJx.js";import{I as a,V as D}from"./SlidesShow-Cb8Cb8V_.js";import{b as M}from"../index-CPW7V5nm.js";import"./bottom-CpfCn7kJ.js";import"./context-CVV6zEVJ.js";const ge=B({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,w=$(null),f=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,f):$(f),{style:C}=ae(w,{initialValue:k});return(v,d)=>(g(),L("div",{ref_key:"el",ref:w,class:"fixed",style:z(e(C))},[re(v.$slots,"default")],4))}}),we=M(ge,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/Draggable.vue"]]),fe=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},Ce={class:"pt-.5"},ye=B({__name:"DrawingControls",setup(h){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:C,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:c,brushColors:S}=me();function V(){v.undo()}function A(){v.redo()}let y="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(y=p)}function E(p){u.color=p,d.value=!0,r.value=y}return(p,t)=>{const U=O,F=Q,H=Y,K=Z,N=J,R=W,T=X,j=ee,q=ne,I=te,P=se,G=oe;return g(),x(we,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[fe]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(H)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:o(()=>[i("div",be,[i("div",ke,ie(e(u).size),1),i("div",Ce,[m(i("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>r.value=e(y))},null,544),[[ue,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),L(de,null,ce(e(S),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:xe=>E(s)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>A())},{default:o(()=>[n(T)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(C)())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(q,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(I,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(P,null,null,512),[[b,e(c)]]),m(n(G,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ve=M(ye,[["__file","C:/Dokument/HCT_presenter/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ve as default};
