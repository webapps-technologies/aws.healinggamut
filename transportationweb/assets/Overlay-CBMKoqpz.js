import{k as l,l as n,m as a,C as t,y as d,T as s,L as f,J as m}from"./@vue-_x7nCA0A.js";const u={__name:"Overlay",props:{zIndex:{type:String,default:"z-50"}},emits:["overlay-click"],setup(o,{emit:r}){const i=r,c=e=>{i("overlay-click",e)};return(e,y)=>(l(),n("div",{class:m(["flex items-center flex-col justify-center overflow-hidden fixed inset-0",o.zIndex])},[a(s,{"enter-active-class":"transition duration-150 ease-in","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:t(()=>[d("div",{class:"absolute inset-0 bg-gradient-to-tr from-gray-700 via-gray-900 to-gray-700 opacity-90",onClick:c})]),_:1}),a(s,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"animate-fadeOut"},{default:t(()=>[f(e.$slots,"default")]),_:3})],2))}};export{u as default};
