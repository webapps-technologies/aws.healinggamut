import{s as p,c as k,D as x,G as L,o as r,a as d,x as S,y as _,Q as C,b as m,V,W as g,F as B,E as N,t as b,U as q}from"./vendor-5e5c4e37.js";const A={class:"table-select"},E=["placeholder"],O={class:"dropdown-options"},D=["onClick"],K={__name:"TableSelect",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"Search..."},options:{type:Array,required:!0},outside:{type:Boolean,default:!0}},emits:["update:modelValue","selected"],setup(i){const a=i;let n=p(""),l=p(null);const o=q(),f=k(()=>a.options.filter(e=>e.name.toLowerCase().includes(n.value.toLowerCase()))),y=e=>{n.value=e.name,o.emit("update:modelValue",e.name),o.emit("selected",e),c()},v=()=>{o.emit("update:modelValue",n.value),o.emit("selected",{id:null,name:n.value}),c()},h=e=>{o.emit("update:modelValue",n.value)},c=()=>{const e=document.querySelector("body").querySelectorAll("input"),t=Array.from(e).indexOf(l.value);e[t].parentNode.classList.remove("show-drop"),t<e.length-1&&(e[t+1].focus(),e[t+1].parentNode.classList.add("show-drop"))},w=()=>{const e=document.querySelector("body").querySelectorAll("input"),t=Array.from(e).indexOf(l.value);t>=0&&e[t].parentNode.classList.add("show-drop")};x(()=>{a.outside&&window.addEventListener("click",u)}),L(()=>{a.outside&&window.removeEventListener("click",u)});const u=e=>{const t=e.target,s=l.value.parentNode;s.contains(t)||s.classList.remove("show-drop")};return(e,t)=>(r(),d("div",A,[S(m("input",{type:"text",ref_key:"inputField",ref:l,"onUpdate:modelValue":t[0]||(t[0]=s=>V(n)?n.value=s:n=s),placeholder:i.placeholder,onKeydown:g(v,["enter"]),onKeyup:t[1]||(t[1]=s=>h()),onClick:w},null,40,E),[[_,C(n)]]),m("ul",O,[(r(!0),d(B,null,N(f.value,s=>(r(),d("li",{key:s.id,onClick:F=>y(s)},b(s.name),9,D))),128))])]))}};export{K as default};
