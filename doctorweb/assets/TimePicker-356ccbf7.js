import{s as p,D as P,c as h,o as l,a as d,x as m,X as _,b as n,F as f,E as b,t as M,Q as y,z as V}from"./vendor-5e5c4e37.js";const x={class:"base-time-picker"},B=["disabled"],H=["value"],T=["disabled"],C=["value"],D=["disabled"],S=n("option",{class:"option",value:"AM"},"AM",-1),U=n("option",{class:"option",value:"PM"},"PM",-1),E=[S,U],I={__name:"TimePicker",props:{modelValue:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup($,{emit:k}){const a=$,g=[...Array(12).keys()].map(t=>t===0?"12":t<10?`0${t}`:`${t}`),A=[...Array(60).keys()].map(t=>t<10?`0${t}`:`${t}`).filter(t=>t%5===0),i=p("12"),u=p("00"),o=p("AM"),v=k,r=()=>{let t=parseInt(i.value,10);const s=u.value;o.value==="PM"&&t!==12?t+=12:o.value==="AM"&&t===12&&(t=0);const c=`${t<10?`0${t}`:`${t}`}:${s}`;v("update:modelValue",c)};return P(()=>{const[t,s]=a.modelValue.split(":");let e=parseInt(t,10),c="AM";e>=12&&(c="PM",e=e!==12?e-12:e),e=e===0?12:e,i.value=e<10?`0${e}`:`${e}`,u.value=s,o.value=c,r()}),h({get:()=>a.modelValue,set:t=>{v("update:modelValue",t)}}),(t,s)=>(l(),d("div",x,[m(n("select",{class:"select","onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e),onChange:r,disabled:a.disabled},[(l(!0),d(f,null,b(y(g),e=>(l(),d("option",{class:"option",key:e,value:e},M(e),9,H))),128))],40,B),[[_,i.value]]),V(" : "),m(n("select",{class:"select","onUpdate:modelValue":s[1]||(s[1]=e=>u.value=e),onChange:r,disabled:a.disabled},[(l(!0),d(f,null,b(y(A),e=>(l(),d("option",{class:"option",key:e,value:e},M(e),9,C))),128))],40,T),[[_,u.value]]),V(" : "),m(n("select",{class:"select","onUpdate:modelValue":s[2]||(s[2]=e=>o.value=e),onChange:r,disabled:a.disabled},E,40,D),[[_,o.value]])]))}};export{I as default};
