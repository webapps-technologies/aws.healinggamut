import{D as c,E as g}from"./@mdi-D9eD29fv.js";import f from"./NavBarItem-BOxoISEY.js";import p from"./Icon-D-8XWZqN.js";import{r as l,e as u,o as m,a as v,k as b,t as h,C as w,y as t,L as s,m as k,J as _}from"./@vue-_x7nCA0A.js";const y={class:"flex items-center py-2 px-3 bg-gray-100 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent"},E={__name:"NavBarMenu",props:{hasDivider:{type:Boolean,default:!1}},setup(n){const e=l(!1),d=u(()=>e.value?c:g),i=()=>{e.value=!e.value},o=l(null),r=a=>{o.value.$el.contains(a.target)||(e.value=!1)};return m(()=>{window.addEventListener("click",r)}),v(()=>{window.removeEventListener("click",r)}),(a,C)=>(b(),h(f,{ref_key:"root",ref:o,type:"block","has-divider":n.hasDivider,active:e.value,dropdown:"",class:"dropdown",onClick:i},{default:w(()=>[t("a",y,[s(a.$slots,"default"),k(p,{path:d.value,class:"hidden lg:inline-flex transition-colors"},null,8,["path"])]),t("div",{class:_(["text-sm border-gray-100 border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700",{"lg:hidden":!e.value}])},[s(a.$slots,"dropdown")],2)]),_:3},8,["has-divider","active"]))}};export{E as default};
