import{e as l,k as t,t as u,C as k,l as o,y as n,J as d,x as s,D as x,I as m,E as v,m as C,L as w,K as B}from"./@vue-_x7nCA0A.js";import{v as S}from"./@mdi-B1UCcPAh.js";import h from"./Icon-D-8XWZqN.js";const I={key:0,class:"flex items-stretch border border-b border-blue-100 dark:border-gray-700"},T={class:"py-3 px-4"},N={class:"flex bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700/60 p-2 rounded"},V={key:0},_={key:1,class:"text-center py-24 text-gray-500 dark:text-gray-400"},z=n("p",null,"Nothing's here…",-1),D=[z],J={__name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded"},iconText:{type:String,default:null},hasTable:Boolean,empty:Boolean,form:Boolean,hoverable:Boolean},emits:["headerIconClicked","submit"],setup(e,{emit:y}){const r=e,i=y,f=l(()=>r.form?"form":"div"),g=l(()=>{const a=[r.rounded];return r.hoverable&&a.push("hover:shadow-blue-200 shadow-xl dark:hover:shadow-gray-600 transition-shadow duration-500"),a}),c=l(()=>r.headerIcon??S),b=()=>{i("headerIconClicked")},p=a=>{i("submit",a)};return(a,E)=>(t(),u(B(f.value),{class:d([g.value,"bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-gray-800"]),onSubmit:p},{default:k(()=>[e.title?(t(),o("header",I,[n("p",{class:d(["flex items-center py-3 flex-grow font-bold",[e.icon?"px-4":"px-6"]])},[e.icon?(t(),u(h,{key:0,path:e.icon,class:"mr-3",size:"20"},null,8,["path"])):s("",!0),x(" "+m(e.title),1)],2),n("span",T,[c.value?(t(),o("a",{key:0,href:"#",class:"flex items-center justify-center focus:ring ring-blue-400 rounded","aria-label":"more options",onClick:v(b,["prevent"])},[n("span",N,[C(h,{path:c.value,size:"20"},null,8,["path"]),e.iconText?(t(),o("p",V,m(e.iconText),1)):s("",!0)])])):s("",!0)])])):s("",!0),e.empty?(t(),o("div",_,D)):(t(),o("div",{key:2,class:d({"p-6":!e.hasTable})},[w(a.$slots,"default")],2))]),_:3},40,["class"]))}};export{J as default};
