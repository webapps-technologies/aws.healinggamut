import{c as b,e as h,j as g,k as n,l as d,y as s,q as v,N as w,m as k,u as _,F as x,I as V,H as S,E as C,G as B,S as D}from"./@vue-bQO0P59g.js";import{ar as N}from"./@mdi-CZk6uuAL.js";const T={class:"relative"},A={class:"h-10 bg-white flex border border-blue-300 rounded items-center"},F=["placeholder","disabled"],I={for:"show_more",class:"absolute cursor-pointer flex outline-none focus:outline-none border-gray-500 right-0 text-gray-400 hover:text-gray-600 items-center"},$=["onClick"],j={class:"block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"},q={__name:"SearchSelect",props:{placeholder:{type:String,default:null},options:{type:Array,default:null},disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean,Array,Object],default:""}},emits:["update:modelValue","onSelected","onType"],setup(l,{emit:z}){const e=b({status:!1,keyword:null}),i=l,a=D(),u=h({get:()=>i.modelValue,set:t=>{a.emit("update:modelValue",t)}}),c=t=>{a.emit("onType",e.keyword),e.keyword?e.status=!0:e.status=!1},p=t=>{a.emit("onSelected",t),u.value=t,e.keyword=t.name,e.status=!1},m=t=>{e.status=!0};return(t,o)=>{const f=g("icon");return n(),d("div",T,[s("div",A,[v(s("input",{name:"select",type:"text",onKeyup:o[0]||(o[0]=r=>c()),onFocus:o[1]||(o[1]=r=>m()),"onUpdate:modelValue":o[2]||(o[2]=r=>e.keyword=r),placeholder:l.placeholder,autocomplete:"off",class:"px-4 appearance-none outline-none text-gray-800 rounded w-full h-full focus:ring ring-blue-300 select",disabled:l.disabled},null,40,F),[[w,e.keyword]]),s("label",I,[k(f,{path:_(N)},null,8,["path"])])]),s("div",{class:B([e.status?"":"overflow-hidden hidden","z-50 h-fit absolute rounded shadow bg-white peer-checked:flex flex-col w-full mt-1 border border-gray-200 option"])},[(n(!0),d(x,null,V(i.options,(r,y)=>(n(),d("div",{key:y},[s("div",{class:"cursor-pointer group border-t",onClick:S(E=>p(r),["prevent"])},[s("a",j,C(r.name),1)],8,$)]))),128))],2)])}}};export{q as default};
