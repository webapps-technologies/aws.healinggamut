import{g,c as m,a as c}from"./colors-gS5-e-h6.js";import y from"./Icon-DZ9tUcvX.js";import{r as p,e as a,k as l,l as s,m as b,G as n,E as f,x as v}from"./@vue-bQO0P59g.js";const w={class:"relative"},k={__name:"IconRounded",props:{icon:{type:String,required:!0},type:{type:String,required:!0},title:{type:String,required:!0},w:{type:String,default:"w-9"},h:{type:String,default:"h-9"},bg:Boolean,outline:Boolean,disabled:Boolean,small:Boolean,left:Boolean},setup(t){const r=p(!1),e=t,i=a(()=>e.bg?g(e.type,!1,!e.disabled):[m[e.type],"bg-gray-50 dark:bg-gray-800",c[e.type]]),u=a(()=>e.left?"absolute bottom-0 z-50 right-9 w-max text-xs bg-gray-200 p-1 rounded-md border border-gray-400":"absolute bottom-0 w-max z-50 left-9 text-xs bg-gray-200 p-1 rounded-md border border-gray-400");return(x,o)=>(l(),s("section",w,[b(y,{onMouseover:o[0]||(o[0]=d=>r.value=!0),onMouseout:o[1]||(o[1]=d=>r.value=!1),path:t.icon,w:t.w,h:t.h,size:"16",class:n(["rounded-full cursor-pointer shadow-md shadow-gray-400",i.value])},null,8,["path","w","h","class"]),e.title&&r.value?(l(),s("div",{key:0,class:n(u.value)},f(t.title),3)):v("",!0)]))}};export{k as default};
