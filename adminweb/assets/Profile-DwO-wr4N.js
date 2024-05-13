import{e as n,c as H,z as W,j as m,k as N,l as j,y as p,m as a,A as r,u as E,F as Z,t as G,H as h,x as J}from"./@vue-bQO0P59g.js";import{a1 as Q,$ as X,G as ee}from"./@mdi-CZk6uuAL.js";import{h as Y}from"./moment-Cl4UOzQZ.js";import{b as le}from"./vue-router-D5J0r3Gc.js";import{u as te}from"./vuex-DHdsu8jA.js";const ae={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},ue={class:"grid grid-cols-1 lg:grid-cols-4 gap-4"},oe={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},re=p("div",{class:"text-center pb-5"},[p("h2",{class:"text-lg text-red-500"}," Are you sure you want to delete this Specialization? ")],-1),ve={__name:"Profile",setup(de){const w=[{id:"MALE",label:"MALE"},{id:"FEMALE",label:"FEMALE"},{id:"OTHERS",label:"OTHERS"}],R=[{id:"Country",label:"Country"},{id:"State",label:"State"}],b=te();le();const e=n(()=>b.state.Doctor),u=H({editMode:!1,finalSubmit:!1,stateId:null,cityId:null}),$=()=>{u.editMode=!u.editMode};W(()=>{_("")});const O=()=>{var l,d;if(g.value||y.value||V.value||S.value||C.value||c.value||M.value||x.value||U.value){u.finalSubmit=!0;return}const o={name:e.value.user.name,fees:e.value.user.fees,followUpFees:e.value.user.followUpFees,offlineFees:e.value.user.offlineFees,studioClinicFees:e.value.user.studioClinicFees,offlineFollowUpFees:e.value.user.offlineFollowUpFees,followUpDays:e.value.user.followUpDays,emailId:e.value.user.emailId,mobile:e.value.user.mobile,gender:e.value.user.gender.id,dob:e.value.user.dob?Y(e.value.user.dob).format("YYYY-MM-DD"):null,city:(l=e.value.user.city)==null?void 0:l.name,state:(d=e.value.user.state)==null?void 0:d.name,reg_number:e.value.user.reg_number,reg_year:e.value.user.reg_year,reg_type:e.value.user.reg_type.id,experience:e.value.user.reg_month.toString(),address:e.value.user.address,about:e.value.user.about,id:e.value.user.id};b.dispatch("Doctor/updateProfile",o)},_=o=>{b.dispatch("Doctor/states",{limit:50,offset:0,search:o,status:!0})},q=o=>{u.stateId=o.id,F("")},F=o=>{b.dispatch("Doctor/getCity",{limit:50,offset:0,search:o,status:!0,id:u.stateId})};function B(o){let l=String.fromCharCode(o.keyCode);if(/^[a-zA-Z ]+$/.test(l))return!0;o.preventDefault()}function K(o){let l=String.fromCharCode(o.keyCode);if(/^[0-9a-zA-Z ]+$/.test(l))return!0;o.preventDefault()}function f(o){let l=String.fromCharCode(o.keyCode);if(/^[0-9]+$/.test(l))return!0;o.preventDefault()}function P(o){let l=String.fromCharCode(o.keyCode);if(/^[a-zA-Z0-9@.]+$/.test(l))return!0;o.preventDefault()}function I(o){let l=Y().format("YYYY");if(l>=o&&o.length===4){let d=l-o;e.value.user.reg_month=d}else e.value.user.reg_month=null}const g=n(()=>{if(!e.value.user.name)return"Name required!"}),y=n(()=>{if(e.value.user.mobile){if(e.value.user.mobile.length<10)return"Invalid mobile no!"}else return"Mobile no required!"}),V=n(()=>{const o=/^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;if(e.value.user.emailId){if(!o.test(e.value.user.emailId))return"Invalid email!"}else return"Email required!"}),S=n(()=>{if(!e.value.user.fees)return"Fees required!"}),C=n(()=>{if(!e.value.user.dob)return"Date Of Birth required!"}),c=n(()=>{if(e.value.user.reg_number){if(e.value.user.reg_number.length<4)return"Enter Valid Reg. Number !"}else return"Reg. Number required!"}),M=n(()=>{if(e.value.user.reg_year){if(e.value.user.reg_year.length<4||e.value.user.reg_year.length>4)return"Enter Valid Reg. Year !";I(e.value.user.reg_year)}else return"Reg. Year required!"}),x=n(()=>{if(!e.value.user.state)return"Select State!"}),U=n(()=>{if(!e.value.user.city)return"Select City!"});return(o,l)=>{const d=m("control"),s=m("field"),k=m("search-select"),z=m("divider"),D=m("base-button"),A=m("base-buttons"),L=m("card-component"),T=m("modal-box");return N(),j(Z,null,[p("div",ae,[a(L,{title:u.editMode?"Edit Profile":"Profile Detail",icon:E(Q),headerIcon:u.editMode?E(X):E(ee),onHeaderIconClicked:l[25]||(l[25]=t=>$())},{default:r(()=>[p("div",ue,[a(s,{label:"Name *",help:u.finalSubmit&&g.value?g.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.user.name=t),type:"text",name:"name",disabled:!u.editMode,onKeypress:l[1]||(l[1]=t=>B(t)),maxlength:"50"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Phone No",help:u.finalSubmit&&y.value?y.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.mobile,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.user.mobile=t),type:"text",name:"mobile",disabled:!u.editMode,onKeypress:l[3]||(l[3]=t=>f(t)),maxlength:"10"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"E-mail *",help:u.finalSubmit&&V.value?V.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.emailId,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.user.emailId=t),type:"email",name:"email",disabled:!u.editMode,onKeypress:l[5]||(l[5]=t=>P(t)),maxlength:"50"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Fees *",help:u.finalSubmit&&S.value?S.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.fees,"onUpdate:modelValue":l[6]||(l[6]=t=>e.value.user.fees=t),type:"text",name:"fees",disabled:!u.editMode,onKeypress:l[7]||(l[7]=t=>f(t)),maxlength:"6"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Gender"},{default:r(()=>[a(d,{modelValue:e.value.user.gender,"onUpdate:modelValue":l[8]||(l[8]=t=>e.value.user.gender=t),options:w,disabled:!u.editMode},null,8,["modelValue","disabled"])]),_:1}),a(s,{label:"Date of Birth",help:u.finalSubmit&&C.value?C.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.dob,"onUpdate:modelValue":l[9]||(l[9]=t=>e.value.user.dob=t),type:"date",name:"dob",disabled:!u.editMode},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Registration Council & No *",help:u.finalSubmit&&c.value?c.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.reg_number,"onUpdate:modelValue":l[10]||(l[10]=t=>e.value.user.reg_number=t),type:"text",name:"Registeration Number",disabled:!u.editMode,onKeypress:l[11]||(l[11]=t=>K(t)),maxlength:"10"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Reg. Year *",help:u.finalSubmit&&M.value?M.value:""},{default:r(()=>[a(d,{modelValue:e.value.user.reg_year,"onUpdate:modelValue":l[12]||(l[12]=t=>e.value.user.reg_year=t),type:"text",name:"Registeration Year",disabled:!u.editMode,onKeypress:l[13]||(l[13]=t=>f(t)),onKeyup:l[14]||(l[14]=t=>I(t.target.value)),maxlength:"4"},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(s,{label:"Exprience"},{default:r(()=>[a(d,{modelValue:e.value.user.reg_month,"onUpdate:modelValue":l[15]||(l[15]=t=>e.value.user.reg_month=t),type:"text",name:"Experience",disabled:!0},null,8,["modelValue"])]),_:1}),a(s,{label:"Reg. Type "},{default:r(()=>[a(d,{modelValue:e.value.user.reg_type,"onUpdate:modelValue":l[16]||(l[16]=t=>e.value.user.reg_type=t),options:R,disabled:!u.editMode},null,8,["modelValue","disabled"])]),_:1}),a(s,{label:"State",help:u.finalSubmit&&x.value?x.value:""},{default:r(()=>{var t,v;return[a(k,{modelValue:e.value.user.state,"onUpdate:modelValue":l[17]||(l[17]=i=>e.value.user.state=i),options:e.value.dataState,onOnType:l[18]||(l[18]=i=>_(i)),onOnSelected:l[19]||(l[19]=i=>q(i)),disabled:!u.editMode,placeholder:(v=(t=e.value.user)==null?void 0:t.state)==null?void 0:v.name},null,8,["modelValue","options","disabled","placeholder"])]}),_:1},8,["help"]),a(s,{label:"City",help:u.finalSubmit&&U.value?U.value:""},{default:r(()=>{var t,v;return[a(k,{modelValue:e.value.user.city,"onUpdate:modelValue":l[20]||(l[20]=i=>e.value.user.city=i),options:e.value.dataCity,onOnType:l[21]||(l[21]=i=>F(i)),disabled:!u.editMode,placeholder:(v=(t=e.value.user)==null?void 0:t.city)==null?void 0:v.name},null,8,["modelValue","options","disabled","placeholder"])]}),_:1},8,["help"])]),p("div",oe,[a(s,{label:"Address"},{default:r(()=>[a(d,{modelValue:e.value.user.address,"onUpdate:modelValue":l[22]||(l[22]=t=>e.value.user.address=t),type:"textarea",name:"Address",disabled:!u.editMode,maxlength:"250"},null,8,["modelValue","disabled"])]),_:1}),a(s,{label:"About"},{default:r(()=>[a(d,{modelValue:e.value.user.about,"onUpdate:modelValue":l[23]||(l[23]=t=>e.value.user.about=t),type:"textarea",name:"AboutEn",disabled:!u.editMode,maxlength:"500"},null,8,["modelValue","disabled"])]),_:1})]),a(z),u.editMode?(N(),G(A,{key:0},{default:r(()=>[a(D,{color:"themeColor",type:"button",label:"Submit",onClick:l[24]||(l[24]=h(t=>O(),["prevent"]))})]),_:1})):J("",!0)]),_:1},8,["title","icon","headerIcon"])]),a(T,{modelValue:e.value.deleteModal,"onUpdate:modelValue":l[28]||(l[28]=t=>e.value.deleteModal=t),title:"Delete Specialization"},{default:r(()=>[p("section",null,[re,a(A,{type:"justify-center lg:justify-center pt-5"},{default:r(()=>[a(D,{type:"button",color:"danger",small:"",label:"Yes",onClick:l[26]||(l[26]=h(t=>o.onDeleteSpec(),["prevent"]))}),a(D,{type:"button",color:"info",small:"",label:"No",onClick:l[27]||(l[27]=h(t=>e.value.deleteModal=!1,["prevent"]))})]),_:1})])]),_:1},8,["modelValue"])],64)}}};export{ve as default};
