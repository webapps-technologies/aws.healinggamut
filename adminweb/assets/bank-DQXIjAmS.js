import{e as c,c as K,j as d,k as y,l as g,y as l,m as o,A as u,u as B,F as x,I as M,H as A,E as m}from"./@vue-bQO0P59g.js";import{a2 as $,G as Z}from"./@mdi-CZk6uuAL.js";import{b as j}from"./vue-router-D5J0r3Gc.js";import{u as q}from"./vuex-DHdsu8jA.js";const L={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},R={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},z={class:"mt-3 table-sec"},G=l("caption",null,null,-1),P=l("thead",{class:"bg-blue dark:bg-gray-900/80 dark:backdrop-blur-md"},[l("tr",null,[l("th",null,"Sl.No."),l("th",null,"Bank Name"),l("th",null,"Account Number"),l("th",null,"Holder Name"),l("th",null,"Branch Name"),l("th",null,"IFSC"),l("th",{class:"text-center"},"Action")])],-1),W={"data-label":"Sl.No."},J={"data-label":"Bank Name"},O={"data-label":"Account Number"},Q={"data-label":"Holder Name"},T={"data-label":"Branch Name"},X={"data-label":"IFSC"},Y={class:"actions-cell"},ue={__name:"bank",setup(ee){const i=q(),V=j(),E=c(()=>i.state.Hospital),e=K({id:null,editMode:!1,finalSubmit:!1,bankName:null,branchName:null,holderName:null,accountNumber:null,ifsc:null});function I(n,t,r,s,k,v){e.editMode=!0,e.id=n,e.bankName=t,e.accountNumber=r,e.holderName=s,e.branchName=k,e.ifsc=v}const H=async()=>{if(b.value||p.value||N.value||f.value||h.value){e.finalSubmit=!0;return}if(e.editMode){const n={id:e.id,bankName:e.bankName,branchName:e.branchName,holderName:e.holderName,accountNumber:e.accountNumber,ifsc:e.ifsc,accountId:V.query.id};await i.dispatch("Hospital/updateBank",n)}else{const n={bankName:e.bankName,branchName:e.branchName,holderName:e.holderName,accountNumber:e.accountNumber,ifsc:e.ifsc,accountId:V.query.id};await i.dispatch("Hospital/addBank",n)}e.bankName=null,e.branchName=null,e.holderName=null,e.accountNumber=null,e.ifsc=null},b=c(()=>{if(!e.bankName)return"Enter Bank Name!"}),p=c(()=>{if(!e.branchName)return"Enter Branch Name!"}),N=c(()=>{if(!e.holderName)return"Enter Holder Name!"}),f=c(()=>{if(!e.accountNumber)return"Enter Account Number!"}),h=c(()=>{const n=/^[A-Z]{4}0[A-Z0-9]{6}$/;if(e.ifsc){if(!n.test(e.ifsc))return"Enter valid IFSC Code."}else return"Enter IFSC Code!"});function F(n){let t=String.fromCharCode(n.keyCode);if(/^[0-9]+$/.test(t))return!0;n.preventDefault()}function _(n){let t=String.fromCharCode(n.keyCode);if(/^[a-zA-Z ]+$/.test(t))return!0;n.preventDefault()}function D(n){let t=String.fromCharCode(n.keyCode);if(/^[A-Z0-9]+$/.test(t))return!0;n.preventDefault()}return(n,t)=>{const r=d("control"),s=d("field"),k=d("divider"),v=d("base-button"),S=d("base-buttons"),U=d("card-component"),w=d("base-button-rounded");return y(),g(x,null,[l("div",L,[o(U,{title:"Bank Detail",icon:B($)},{default:u(()=>[l("div",R,[o(s,{label:"Bank Name *",help:e.finalSubmit&&b.value?b.value:""},{default:u(()=>[o(r,{modelValue:e.bankName,"onUpdate:modelValue":t[0]||(t[0]=a=>e.bankName=a),type:"text",name:"bank_name",onKeypress:t[1]||(t[1]=a=>_(a)),maxlength:"30"},null,8,["modelValue"])]),_:1},8,["help"]),o(s,{label:"Branch Name",help:e.finalSubmit&&p.value?p.value:""},{default:u(()=>[o(r,{modelValue:e.branchName,"onUpdate:modelValue":t[2]||(t[2]=a=>e.branchName=a),type:"text",name:"branch_name",onKeypress:t[3]||(t[3]=a=>_(a)),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["help"]),o(s,{label:"Holder Name",help:e.finalSubmit&&N.value?N.value:""},{default:u(()=>[o(r,{modelValue:e.holderName,"onUpdate:modelValue":t[4]||(t[4]=a=>e.holderName=a),type:"text",name:"holder_name",onKeypress:t[5]||(t[5]=a=>_(a)),maxlength:"30"},null,8,["modelValue"])]),_:1},8,["help"]),o(s,{label:"Account Number",help:e.finalSubmit&&f.value?f.value:""},{default:u(()=>[o(r,{modelValue:e.accountNumber,"onUpdate:modelValue":t[6]||(t[6]=a=>e.accountNumber=a),type:"text",name:"account_number",onKeypress:t[7]||(t[7]=a=>F(a)),maxlength:"18"},null,8,["modelValue"])]),_:1},8,["help"]),o(s,{label:"IFSC",help:e.finalSubmit&&h.value?h.value:""},{default:u(()=>[o(r,{modelValue:e.ifsc,"onUpdate:modelValue":t[8]||(t[8]=a=>e.ifsc=a),type:"text",name:"ifsc",onKeypress:t[9]||(t[9]=a=>D(a)),maxlength:"11"},null,8,["modelValue"])]),_:1},8,["help"])]),o(k),o(S,null,{default:u(()=>[o(v,{color:"themeColor",type:"button",label:e.editMode?"Update":"Submit",onClick:A(H,["prevent"])},null,8,["label"])]),_:1})]),_:1},8,["icon"])]),l("div",z,[l("table",null,[G,P,l("tbody",null,[(y(!0),g(x,null,M(E.value.user.account.bankAccount,(a,C)=>(y(),g("tr",{key:C},[l("td",W,m(C+1),1),l("td",J,m(a.bankName),1),l("td",O,m(a.accountNumber),1),l("td",Q,m(a.holderName),1),l("td",T,m(a.branchName),1),l("td",X,m(a.ifsc),1),l("td",Y,[o(S,{type:"justify-start lg:justify-center","no-wrap":""},{default:u(()=>[o(w,{icon:B(Z),title:"Edit Bank Details",color:"purple",onClick:A(ae=>I(a.id,a.bankName,a.accountNumber,a.holderName,a.branchName,a.ifsc),["prevent"]),small:"",rounded:""},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])])])],64)}}};export{ue as default};
