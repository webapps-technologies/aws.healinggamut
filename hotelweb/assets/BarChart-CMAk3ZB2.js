import{C as c}from"./chart.js-BLcQPoJf.js";import{o as s,e as n,w as d,k as i,l as p,y as u}from"./@vue-_x7nCA0A.js";import"./@kurkle-BZxJdD1U.js";const l=["id"],B={__name:"BarChart",props:{data:{type:Object,required:!0},id:{type:Object,required:!0}},setup(r){const t=r;let e;s(()=>{const a=document.getElementById(t.id);e=new c(a,{type:"bar",labels:"Bar chart",data:t.data,options:{scales:{y:{beginAtZero:!0}}}})});const o=n(()=>t.data);return d(o,a=>{e&&(e.data=a,e.update())}),(a,m)=>(i(),p("section",null,[u("canvas",{id:t.id},null,8,l)]))}};export{B as default};
