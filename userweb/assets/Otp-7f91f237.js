import{r as _,z as h,o as s,b as n,F as m,k as y,h as g,v as k,B as C}from"./index-477b0694.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const b=["onUpdate:modelValue","autofocus","placeholder","onKeydown"],v={__name:"Otp",props:{default:String,digitCount:{type:Number,required:!0},placeholder:{type:String,default:"0"}},emits:["update:otp"],setup(c,{emit:p}){const o=c,e=_([]);if(o.default&&o.default.length===o.digitCount)for(let t=0;t<o.digitCount;t++)e[t]=o.default.charAt(t);else for(let t=0;t<o.digitCount;t++)e[t]=null;const r=h(null),i=p,d=function(t,a){if(t.key!=="Tab"&&t.key!=="ArrowRight"&&t.key!=="ArrowLeft"&&t.preventDefault(),t.key==="Backspace"){e[a]=null,a!=0&&r.value.children[a-1].focus(),i("update:otp",e.join(""));return}new RegExp("^([0-9])$").test(t.key)&&(e[a]=t.key,a!=o.digitCount-1&&r.value.children[a+1].focus(),e.length>0&&i("update:otp",e.join("")))};return(t,a)=>(s(),n("div",{ref_key:"otpCont",ref:r,class:"i-otp"},[(s(!0),n(m,null,y(e,(f,l)=>g((s(),n("input",{type:"text",class:C(["otp-input",{bounce:e[l]!==null}]),key:f+l,"onUpdate:modelValue":u=>e[l]=u,autofocus:l===0,placeholder:c.placeholder,maxlength:"1",onKeydown:u=>d(u,l)},null,42,b)),[[k,e[l]]])),128))],512))}},A=w(v,[["__scopeId","data-v-a40e0bd6"]]);export{A as default};
