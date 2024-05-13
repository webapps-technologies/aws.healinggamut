import{e as N,c as j,z as w,j as i,k as m,l as _,y as e,m as t,A as c,u as z,F as g,I as B,H as u,E as h}from"./@vue-bQO0P59g.js";import{a2 as A,a3 as $}from"./@mdi-CZk6uuAL.js";import{b as E}from"./vue-router-D5J0r3Gc.js";import{u as F}from"./vuex-DHdsu8jA.js";const T={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},U={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},H={class:"mt-3 table-sec"},L=e("caption",null,null,-1),O=e("thead",{class:"bg-blue dark:bg-gray-900/80 dark:backdrop-blur-md"},[e("tr",null,[e("th",null,"Sr no"),e("th",null,"Specialization Name"),e("th",{class:"text-center"},"Action")])],-1),R={"data-label":"Sr no"},Y={"data-label":"Specialization Name"},q={class:"text-center"},G=e("div",{class:"text-center pb-5"},[e("h2",{class:"text-lg text-red-500"}," Are you sure you want to delete this Specialization? ")],-1),Z={__name:"Specialization",setup(J){const d=F();E();const n=N(()=>d.state.Doctor),a=j({editMode:!1,educationSubmit:!1,specialization:null});w(()=>{b("")});const y=()=>{if(f()){a.educationSubmit=!0;return}const s={doctorDetailId:n.value.user.id,specializationId:a.specialization.id};d.dispatch("Doctor/addSpecialization",s)},k=s=>{a.specId=s,n.value.deleteModal=!0},D=()=>{a.specId&&d.dispatch("Doctor/deleteDoctorSpec",{id:a.specId})},b=s=>{d.dispatch("Doctor/getSpecialization",{limit:10,offset:0,search:s})},f=()=>{if(!a.specialization)return"Select Specialization Name!"};return(s,o)=>{const V=i("search-select"),x=i("field"),C=i("divider"),r=i("base-button"),p=i("base-buttons"),M=i("card-component"),I=i("modal-box");return m(),_(g,null,[e("div",T,[t(M,{title:"Specialization Detail",icon:z(A)},{default:c(()=>[e("div",U,[t(x,{label:"Specialization *",help:f()},{default:c(()=>[t(V,{modelValue:a.specialization,"onUpdate:modelValue":o[0]||(o[0]=l=>a.specialization=l),options:n.value.specializations,onOnType:o[1]||(o[1]=l=>b(l))},null,8,["modelValue","options"])]),_:1},8,["help"])]),t(C),t(p,null,{default:c(()=>[t(r,{color:"themeColor",type:"button",label:"Submit",onClick:u(y,["prevent"])})]),_:1})]),_:1},8,["icon"])]),e("div",H,[e("table",null,[L,O,e("tbody",null,[(m(!0),_(g,null,B(n.value.user.doctorSpecialization,(l,S)=>{var v;return m(),_("tr",{key:S},[e("td",R,h(S+1),1),e("td",Y,h((v=l.specialization)==null?void 0:v.name),1),e("td",q,[t(p,{type:"justify-center","no-wrap":""},{default:c(()=>[t(r,{color:"danger",icon:z($),small:"",rounded:"",onClick:u(K=>k(l.id),["prevent"])},null,8,["icon","onClick"])]),_:2},1024)])])}),128))])])]),t(I,{modelValue:n.value.deleteModal,"onUpdate:modelValue":o[4]||(o[4]=l=>n.value.deleteModal=l),title:"Delete Specialization"},{default:c(()=>[e("section",null,[G,t(p,{type:"justify-center lg:justify-center pt-5"},{default:c(()=>[t(r,{type:"button",color:"danger",small:"",label:"Yes",onClick:o[2]||(o[2]=u(l=>D(),["prevent"]))}),t(r,{type:"button",color:"info",small:"",label:"No",onClick:o[3]||(o[3]=u(l=>n.value.deleteModal=!1,["prevent"]))})]),_:1})])]),_:1},8,["modelValue"])],64)}}};export{Z as default};
