import{u as h}from"./vuex-DHdsu8jA.js";import{af as m}from"./@mdi-CZk6uuAL.js";import V from"./ModalBox-CqNp2ArV.js";import C from"./BaseButton-BM8zhXuE.js";import{r as w,e as S,j as o,k as n,t as l,A as r,m as a,y as e,B as _,E as f,u,x as p}from"./@vue-bQO0P59g.js";import"./CardComponent-CavXtFtg.js";import"./Icon-DZ9tUcvX.js";import"./Overlay-CB3nUvO5.js";import"./colors-gS5-e-h6.js";const b={class:"space-y-3 text-center md:text-left lg:mx-12"},j={class:"text-2xl"},N={class:"flex justify-center md:block"},B=["image"],D={class:"flex flex-col"},L={class:"items-center"},F={__name:"UserCard",setup($){const c=w(!1),y=h(),t=S(()=>y.state.Employee);return(A,s)=>{const v=o("user-avatar"),i=o("pill"),x=o("check-radio-picker"),g=o("level"),k=o("card-component");return n(),l(k,{rounded:"",class:"justify-between items-start"},{default:r(()=>[a(g,{type:"justify-around lg:justify-center"},{default:r(()=>[a(v,{image:t.value.companyLogo,class:"lg:mx-12",onClick:s[0]||(s[0]=d=>c.value=!0)},null,8,["image"]),e("div",b,[e("h1",j,[_(" Hi, "),e("b",null,f(t.value.companyName),1),_("! ")]),e("p",null,"+91 "+f(t.value.empLoginId),1),e("div",N,[t.value.companyStatus==1?(n(),l(i,{key:0,text:"Verified",type:"info",icon:u(m)},null,8,["icon"])):p("",!0),t.value.companyStatus==2?(n(),l(i,{key:1,text:"Disapproved",type:"info",icon:u(m)},null,8,["icon"])):p("",!0),t.value.companyStatus==0?(n(),l(i,{key:2,text:"Pending",type:"info",icon:u(m)},null,8,["icon"])):p("",!0)])]),a(V,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=d=>c.value=d),title:""},{default:r(()=>[e("img",{image:t.value.companyLogo,alt:"",class:"w-full h-80"},null,8,B)]),_:1},8,["modelValue"]),e("div",D,[e("div",L,[a(x,{name:"sample-switch",type:"switch",options:{one:"Company Status"}})]),a(C,{class:"mt-4",color:"info",type:"submit",label:"View Documents"})])]),_:1})]),_:1})}}};export{F as default};
