import{F as b,G as w}from"./@mdi-D9eD29fv.js";import{r as x,e as M,w as A,j as N,k as o,l as u,y as c,D as m,I as P,m as f,u as d,F as k,G as E,J as z,R as D}from"./@vue-_x7nCA0A.js";const S={class:"entries"},_={class:"pagination"},B={key:0,class:"flex left-arr"},q=["onClick","disabled"],F=["disabled"],V={key:2,class:"flex right-arr"},L={__name:"Pagination",props:{currentPage:{type:Number,required:!0},totalItem:{type:Number,required:!0},itemsPerPage:{type:Number,required:!0},visiblePageCount:{type:Number,default:3},showEllipsisAfter:{type:Boolean,default:!0}},setup(i){const e=i;let n=x(Math.ceil(e.totalItem/e.itemsPerPage));const C=D(),h=t=>{if(t!=".."){if(t<1||t>e.totalItem)return;C.emit("update:currentPage",t)}};function I(t){return e.currentPage===t}const y=()=>{const t=e.totalItem>0?(e.currentPage-1)*e.itemsPerPage+1:0,a=Math.min((e.currentPage-1)*e.itemsPerPage+e.itemsPerPage,e.totalItem);return{displayStart:t,displayEnd:a}},g=M(()=>{n=Math.ceil(e.totalItem/e.itemsPerPage);const t=e.currentPage,a=e.visiblePageCount,l=e.showEllipsisAfter;if(n<=a)return Array.from({length:n},(r,p)=>p+1);const s=[];if(t<=Math.ceil(a/2))for(let r=1;r<=a;r++)s.push(r);else if(t>=n-Math.floor(a/2))for(let r=n-a+1;r<=n;r++)s.push(r);else{const r=t-Math.floor(a/2),p=t+Math.floor(a/2);for(let v=r;v<=p;v++)s.push(v)}return l&&t>1&&s.unshift(".."),l&&t+1<n&&s.push(".."),s});return A(()=>e.currentPage,()=>{n=Math.ceil(e.totalItem/e.itemsPerPage),g.value.includes(e.currentPage)||h(g.value[0])}),(t,a)=>{const l=N("icon");return o(),u(k,null,[c("div",S,[m(" Showing "),c("span",null,P(y().displayStart),1),m(" to "),c("span",null,P(y().displayEnd),1),m(" of "),c("span",null,P(i.totalItem),1),m(" entries ")]),c("div",_,[i.currentPage===1?(o(),u("div",B,[f(l,{size:"48",h:"h-9",w:"w-9",path:d(b)},null,8,["path"])])):(o(),u("span",{key:1,class:"flex",onClick:a[0]||(a[0]=s=>h(i.currentPage-1))},[f(l,{size:"48",h:"h-9",w:"w-9",path:d(b)},null,8,["path"])])),(o(!0),u(k,null,E(g.value,s=>(o(),u("div",{class:"page-name flex",key:s,onClick:r=>h(s),disabled:i.currentPage===s},[c("button",{class:z(["page-name-button",{active:I(s)}]),type:"button",disabled:s.isDisabled},P(s),11,F)],8,q))),128)),i.currentPage===d(n)?(o(),u("div",V,[f(l,{size:"48",h:"h-9",w:"w-9",path:d(w)},null,8,["path"])])):(o(),u("span",{key:3,class:"flex",onClick:a[1]||(a[1]=s=>h(i.currentPage+1))},[f(l,{size:"48",h:"h-9",w:"w-9",path:d(w)},null,8,["path"])]))])],64)}}};export{L as default};
